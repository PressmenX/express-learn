const { z } = require("zod");

const schema = z.object({
  id : z.number(),
  name : z.string().min(3)
})


const result = schema.safeParse({id : 1, name : "Iuk"})


if (!result.success) {
  console.log(result.error.flatten().fieldErrors);
} else {
  console.log(result.data);
}