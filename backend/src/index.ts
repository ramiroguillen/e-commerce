import App from "./app";
import userRoute from "./routes/user.routes";
import customerRoute from "./routes/customer.routes";

const app = new App([new userRoute(), new customerRoute()]);

app.listen();
