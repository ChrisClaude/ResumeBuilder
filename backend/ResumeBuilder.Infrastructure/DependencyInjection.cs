using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ResumeBuilder.Infrastructure.Data;

namespace ResumeBuilder.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<RBContext>(options =>
        {
            options.UseSqlServer(configuration.GetConnectionString("ResumeBuilderDb"));
        });

        return services;
    }
}
