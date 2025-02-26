/**
 * This component logs the error and the information
 */
const logger = {
  log: (message) => {
    console.log(`[INFO]: ${message}`);
  },
  error: (message) => {
    console.error(`[ERROR]: ${message}`);
  },
};

export default logger;
