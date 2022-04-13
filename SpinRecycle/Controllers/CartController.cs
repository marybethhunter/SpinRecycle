using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace SpinRecycle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        RecordRepository _recRepo = new RecordRepository();

        [HttpPost]
        public IActionResult Post(Cart newCart)
        {
            if (!ValidNewCart(newRecord / Cart))
            {
                return BadRequest(newRecord / Cart);
            }
            else
            {
                _recRepo.Post(newRecord / Cart);
                return Ok(newRecord / Cart);
            }

        }
        [HttpDelete("cart/{cart}")]
        public IActionResult DeleteCart(string cart)
        {
            var matchingCart = _recRepo.GetByName(cart);
            if (matchingCart == null)
            {
                return NotFound();
            }
            else
            {
                _recRepo.DeleteCart((cart)matchingCart);
                return NoContent();
            }
        }
    }
}

