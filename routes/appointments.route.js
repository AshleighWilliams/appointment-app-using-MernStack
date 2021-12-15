const express = require('express');
const router = express.Router();

const {addAppointments, fetchAppointments, requireUser, removeAppointment, updateAppointment, fetchAllAppointments} = require('../controllers/appointments.controller');

router.post('/add', addAppointments)//route to register a user
router.get('/fetch', requireUser, fetchAppointments)//rpute to register a user
router.delete('/:_id', removeAppointment)//route to remove an appointment
router.put('/update', updateAppointment)//route to update an appointment in the database

module.exports = router;