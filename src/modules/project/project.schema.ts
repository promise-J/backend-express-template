
export const ProjectSchemaAPI = {
    type: 'object',
    properties: {
      userId: { type: 'string' },
      title: { type: 'string' },
      participantView: { type: 'string', minLength: 8 },
      pinned: { type: 'boolean' },
      pinnedAt: { type: 'date' },
    },
    required: [
      'title',
      'userId',
      'participantView',
    ],
  };
