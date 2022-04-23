using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface ICartRepository
    {
        // Carts
        // Cart CreateNewCart();
        // void DeleteCart(int cartId);

        // Cart-Record Joins
        // List<Record> GetCartRecords(int cartId);
        // Record AddToCart(int recordId, int cartId);

        // void RemoveFromCart(int recordId, int cartId);
      
        Cart GetCartById(int id);
        void AddCart(Cart cart);
        void UpdateCart(int id, Cart cart);
        void DeleteCart(int id);
    }
}
