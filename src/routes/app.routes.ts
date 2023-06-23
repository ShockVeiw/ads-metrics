import { Router } from 'express';
import { AppController } from '../controllers/app.controller';
import bindObjectMethods from '../utils/bindObjectMethods';

export const router = Router();
const appController = bindObjectMethods<AppController>(new AppController());

router
    .get('/', appController.renderTable)
    .post('/ad-metrics/like/:id', appController.likeAdMetric)
    .post('/ad-metrics/dislike/:id', appController.dislikeAdMetric)