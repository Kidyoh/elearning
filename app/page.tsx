"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award, Star, Clock, Globe, ArrowRight, CheckCircle2, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          </svg>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30 transition-colors">
                The Future of Learning
              </Badge>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Transform Your Future with</span>
                <span className="block text-blue-300 mt-2">EduSphere</span>
              </h1>
              <p className="mt-6 text-lg text-blue-100 md:pr-10">
                Empower your learning journey with our comprehensive online education platform. 
                Access quality courses, expert instructors, and interactive learning experiences anytime, anywhere.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link href="/login" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-blue-900 hover:bg-blue-50">
                    Start Learning Today
                  </Button>
                </Link>
                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-white text-white hover:bg-white/10">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </div>
              
              <div className="mt-10 flex items-center justify-center md:justify-start space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden">
                      <Image 
                        src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                        alt={`User ${i}`} 
                        width={32} 
                        height={32} 
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-blue-100">
                  <span className="font-semibold">50,000+</span> students already enrolled
                </div>
              </div>
            </div>
            
            <div className="hidden md:block md:w-1/2 mt-10 md:mt-0">
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                      alt="Students learning"
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-48">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-8 w-8 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Trusted by top companies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Trusted by Learners Worldwide</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of students who have transformed their careers with EduSphere
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="mt-2 text-sm text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm text-gray-600">Online Courses</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary">50k+</div>
              <div className="mt-2 text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="mt-2 text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Featured Courses</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Popular Learning Paths</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most popular courses and start your learning journey today
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development Bootcamp",
                description: "Learn HTML, CSS, JavaScript, React and Node.js",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
                lessons: 42,
                hours: 52,
                level: "Beginner"
              },
              {
                title: "Data Science Fundamentals",
                description: "Master Python, SQL, and data visualization techniques",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                lessons: 36,
                hours: 48,
                level: "Intermediate"
              },
              {
                title: "UX/UI Design Masterclass",
                description: "Create stunning user interfaces and experiences",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
                lessons: 28,
                hours: 36,
                level: "All Levels"
              }
            ].map((course, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-primary hover:bg-gray-100">{course.level}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{course.hours} hours</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 text-yellow-500" />
                      <span>4.9</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enroll Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/login">
              <Button variant="outline" className="px-8 py-3">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Advantages</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Why Choose EduSphere?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience with features designed to help you succeed
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-blue-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Expert-Led Courses</h3>
                  <p className="text-muted-foreground">
                    Learn from industry professionals and experienced educators
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-green-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Certified Learning</h3>
                  <p className="text-muted-foreground">
                    Earn recognized certificates upon course completion
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-purple-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Quality Content</h3>
                  <p className="text-muted-foreground">
                    Access high-quality, up-to-date learning materials
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-yellow-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Learn at Your Pace</h3>
                  <p className="text-muted-foreground">
                    Flexible learning schedule that fits your lifestyle
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-red-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <Users className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join a community of learners and instructors
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-t-indigo-500">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Global Access</h3>
                  <p className="text-muted-foreground">
                    Learn from anywhere in the world, anytime
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our students who have transformed their careers with EduSphere
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Web Developer",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                content: "EduSphere completely transformed my career. I went from knowing nothing about coding to landing a job as a web developer in just 6 months!"
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: "https://randomuser.me/api/portraits/men/2.jpg",
                content: "The data science course was comprehensive and practical. The instructors were knowledgeable and the community support was invaluable."
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                image: "https://randomuser.me/api/portraits/women/3.jpg",
                content: "As someone switching careers, EduSphere provided me with the skills and confidence I needed to break into UX design. Highly recommended!"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-0">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Start Your Learning Journey?</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
            Join thousands of students who are already transforming their careers with EduSphere
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button className="px-8 py-3 text-lg bg-white text-primary hover:bg-blue-50">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}