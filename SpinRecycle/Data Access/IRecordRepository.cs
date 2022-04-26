using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface IRecordRepository
    {
        List<Record> GetAll();
        Record GetRecordById(int id);
        Record GetRecordByName(string name);
        List<Record> GetByArtist(string artist);
        List<Record> GetByGenre(string genre);
        //object GetBySearch(string search);
        //void AddRecord(Record record);   //nissa added for controller
        //void UpdateRecord(int id,Record record); //nissa added for controller
        //void DeleteRecord(int id); //nissa added for controller 
    }
}
