const { z } = require("zod");

const productSchema = z.object({
  id : z.number(),
  name : z.string().min(3)
})


module.exports = productSchema