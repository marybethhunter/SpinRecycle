using Microsoft.AspNetCore.Mvc;
using SpinRecycle.Data_Access;
using SpinRecycle.Models;

namespace SpinRecycle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecordController : ControllerBase
    {
        private readonly IRecordRepository _recRepo;
        public RecordController(IRecordRepository recRepository)
        {
            _recRepo = recRepository;
        }

        [HttpGet] // GET: api/record
        public List<Record> GetAllRecords()
        {
            return _recRepo.GetAll();
        }

        [HttpGet("id/{id}")]
        public IActionResult GetRecordById(int id)
        {
            var match = _recRepo.GetRecordById(id);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }

        [HttpGet("name/{name}")]
        public IActionResult GetRecordByName(string name)
        {
            var match = _recRepo.GetRecordByName(name);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
        [HttpGet("artist/{artist}")]
        public IActionResult GetRecordByArtist(string artist)
        {
            var match = _recRepo.GetByArtist(artist);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
        [HttpGet("genre/{genre}")]
        public IActionResult GetRecordByGenre(string genre)
        {
            var match = _recRepo.GetByGenre(genre);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
    }
}

