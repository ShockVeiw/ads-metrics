import { DataSource } from 'typeorm';
import { AdMetric } from './entities/AdMetric';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'ads-metrics.db',
    entities: [AdMetric],
    synchronize: true // should be disabled in prod
});