// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require("body-parser");
// const cors = require('cors')
// const app = express();
// const PORT = 8080;

// //middleware
// app.use(bodyParser.json());
// app.use(cors())

// //db connection 
// const db = mysql.createConnection({
//     host: "127.0.0.1",
//     user: "root",
//     password: "@akashjaiswal",
//     database: "electronics"
// });

// db.connect(err => console.error(err ? "MySQL Connection Error: " + err : "Connected to MySQL."));

// //create
// app.post("/categories", (req, res) => {
//     const sql = 'INSERT INTO categories (name) VALUES (?)';
//     db.query(sql, [req.body.name], (err, data) => {
//         if (err) return res.status(500).json(err);
//         res.json({ id: data.insertId, name: req.body.name });
//     });
// });

// app.post("/subCategories", (req, res) => {
//     const { category_id, name } = req.body;
//     const sql = 'INSERT INTO subcategories (category_id, name) VALUES (?,?)';
//     db.query(sql, [category_id, name], (err, data) => {
//         if (err) return res.status(500).json(err);
//         res.json({ id: data.insertId, category_id, name });
//     });
// });

// //read
// app.get("/categories", (req, res) => {
//     const sql = `
//     SELECT c.id AS category_id, c.name AS category_name,
//            sc.id AS subcategory_id, sc.name AS subcategory_name
//     FROM categories c
//     LEFT JOIN subcategories sc ON c.id = sc.category_id
//     ORDER BY c.id ASC, sc.id ASC`;

//     db.query(sql, (err, result) => {
//         if (err) return res.status(500).json(err);
//         const data = result.reduce((acc, row) => {
//             const category = acc.find(cat => cat.id === row.category_id);
//             if (!category) acc.push({
//                 id: row.category_id, name: row.category_name,
//                 subcategories: row.subcategory_id ? [{ id: row.subcategory_id, name: row.subcategory_name }] : []
//             });
//             else if (row.subcategory_id) category.subcategories.push({ id: row.subcategory_id, name: row.subcategory_name });
//             return acc;
//         }, []);
//         res.json(data);
//     });
// });

// //update
// app.put("/categories/:id", (req, res) => {
//     const sql = "UPDATE categories SET name = ? WHERE id = ?";
//     db.query(sql, [req.body.name, req.params.id], (err) => {
//         if (err) return res.status(500).json(err);
//         res.json({ message: "Category updated successfully." });
//     });
// });


// //delete
// app.delete("/categories/:id", (req, res) => {
//     const sql = "DELETE FROM categories WHERE id = ?";
//     db.query(sql, [req.params.id], (err) => {
//         if (err) return res.status(500).json(err);
//         res.json({ message: "Category deleted successfully." });
//     });
// });

// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
