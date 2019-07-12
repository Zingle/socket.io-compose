/**
 * Compose Socket.IO middleware functions.
 * @param {...function} middleware
 * @returns {function}
 */
function compose(...middleware) {
    return function(socket, done) {
        next();

        function next() {
            if (middleware.length) {
                middleware.shift()(socket, err => {
                    if (err) done(err);
                    else next();
                });
            } else {
                done();
            }
        }
    };
}

module.exports = compose;
