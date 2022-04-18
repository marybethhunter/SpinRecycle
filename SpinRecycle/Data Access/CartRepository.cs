using System.Data.SqlClient;

namespace SpinRecycle.Data_Access
{
    public class CartRepository
    {
        private readonly IConfiguration _config;

        public CartRepository(IConfiguration config)
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
    }
}
