﻿using SpinRecycle.Models;

namespace SpinRecycle.Data_Access
{
    public interface IRecordRepository
    {
        List<Record> GetAll();
        Record GetRecordById(int id);
        Record GetRecordByName(string name);
        List<Record> GetByArtist(string artist);
        List<Record> GetByGenre(string genre);
    }
}