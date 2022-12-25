import { z } from "zod";

const ERRORS = {
  EMPTY_EMAIL: '"email" is required!'
};

export default z.object({
  email: z.string({required_error: ERRORS.EMPTY_EMAIL}).email({ message: "Invalid email address" }),
});