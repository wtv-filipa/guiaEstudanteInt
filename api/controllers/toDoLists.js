const express = require("express");
const router = express.Router();
const { create } = require("../models/toDoLists");

/**
 * @swagger
 * tags:
 *   name: ToDos
 *   description: Todas as operações CRUD relacionadas com a To Do List.
 * components:
 *   schemas:
 *     NewToDo:
 *       type: object
 *       required:
 *         - UA_IUPI
 *         - Aveiro
 *         - Preparar
 *         - chegada
 *       properties:
 *         UA_IUPI:
 *           type: string
 *           description: O id único associado ao utilizador.
 *         Aveiro:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List de Aveiro.
 *         Preparar:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List de como preparar a viagem.
 *         chegada:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List do que fazer quando se chega a Aveiro.
 *     ToDo:
 *       type: object
 *       required:
 *         - UA_IUPI
 *       properties:
 *         id:
 *           type: string
 *           description: O id automático criado para o perfil do utilizador.
 *         UA_IUPI:
 *           type: string
 *           description: O id único associado ao utilizador.
 *         Aveiro:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List de Aveiro.
 *         Preparar:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List de como preparar a viagem.
 *         chegada:
 *           type: array
 *           items:
 *              type: boolean
 *           description: Array que contém apenas valores boleanos para representarem a To Do List do que fazer quando se chega a Aveiro.
 */

/**
 * @swagger
 *
 * /todolist:
 *   post:
 *     summary: Creates a todo
 *     tags: [ToDos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/NewToDo"
 *     responses:
 *       "201":
 *         description: A To Do List foi criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/NewToDo"
 *       "400":
 *         description: O pedido enviado falhou.
 */

router.route("/").post(async (req, res) => {
  let UA_IUPI = req.UA_IUPI;
  let Aveiro = [false, false, false, false, false, false, false, false];
  let chegada = [false, false, false, false, false, false, false, false];
  let Preparar = [false, false, false, false, false, false, false, false];

  const todo = await create({ Aveiro, chegada, Preparar, UA_IUPI });

  res.json(todo);
  res.status(201);
  res.end();
});

module.exports = router;
