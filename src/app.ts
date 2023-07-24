import cors from 'cors';
import express, { Application } from 'express';
import { StatusCodes } from 'http-status-codes';
import morgan from 'morgan';
import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
const app: Application = express();

app.use(cors());
app.use(morgan('dev'));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.get('/', async (req, res) => {
    res.send(`Welcome to Digital-Cow-Hut Application`);
});


app.use(globalErrorHandler);

//handle Not Found ROute
app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Route Not Found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
});

export default app;