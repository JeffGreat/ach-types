import { IBaseModel } from './base-model';
export interface IOffer extends IBaseModel {
    teaser: string;
    enabled: boolean;
    startTime: string;
    endTime: string;
    days: number[];
    pictures: string[];
}
