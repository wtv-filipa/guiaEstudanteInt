const express = require("express");
const router = express.Router();
const { get, update } = require("../models/toDoLists");

/**
 * @swagger
 *
 * /todolist/single:
 *   get:
 *     summary: Faz um /get de uma To Do List consoante o UA_IUPI do utilizador
 *     tags: [ToDos]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: UA_IUPI
 *         in: path
 *     responses:
 *       "200":
 *         description: A To Do List através do UA_IUPI fornecido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ToDo"
 *       "404":
 *         description: A To Do List procurada não está inserida na base de dados.
 */
/**
 * @swagger
 *
 * /todolist/{id}:
 *   put:
 *     summary: Faz update de uma To Do List consoante o seu id.
 *     tags: [ToDos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/ToDo"
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: A To D List foi atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ToDo"
 *       "400":
 *         description: O pedido enviado falhou.
 */

router
  .get("/single", async (req, res) => {
    let UA_IUPI = req.UA_IUPI;
    const todo = await get(UA_IUPI);
    if (!todo) {
      res.status(200);
      res.json({});
      res.end();
      return;
    }
    res.status(200);
    res.json(todo);
    res.end();
  })
  .put("/:id", async (req, res) => {
    if (!req.body) {
      res.status(400);
      res.send("A body must be included to create a new spell");
      res.end();

      return;
    }

    await update(req.params.id, req.body);

    res.json({ id: req.params.id, ...req.body });
    res.status(200);
    res.end();
  });

module.exports = router;
