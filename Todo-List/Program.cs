using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Repositories;
using Todo_List.Services;

var builder = WebApplication.CreateBuilder(args);

// Load appsettings.json and environment-specific settings
var environment = builder.Environment;

builder.Configuration
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<TodoRepository>();
builder.Services.AddScoped<TodoService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<TodoContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddControllers(options =>
{
    options.SuppressAsyncSuffixInActionNames = false;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

app.Run();
