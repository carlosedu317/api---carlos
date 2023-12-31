import express from 'express';
import router from './routes/router.mjs';

const app = express();
app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('Server running on port 3000 🚀'));

export default app;
