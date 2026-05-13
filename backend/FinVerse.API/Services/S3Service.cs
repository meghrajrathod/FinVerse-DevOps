using Amazon;
using Amazon.S3;
using Amazon.S3.Model;

namespace FinVerse.API.Services
{
    public class S3Service
    {
        private readonly IConfiguration _configuration;
        private readonly AmazonS3Client _s3Client;

        public S3Service(IConfiguration configuration)
        {
            _configuration = configuration;

            var accessKey = Environment.GetEnvironmentVariable("AWS_ACCESS_KEY_ID");
            var secretKey = Environment.GetEnvironmentVariable("AWS_SECRET_ACCESS_KEY");

                var config = new AmazonS3Config
    {
        RegionEndpoint = RegionEndpoint.USEast1,
        ForcePathStyle = true
    };

            _s3Client = new AmazonS3Client(accessKey, secretKey, region);
        }

        public async Task<string> UploadFileAsync(IFormFile file)
        {
            var bucketName = _configuration["AWS:BucketName"];

            var fileName = Guid.NewGuid() + Path.GetExtension(file.FileName);

            using var stream = file.OpenReadStream();

            var request = new PutObjectRequest
            {
                BucketName = bucketName,
                Key = fileName,
                InputStream = stream,
                ContentType = file.ContentType
            };

            await _s3Client.PutObjectAsync(request);

            return $"https://{bucketName}.s3.amazonaws.com/{fileName}";
        }
    }
}