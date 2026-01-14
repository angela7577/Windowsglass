import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the user.txt file
const userFilePath = path.join(process.cwd(), 'user.txt');

// Initialize the user.txt file if it doesn't exist
function initializeUserFile() {
  if (!fs.existsSync(userFilePath)) {
    fs.writeFileSync(userFilePath, '[]'); // Initialize with an empty array
  }
}

// Read users from the file
function readUsersFromFile(): any[] {
  initializeUserFile(); // Ensure the file exists
  const fileContent = fs.readFileSync(userFilePath, 'utf8');
  try {
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error parsing user file:', error);
    return [];
  }
}

// Write users to the file
function writeUsersToFile(users: any[]) {
  fs.writeFileSync(userFilePath, JSON.stringify(users, null, 2));
}

export async function GET(request: NextRequest) {
  try {
    const users = readUsersFromFile();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error reading users:', error);
    return new Response(JSON.stringify({ error: 'Failed to read users' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    // Validate input
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Read existing users
    const existingUsers = readUsersFromFile();

    // Check if user already exists
    const userExists = existingUsers.some((user: any) => user.email === email);
    if (userExists) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 409,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password, // In a real app, you'd hash the password
      createdAt: new Date().toISOString(),
    };

    // Add new user to the list
    const updatedUsers = [...existingUsers, newUser];
    
    // Write updated users to file
    writeUsersToFile(updatedUsers);

    // Return success response without password
    const { password: _, ...userWithoutPassword } = newUser;
    return new Response(JSON.stringify(userWithoutPassword), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to create user' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { email, newPassword } = await request.json();

    if (!email || !newPassword) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    const existingUsers = readUsersFromFile();
    const userIndex = existingUsers.findIndex((user: any) => user.email === email);

    if (userIndex === -1) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Update user's password
    existingUsers[userIndex].password = newPassword;
    writeUsersToFile(existingUsers);

    return new Response(JSON.stringify({ message: 'Password updated successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}