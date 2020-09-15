import { IBaseModel } from './base-model';

export enum OfferDrinksEnum {
    'Beer' = 0,
    'Wine' = 1,
    'Soft' = 2,
    'Coktails' = 3,
}
export enum OfferPlusEnum {
    'Terrasse' = 0,
    'Dancing' = 1,
    'Babyfoot' = 2,
}

export interface IOffer extends IBaseModel {
    teaser: string;
    enabled: boolean;
    startTime: string;
    endTime: string;
    days: number[];
    menu: { label: string; price: number }[];
    pictures: string[];
}
