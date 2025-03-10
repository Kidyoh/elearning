"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Future with</span>
              <span className="block text-primary mt-2">EduSphere</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-8 md:max-w-3xl">
              Empower your learning journey with our comprehensive online education platform. 
              Access quality courses, expert instructors, and interactive learning experiences anytime, anywhere.
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
              <Link href="/login" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-8 py-3 text-lg">
                  Start Learning Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="mt-2 text-sm text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-sm text-gray-600">Online Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50k+</div>
              <div className="mt-2 text-sm text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">95%</div>
              <div className="mt-2 text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduSphere?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Expert-Led Courses</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals and experienced educators
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Certified Learning</h3>
                <p className="text-muted-foreground">
                  Earn recognized certificates upon course completion
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Quality Content</h3>
                <p className="text-muted-foreground">
                  Access high-quality, up-to-date learning materials
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}