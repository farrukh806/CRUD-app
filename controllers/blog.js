const pool = require('../db');

const getBlogs = async (req, res) => {
	const results = await pool.query('SELECT * FROM blogs');

	console.log(results.rows);

	res.render('home', { data: results.rows });
};

const getBlogById = async (req, res) => {
	const results = await pool.query('SELECT * FROM blogs WHERE id = $1', [
		req.params.id
	]);

	console.log(results.rows);
	if (results.rows.length > 0) {
		res.render('show', { blog: results.rows[0] });
	} else res.status(404).json({ error: 'Blog not found' });
};

const deleteBlogById = async (req, res) => {
	const results = await pool.query('DELETE FROM blogs WHERE id = $1', [
		req.params.id
	]);

	console.log(results.rowCount);

	if (results.rowCount > 0) {
		res.redirect('/');
	} else res.status(404).json({ error: 'Blog not found' });
};

const editBlogById = async (req, res) => {
	const results = await pool.query('SELECT * FROM blogs WHERE id = $1', [
		req.params.id
	]);

	console.log(results.rows);
	if (results.rows.length > 0) {
		res.render('edit', { blog: results.rows[0] });
	} else res.status(404).json({ error: 'Blog not found' });
};

const updateBlogById = async (req, res) => {
	const results = await pool.query(
		'UPDATE blogs SET title = $1, description = $2 WHERE id = $3',
		[req.body.title, req.body.description, req.params.id]
	);

	console.log(results.rowCount);
	if (results.rowCount > 0) {
		res.redirect('/');
	} else res.status(400).json({ error: 'Something went wrong' });
};

const newBlog = (req, res) => {
	res.render('newblog');
};

const createNewBlog = async (req, res) => {
	const results = await pool.query(
		'INSERT INTO blogs (title, description) VALUES ($1, $2)',
		[req.body.title, req.body.description]
	);

	console.log(results.rowCount);
	if (results.rowCount > 0) {
		res.redirect('/');
	} else res.status(400).json({ error: 'Something went wrong' });
};

module.exports = {
	getBlogs,
	getBlogById,
	deleteBlogById,
	editBlogById,
	updateBlogById,
	createNewBlog,
	newBlog
};
