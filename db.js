const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();
const pool = new Pool({
	user: 'postgresql',
	host: process.env.HOST,
	database: 'blog',
	password: 'postgresql',
	port: 18692
});

module.exports = pool;
