import { IBaseModel } from './base-model';
export interface IOffer extends IBaseModel {
    teaser: string;
    startTime: string;
    endTime: string;
    days: number[];
    pictures: string[];
}
