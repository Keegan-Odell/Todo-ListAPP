using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Models;

namespace Todo_List.Repositories
{
    public class TodoRepository : IToDoRepository
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

        public async Task<TodoClass> AddTodoAsync(TodoClass todo)
        {
            //have to add to DBset 
            _context.Todos.Add(todo);
            //then save DBset
            await _context.SaveChangesAsync();
            return todo;
        }

        public async Task<TodoClass?> GetTodoByIdAsync(int id)
        {
            return await _context.Todos.FindAsync(id);
        }

        public async Task<IResult> DeleteTodoByIdAsync(int id)
        {
            TodoClass? todoToDelete = await _context.Todos.FindAsync(id);
            if (todoToDelete == null)
            {
                return Results.NotFound();
            }
            _context.Todos.Remove(todoToDelete);
            await _context.SaveChangesAsync();

            return Results.Ok(new { id });
        }

        public async Task<TodoClass?> PatchTodoByIdAsync(int id, bool finished)
        {
            TodoClass? todoToUpdate = await _context.Todos.FindAsync(id);
            if (todoToUpdate == null)
            {
                return null;
            }

            todoToUpdate.Finished = finished;

            Console.WriteLine(todoToUpdate);

            _context.Todos.Update(todoToUpdate);

            await _context.SaveChangesAsync();

            return todoToUpdate;
        }
    }
}
