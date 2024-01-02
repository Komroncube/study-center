using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudyCenter.Migrations
{
  /// <inheritdoc />
  public partial class FirstMigration : Migration
  {
    /// <inheritdoc />
    protected override void Up(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.CreateTable(
          name: "Teachers",
          columns: table => new
          {
            Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("SqlServer:Identity", "1, 1"),
            Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
            DateOfBirth = table.Column<DateTime>(type: "datetime2", nullable: false),
            DateOfRegistry = table.Column<DateTime>(type: "datetime2", nullable: false),
            Phone = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
            TelegramUserName = table.Column<string>(type: "nvarchar(max)", nullable: false),
            Specialization = table.Column<string>(type: "nvarchar(max)", nullable: false)
          },
          constraints: table =>
          {
            table.PrimaryKey("PK_Teachers", x => x.Id);
          });
    }

    /// <inheritdoc />
    protected override void Down(MigrationBuilder migrationBuilder)
    {
      migrationBuilder.DropTable(
          name: "Teachers");
    }
  }
}
