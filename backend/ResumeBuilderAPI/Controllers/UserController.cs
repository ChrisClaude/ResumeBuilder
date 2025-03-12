using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ResumeBuilder.Application.Common.Dtos;

namespace ResumeBuilderAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
[Produces("application/json")]
[Authorize]
public class UserController: ControllerBase
{
    [HttpGet]
    [ProducesResponseType(typeof(UserDto), StatusCodes.Status200OK)]
	[ActionName(nameof(GetUserProfile))]
    public IActionResult GetUserProfile()
    {
        return Ok();
    }
}
