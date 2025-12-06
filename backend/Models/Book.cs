using System.ComponentModel.DataAnnotations;

namespace LibraryApi.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Title { get; set; } = string.Empty;

        [Required, MaxLength(150)]
        public string Author { get; set; } = string.Empty;

        [MaxLength(2000)]
        public string? Description { get; set; }
    }
}
