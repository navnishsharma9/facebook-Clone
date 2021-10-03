import { app } from "./src/app.js";

const { APP_PORT } = process.env;
const port = process.env.PORT || APP_PORT;

app.listen(port, () => {
  console.log(`server is running at port no: ${port}`);
});
