const express = require("express");
const router = express.Router();
const { validateEmail } = require("../middlewares/local");
const {
  vistaUno,
  addLocal,
  showLocals,
  editLocal,
  deleteLocal,
} = require("../controllers/tasks.controller.js");

/* GET home page. */
router.get("/", vistaUno);

router.get("/api/v1/local", showLocals);

router.post("/api/v1/local/add", validateEmail, addLocal);

router.put("/api/v1/local/:id/edit", editLocal);

router.delete("/api/v1/local/:id/delete", deleteLocal);

module.exports = router;
