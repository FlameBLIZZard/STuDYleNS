const { spawn } = require('child_process');

const server = spawn('npx.cmd', ['serve', '-s', 'dist'], { shell: true });
server.stdout.on('data', data => {
  const str = data.toString();
  console.log(`[SERVE] ${str}`);
  const match = str.match(/http:\/\/localhost:(\d+)/);
  if (match) {
    const port = match[1];
    const lt = spawn('npx.cmd', ['localtunnel', '--port', port, '--subdomain', 'studylens-iqoo-hackathon'], { shell: true });
    lt.stdout.on('data', data => console.log(`[LOCALTUNNEL] ${data}`));
    lt.stderr.on('data', data => console.error(`[LOCALTUNNEL] ${data}`));
  }
});
server.stderr.on('data', data => console.error(`[SERVE] ${data}`));
