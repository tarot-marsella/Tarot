const dns = require('dns');
const net = require('net');

const hosts = [
  { host: 'db.aopahejobfqboephprdk.supabase.co', port: 5432 },
  { host: 'aws-0-us-east-2.pooler.supabase.com', port: 5432 },
  { host: 'aws-0-us-east-2.pooler.supabase.com', port: 6543 },
  { host: 'aws-0-us-east-1.pooler.supabase.com', port: 6543 },
  { host: 'aws-0-sa-east-1.pooler.supabase.com', port: 6543 },
];

async function check() {
  for (const item of hosts) {
    console.log(`\nTesting ${item.host}:${item.port}...`);
    try {
      const ips = await dns.promises.resolve4(item.host).catch(e => `IPv4 error: ${e.message}`);
      console.log('  IPv4:', ips);
    } catch (e) {
      console.log('  IPv4 exception:', e.message);
    }
    
    try {
      const ips6 = await dns.promises.resolve6(item.host).catch(e => `IPv6 error: ${e.message}`);
      console.log('  IPv6:', ips6);
    } catch (e) {}

    await new Promise(resolve => {
      const socket = new net.Socket();
      socket.setTimeout(4000);
      socket.on('connect', () => {
        console.log(`  CONNECT OK to ${item.host}:${item.port}`);
        socket.destroy();
        resolve();
      });
      socket.on('error', (err) => {
        console.log(`  CONNECT FAILED to ${item.host}:${item.port} - ${err.message}`);
        resolve();
      });
      socket.on('timeout', () => {
        console.log(`  CONNECT TIMEOUT to ${item.host}:${item.port}`);
        socket.destroy();
        resolve();
      });
      socket.connect(item.port, item.host);
    });
  }
}

check();
