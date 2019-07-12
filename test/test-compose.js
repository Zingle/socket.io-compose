const expect = require("expect.js");
const compose = require("..");

describe("compose(...function)", () => {
    let socket;

    beforeEach(() => {
        socket = {};
    });

    it("should compose middlewares", done => {
        let middleware = compose(goodA, goodB);

        middleware(socket, err => {
            expect(err).to.not.be.ok();
            expect(socket.a).to.be(true);
            expect(socket.b).to.be(true);
            done();
        });
    });

    it("should pass error and stop processing", done => {
        let middleware = compose(goodA, bad, goodB);

        middleware(socket, err => {
            expect(err).to.be.an(Error);
            expect(socket.a).to.be(true);
            expect(socket.b).to.be(undefined);
            done();
        });
    });
});

function goodA(socket, done) {
    socket.a = true;
    done();
}

function goodB(socket, done) {
    socket.b = true;
    done();
}

function bad(socket, done) {
    done(new Error("failed"));
}
