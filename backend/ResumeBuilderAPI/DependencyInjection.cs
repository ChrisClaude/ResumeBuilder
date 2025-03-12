using ResumeBuilder.Infrastructure;
using Scalar.AspNetCore;

namespace ResumeBuilderAPI;

public static class DependencyInjection
{
    private static readonly string _corsPolicyName = "AllowCorsPolicy";

    public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
    {
        var services = builder.Services;
        services.AddOpenApi();
        services.AddInfrastructure(builder.Configuration);

        var logger = ConfigureLogging(services);

        ConfigureCors(services, builder.Configuration, logger);
        return builder.Build();
    }

    public static WebApplication ConfigureRequestPipeline(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
            app.MapScalarApiReference();
        }

        app.UseHttpsRedirection();

        return app;
    }

    // TODO: Need to review the below code
    private static ILogger ConfigureLogging(IServiceCollection services)
    {
        services.AddLogging((loggingBuilder) =>
            loggingBuilder.SetMinimumLevel(LogLevel.Trace)
                .AddSimpleConsole(config => config.SingleLine = true));

        using var loggerFactory = LoggerFactory.Create(loggingBuilder =>
        {
            loggingBuilder
                .SetMinimumLevel(LogLevel.Trace)
                .AddSimpleConsole(config => config.SingleLine = true);
        });

        var logger = loggerFactory.CreateLogger("Startup");

        logger.LogInformation("Logging has been configured");

        return logger;
    }

    private static void ConfigureCors(IServiceCollection services, ConfigurationManager configuration, ILogger logger)
    {
        var allowedCorsOrigins = configuration.GetSection("AllowedCorsOrigins").Get<string[]>();

        for (var i = 0; i < allowedCorsOrigins?.Length; i++)
        {
            logger.LogInformation("{message}", $"Allowed CORS origin {i}: {allowedCorsOrigins[i]}");
        }

        services.AddCors(options =>
        {
            options.AddPolicy(_corsPolicyName,
                builder =>
                {
                    if (allowedCorsOrigins != null)
                        builder.WithOrigins(allowedCorsOrigins);

                    builder.AllowAnyHeader()
                           .AllowAnyMethod();
                });
        });
    }
}
