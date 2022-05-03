﻿using SpinRecycle.Models;
using System.Data.SqlClient;

namespace SpinRecycle.Data_Access
{
    public class RecordRepository : IRecordRepository
    {
        private readonly IConfiguration _config;

        public RecordRepository(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        private List<Record> ReadRecords(SqlDataReader _reader)
        {
            var records = new List<Record>();
            while (_reader.Read())
            {
                Record record = new Record()
                {
                    RecordId = _reader.GetInt32(_reader.GetOrdinal("RecordId")),
                    Title = _reader.GetString(_reader.GetOrdinal("Title")),
                    Artist = _reader.GetString(_reader.GetOrdinal("Artist")),
                    Genre = _reader.GetString(_reader.GetOrdinal("Genre")),
                    Price = _reader.GetDecimal(_reader.GetOrdinal("Price")),
                };
                records.Add(record);
            }
            _reader.Close();
            return records;
        }

        public List<Record> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Record
                    ";

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var records = ReadRecords(reader);
                        return records;
                    }
                }
            }
        }

        public Record GetRecordById(int _id)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Record
                        WHERE RecordId = @id
                    ";

                    cmd.Parameters.AddWithValue("@id", _id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var record = ReadRecords(reader).FirstOrDefault();
                        return record;
                    }
                }
            }
        }

        public Record GetRecordByTitle(string _title)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Record
                        WHERE Title = @title
                    ";

                    cmd.Parameters.AddWithValue("@title", _title);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var record = ReadRecords(reader).FirstOrDefault();
                        return record;
                    }
                }
            }
        }

        public List<Record> GetByArtist(string _artist)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Record
                        WHERE Artist = @artist
                    ";

                    cmd.Parameters.AddWithValue("@artist", _artist);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var records = ReadRecords(reader);
                        return records;
                    }
                }
            }
        }

        public List<Record> GetByGenre(string _genre)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Record
                        WHERE Genre = @genre
                    ";

                    cmd.Parameters.AddWithValue("@genre", _genre);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var records = ReadRecords(reader);
                        return records;
                    }
                }
            }
        }

        public void AddRecord(Record _record)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO [dbo].[Record] (Title, Artist, Genre, Price)
                        VALUES (@Title, @Artist, @Genre, @Price)
                    ";
                    cmd.Parameters.AddWithValue("@Title", _record.Title);
                    cmd.Parameters.AddWithValue("@Artist", _record.Artist);
                    cmd.Parameters.AddWithValue("@Genre", _record.Genre);
                    cmd.Parameters.AddWithValue("@Price", _record.Price);

                    cmd.ExecuteNonQuery();
                }
            }
         }

        public void UpdateRecord(Record _record)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE [dbo].[Record]
                        SET Title = @Title, Artist = @Artist, Genre = @Genre, Price = @Price
                        WHERE RecordId = @RecordId
                    ";

                    cmd.Parameters.AddWithValue("@RecordId", _record.RecordId);
                    cmd.Parameters.AddWithValue("@Title", _record.Title);
                    cmd.Parameters.AddWithValue("@Artist", _record.Artist);
                    cmd.Parameters.AddWithValue("@Genre", _record.Genre);
                    cmd.Parameters.AddWithValue("@Price", _record.Price);

                    cmd.ExecuteNonQuery();
                }
            }
          
        }
        public void DeleteRecord(int id)
        {                
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE [dbo].[Record]
                        FROM Record
                        WHERE RecordId = @RecordId
                    ";
                    cmd.Parameters.AddWithValue("@RecordId", id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
