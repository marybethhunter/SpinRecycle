namespace SpinRecycle.Models
{
    public class User
    {
        public int Id { get; set; }
        //public string CartId { get; internal set; } remove
        public List<Record> Records { get; internal set; }
    }
}
