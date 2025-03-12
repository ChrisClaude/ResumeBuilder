namespace ResumeBuilder.Application.Common.Dtos;

public record class UserDto
{
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public string[] Roles { get; set; }
    public string[] Templates { get; set; }
}
