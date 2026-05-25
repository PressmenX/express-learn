const { Router } = require("express");
const authCheck = require("../middlewares/auth.middleware");
const { asyncHandler, validate } = require("../middlewares");
const { productSchema } = require("../schemas");
const makeProductController = require("../controllers/product.controller");
const makeProductService = require("../services/product.service");

const router = Router();
const service = makeProductService()
const controller = makeProductController(service);

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
