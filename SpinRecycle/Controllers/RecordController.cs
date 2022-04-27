using Microsoft.AspNetCore.Mvc;
using SpinRecycle.Data_Access;
using SpinRecycle.Models;

namespace SpinRecycle.Controllers
{
    [Route("api/records")]
    [ApiController]
    public class RecordsController : ControllerBase

    {
        private readonly IRecordRepository _recordRepository;
        public RecordsController(IRecordRepository recordRepository)
        {
            _recordRepository = recordRepository;
        }
              
        [HttpGet]
        public List<Record> GetAllRecords()
        {
            return _recordRepository.GetAll();
        } 

        [HttpGet("{id}")]
        public IActionResult GetRecordByID(int id)
        {
            var match = _recordRepository.GetRecordById(id);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
        [HttpGet("{name}")]
        public IActionResult GetRecordByName(string name)
        {
            var match = _recordRepository.GetRecordByName(name);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }

        [HttpGet("{artist}")]

        public IActionResult GetByArtist(string artist)
        {
            var matches = _recordRepository.GetByArtist(artist);
            if (matches != null)
            {
                return Ok(matches);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("{genre}")]
        public IActionResult GetByGenre(string genre)
        {
            var matches = _recordRepository.GetByGenre(genre);
            if (matches != null)
            {
                return Ok(matches);
            }
            else
            {
                return NotFound();
            }
            return Ok(matches);
        }
    
        [HttpPost]
        public IActionResult Post(Record newRecord)
        {
            _recordRepository.AddRecord(newRecord);
            return Ok(newRecord);
        }

           
        [HttpPut("{id}")]
        public IActionResult UpdateRecord(Record recordToUpdate)
        {
            var match = _recordRepository.GetRecordById(recordToUpdate.Id);
            if (match == null)
            {
                return NotFound();
            }
            _recordRepository.UpdateRecord(recordToUpdate);
                return NoContent();
           }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var match = _recordRepository.GetRecordById(id);
            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _recordRepository.DeleteRecord(id);
                return NoContent();
            }
        }
        [HttpPost]
        public IActionResult CreateRecord(Record newRecord)
        {
            if (newRecord == null)
            {
                return NotFound();
            }
            else
            {
                _recRepo.Add(newRecord);
                return Ok(newRecord);
            }
        }
    }
}



