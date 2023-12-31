using AutoMapper;
using StudyCenter.DTOs;
using StudyCenter.Models;

namespace StudyCenter;

public class MapperProfile : Profile
{
  public MapperProfile()
  {
      CreateMap<Teacher, TeacherDto>().ReverseMap();
  }
}
