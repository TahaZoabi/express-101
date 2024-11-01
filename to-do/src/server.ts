import app from "./index";
import env from "../src/lib/validateEnv";

const port = env.PORT;
app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
