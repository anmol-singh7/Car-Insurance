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

router.post('/owners', async (req, res) => {
  const { name, address, phone } = req.body;
  const sql = 'INSERT INTO owner (name, address, phone) VALUES (?, ?, ?)';
  try {
    const result = await db.query(sql, [name, address, phone]);
    res.json({ message: 'Owner added successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/owners/:id', async (req, res) => {
  const ownerId = req.params.id;
  const { name, address, phone } = req.body;
  const sql = 'UPDATE owner SET name = ?, address = ?, phone = ? WHERE id = ?';
  try {
    const result = await db.query(sql, [name, address, phone, ownerId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Owner not found' });
    } else {
      res.json({ message: 'Owner updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/owners/:id', async (req, res) => {
  const ownerId = req.params.id;
  const sql = 'DELETE FROM owner WHERE id = ?';
  try {
    const result = await db.query(sql, [ownerId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Owner not found' });
    } else {
      res.json({ message: 'Owner deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/policies', async (req, res) => {
  const { start_date, end_date, premium, owner_id } = req.body;
  const sql = 'INSERT INTO insurance_policy (start_date, end_date, premium, owner_id) VALUES (?, ?, ?, ?)';
  try {
    const result = await db.query(sql, [start_date, end_date, premium, owner_id]);
    res.json({ message: 'Policy added successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/policies/:id', async (req, res) => {
  const policyId = req.params.id;
  const { start_date, end_date, premium, owner_id } = req.body;
  const sql = 'UPDATE insurance_policy SET start_date = ?, end_date = ?, premium = ?, owner_id = ? WHERE id = ?';
  try {
    const result = await db.query(sql, [start_date, end_date, premium, owner_id, policyId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Policy not found' });
    } else {
      res.json({ message: 'Policy updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/policies/:id', async (req, res) => {
  const policyId = req.params.id;
  const sql = 'DELETE FROM insurance_policy WHERE id = ?';
  try {
    const result = await db.query(sql, [policyId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Policy not found' });
    } else {
      res.json({ message: 'Policy deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/claims', async (req, res) => {
  const { date_of_incident, workshop_id, driver_name, car_id } = req.body;
  const sql = 'INSERT INTO claim (date_of_incident, workshop_id, driver_name, car_id) VALUES (?, ?, ?, ?)';
  try {
    const result = await db.query(sql, [date_of_incident, workshop_id, driver_name, car_id]);
    res.json({ message: 'Claim added successfully', id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put('/claims/:id', async (req, res) => {
  const claimId = req.params.id;
  const { date_of_incident, workshop_id, driver_name, car_id } = req.body;
  const sql = 'UPDATE claim SET date_of_incident = ?, workshop_id = ?, driver_name = ?, car_id = ? WHERE id = ?';
  try {
    const result = await db.query(sql, [date_of_incident, workshop_id, driver_name, car_id, claimId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Claim not found' });
    } else {
      res.json({ message: 'Claim updated successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/claims/:id', async (req, res) => {
  const claimId = req.params.id;
  const sql = 'DELETE FROM claim WHERE id = ?';
  try {
    const result = await db.query(sql, [claimId]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Claim not found' });
    } else {
      res.json({ message: 'Claim deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
