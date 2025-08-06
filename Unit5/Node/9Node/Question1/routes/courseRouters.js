
 courseController = require('../controllers/courseController');

router.post('/', courseController.createCourse);
router.delete('/:id', courseController.softDeleteCourse);
router.get('/:id/students', courseController.getCourseStudents);
const express = require('express');
const router = express.Router();
module.exports = router;