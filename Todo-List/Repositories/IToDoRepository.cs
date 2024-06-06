using Microsoft.AspNetCore.Mvc;
using Todo_List.Models;

namespace Todo_List.Repositories
{
    public interface IToDoRepository
    {
        Task<List<TodoClass>> GetAllTodosAsync();
        Task<TodoClass> AddTodoAsync(TodoClass todo);
        Task<TodoClass?> GetTodoByIdAsync(int id);
        Task<IResult> DeleteTodoByIdAsync(int id);
        Task<TodoClass?> PatchTodoByIdAsync(int id, bool boolean);
    }
}
