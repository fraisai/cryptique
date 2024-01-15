// in Crypto Cards => Add to Watchlist => 
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const pool = require('../models/sqlModel'); // connect server to database aka connecting to the db.js file

// Add a card to watch list
export const addCard = async(req: Request, res: Response, next: NextFunction) => { // POST: /watch/post
    try {
        const { name } = req.body; // you are inserting into the column for description in the table named 'todo' (located in the database 'perntodo') the object description (from req.body)
        const newTodo = await pool.query(`INSERT INTO watchlist_card(name) VALUES($1) RETURNING *`, [name]);
        return res.status(200).json(newTodo);
    } catch(error: any | ErrorRequestHandler) {
        return next(`Error in watchListCrudController.js: addCrypto: ${error}`)
    }
}

// Get all watchlist cards
export const getCard = async(req: Request, res: Response, next: NextFunction) => { // GET: /watch
    try {
        // you are selecting all the data from the table 'todo' located inside of the database you initially created called 'perntodo'
        const allTodos = await pool.query('SELECT * FROM watchlist_card'); // SELECT ALL FROM TABLE TODO
        res.status(200).json(allTodos.rows); // aka sending back on the response object
        next();
    } catch(err: any | ErrorRequestHandler) {
        console.error(err.message);
        return next()
    }
}

// Delete a card from watch list
export const deleteCard = async(req: Request, res: Response, next: NextFunction) => { // DELETE /watch/{id}
    try {
        // specify exactly what we want to delete
        const { id } = req.params;
        const deleteTodo = await pool.query('DELETE FROM watchlist_card WHERE trending_id = $1', [id]);
        res.status(200).json('To do item was deleted');
        return next();
    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in DELETE request in server", error.message);
        return next();
    }
}

// Edit a card in watch list
export const patchCard = async(req: Request, res: Response, next: NextFunction) => { // PATCH: /watch/{id}
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) return next();
        const updateTodo = await pool.query(`UPDATE watchlist_card SET name=$1 WHERE trending_id = $2;`, [name, id]);
        res.status(200).json('Item was edited.');
        return next();

    } catch (error: any | ErrorRequestHandler) {
        console.log("Error in EDIT request in server", error.message);
        return next();
    }
}
