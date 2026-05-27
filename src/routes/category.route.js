const { Router } = require("express");
const makeCategoryRepository = require("../repositories/category.repository");
const makeUseCase = require("../use-cases/category");
const makeCategoryController = require("../controllers/category.controller");
const { asyncHandler, validate } = require("../middlewares");
const { categorySchema } = require("../schemas");

const router = Router();
const repo = makeCategoryRepository();
const useCases = makeUseCase(repo);
const controller = makeCategoryController(useCases);

router.get("/", asyncHandler(controller.getAll));
router.post("/", validate(categorySchema), asyncHandler(controller.create));

router.get("/:id", asyncHandler(controller.getById));
router.put("/:id", validate(categorySchema), asyncHandler(controller.update));
router.delete("/:id", asyncHandler(controller.delete));

module.exports = router;
