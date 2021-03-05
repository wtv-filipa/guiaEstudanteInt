const express = require("express");
const router = express.Router();
const { getAll, create } = require("../models/profiles");
const ProfilesSchema = require("../utils/ProfilesSchema");

/**
 * @swagger
 * tags:
 *   name: Perfis
 *   description: All things related to profiles and stuff
 * components:
 *   schemas:
 *     NewPerfil:
 *       type: object
 *       required:
 *         - UA_IUPI
 *         - curso
 *         - departamento
 *         - email
 *         - img
 *         - name
 *       properties:
 *         UA_IUPI:
 *           type: string
 *           description: O id único do utilizador registado.
 *         curso:
 *           type: string
 *           description: O curso atual do utilizador.
 *         departamento:
 *           type: string
 *           description: O departamento atual do utilizador.
 *         email:
 *           type: string
 *           description: O email institucional do utilizador.
 *         img:
 *           type: string
 *           description: A imagem de perfil criada para o utilizador através do seu nome.
 *         name:
 *           type: string
 *           description: O nome completo do utilizador.
 *     Perfil:
 *       type: object
 *       required:
 *         - UA_IUPI
 *       properties:
 *         id:
 *           type: string
 *           description: O id automático criado para o perfil do utilizador.
 *         UA_IUPI:
 *           type: string
 *           description: O id único do utilizador registado.
 *         curso:
 *           type: string
 *           description: O curso atual do utilizador.
 *         departamento:
 *           type: string
 *           description: O departamento atual do utilizador.
 *         email:
 *           type: string
 *           description: O email institucional do utilizador.
 *         img:
 *           type: string
 *           description: A imagem de perfil criada para o utilizador através do seu nome.
 *         name:
 *           type: string
 *           description: O nome completo do utilizador.
 */

/**
 * @swagger
 *
 * /profiles:
 *   get:
 *     summary: Obtém uma lista com todos os perfis na base de dados.
 *     tags: [Perfis]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: A lista dos perfis.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Perfil"
 *   post:
 *     summary: Cria um novo perfil.
 *     tags: [Perfis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewPerfil"
 *     responses:
 *       "201":
 *         description: O perfil foi criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Perfil"
 *       "400":
 *         description: Ocorreu um erro durante o pedido relacionado com os perfis.
 */

router
  .route("/")
  .get(async (req, res) => {
    const profiles = await getAll();

    res.status(200);
    res.json(profiles);
    res.end();
  })
  .post(async (req, res) => {
    let UA_IUPI = req.UA_IUPI;

    try {
      await ProfilesSchema.validate(req.body);
    } catch (e) {
      res.status(400);
      res.send(e.errors);
      res.end();

      return;
    }
    const profile = await create({ ...req.body, UA_IUPI });

    res.json(profile);
    res.status(201);
    res.end();
  });

module.exports = router;
