// cloudflare-r2-api · HTTP API · MIT · AI-Native Solutions
import http from 'node:http';
http.createServer((_, res) => res.end(JSON.stringify({ ok: true, tool: 'cloudflare-r2-api' }))).listen(process.env.PORT || 3000);
