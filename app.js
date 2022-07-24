const express = require('express');
const ejs = require('ejs');
const methodOverride = require('method-override');
const blogRoutes = require('./routes/blogsRoutes');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(blogRoutes);

app.listen(port, () => console.log('Server started at port ' + PORT));
