const redis = require('redis');

// Load environment variables
const REDIS_HOST = process.env.NEXT_REDIS_HOST || '127.0.0.1';
const REDIS_PORT = process.env.NEXT_REDIS_PORT || 6379;
const REDIS_PASSWORD = process.env.NEXT_REDIS_PASSWORD || null;

const client = redis.createClient({
    socket: {
        host: REDIS_HOST,
        port: REDIS_PORT,
    },
    password: REDIS_PASSWORD,
});

client.on('connect', () => console.log('Redis connected'));
client.on('error', (err) => console.error('Redis error:', err));

client.connect();

module.exports = client;