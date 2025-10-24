const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500; // Default to 500 if no status is set
  let message = err.message || "Internal Server Error";

  // Customize message based on status code
  if (statusCode === 404) {
    message = "Route Not Found";
  } else if (statusCode === 400) {
    message = "Bad Request";
  } else if (statusCode === 401) {
    message = "Unauthorized";
  } else if (statusCode === 403) {
    message = "Forbidden";
  } else if (statusCode === 500) {
    message = "Internal Server Error";
  }
  const stack = process.env.NODE_ENV === "production" ? null : err.stack;

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
    err: err.message,
    err_stack: stack,
  });
};

module.exports = errorHandler;
