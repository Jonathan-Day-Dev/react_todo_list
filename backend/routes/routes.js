import {
    showItems,
    showItemById,
    addItem,
    updateItemById,
    deleteItemById
} from '../controllers/items.js';

import express from 'express';

const router = express.Router();

router.get('/items', showItems);
router.get('/item/:id', showItemById);
router.post('/item', addItem);
router.put('/item/:id', updateItemById);
router.delete('/item/:id', deleteItemById);

export default router;