const { spawn } = require('child_process');

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
  try {
    backend.kill();
  } catch (e) {}
  try {
    frontend.kill();
  } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
