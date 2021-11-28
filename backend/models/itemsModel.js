import db from '../config/database.js';

const GET_ALL_ITEMS = "SELECT * FROM items";
const GET_ITEM_BY_ID = "SELECT * FROM items WHERE id = ?";
const CREATE_ITEM = "INSERT INTO items SET ?";
const UPDATE_ITEM = "UPDATE items SET ? WHERE id = ?";
const DELETE_ITEM = "DELETE FROM items WHERE id = ?";

export const getAllItems = result => {
    db.query(GET_ALL_ITEMS, (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const getItemById = (id, result) => {
    db.query(GET_ITEM_BY_ID, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const createItem = (data, result) => {
    db.query(CREATE_ITEM, [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const updateItem = (data, id, result) => {
    db.query(UPDATE_ITEM, [data, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}

export const deleteItem = (id, result) => {
    db.query(DELETE_ITEM, [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    })
}