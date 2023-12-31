using Microsoft.EntityFrameworkCore;
using StudyCenter.Models;

namespace StudyCenter;

public class StudyCenterDbContext : DbContext
{
  public StudyCenterDbContext(DbContextOptions<StudyCenterDbContext> options): base(options)
  {
      
  }
  public DbSet<Teacher> Teachers { get; set; }
}
