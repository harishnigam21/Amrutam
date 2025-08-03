const express = require("express");
const router = express.Router();
const Ing = require("../controller/ingredient");
router
  .route("/ingredients")
  .get(Ing.getIng)
  .post(Ing.postIng)
  .put(Ing.updateIng)
  .delete(Ing.deleteIng);
module.exports = router;
