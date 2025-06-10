import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import {
  Book, GraduationCap, LogOut, Settings, User,
  ShoppingCart, Heart, BookOpen, Search, Menu, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useAuth } from '@/contexts/auth-context';
import { logout as apiLogout, getAuthToken, getMe } from '@/lib/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ModeToggleDropdown } from '../mode-toggle-dropdown';
import { useTabContext } from '@/contexts/tab-context';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

// Reusable ListItem Component for Navigation Menus
const ListItem = ({ title, href, children }) => {
  const { activeTab, setActiveTab } = useTabContext();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          onClick={() => setActiveTab(href)}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${activeTab === href
            ? 'bg-accent text-accent-foreground'
            : 'hover:bg-accent hover:text-accent-foreground'
            }`}
        >
          <div className="text-sm font-medium leading-5">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout, login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch user details on mount if auth token exists
  useEffect(() => {
    const fetchUserDetails = async () => {
      const authToken = getAuthToken();
      if (authToken) {
        try {
          setLoading(true);
          const response = await getMe();
          login(response.data);
        } catch (error) {
          console.error('Error fetching user details:', error);
          toast.error('Unable to fetch user details. Please log in again.');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUserDetails();
  }, []);

  // Handle logout with toast notifications
  const handleLogout = async () => {
    const authToken = getAuthToken();
    if (!authToken) {
      toast.error('No authentication token found. Please log in again.');
      return;
    }

    toast.promise(
      async () => {
        const response = await apiLogout(authToken);
        logout();
        setMobileMenuOpen(false);
        return response?.data?.message || 'You have successfully logged out.';
      },
      {
        loading: 'Logging out...',
        success: 'Successfully logged out!',
        error: 'Failed to log out. Please try again.',
      }
    );
    navigate('/');
  };

  // Handle search query navigation
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/courses/${encodeURIComponent(searchQuery.trim())}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Menu Button - Now on the left */}

          {/* Logo - Now on the right for mobile, stays in normal position for desktop */}
          <div className="flex-1 md:flex-none flex justify-start md:justify-start">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" className="w-18 h-6 md:w-18 md:h-8" />
            </Link>
          </div>
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-10 w-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  {/* <div className="flex items-center justify-between mb-6">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center space-x-2">
                      <img src={logo} alt="logo" className="w-18 h-8" />
                    </Link>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div> */}

                  <div className="flex-1 space-y-4 mt-10">
                    <form onSubmit={handleSearch} className="px-2">
                      <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search courses..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-2"
                        />
                      </div>
                    </form>

                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" asChild>
                        <Link to="/about-course" onClick={() => setMobileMenuOpen(false)}>
                          Code It Bootcamp
                        </Link>
                      </Button>

                      {isAuthenticated && (
                        <>
                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/my-learning" onClick={() => setMobileMenuOpen(false)}>
                              My Learning
                            </Link>
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              My Cart
                            </Link>
                          </Button>
                        </>
                      )}
                    </div>

                    <div className="pt-4 border-t">
                      {isAuthenticated ? (
                        <>
                          <div className="flex items-center gap-3 px-3 py-2 mb-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user?.avatar} alt={user?.username} />
                              <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user?.username}</p>
                              <p className="text-xs text-muted-foreground">{user?.email}</p>
                            </div>
                          </div>

                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                              <User className="h-4 w-4 mr-2" />
                              Profile
                            </Link>
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" asChild>
                            <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                              <Settings className="h-4 w-4 mr-2" />
                              Settings
                            </Link>
                          </Button>
                          <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Logout
                          </Button>
                        </>
                      ) : (
                        <div className="space-y-2">
                          <Button className="w-full" asChild>
                            <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                              Register
                            </Link>
                          </Button>
                          <Button variant="outline" className="w-full" asChild>
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                              Login
                            </Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <ModeToggleDropdown />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop Navigation - Center */}
          <NavigationMenu className="hidden md:block ml-6">
            <NavigationMenuList>
              <Button variant="ghost" size="sm" asChild>
                <Link to="about-course">
                  Code It Bootcamp
                </Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>


          {/* Desktop Right Side Items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[200px] pl-8 pr-3 py-2"
                />
              </div>
            </form>

            {isAuthenticated && (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/my-learning">
                    My Learning
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/cart">
                    <ShoppingCart className="h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}

            <ModeToggleDropdown />
            {isAuthenticated ? (
              <AvatarDropdown user={user} onLogout={handleLogout} />
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const AvatarDropdown = ({ user, onLogout }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-10 w-10 rounded-2xl border-1">
          <AvatarImage
            src={user?.avatar}
            alt={user?.username}
          />
          <AvatarFallback className="rounded-lg">
            {user?.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-56'>
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage
                src={user?.avatar}
                alt={user?.username}
              />
              <AvatarFallback className="rounded-lg">
                {user?.username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">
                {user?.username}
              </span>
              <span className="truncate text-xs">
                {user?.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/my-learning">
            <BookOpen className="mr-2 h-4 w-4" />
            <span>My Learning</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/my-learning/wishlist">
            <Heart className="mr-2 h-4 w-4" />
            <span>Wishlist</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/cart">
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span>My Cart</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to='/settings'>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to='/instructor'>
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>Switch to Instructor</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onLogout}>
          <div className="flex items-center space-x-2">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar;