// The script should be used as a daily cron job (separate from web-app proccess)

import fs from 'fs';
import { AdMetric } from './entities/AdMetric';
import { AppDataSource } from './appDataSource';

interface RawAdMetric {
    date: string;
    keyword: string;
    impressions: number;
    orders: number;
}

export const fetchAndSaveAdMetrics = () => {
    // AWS API call imitation
    const adMetrics: RawAdMetric[] = JSON.parse(fs.readFileSync('ads-metrics.json', 'utf8'));
    
    AppDataSource
        .initialize()
        .then(() => {
            const adMetricRepository = AppDataSource.getRepository(AdMetric);

            for (let adMetric of adMetrics) {
                adMetricRepository
                    .save(adMetric)
                    .catch(console.log)
            }
        })
        .catch((e) => console.log('Initializing data source error:', e));
}

fetchAndSaveAdMetrics();