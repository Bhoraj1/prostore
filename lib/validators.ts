import {z} from "zod"
import { formtNumberWithDecimal } from "./utils"

const currency = z
.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(formtNumberWithDecimal(Number(value))),"prive must have exactly two decimal places")

//Schema for inserting products
export const insertProductsSchema = z.object({
  name:z.string().min(3,'Name must be at least three characters'),
  slug:z.string().min(3,'Slug must be at least three characters'),
  category:z.string().min(3,'Category must be at least three characters'),
  brand:z.string().min(3,'Brand must be at least three characters'),
  description:z.string().min(3,'Description must be at least three characters'),
  stock:z.coerce.number(),
  images:z.array(z.string().min(1, 'Product must have at least one image')),
  isFeatured:z.boolean(),
  banner:z.string().nullable(),
  price: currency
});