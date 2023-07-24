import { ErrorRequestHandler } from 'express';
import config from '../../config';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { IGenericErrorMessage } from '../../interfaces/error';
import handleValidationError from '../errors/handleValidationError';
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { ZodError } from 'zod';
import ApiError from '../errors/ApiError';
import handleCastError from '../errors/handleCastError';
import handleZorError from '../errors/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    type IGenericErrorMessage = {
        path: string | number;
        message: string;
    };

    config.env === 'development'
        ? console.log('globalErrorHandler ~ ', err)
        : console.error('globalErrorHandler ~ ', err);

    let statusCode = 400;
    let message = 'Something went Good 420';
    let errorMessages: IGenericErrorMessage[] = [];

    if (err?.name === 'ValidationError') {
        const simpleFieldError = handleValidationError(err);
        statusCode = simpleFieldError.statusCode;
        message = simpleFieldError.message;
        errorMessages = simpleFieldError.errorMessages;
    } else if (err instanceof ApiError) {
        statusCode = err.status;
        message = err.message;
        errorMessages = err?.message
            ? [
                {
                    path: '',
                    message: err?.message,
                },
            ]
            : [];
    } else if (err instanceof ZodError) {
        const simpleFieldError = handleZorError(err);
        statusCode = simpleFieldError.statusCode;
        message = simpleFieldError.message;
        errorMessages = simpleFieldError.errorMessages;
    } else if (err instanceof Error) {
        message = err?.message;
        errorMessages = err?.message
            ? [
                {
                    path: '',
                    message: err?.message,
                },
            ]
            : [];
    } else if (err?.name === 'CastError') {
        const simpleFieldError = handleCastError(err);
        statusCode = simpleFieldError.statusCode;
        message = simpleFieldError.message;
        errorMessages = simpleFieldError.errorMessages;
    }

    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: config.env !== 'production' ? err?.stack : undefined,
    });

    next();
};

export default globalErrorHandler;