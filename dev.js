import { spawn } from 'child_process';

console.log('\x1b[36m%s\x1b[0m', '══════════════════════════════════════════════════════════════');
console.log('\x1b[36m%s\x1b[0m', '🚀 Launching SATYA SAI NITHIN REDDY Portfolio (Frontend + Backend)');
console.log('\x1b[36m%s\x1b[0m', '══════════════════════════════════════════════════════════════');
console.log('➜ \x1b[32mFrontend:\x1b[0m http://localhost:5173  (Your Portfolio Website)');
console.log('➜ \x1b[34mBackend:\x1b[0m  http://localhost:5001  (Contact Form API)');
console.log('\x1b[36m%s\x1b[0m', '══════════════════════════════════════════════════════════════\n');

// Start backend
const backend = spawn('npm', ['--prefix', 'backend', 'run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

// Start frontend
const frontend = spawn('npm', ['--prefix', 'frontend', 'run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

const cleanup = () => {
  console.log('\n\x1b[33m%s\x1b[0m', 'Shutting down both frontend and backend servers...');
  backend.kill();
  frontend.kill();
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
