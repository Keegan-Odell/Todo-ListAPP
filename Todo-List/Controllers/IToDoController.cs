using Microsoft.AspNetCore.Mvc;
using Todo_List.Models;

namespace Todo_List.Controllers
{
    public interface IToDoController
    {
        Task<IActionResult> GetAllTodosAsync();
        Task<IActionResult> AddTodoAsync(TodoClass todo);
        Task<IActionResult?> GetTodoByIdAsync(int id);
        Task<IResult> DeleteTodoByIdAsync(int id);
        Task<IActionResult> PatchTodoByIdAsync(int id, bool boolean);
    }
}
