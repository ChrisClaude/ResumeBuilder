using System;

namespace ResumeBuilder.Application.Entities;

public class Template
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string BlobLocation { get; set; }
    public Guid UploadedByUserId { get; set; }
    public User UploadedByUser { get; set; }
}
