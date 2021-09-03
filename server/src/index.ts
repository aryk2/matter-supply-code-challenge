import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes'
import cors from 'cors';
require('dotenv').config()

const app = express();

const router = express.Router();

export const clientHeaderOrigins =
  process.env.CLIENT_URL || 'http://localhost:3000';
export const whitelist:
  | string
  | (string | string[])[] = clientHeaderOrigins.split(',');

export const corsOptions = (
  req: Request,
  callback: (...args: any) => any
): void => {
  const originIsWhitelisted = process.env.LOCAL_DEV === 'true' || whitelist.indexOf(req.headers.origin) !== -1;
  callback(
    originIsWhitelisted
      ? null
      : `The CORS policy for this site does not allow access from the specified Origin: ${req.headers.origin}`,
    originIsWhitelisted
  );
};

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors(corsOptions))
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Pass to next layer of middleware
  next();
});

// Add API Routes
app.use('/api', router);

routes(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server: listening on port ${port}`);
});
