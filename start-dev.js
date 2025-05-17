// Script to start the development server on a specific port
const { spawn } = require('child_process');
const port = 3005;

console.log(`Starting development server on port ${port}...`);

// Run the Vite dev server with a specific port
const vite = spawn('npx', ['vite', '--port', port.toString()], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (error) => {
  console.error(`Error starting Vite: ${error.message}`);
  process.exit(1);
});

vite.on('close', (code) => {
  if (code !== 0) {
    console.error(`Vite process exited with code ${code}`);
    process.exit(code);
  }
});

// Handle termination signals
process.on('SIGINT', () => {
  console.log('Shutting down development server...');
  vite.kill();
});

process.on('SIGTERM', () => {
  console.log('Shutting down development server...');
  vite.kill();
});
