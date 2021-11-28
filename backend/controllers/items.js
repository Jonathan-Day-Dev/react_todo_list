import {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} from '../models/itemsModel.js';

export const showItems = (req, res) => {
    getAllItems((err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
}

export const showItemById = (req, res) => {
    const { id } = req.params;
    getItemById(id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
}

export const addItem = (req, res) => {
    const data = req.body;
    createItem(data, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
}

export const updateItemById = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    updateItem(data, id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
}

export const deleteItemById = (req, res) => {
    const { id } = req.params;
    deleteItem(id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    })
}