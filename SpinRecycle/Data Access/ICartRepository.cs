using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface ICartRepository
    {
        // GetRecords 
        List<Record> GetCartRecords();
        // Add a Record
        void AddCartRecord(Record record);
        // Delete Record
        void DeleteCartRecord(int id);         
    }
}
