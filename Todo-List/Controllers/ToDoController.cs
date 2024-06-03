using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Todo_List.Models;
using Todo_List.Services;

[ApiController]
[Route("api/[controller]")]
public class ToDoController : ControllerBase
{
    private readonly TodoService _todoService;

    public ToDoController(TodoService todoService)
    {
        _todoService = todoService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoClass>>> GetAllTodos()
    {
        List<TodoClass> todos = await _todoService.GetAllToDosAsync();
        return Ok(todos);
    }
}


