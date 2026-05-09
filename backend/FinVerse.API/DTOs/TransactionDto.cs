namespace FinVerse.API.DTOs
{
    public class TransactionDto
    {
        public string SenderEmail { get; set; } =
            string.Empty;

        public string ReceiverEmail { get; set; } =
            string.Empty;

        public decimal Amount { get; set; }

        public string TransactionType { get; set; } =
            string.Empty;

        public string Status { get; set; } =
            string.Empty;

        public DateTime CreatedAt { get; set; }
    }
}