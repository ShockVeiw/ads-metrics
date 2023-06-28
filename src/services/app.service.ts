import { AppDataSource } from '../appDataSource';
import { AdMetric } from '../entities/AdMetric';
import { AD_METRIC_STATE } from '../utils/enums';

export class AppService {
    private readonly adMetricRepository = AppDataSource.getRepository(AdMetric);

    getAdMetrics(): Promise<AdMetric[]> {
        return this.adMetricRepository
            .createQueryBuilder('adMetric')
            .groupBy('adMetric.keyword')
            .getMany();
    }

    async changeAdMetricState(id: number, state: AD_METRIC_STATE.RATED_WELL | AD_METRIC_STATE.RATED_BADLY) {
        await this.adMetricRepository
            .createQueryBuilder()
            .update(AdMetric)
            .set({ state })
            .where('id = :id', { id })
            .execute();
    }
}