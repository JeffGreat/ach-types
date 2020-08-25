import { IBaseModel } from './base-model';

export interface IOffer extends IBaseModel {
    teaser: string;
    enabled: boolean;
    startTime: number;
    endTime: number;
    days: number[];
    pictures: string[];
}
