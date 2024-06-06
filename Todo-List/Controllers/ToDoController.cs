using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using Todo_List.Controllers;
using Todo_List.Models;
using Todo_List.Services;

[ApiController]
[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
public class ToDoController : ControllerBase, IToDoController
{
    private readonly TodoService _todoService;

    public ToDoController(TodoService todoService)
    {
        _todoService = todoService;
    }

    [Microsoft.AspNetCore.Mvc.HttpGet]
    public async Task<IActionResult> GetAllTodosAsync()
    {
        List<TodoClass> todos = await _todoService.GetAllToDosAsync();
        return Ok(todos);
    }

    [Microsoft.AspNetCore.Mvc.HttpPost]
    public async Task<IActionResult> AddTodoAsync(TodoClass todo)
    {
        TodoClass createdTodo = await _todoService.AddTodoAsync(todo);
        return CreatedAtAction(nameof(GetTodoByIdAsync), new { id = createdTodo.Id }, createdTodo);
    }

    [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
    public async Task<IActionResult?> GetTodoByIdAsync(int id)
    {
        TodoClass? todo = await _todoService.GetTodoByIdAsync(id);

        if (todo == null)
        {
            return NotFound();
        }

        return Ok(todo);
    }

    [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
    public async Task<IResult> DeleteTodoByIdAsync(int id)
    {
        return await _todoService.DeleteTodoByIdAsync(id);
    }

    [Microsoft.AspNetCore.Mvc.HttpPatch("{id}")]
    public async Task<IActionResult> PatchTodoByIdAsync(int id, [FromUri]bool finished)
    {
        TodoClass? updatedTodo = await _todoService.PatchTodoByIdAsync(id, finished);

        if (updatedTodo == null)
        {
            return NotFound();
        }

        return Ok(updatedTodo);
    }
}


