// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportNews from '../../../app/controller/news';

declare module 'egg' {
  interface IController {
    news: ExportNews;
  }
}
