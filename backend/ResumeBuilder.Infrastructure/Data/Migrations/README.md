# Migrations
## How to add migrations and update the database
From the backend directory run the following command
```
dotnet ef migrations add <MigrationName> --context RBContext -o ./Data/Migrations --project ResumeBuilder.Infrastructure --startup-project ResumeBuilder.API

dotnet ef database update --context RBContext --project ResumeBuilder.Infrastructure --startup-project ResumeBuilder.API
```