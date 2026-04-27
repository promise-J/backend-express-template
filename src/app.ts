import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes';
import { errorMiddleware } from './middlewares/error.middleware';
import { rateLimiter } from './middlewares/rateLimiter.middleware';
import { requestLogger } from './middlewares/requestLogger.middleware';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './config/swagger/swagger';




const app = express();

app.use(helmet());
app.use(cors());

app.use(requestLogger);
app.use(express.json());

app.use(morgan('dev'));
app.use(rateLimiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', routes);

app.use(errorMiddleware);

export default app;
