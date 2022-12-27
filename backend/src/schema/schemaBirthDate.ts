import { z } from "zod";

export default z.object({
  birthDate: z.date(),
});