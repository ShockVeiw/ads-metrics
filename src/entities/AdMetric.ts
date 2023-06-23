import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AD_METRIC_STATE } from '../utils/enums';

@Entity('ad_metrics')
export class AdMetric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'datetime' })
    date: string;

    @Column()
    keyword: string;

    @Column()
    impressions: number;

    @Column()
    orders: number;

    @Column({
        type: 'simple-enum',
        enum: AD_METRIC_STATE,
        default: AD_METRIC_STATE.UNRATED
    })
    state: AD_METRIC_STATE;
}