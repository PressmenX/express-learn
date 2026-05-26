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

/**
 * @openapi
 * /products :
 *  get :
 *    summary : Ambil semua Produk
 *    responses :
 *      200 :
 *        description: Berhasil mengembalikan semua Produk
 */

router.get("/", asyncHandler(controller.getAll));

/**
 * @openapi
 * /products/{id} :
 *  get :
 *    summary : Ambil produk berdasarkan id
 *    responses :
 *      200 :
 *        description: Berhasil mengembalikan produk yang sesuai id
 */
router.get("/:id", authCheck, asyncHandler(controller.getById));

/**
 * @openapi
 * /products :
 *  post :
 *    summary : Tambah produk baru
 *    responses :
 *      201 :
 *        description: Produk berhasil ditambahkan
 */
router.post(
  "/",
  authCheck,
  validate(productSchema),
  asyncHandler(controller.create),
);

/**
 * @openapi
 * /products/{id} :
 *  put :
 *    summary : update produk berdasarkan id
 *    responses :
 *      200 :
 *        description: Berhasil update produk yang sesuai id
 */
router.put(
  "/:id",
  authCheck,
  validate(productSchema),
  asyncHandler(controller.update),
);

/**
 * @openapi
 * /products/{id} :
 *  delete :
 *    summary : delete produk berdasarkan id
 *    responses :
 *      200 :
 *        description: Berhasil menghapus produk yang sesuai id
 */
router.delete("/:id", authCheck, asyncHandler(controller.remove));

module.exports = router;
