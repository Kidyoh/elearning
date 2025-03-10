"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, LogOut, User, Menu, X, GraduationCap, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getCurrentUser, logout, User as UserType } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [user, setUser] = useState<UserType | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkUser();
  }, []);

  const handleLogout = async () => {
    // Clear localStorage session
    await logout();
    
    // Clear cookie for server-side auth
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    
    setUser(null);
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
    router.push('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getRoleIcon = (role: string) => {
    return role === 'admin' ? 
      <Shield className="h-4 w-4 text-blue-600" /> : 
      <GraduationCap className="h-4 w-4 text-green-600" />;
  };

  return (
    <nav className="bg-gray/50 shadow-sm border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">EduSphere</span>
            </Link>
          </div>

          {/* Login status indicator - Desktop */}
          <div className="hidden md:flex items-center">
            {!isLoading && (
              <div className="mr-4">
                <Badge variant={user ? "outline" : "secondary"} className="px-3 py-1">
                  {user ? (
                    <div className="flex items-center space-x-1">
                      {getRoleIcon(user.role)}
                      <span className="capitalize">{user.role}</span>
                      <span className="mx-1">•</span>
                      <span className="text-green-600">Logged In</span>
                    </div>
                  ) : (
                    <span className="text-gray-500">Not Logged In</span>
                  )}
                </Badge>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                      <div className="flex items-center space-x-1 mt-1">
                        {getRoleIcon(user.role)}
                        <p className="text-xs leading-none text-muted-foreground capitalize">
                          {user.role}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={`/${user.role}/profile`} className="cursor-pointer w-full">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 border-t">
            {/* Login status indicator - Mobile */}
            {!isLoading && (
              <div className="px-4 py-2">
                <Badge variant={user ? "outline" : "secondary"} className="w-full flex justify-center px-3 py-1">
                  {user ? (
                    <div className="flex items-center space-x-1">
                      {getRoleIcon(user.role)}
                      <span className="capitalize">{user.role}</span>
                      <span className="mx-1">•</span>
                      <span className="text-green-600">Logged In</span>
                    </div>
                  ) : (
                    <span className="text-gray-500">Not Logged In</span>
                  )}
                </Badge>
              </div>
            )}
            
            {user ? (
              <div className="px-4 py-3 space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-base font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                    <div className="text-sm text-gray-500 capitalize flex items-center space-x-1">
                      {getRoleIcon(user.role)}
                      <span>{user.role}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <Link href={`/${user.role}/profile`} className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md">
                    <div className="flex items-center">
                      <User className="mr-3 h-5 w-5" />
                      Profile
                    </div>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md"
                  >
                    <div className="flex items-center">
                      <LogOut className="mr-3 h-5 w-5" />
                      Log out
                    </div>
                  </button>
                </div>
              </div>
            ) : (
              <div className="px-4 py-3">
                <Link href="/login">
                  <Button className="w-full">Sign In</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}