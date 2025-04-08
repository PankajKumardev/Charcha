import express, { Application, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
const app: Application = express();
const PORT = process.env.PORT || 7000;
import Routes from './routes/index.js';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { socketSetup } from './socket.js';

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

socketSetup(io);
export { io };
// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.use('/api', Routes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

