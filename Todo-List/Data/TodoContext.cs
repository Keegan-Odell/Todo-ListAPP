using Microsoft.EntityFrameworkCore;
using Todo_List.Models;

namespace Todo_List.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoClass> Todos { get; set; }
    }
}
