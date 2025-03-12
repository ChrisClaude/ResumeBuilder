using System;

namespace ResumeBuilder.Application.Entities;

public class User
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Surname { get; set; }
    public string Email { get; set; }
    public List<UserRole> UserRoles { get; set; }
    public IEnumerable<Template> Templates { get; set; }
}
