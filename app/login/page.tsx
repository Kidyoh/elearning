"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { validateCredentials, createSession, initializeUsers } from "@/lib/auth";
import { Loader2, UserCircle2, Lock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"student" | "admin">("student");
  const { toast } = useToast();
  const router = useRouter();

  // Initialize users in localStorage when the component mounts
  useEffect(() => {
    initializeUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = await validateCredentials(email, password);
      
      if (!user) {
        throw new Error("Invalid credentials");
      }

      // Check if the user role matches the selected tab
      if (user.role !== activeTab) {
        throw new Error(`You are not authorized as a ${activeTab}`);
      }

      const token = await createSession(user);
      
      // Set cookie for server-side authentication
      document.cookie = `session=${token}; path=/; max-age=86400; samesite=strict`;

      toast({
        title: "Login successful",
        description: `Welcome back, ${user.name}!`,
      });

      router.push(`/${user.role}/profile`);
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-8 shadow-lg border-t-4 border-t-blue-500">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to EduSphere
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to continue your learning journey
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6 pt-4">
          <Tabs 
            defaultValue="student" 
            value={activeTab} 
            onValueChange={(value) => setActiveTab(value as "student" | "admin")}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student" className="mt-0">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email" className="flex items-center gap-2">
                      <UserCircle2 className="h-4 w-4" />
                      Email address
                    </Label>
                    <Input
                      id="student-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="mt-1"
                      placeholder="student@example.com"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Password
                    </Label>
                    <Input
                      id="student-password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="mt-1"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in as Student"
                  )}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="admin" className="mt-0">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-email" className="flex items-center gap-2">
                      <UserCircle2 className="h-4 w-4" />
                      Email address
                    </Label>
                    <Input
                      id="admin-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      required
                      className="mt-1"
                      placeholder="admin@example.com"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Password
                    </Label>
                    <Input
                      id="admin-password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      className="mt-1"
                      placeholder="••••••••"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in as Admin"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-2 pt-4 text-center text-sm text-gray-600 border-t mt-4">
          <div>
            <p className="font-medium">Demo Credentials:</p>
            <p>Admin: admin@example.com / admin123</p>
            <p>Student: student@example.com / student123</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}