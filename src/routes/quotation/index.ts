import express from "express";
import Quotation from "../../controllers/quotation";

const router = express.Router();

/**
 * @swagger
 *  /item:
 *    get:
 *      summary: Retrieve a list of items
 *      tags:
 *      - Item
 *      responses:
 *        200:
 *         description: Retorna um array
 */
router.get("/api/v1/quotation", Quotation.index);

/**
 * @swagger
 *  /item/:id:
 *    get:
 *      summary: Retrieve a unique item
 *      description: Show item data
 *      tags:
 *      - Item
 *    responses:
 *      200:
 *        description: Retorna um objeto
 */
router.get("/api/v1/item/:id", Quotation.show);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list
 *     tags:
 *      - Item
 */

router.post("/api/v1/quotation", Quotation.create);

/**
 * @swagger
 * /item/:id:
 *   patch:
 *    summary: Update a single item
 *    tags:
 *      - Item
 *    responses:
 *      200:
 *        description:  name, description e id do item na URL
 */
router.patch("/api/v1/quotation/:id", Quotation.update);

/**
 * @swagger
 * /service/:id:
 *   delete:
 *     summary: Delete an service
 *     tags:
 *     - service
 *     responses:
 *       200:
 *         description: Returns code 200
 */
router.delete("/api/v1/quotation/:id", Quotation.deleteItem);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   services:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.delete("/api/v1/deleteAllQuotations", Quotation.deleteAll);

export default router;
