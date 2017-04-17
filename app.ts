import * as express from 'express';
import {router} from './controller';

export const app = express();

app.use('/retrofy', router);
