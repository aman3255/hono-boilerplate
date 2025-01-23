import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono();

// ==== Hono provide some Routing concept =====================================================
app.route("/api/v1/user",userRouter); // All user related routes will be handled by userRouter
app.route("/api/v1/blog",blogRouter); // All blog related routes will be handled by blogRouter
// ==== For the above routes we defined different file for routers ============================

export default app
