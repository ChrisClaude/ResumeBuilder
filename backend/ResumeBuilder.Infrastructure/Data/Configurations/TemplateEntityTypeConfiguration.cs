using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ResumeBuilder.Application.Entities;

namespace ResumeBuilder.Infrastructure.Data.Configurations;

public class TemplateEntityTypeConfiguration : IEntityTypeConfiguration<Template>
{
    public void Configure(EntityTypeBuilder<Template> builder)
    {
        builder.ToTable("Templates");
        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();
        builder.Property(x => x.Name).IsRequired();
        builder.Property(x => x.BlobLocation).IsRequired();
        builder.Property(x => x.UploadedByUser).IsRequired();
        builder.HasOne(x => x.UploadedByUser)
            .WithMany(x => x.Templates)
            .HasForeignKey(x => x.UploadedByUserId)
            .IsRequired();
    }
}
