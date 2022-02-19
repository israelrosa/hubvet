import winston from 'winston';

const logFormat = winston.format.printf(
  ({ level, message, timestamp }) => `${level} ${timestamp}] ${message}`,
);

const log = winston.createLogger({
  level: process.env.ENV === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.splat(),
    logFormat,
  ),
  transports: [new winston.transports.Console()],
});

export default log;
