const childProcess = require('child_process');

class CMDUtils {

    // ----- Constructor
    constructor() {
    }

    // ----- Public Methods
    /**
     * Execute a shell command.
     * @param cmd_to_execute : String
     * @return {Promise} - The result of the command.
     */
    async sh(cmd_to_execute) {
        return new Promise(function (resolve, reject) {
            childProcess.exec(cmd_to_execute, (err, stdout, stderr) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({stdout, stderr});
                }
            });
        });
    }
}


module.exports = new CMDUtils()
