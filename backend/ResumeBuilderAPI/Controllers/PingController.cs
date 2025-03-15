using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ResumeBuilderAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
[Produces("application/json")]
public class PingController : ControllerBase
{
    [HttpHead]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public IActionResult Ping()
    {
        Response.Headers["X-Timestamp"] = DateTime.UtcNow.ToString("o");
        return NoContent();
    }

    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult GetPing()
    {
        return Ok(new { timestamp = DateTime.UtcNow });
    }
}

