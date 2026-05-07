
export const paymentPaths = {
    '/users/create-register': {
      post: {
        tags: ['Projects'],
        summary: 'Create a new project',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateProject' },
            },
          },
        },
        responses: {
          201: {
            description: 'Project created successfully',
            content: {
              'application/json': {
                schema: { 
                  type: 'object',
                  properties: {
                    message: {type: 'string', example: 'Project created successfully'},
                    data: {$ref: '#/components/schemas/Project'},
                  }
                },
              },
            },
          },
          400: {
              description: "Error creating the project"
          }
        },
      },
    },
}