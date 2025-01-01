// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportRequestTimeLogger from '../../../app/middleware/requestTimeLogger';

declare module 'egg' {
  interface IMiddleware {
    requestTimeLogger: typeof ExportRequestTimeLogger;
  }
}
