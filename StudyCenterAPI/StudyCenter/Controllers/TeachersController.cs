using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudyCenter;
using StudyCenter.DTOs;
using StudyCenter.Models;

namespace StudyCenter.Controllers
{
		[Route("api/[controller]")]
		[ApiController]
		public class TeachersController : ControllerBase
		{
				private readonly StudyCenterDbContext _context;
				private readonly IMapper _mapper;

		public TeachersController(StudyCenterDbContext context, IMapper mapper)
		{
			_context = context;
			_mapper = mapper;
		}

		// GET: api/Teachers
		[HttpGet]
				public async Task<ActionResult<IEnumerable<Teacher>>> GetTeachers()
				{
						return await _context.Teachers.ToListAsync();
				}

				// GET: api/Teachers/5
				[HttpGet("{id}")]
				public async Task<ActionResult<Teacher>> GetTeacher(int id)
				{
						var teacher = await _context.Teachers.FindAsync(id);

						if (teacher == null)
						{
								return NotFound();
						}

						return teacher;
				}

				// PUT: api/Teachers/5
				// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
				[HttpPut("{id}")]
				public async Task<IActionResult> PutTeacher(int id, TeacherDto teacherDto)
				{
						var teacher = _context.Teachers.Find(id);
						if(teacher is null)
						{
								return NotFound();
						}
						_mapper.Map(teacherDto, teacher);
						int res = await _context.SaveChangesAsync();
						return Ok(res>0);

				}

				// POST: api/Teachers
				// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
				[HttpPost]
				public async Task<ActionResult<Teacher>> PostTeacher(TeacherDto teacherDto)
				{
						var teacher = _mapper.Map<Teacher>(teacherDto);
						_context.Teachers.Add(teacher);
						await _context.SaveChangesAsync();

				 
						return CreatedAtAction("GetTeacher", new { id = teacher.Id }, teacher);
				}

				// DELETE: api/Teachers/5
				[HttpDelete("{id}")]
				public async Task<IActionResult> DeleteTeacher(int id)
				{
						var teacher = await _context.Teachers.FindAsync(id);
						if (teacher == null)
						{
								return NotFound();
						}

						_context.Teachers.Remove(teacher);
						int res = await _context.SaveChangesAsync();

						return Ok(res>0);
				}

				private bool TeacherExists(int id)
				{
						return _context.Teachers.Any(e => e.Id == id);
				}
		}
}
