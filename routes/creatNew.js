import express from 'express';
import {create} from '../controllers/news.js';
const router = express.Router();
router.post('/add',create);
module.exports = router;
