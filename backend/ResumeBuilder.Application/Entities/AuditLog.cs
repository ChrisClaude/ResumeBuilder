using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using ResumeBuilder.Application.Enums;

namespace ResumeBuilder.Application.Entities;

public class AuditLog
{
    public Guid Id { get; set; }
    public string Changes { get; set; } // Stores JSON
    public DateTimeOffset TimeStamp { get; set; }
    public ActionType ActionType { get; set; }
    public AuditEntityType AuditEntityType { get; set; }
    public Guid UserId { get; set; }
    public Guid? CorrelationId { get; set; } // Helps in debugging and tracing

    [NotMapped] // Prevents EF from mapping this to the database
    public List<AuditChange> ChangesList
    {
        get => string.IsNullOrEmpty(Changes) ? new() : JsonSerializer.Deserialize<List<AuditChange>>(Changes);
        set => Changes = JsonSerializer.Serialize(value);
    }
}

public class AuditChange
{
    public string PropertyName { get; set; }
    public string OldValue { get; set; }
    public string NewValue { get; set; }
}
