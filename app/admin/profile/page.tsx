"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, GraduationCap, Users, Settings, BarChart, FileText, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, logout, User as UserType } from "@/lib/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function AdminProfile() {
  const [user, setUser] = useState<UserType | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getCurrentUser();
      if (userData) {
        if (userData.role !== "admin") {
          router.push("/login");
        }
        setUser(userData);
      } else {
        router.push("/login");
      }
    };
    
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center">
              <Avatar className="h-16 w-16 mr-4">
                <AvatarImage src={`https://avatar.vercel.sh/${user.email}`} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm font-medium text-primary capitalize">{user.role}</p>
              </div>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-white p-1 shadow-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">120</div>
                    <p className="text-xs text-muted-foreground">+5 this week</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+2 this month</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Certifications</CardTitle>
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">85</div>
                    <p className="text-xs text-muted-foreground">+12 this month</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Students</h3>
                    <p className="text-sm text-muted-foreground">Manage student enrollments</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Courses</h3>
                    <p className="text-sm text-muted-foreground">Manage course content</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">Certifications</h3>
                    <p className="text-sm text-muted-foreground">Manage course certificates</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="personal" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                  <p className="text-base">{user.name}</p>
                </div>
                <Separator />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="text-base">{user.email}</p>
                </div>
                <Separator />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Role</h3>
                  <p className="text-base capitalize">{user.role}</p>
                </div>
                <Separator />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-500">Account ID</h3>
                  <p className="text-base">{user.id}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-medium">Email Notifications</h3>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-medium">Change Password</h3>
                    </div>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <h3 className="text-sm font-medium">Privacy Settings</h3>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}