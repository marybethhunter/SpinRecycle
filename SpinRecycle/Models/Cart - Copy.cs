namespace SpinRecycle.Models
{
    public class Cart
    {
         public int Id { get; set; }
        //public string CartId { get; internal set; } remove
        public List <Record> Records  { get; internal set; }
    }
}
