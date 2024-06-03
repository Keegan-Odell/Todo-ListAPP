using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Todo_List.Models
{
    [Table("Todos")]
    public class TodoClass
    {
        [Key]
        public int Id { get; set; }

        public required string TodoName { get; set; }
        public bool Finished { get; set; } = false;
    }
}
