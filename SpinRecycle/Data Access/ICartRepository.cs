using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface ICartRepository
    {
        // Get Records in cart
        List<Record> GetCartRecords();

        // Check if record exists in cart
        bool RecordFoundInCart(int id);

        // Add a Record to cart
        void AddCartRecord(int id);

        // Delete Record from cart
        void DeleteCartRecord(int id);         
    }
}
