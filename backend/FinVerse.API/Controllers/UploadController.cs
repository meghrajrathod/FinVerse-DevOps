using FinVerse.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace FinVerse.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UploadController : ControllerBase
    {
        private readonly S3Service _s3Service;

        public UploadController(S3Service s3Service)
        {
            _s3Service = s3Service;
        }

        [HttpPost]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            var fileUrl = await _s3Service.UploadFileAsync(file);

            return Ok(new
            {
                url = fileUrl
            });
        }
    }
}