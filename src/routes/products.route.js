const { Router } = require("express");
const authCheck = require("../middlewares/auth.middleware");
const { asyncHandler, validate } = require("../middlewares");
const { productSchema } = require("../schemas");
const controller = require("../controllers/product.controller");
const router = Router();

router.get("/", asyncHandler(controller.getAll));

router.get("/:id", authCheck, asyncHandler(controller.getById));

router.post(
  "/",
  authCheck,
  validate(productSchema),
  asyncHandler(controller.create),
);

router.put(
  "/:id",
  authCheck,
  validate(productSchema),
  asyncHandler(controller.update),
);

router.delete("/:id", authCheck, asyncHandler(controller.remove));

module.exports = router;
