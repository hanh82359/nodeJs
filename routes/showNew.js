import express from 'express';
import {list} from '../controllers/news.js';
const router = express.Router();
router.get('/',list);
module.exports = router;
