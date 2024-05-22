using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Models;

namespace Todo_List.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserClassController : ControllerBase
    {
        private readonly MyDbContext _context;

        public UserClassController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<UserClass> users = await _context.UserClasses.ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] UserClass user)
        {
            if (user == null)
            {
                return BadRequest("User data is null");
            }

            _context.UserClasses.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UserClass? updatedUser)
        {
            if (updatedUser == null || updatedUser.Id != id)
            {
                return BadRequest("User data is null or ID mismatch");
            }

            UserClass? existingUser = await _context.UserClasses.FindAsync(id);
            if (existingUser == null)
            {
                return NotFound("User not found");
            }

            existingUser.FirstName = updatedUser.FirstName;
            existingUser.LastName = updatedUser.LastName;

            _context.UserClasses.Update(existingUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            UserClass? user = await _context.UserClasses.FindAsync(id);
            if (user == null)
            {
                return NotFound("user did not exist");
            }

            _context.UserClasses.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
