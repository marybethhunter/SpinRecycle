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

        [HttpGet("id/{id}")]
        public IActionResult GetRecordByID(int id)
        {
            var match = _recordRepository.GetRecordById(id);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }
        [HttpGet("title/{title}")]
        public IActionResult GetRecordByTitle(string title)
        {
            var match = _recordRepository.GetRecordByTitle(title);
            if (match == null)
            {
                return NotFound();
            }

            return Ok(match);
        }

        [HttpGet("artist/{artist}")]

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

        [HttpGet("genre/{genre}")]
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
                _recordRepository.AddRecord(newRecord);
                return Ok(newRecord);
            }
        }
    }
}



