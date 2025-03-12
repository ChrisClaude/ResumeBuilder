using System;
using Microsoft.EntityFrameworkCore;
using ResumeBuilder.Application.Entities;

namespace ResumeBuilder.Infrastructure.Data;

public class RBContext : DbContext
{
    public RBContext(DbContextOptions<RBContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<UserRole> UserRoles { get; set; }
    public DbSet<Template> Templates { get; set; }
    public DbSet<Resume> Resumes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
    }
}
