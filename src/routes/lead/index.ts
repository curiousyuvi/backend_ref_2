import express from "express";
import Lead from "../../controllers/lead";

const router = express.Router();

router.post("/api/v1/lead", Lead.create);

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

export default router;
