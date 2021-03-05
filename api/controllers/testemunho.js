const express = require("express");
const router = express.Router();
const { get, getTestInd, update, remove } = require("../models/testemunhos");
const TestemunhosSchema = require("../utils/TestemunhosSchema");

/**
 * @swagger
 *
 * /testemunhos/user:
 *   get:
 *     summary: Obtém os testemunhos relacionados com o utilizador com base no seu UA_IUPI.
 *     tags: [Testemunhos]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: Os testemunhos com o UA_IUPI do utilizador.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Testemunho"
 *       "404":
 *         description: Não foram encontrados testemunhos com UA_IUPI fornecido.
 */

/**
 * @swagger
 *
 * /testemunhos/{id}:
 *   get:
 *     summary: Obtém um testemunho consoante o id fornecido.
 *     tags: [Testemunhos]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: O testemunho com o id fornecido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Testemunho"
 *       "404":
 *         description: O testemunho procurado não se encontra na base de dados.
 *   put:
 *     summary: Faz update de um testemunho com base no id fornecido.
 *     tags: [Testemunhos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Testemunho"
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: O testemunho com o id fornecido foi atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Testemunho"
 *       "400":
 *         description: The request was sent with an invalid body.
 *   delete:
 *     summary: Apaga o testemunho através do id fornecido.
 *     tags: [Testemunhos]
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: O testemunho com o id fornecido foi apagado com sucesso.
 */
router
  .get("/user", async (req, res) => {
    let UA_IUPI = req.UA_IUPI;
    const testemunho = await get(UA_IUPI);
    if (!testemunho) {
      res.status(404);
      res.json({});
      res.end();
      return;
    }
    res.status(200);
    res.json(testemunho);
    res.end();
  })
  .get("/:id", async (req, res) => {
    const testemunho = await getTestInd(req.params.id);
    if (!testemunho) {
      res.status(404);
      res.json({});
      res.end();
      return;
    }
    res.status(200);
    res.json(testemunho);
    res.end();
  })
  .put("/:id", async (req, res) => {
    try {
      await TestemunhosSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();
      return;
    }
    await update(req.params.id, req.body);

    res.json({ ...req.body });
    res.status(200);
    res.end();
  })
  .delete("/:id", async (req, res) => {
    await remove(req.params.id);

    res.status(200);
    res.end();
  });

module.exports = router;
