//1




1.Make sure you have Node.js installed on your computer. You can download it from Node.js official website.

2.Create a new directory for your project and navigate into it.

3.Create a new file named server.js in your project directory.

4.Write the following code in server.js:

javascript:

// Load the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body "Hello, Students!"
  res.end('Hello, Students!\n');
});

// Make the server listen on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

5.Save the file.

6.Open your terminal or command prompt, navigate to your project directory, and run the following command to start the server:

node server.js

7.Open your web browser and navigate to http://127.0.0.1:3000. You should see the message "Hello, Students!" displayed.





//2





Program to Read Content from a File and Write to a New File:

Here’s a simple Node.js program that reads content from a file named "input.txt" and writes the content to a new file named "output.txt":

javascript:

const fs = require('fs');

// Read content from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  // Write content to output.txt
  fs.writeFile('output.txt', data, (err) => {
    if (err) {
      console.error('Error writing to the output file:', err);
      return;
    }

    console.log('Content successfully written to output.txt');
  });
});





//3




Program to Create an HTTP Server and Handle Different Routes:

Here’s a Node.js program that creates an HTTP server. The server responds with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route:

javascript:

const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check the request URL
  if (req.url === '/') {
    // Respond with "Hello, World!" for the root route
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  } else {
    // Respond with "Page Not Found" for any other route
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});

// Make the server listen on port 3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
Steps to Run the Programs:

1.Read and Write File Program:

.Create a file named fileOperation.js and copy the first code snippet into it.

.Ensure you have a file named input.txt in the same directory.

.Run the program using the command: node fileOperation.js.


2.HTTP Server Program:

.Create a file named server.js and copy the second code snippet into it.

.Run the program using the command: node server.js.

.Open your web browser and navigate to http://127.0.0.1:3000/ to see "Hello, World!".

.Navigate to any other route (e.g., http://127.0.0.1:3000/other) to see "Page Not Found".








    //4






    To retrieve information about the current operating system using the os module in Node.js, you can use the following program:

    javascript:
    
    const os = require('os');
    
    // Retrieve OS information

    const platform = os.platform();
    const type = os.type();
    const release = os.release();
    const hostname = os.hostname();
    const uptime = os.uptime();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const cpus = os.cpus();
    const networkInterfaces = os.networkInterfaces();
    
    // Display OS information

    console.log('Operating System Information:');
    console.log(`Platform: ${platform}`);
    console.log(`Type: ${type}`);
    console.log(`Release: ${release}`);
    console.log(`Hostname: ${hostname}`);
    console.log(`Uptime: ${uptime} seconds`);
    console.log(`Total Memory: ${totalMemory} bytes`);
    console.log(`Free Memory: ${freeMemory} bytes`);
    console.log('CPU Information:', cpus);
    console.log('Network Interfaces:', networkInterfaces);

    Steps to Run the Program:

    1.Create the Program:
    
    .Create a new file named osInfo.js and copy the above code into it.

   2. Run the Program:
    
    .Open your terminal or command prompt.

    .Navigate to the directory where osInfo.js is saved.

    .Run the program using the command: node osInfo.js.

    .This program uses the os module to retrieve and display various pieces of information about the current operating system, including platform, type, release, hostname, uptime, total memory, free memory, CPU information, and network interfaces.
    
    
    
    
    
    


    //5






    Sure, here’s a Node.js program that demonstrates various functionalities of the path module to manipulate file paths:

    javascript:

    const path = require('path');
    
    // Define some file paths

    const filePath1 = '/users/johndoe/documents/file.txt';
    const filePath2 = 'users/johndoe/documents';
    const fileName = 'file.txt';
    
    // Get the directory name of a path

    const dirName = path.dirname(filePath1);
    console.log(`Directory Name: ${dirName}`);
    
    // Get the base name of a path

    const baseName = path.basename(filePath1);
    console.log(`Base Name: ${baseName}`);
    
    // Get the extension name of a path

    const extName = path.extname(filePath1);
    console.log(`Extension Name: ${extName}`);
    
    // Join multiple segments into a single path

    const joinedPath = path.join(filePath2, 'subdir', fileName);
    console.log(`Joined Path: ${joinedPath}`);
    
    // Resolve a sequence of paths to an absolute path

    const resolvedPath = path.resolve('users', 'johndoe', 'documents', fileName);
    console.log(`Resolved Path: ${resolvedPath}`);
    
    // Normalize a path (resolve '..' and '.' segments)

    const unnormalizedPath = 'users/johndoe/../janedoe/documents/./file.txt';
    const normalizedPath = path.normalize(unnormalizedPath);
    console.log(`Normalized Path: ${normalizedPath}`);
    
    // Parse a path into an object

    const parsedPath = path.parse(filePath1);
    console.log('Parsed Path:', parsedPath);
    
    // Format a path from an object

    const formattedPath = path.format(parsedPath);
    console.log(`Formatted Path: ${formattedPath}`);

    Steps to Run the Program:

    1.Create the Program:
    
    Create a new file named pathManipulation.js and copy the above code into it.

    2.Run the Program:
    
   . Open your terminal or command prompt.

    .Navigate to the directory where pathManipulation.js is saved.

    .Run the program using the command: node pathManipulation.js.





    //6






    To create a command-line Node.js program that simulates a basic calculator, allowing users to perform addition, subtraction, multiplication, and division operations on two numbers, follow these steps:

1. Create a new directory for your project and navigate into it.

2. Initialize a new Node.js project by running npm init -y.

3. Create a new file named calculator.js in your project directory.

4.Write the following code in calculator.js:
    
    
    
#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform calculations
function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log('Invalid operation. Please use +, -, *, or /.');
      return;
  }
  console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
}

// Function to prompt user for input
function promptUser() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      rl.question('Enter the operation (+, -, *, /): ', (operation) => {
        calculate(parseFloat(num1), parseFloat(num2), operation);
        rl.close();
      });
    });
  });
}

// Start the calculator
promptUser();
Steps to Run the Program:
Make the Script Executable:

On Unix-based systems (Linux, macOS), run: chmod +x calculator.js
On Windows, you can run it with Node.js without making it executable.
Run the Program:

Open your terminal or command prompt.
Navigate to the directory where calculator.js is saved.
Run the program using the command: ./calculator.js (on Unix-based systems) or node calculator.js (on any system)

    
    
    
    
    










