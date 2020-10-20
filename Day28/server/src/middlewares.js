const notFound = (req, res, next) => {
    res.status(404);

    const error = Error(`Not Found - ${req.originalUrl}`);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '[redacted]' : error.stack
    });
};

module.exports = {
    notFound,
    errorHandler
};