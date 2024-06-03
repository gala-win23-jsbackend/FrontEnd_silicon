namespace FrontEnd_silicon.Data;

public class UserProfile
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public string FirstName { get; set; } = null!;
    public string LastName { get; set; } = null!;

    public string ProfileImage { get; set; } = "avatar.svg";
   
    public string? Bio { get; set; }
}
