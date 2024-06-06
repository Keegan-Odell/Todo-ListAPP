using Todo_List.Models;
using Todo_List.Repositories;

namespace Todo_List.Services
{
    public class TodoService: ITodoService
    {
        private readonly TodoRepository _todoRepository;

        public TodoService(TodoRepository todoRepository)
        {
            _todoRepository = todoRepository;
        }

        public async Task<List<TodoClass>> GetAllToDosAsync()
        {
            return await _todoRepository.GetAllTodosAsync();
        }

        public async Task<TodoClass> AddTodoAsync(TodoClass todo)
        {
            return await _todoRepository.AddTodoAsync(todo);
        }

        public async Task<TodoClass?> GetTodoByIdAsync(int id)
        {
            return await _todoRepository.GetTodoByIdAsync(id);
        }

        public async Task<IResult> DeleteTodoByIdAsync(int id)
        {
            return await _todoRepository.DeleteTodoByIdAsync(id);
        }

        public async Task<TodoClass?> PatchTodoByIdAsync(int id, bool finished)
        {
            return await _todoRepository.PatchTodoByIdAsync(id, finished);
        }
    }
}
