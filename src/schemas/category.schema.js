const { default: z } = require("zod");

const categorySchema = z.object({
  id: z.number(),
  name: z.string().min(3),
  description: z.string().min(5),
});

module.exports = categorySchema
