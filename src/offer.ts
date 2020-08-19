import { IBaseModel } from './base-model';

export interface IOffer extends IBaseModel {
    teaser: string;
    startTime: number;
    endTime: number;
    days: number[];
    pictures: string[];
}
