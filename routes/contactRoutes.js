const express = require("express");
const router = express.Router();

const controller = require("../controllers/contactController");
const validateToken = require("../middleware/authtokenHandler");

router.use(validateToken);
router.route("/").get(controller.getContacts).post(controller.createContact);
router
  .route("/:id")
  .get(controller.getOneContact)
  .put(controller.updateContact)
  .delete(controller.deleteContact);

module.exports = router;
