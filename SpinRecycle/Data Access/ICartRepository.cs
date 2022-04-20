using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface ICartRepository
    {
        Cart GetCartById(int id);
        void AddCart(Cart cart);
        void UpdateCart(int id, Cart cart);
        void DeleteCart(int id);
    }
}
