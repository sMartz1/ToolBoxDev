const winston = require('winston');
const { format } = require('logform');
const { combine, timestamp, printf, colorize } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const colorizer = colorize({
  colors: {
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    colorizer,
    logFormat
  ),
  transports: [
    new winston.transports.File({
      filename: './logs/app.log',
      maxsize: 10485760, // 10MB
      maxFiles: 10,
      tailable: true,
      zippedArchive: true,
      format: combine(
        timestamp(),
        logFormat
      )
    }),
    new winston.transports.Console({
      format: combine(
        timestamp(),
        colorizer,
        logFormat
      )
    })
  ]
});

module.exports = logger;