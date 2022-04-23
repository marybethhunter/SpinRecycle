using SpinRecycle.Models;
using System.Data.SqlClient;

namespace SpinRecycle.Data_Access
{
    public class CartRepository : ICartRepository
    {
        private static List<Cart> _carts = new List<Cart>()
        {
            new Cart()
            {
                Id = 1,
                CartId = "Prince",
                RecordId = "1"

            },
            new Cart()
            {
                Id = 2,
                CartId = "Ari Lennox",
                RecordId = "2"

            },
            new Cart()
            {
                Id = 3,
                CartId = "Luck Daye",
                RecordId = "3"

            },
            new Cart()
            {
                Id = 4,
                CartId = "J Cole",
                RecordId = "4"

            },
        };

        internal object GetByCartId(string cart)
        {
            var match = _carts.FirstOrDefault(x => x.Cart == cart);
            return match;
        }

        internal List<Cart> GetAll()
        {
            return _carts;
        }
    }
}
