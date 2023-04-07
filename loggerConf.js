const log4js = require('log4js');

log4js.configure({
    appenders: {
        console: { type: 'console'},
        consoleLogger: { type: 'logLevelFilter', appender: 'console', level: 'info'},
        
        warnFile: { type: 'file', filename: 'warn.log'},
        warnFileLogger: { type: 'logLevelFilter', appender: 'warnFile', level: 'warn'},

        errorFile: { type: 'file', filename: 'error.log'},
        errorFileLogger: { type: 'logLevelFilter', appender: 'errorFile', level: 'error'},

    },
    categories: {
        default: { appenders: ['consoleLogger'], level:'all' },
        file: { appenders: ['warnFileLogger', 'errorFileLogger'], level:'all' },
    }
});

const logger = log4js.getLogger();

logger.info('Info message');
logger.warn('Warning message');
logger.error('Error message');

module.exports = { logger};
