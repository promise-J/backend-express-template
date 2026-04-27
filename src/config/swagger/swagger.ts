import { projectPaths } from "../../modules/project/project.openapi";
import { allSwaggerSchema } from "./swaggerSchemaHelper";


export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Your Backend',
    version: '1.0.0',
    description: 'API Documentation',
  },
  servers: [{ url: 'https://your-backend-url.com/api' }],
  paths: {
    ...projectPaths,
    // add other modules here
  },
  components: {
    schemas: allSwaggerSchema,
  },
};