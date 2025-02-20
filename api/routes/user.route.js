import express from 'express';
import { test } from '../controllers/user.controller.js';  // ✅ Named import

const router = express.Router();

router.get('/test', test);  // ✅ Correct usage

export default router;  // ✅ Correct export
