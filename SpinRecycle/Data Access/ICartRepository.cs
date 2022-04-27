using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface ICartRepository 
    {
        // Add a Record
        void AddCartRecord(Record record);
         // Delete Record
         void DeleteCartRecord(int id);
        // GetRecords 
        List<Record> GetCartRecords();
         
    }
}
