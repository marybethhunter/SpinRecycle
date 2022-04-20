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

        [HttpGet("{id}")]
        public IActionResult GetCartById(int id)
        {
            var match = _cartRepo.GetCartById(id);
            if (match == null)
            {
                return NotFound();
            }
            return Ok(match);
        }

        [HttpPost]
        public IActionResult Post(Cart newCart)
        {
            _cartRepo.AddCart(newCart);
            return Ok(newCart);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Cart cartToUpdate)
        {
            var match = _cartRepo.GetCartById(id);
            if (match == null)
            {
                return NotFound();
            }
            _cartRepo.UpdateCart(id, cartToUpdate);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var match = _cartRepo.GetCartById(id);
            if (match == null)
            {
                return NotFound();
            }
            else
            {
                _cartRepo.DeleteCart(id);
                return NoContent();
            }
        }
    }
}
