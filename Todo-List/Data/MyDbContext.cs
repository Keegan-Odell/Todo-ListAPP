using Microsoft.EntityFrameworkCore;

namespace Todo_List.Data
{
    public class MyDbContext : DbContext
    {
        // Constructor that passes options to the base DbContext class
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        // Define your DbSets (tables) here
        // DbSet represents a collection of a specific type of entity in the context
        // Make this a class that you want to use with a DB
        
    }
}
