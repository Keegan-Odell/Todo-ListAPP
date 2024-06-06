using Todo_List.Models;

namespace Todo_List.Services
{
    public interface ITodoService
    {
        Task<List<TodoClass>> GetAllToDosAsync();
        Task<TodoClass> AddTodoAsync(TodoClass todo);
        Task<TodoClass?> GetTodoByIdAsync(int id);
        Task<IResult> DeleteTodoByIdAsync(int id);
        Task<TodoClass?> PatchTodoByIdAsync(int id, bool boolean);
    }
}
