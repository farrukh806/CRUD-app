const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgresql',
	host: 'postgresql-83592-0.cloudclusters.net',
	database: 'blog',
	password: 'postgresql',
	port: 18692
});

module.exports = pool;
