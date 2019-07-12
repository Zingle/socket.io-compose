```js
const compose = require("socket.io-compose");
const awesomeMiddleware = require("awesome-middleware");
const amazingMiddleware = require("amazing-middleware");
const awesomeAmazingMiddleware = compose(awesomeMiddleware, amazingMiddleware);

io.use(awesomeAmazingMiddleware);
```
