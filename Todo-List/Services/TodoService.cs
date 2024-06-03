using Todo_List.Models;
using Todo_List.Repositories;

namespace Todo_List.Services
{
    public class TodoService
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
    }
}
