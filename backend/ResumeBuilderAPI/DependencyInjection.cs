using System;
using Scalar.AspNetCore;

namespace ResumeBuilderAPI;

public static class DependencyInjection
{
	public static WebApplication ConfigureServices(this WebApplicationBuilder builder)
	{
		builder.Services.AddOpenApi();
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
}
