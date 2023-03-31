const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const { getConnection } = require('../db/connection');

router.post('/cars', async (req, res) => {
  const { make, model, year, engineNo, chassisNo } = req.body;
  const sql = 'INSERT INTO car (make, model, year, engine_no, chassis_no) VALUES (?, ?, ?, ?, ?)';
  try {
    const result = await getConnection.query(sql, [make, model, year, engineNo, chassisNo]);
    res.json({ message: 'Car added successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/cars/:id', async (req, res) => {
  const carId = req.params.id;
  const { make, model, year, engineNo, chassisNo } = req.body;
  const sql = 'UPDATE car SET make = ?, model = ?, year = ?, engine_no = ?, chassis_no = ? WHERE id = ?';
  try {
    const result = await db.query(sql, [make, model, year, engineNo, chassisNo, carId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Car not found' });
    } else {
      res.json({ message: 'Car updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/cars/:id', async (req, res) => {
  const carId = req.params.id;
  const sql = 'DELETE FROM car WHERE id = ?';
  try {
    const result = await db.query(sql, [carId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Car not found' });
    } else {
      res.json({ message: 'Car deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
