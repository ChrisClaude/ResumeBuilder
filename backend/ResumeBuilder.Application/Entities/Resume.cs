using System;

namespace ResumeBuilder.Application.Entities;

public class Resume
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string BlobLocation { get; set; }
}
