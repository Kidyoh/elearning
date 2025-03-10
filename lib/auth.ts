import { jwtVerify, SignJWT } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'default-secret-change-in-production'
);

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'student';
  name: string;
  password?: string;
}

// Initial mock users
const INITIAL_USERS: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'student@example.com',
    password: 'student123',
    role: 'student',
    name: 'Student User'
  }
];

// Initialize users in localStorage if not already present
export const initializeUsers = () => {
  if (typeof window !== 'undefined') {
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
      localStorage.setItem('users', JSON.stringify(INITIAL_USERS));
    }
  }
};

// Get all users from localStorage
export const getUsers = (): User[] => {
  if (typeof window !== 'undefined') {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : INITIAL_USERS;
  }
  return INITIAL_USERS;
};

// Save users to localStorage
export const saveUsers = (users: User[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('users', JSON.stringify(users));
  }
};

// Create a new user
export const createUser = (user: User) => {
  const users = getUsers();
  const existingUser = users.find(u => u.email === user.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  const newUsers = [...users, user];
  saveUsers(newUsers);
  return user;
};

export async function createSession(user: Omit<User, 'password'>) {
  const token = await new SignJWT({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
  
  // Store session in localStorage
  if (typeof window !== 'undefined') {
    localStorage.setItem('session', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  return token;
}

export async function getSession() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('session');
    if (!token) return null;
    
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      return payload;
    } catch (error) {
      // Invalid token, clear session
      localStorage.removeItem('session');
      localStorage.removeItem('user');
      return null;
    }
  }
  return null;
}

export async function getCurrentUser(): Promise<User | null> {
  if (typeof window !== 'undefined') {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }
  return null;
}

export async function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('session');
    localStorage.removeItem('user');
  }
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}

export async function validateCredentials(email: string, password: string): Promise<User | null> {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  if (!user || user.password !== password) {
    return null;
  }
  
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}