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
                    cmd.CommandText = @"
                        SELECT c.RecordId as CartRecordId,
                        r.RecordId as RecordId,
                        r.Title,
                        r.Artist,
                        r.Genre,
                        r.Price
                        FROM Cart as c
                        LEFT JOIN Record as r
                        ON c.RecordId = r.RecordId
                     ";


                    SqlDataReader reader = cmd.ExecuteReader();
                    List<Record> records = new List<Record>();
                    while (reader.Read())
                    {
                        if (!reader.IsDBNull(0))
                        {
                            Record record = new Record
                            {
                                RecordId = reader.GetInt32(reader.GetOrdinal("RecordId")),
                                Title = reader.GetString(reader.GetOrdinal("Title")),
                                Artist = reader.GetString(reader.GetOrdinal("Artist")),
                                Genre = reader.GetString(reader.GetOrdinal("Genre")),
                                Price = reader.GetDecimal(reader.GetOrdinal("Price")),
                            };
                            records.Add(record);
                        }
                    }
                    reader.Close();
                    return records;
                }
            }
        }

        public bool RecordFoundInCart(int recordId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();

                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Cart
                        WHERE RecordId = @id
                    ";

                    cmd.Parameters.AddWithValue("@id", recordId);

                    SqlDataReader reader = cmd.ExecuteReader();
                    bool found = false;
                    while (reader.Read())
                    {
                        var rId = reader.GetInt32(reader.GetOrdinal("RecordId"));
                        if (rId == recordId)
                        {
                            found = true;
                        }
                    }
                    reader.Close();
                    return found;
                }
            }
        }



        public void AddCartRecord(int recordId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Cart (RecordId)
                        VALUES (@id);
                     ";

                    cmd.Parameters.AddWithValue("@id", recordId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteCartRecord(int recordId)
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

                    cmd.Parameters.AddWithValue("@id", recordId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}

        

  

