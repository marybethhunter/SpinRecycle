using SpinRecycle.Models;
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
                    Id = _reader.GetInt32(_reader.GetOrdinal("Id")),
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

        private readonly string basicQuery = @"
            SELECT r.RecordId as Id, r.Title, a.[Name] as Artist, g.[Name] as Genre, r.Price
            FROM Record as r
            LEFT JOIN Artist as a
            ON r.ArtistId = a.ArtistId
            LEFT JOIN Genre as g
            ON r.GenreId = g.GenreId";

        public List<Record> GetAll()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = basicQuery;

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
                    cmd.CommandText = basicQuery + @"
                        WHERE r.RecordId = @id";

                    cmd.Parameters.AddWithValue("@id", _id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var record = ReadRecords(reader).FirstOrDefault();
                        return record;
                    }
                }
            }
        }

        public Record GetRecordByName(string _name)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = basicQuery + @"
                        WHERE r.Title = @title";

                    cmd.Parameters.AddWithValue("@title", _name);

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
                    cmd.CommandText = basicQuery + @"
                        WHERE a.[Name] = @artist";

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
                    cmd.CommandText = basicQuery + @"
                        WHERE g.[Name] = @genre";

                    cmd.Parameters.AddWithValue("@genre", _genre);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var records = ReadRecords(reader);
                        return records;
                    }
                }
            }
        }
    }
}
