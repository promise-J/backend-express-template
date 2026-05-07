
export const UserSchemaAPI = {
    type: 'object',
    properties: {
      email: { type: 'email', minLength: 8 },
      amount: { type: 'number', minLength: 3 },
      reference: { type: 'string', minLength: 8 },
      idempotencyKey: { type: 'string' },
      status: { type: 'string' },
    },
    required: [
      'email',
      'amount',
      'reference',
    ],
  };
