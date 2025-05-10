import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './routes/user.routes';
import postRouter from './routes/post.routes';


const createApp = (): Express => {

    // bootstrap our express application
    const app: Express = express();

    // setup required middlewares
    app.use(express.json());
    app.use(helmet());
    app.use(cors());

    // add development specific middlewares
    const isDev: boolean = process.env.NODE_ENV === 'development';

    app.use(morgan(
        isDev ? ':method :url :status :res[status] :response-time :date[iso]'
        : 'combined'
    ));

    // setup routes
    app.use('/api/users', userRouter);
    app.use('/api/posts', postRouter);

    return app;
}

export default createApp;