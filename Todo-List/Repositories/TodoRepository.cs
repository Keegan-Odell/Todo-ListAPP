using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Models;

namespace Todo_List.Repositories
{
    public class TodoRepository
    {
        private readonly TodoContext _context;

        public TodoRepository(TodoContext context)
        {
            _context = context;
        }

        public async Task<List<TodoClass>> GetAllTodosAsync()
        {
            return await _context.Todos.ToListAsync();
        }

    }
}
