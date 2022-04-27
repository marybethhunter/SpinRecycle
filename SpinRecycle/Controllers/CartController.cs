using Microsoft.AspNetCore.Mvc;
using SpinRecycle.Data_Access;
using SpinRecycle.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SpinRecycle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepo;
        public CartController(ICartRepository cartRepository)
        {
            _cartRepo = cartRepository;
        }

        // GET: api/Records
        [HttpGet]
        public List<Record> Get()
        {
            return _cartRepo.GetCartRecords();
        }

        [HttpPost]
        public IActionResult Post(Record record)
        {
            _cartRepo.AddCartRecord(record);
            return Ok(record);
        }


        [HttpDelete("{record}")]
        public IActionResult Delete(int record)
        {
            var match = _cartRepo.GetCartRecords();
            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _cartRepo.DeleteCartRecord(record);
                return NoContent();
            }
        }
    }
}
