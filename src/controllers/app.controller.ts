import { Request, Response } from 'express';
import { AppService } from '../services/app.service';
import { AD_METRIC_STATE } from '../utils/enums';

export class AppController {
    private readonly appService = new AppService();

    async renderTable(req: Request, res: Response): Promise<void> {
        try {
            const adMetrics = await this.appService.getAdMetrics();

            res.render('index', { adMetrics });
        } catch (e) {
            console.log('AppController.renderTable error:', e);
            res.sendStatus(500);
        }
    }

    async likeAdMetric(req: Request, res: Response): Promise<void> {
        try {
            const adMetricId = +req.params.id;
            const {
                date,
                keyword,
                impressions,
                orders
            } = req.query;
            await this.appService.changeAdMetricState(adMetricId, AD_METRIC_STATE.RATED_WELL);

            res.render('components/ad-metric-row', { adMetric: { id: adMetricId, date, keyword, impressions, orders, state: AD_METRIC_STATE.RATED_WELL } });
        } catch (e) {
            console.log('AppController.likeAdMetric error:', e);
            res.sendStatus(500);
        }
    }

    async dislikeAdMetric(req: Request, res: Response): Promise<void> {
        try {
            const adMetricId = +req.params.id;
            const {
                date,
                keyword,
                impressions,
                orders
            } = req.query;
            await this.appService.changeAdMetricState(adMetricId, AD_METRIC_STATE.RATED_BADLY);

            res.render('components/ad-metric-row', { adMetric: { id: adMetricId, date, keyword, impressions, orders, state: AD_METRIC_STATE.RATED_BADLY } });
        } catch (e) {
            console.log('AppController.dislikeAdMetric error:', e);
            res.sendStatus(500);
        }
    }
}