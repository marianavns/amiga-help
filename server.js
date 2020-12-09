const app = require("./src/app.js")
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
  })
  