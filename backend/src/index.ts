import App from './app';
import userRoute from './routes/user.routes';

const app = new App([new userRoute()]);

app.listen();
