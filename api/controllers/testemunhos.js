const express = require("express");
const router = express.Router();
const { getAll, create, getAllFilter } = require("../models/testemunhos");
const TestemunhosSchema = require("../utils/TestemunhosSchema");

/**
 * @swagger
 * tags:
 *   name: Testemunhos
 *   description: All things related to testemunhos and stuff
 * components:
 *   schemas:
 *     NewTestemunhos:
 *       type: object
 *       required:
 *         - UA_IUPI
 *         - frase
 *         - testemunho
 *         - timestamp
 *         - tipo
 *       properties:
 *         UA_IUPI:
 *           type: string
 *           description: O id único do utilizador registado.
 *         frase:
 *           type: string
 *           description: Uma frase que resume o testemunho publicado.
 *         testemunho:
 *           type: string
 *           description: Corpo do testemunho, em texto.
 *         timestamp:
 *           type: number
 *           description: Timestamp enviada pelo sistema que indica a data em que foi publicado o testemunho.
 *         tipo:
 *           type: string
 *           description: Indica de que tipo é o testemunho publicado.
 *     Testemunho:
 *       type: object
 *       required:
 *         - UA_IUPI
 *         - frase
 *         - testemunho
 *         - timestamp
 *         - tipo
 *       properties:
 *         id:
 *           type: string
 *           description: The auto generated ID of the testemunho.
 *         UA_IUPI:
 *           type: string
 *           description: O id único do utilizador registado.
 *         frase:
 *           type: string
 *           description: Uma frase que resume o testemunho publicado.
 *         testemunho:
 *           type: string
 *           description: Corpo do testemunho, em texto.
 *         timestamp:
 *           type: number
 *           description: Timestamp enviada pelo sistema que indica a data em que foi publicado o testemunho.
 *         tipo:
 *           type: string
 *           description: Indica de que tipo é o testemunho publicado.
 */

/**
 * @swagger
 *
 * /testemunhos:
 *   get:
 *     summary: Obtém toda a lista dos testemunhos publicados até ao momento.
 *     tags: [Testemunhos]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: A lista dos testemunhos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Testemunho"
 *   post:
 *     summary: Faz a criação de um novo testemunho
 *     tags: [Testemunhos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewTestemunhos"
 *     responses:
 *       "201":
 *         description: O testemunho foi criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Testemunho"
 *       "400":
 *         description: Ocorreu um erro durante o pedido enviado aos testemunhos..
 */

router
  .get("/", async (req, res) => {
    const testemunhos = await getAll();

    res.status(200);
    res.json(testemunhos);
    res.end();
  })
  .post("/",async (req, res) => {
    let UA_IUPI = req.UA_IUPI;

    try {
      await TestemunhosSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }
    const testemunho = await create({ ...req.body, UA_IUPI });

    res.json(testemunho);
    res.status(201);
    res.end();
  });

module.exports = router;
