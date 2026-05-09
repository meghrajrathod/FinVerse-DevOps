namespace FinVerse.API.DTOs
{
    public class ProfileDto
    {
        public string FullName { get; set; }
            = string.Empty;

        public string Email { get; set; }
            = string.Empty;

        public decimal Balance { get; set; }
    }
}