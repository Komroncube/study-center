namespace StudyCenter.Models;

public class Teacher
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Description { get; set; }
  public string Address { get; set; }
  public DateTime DateOfBirth { get; set; }
  public DateTime DateOfRegistry { get; set; }
  public string Phone { get; set; }
  public string Email { get; set; }
  public string TelegramUserName { get; set; }
  public string Specialization { get; set; }
}
