using Microsoft.AspNetCore.Mvc;
using SpinRecycle.Data_Access;
using SpinRecycle.Models;

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

        // GET: api/cart
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

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (_cartRepo.RecordFoundInCart(id))
            {
                return NotFound();
            }
            else
            {
                _cartRepo.DeleteCartRecord(id);
                return NoContent();
            }
        }
    }
}
