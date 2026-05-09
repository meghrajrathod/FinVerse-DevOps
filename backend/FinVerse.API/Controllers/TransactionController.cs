using FinVerse.API.Data;
using FinVerse.API.DTOs;
using FinVerse.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace FinVerse.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TransactionController(
            ApplicationDbContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost("deposit")]
        public async Task<IActionResult> Deposit(
            DepositDto dto)
        {
            if (dto.Amount <= 0)
            {
                return BadRequest(
                    "Invalid amount.");
            }

            var email = User
                .FindFirst(ClaimTypes.Email)?.Value;

            if (email == null)
            {
                return Unauthorized();
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(x =>
                    x.Email == email);

            if (user == null)
            {
                return NotFound();
            }

            user.Balance += dto.Amount;

var transaction = new Transaction
{
    SenderEmail = email,
    ReceiverEmail = email,
    Amount = dto.Amount,
    TransactionType = "Deposit",
    Status = "Completed"
};

            _context.Transactions.Add(transaction);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Deposit successful",
                balance = user.Balance
            });
        }
    }
}