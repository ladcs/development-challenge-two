import { z } from 'zod';

const ERRORS = {
  EMPTY_NUMBER: '"number" is required',
  EMPTY_STREET:'"street" is required',
  INVALIDED_NUMBER: '"number" need to be number',
  INVALIDED_STREET: '"street" need to be string'
};

export default z.object({
  number: z.number({
    invalid_type_error: ERRORS.INVALIDED_NUMBER,
    required_error: ERRORS.EMPTY_NUMBER
  }),
  street: z.string({
  invalid_type_error: ERRORS.INVALIDED_STREET,
  required_error: ERRORS.EMPTY_STREET
})
})