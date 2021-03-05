const express = require("express");
const router = express.Router();
const { get, update } = require("../models/profiles");
const ProfilesSchema = require("../utils/ProfilesSchema");

/**
 * @swagger
 *
 * /profiles/single:
 *   get:
 *     summary: Obtém um perfil através do UA_IUPI do utilizador.
 *     tags: [Perfis]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: O perfil com o id fornecido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Perfil"
 *       "404":
 *         description: O perfil procurado não existe na base de dados.
 */
/**
 * @swagger
 *
 * /profiles/{id}:
 *   put:
 *     summary: Atualiza um perfil consoante o id fornecido.
 *     tags: [Perfis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Perfil"
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       "200":
 *         description: O perfil com o id fornecido foi atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Perfil"
 *       "400":
 *         description: Ocorreu um erro a tentar atualizar o perfil.
 */

router
  .get("/single", async (req, res) => {
    let UA_IUPI = req.UA_IUPI;
    const profile = await get(UA_IUPI);
    if (!profile) {
      res.status(404);
      res.json({});
      res.end();
      return;
    }
    res.status(200);
    res.json(profile);
    res.end();
  })
  .put("/:id", async (req, res) => {
    try {
      await ProfilesSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();
      return;
    }
    await update(req.params.id, req.body);

    res.json({
      ...req.body,
    });
    res.status(200);
    res.end();
  });

module.exports = router;
