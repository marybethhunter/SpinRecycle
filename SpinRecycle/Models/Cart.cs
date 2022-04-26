namespace SpinRecycle.Models
{
    public class Cart
    {
        internal string RecordId;

        public int Id { get; set; }
        public string CartId { get; internal set; }
        public string Cart { get; internal set; }
    }
}
