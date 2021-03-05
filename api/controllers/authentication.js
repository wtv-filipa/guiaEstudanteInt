const express = require("express");
const { getIcon } = require("../models/authentication");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: UserIcon
 *   description: Operações disponíveis para obtenção da imagem de perfil do utilizador
 * components:
 *   schemas:
 *     NewIcon:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: O nome do utilizador.
 */
/**
 * @swagger
 *
 * /be/icon:
 *   get:
 *     summary: Obtém uma imagem de perfil basead no nome do utilizador.
 *     tags: [UserIcon]
 *     produces:
 *       - application/json
 *     responses:
 *       "200":
 *         description: Imagem com as iniciais do utilizador.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/NewIcon"
 */

router.route("/icon").get(async (req, res) => {
  const icon = await getIcon(req);
  if (!icon) {
    res.status(400);
    res.send("Error getting icon");
    res.end();
    return;
  }
  res.status(200);
  res.send(icon);
  res.end();
});

module.exports = router;
