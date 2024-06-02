using Microsoft.EntityFrameworkCore;

namespace FrontEnd_silicon.Data;

public class ApplicationUserRepository(ApplicationDbContext context)
{
    private readonly ApplicationDbContext _context = context;

    public async Task<ApplicationUser> GetUserById(string userId)
    {
        var result = await _context.Users
             .Include(u => u.UserProfile)
             .Include(u => u.UserAddress)
             .FirstOrDefaultAsync(u => u.Id == userId);
        return result!;
    }
}
