const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');

// MySQL database connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'book_collection'
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL with ID:", connection.threadId);
});

// Routes

// View all books
app.get('/', (req, res) => {
    const query = 'SELECT * FROM books';
    connection.query(query, (err, books) => {
        if (err) throw err;
        res.render('index', { books });
    });
});

// Add book form
app.get('/add', (req, res) => {
    res.render('add');
});

// Add book (POST)
app.post('/add', (req, res) => {
    const { title, author, genre } = req.body;
    const query = 'INSERT INTO books (title, author, genre) VALUES (?, ?, ?)';
    connection.query(query, [title, author, genre], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Edit book form
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM books WHERE id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) throw err;
        res.render('edit', { book: result[0] });
    });
});

// Update book (POST)
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, genre } = req.body;
    const query = 'UPDATE books SET title = ?, author = ?, genre = ? WHERE id = ?';
    connection.query(query, [title, author, genre, id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Delete book
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM books WHERE id = ?';
    connection.query(query, [id], (err) => {
        if (err) throw err;
        res.redirect('/');
    });
});

// Start the server
const port = 3003; // Use a different port, like 3001 or any other available port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

