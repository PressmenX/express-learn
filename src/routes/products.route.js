const { Router } = require("express");
const authCheck = require("../middlewares/auth.middleware");
const { asyncHandler, validate } = require("../middlewares");
const { productSchema } = require("../schemas");
const makeProductController = require("../controllers/product.controller");
const makeProductService = require("../services/product.service");
const makeProductRepository = require("../repositories/product.repository");

const router = Router();
const repo = makeProductRepository()
const service = makeProductService(repo);
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
