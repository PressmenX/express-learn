const { Router } = require("express");
const authCheck = require("../middlewares/auth.middleware");
const { asyncHandler, validate } = require("../middlewares");
const { productSchema } = require("../schemas");
const makeProductController = require("../controllers/product.controller");
const makeProductRepository = require("../repositories/product.repository");
const makeCreate = require("../use-cases/product/CreateProduct");
const makeDelete = require("../use-cases/product/DeleteProduct");
const makeUpdate = require("../use-cases/product/UpdateProduct");
const makeGetAll = require("../use-cases/product/GetAllProduct");
const makeGetById = require("../use-cases/product/GetProductById");

const router = Router();
const repo = makeProductRepository();
const ProductUseCases = {
  create: makeCreate(repo),
  delete: makeDelete(repo),
  update: makeUpdate(repo),
  getAll: makeGetAll(repo),
  getById: makeGetById(repo),
};
const controller = makeProductController(ProductUseCases);

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
