import { z } from "zod";

const ERRORS = {
  NOT_STRING_NAME: '"name" must be a string!',
  EMPTY_NAME: '"name" is required!',
  EMPTY_EMAIL: '"email" is required!'
};

export default z.object({
  patientName: z.string({
    required_error: ERRORS.EMPTY_NAME,
    invalid_type_error: ERRORS.NOT_STRING_NAME,
  }),
});