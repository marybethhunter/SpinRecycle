using SpinRecycle.Models;
using System.Data.SqlClient;

namespace SpinRecycle.Data_Access
{
    public class CartRepository : ICartRepository
    {
        private readonly IConfiguration _config;
        public CartRepository(IConfiguration config) //constructor
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

        public List<Record> GetCartRecords()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.RecordId AS CartRecordId, 
                                      r.RecordId AS RecordId,
                                      a.[Name] AS ArtistName,
                                      g.[Name] AS Genre,
                                      r.Title, 
                                      Price
                                      FROM Cart As c
                                      LEFT JOIN Record r 
                                      ON c.RecordId = r.RecordId 
                                      LEFT JOIN Artist as a
                                      ON r.ArtistId = a.ArtistId
                                      LEFT JOIN Genre as g
                                      ON r.GenreId = g.GenreId
                                             ";


                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Record> records = new List<Record>();
                    while (reader.Read())
                    {
                        Record record = new Record
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("RecordId")),
                            // Title
                            Title = reader.GetString(reader.GetOrdinal("Title")),
                            // Artist
                            Artist = reader.GetString(reader.GetOrdinal("ArtistName")),
                            // Genre
                            Genre = reader.GetString(reader.GetOrdinal("GenreName")),
                            // Price 
                            Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                        };

                        records.Add(record);


                    }

                    reader.Close();
                    return records;
                }
            }
        }



        public void AddCartRecord(Record record)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO Cart 
                    VALUES @RecordId;
                     ";

                    cmd.Parameters.AddWithValue("@RecordId", record.Id);
                                  
                }
            }
        }

        public void DeleteCartRecord(int RecordId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                            DELETE FROM Cart
                            WHERE RecordId = @id
                        ";

                    cmd.Parameters.AddWithValue("@id", RecordId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

        

  

