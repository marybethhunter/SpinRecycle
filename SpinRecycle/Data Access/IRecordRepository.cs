using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface IRecordRepository
    {
        List<Record> GetAll();
        Record GetRecordById(int id);
        Record GetRecordByTitle(string title);
        List<Record> GetByArtist(string artist);
        List<Record> GetByGenre(string genre);
<<<<<<< HEAD
        Record Add(Record record);
=======
        void AddRecord(Record newRecord);
        void UpdateRecord(Record recordToUpdate);
        void DeleteRecord(int id);
>>>>>>> master
    }
}
