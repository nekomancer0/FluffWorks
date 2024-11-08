import express from 'express';
import compression from 'compression';
import { handler } from './build/handler.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(compression);
app.use(handler);

app.set('port', process.env.PORT);

app.listen(app.get('port'), '::', async () => {
	console.log(`Listening on port: ${app.get('port')}`);
});
