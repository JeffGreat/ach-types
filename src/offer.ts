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

export enum MenuCategoryEnum {
    drink = 0,
    food = 1,
}

export interface IOfferMenu {
    label: string;
    category: MenuCategoryEnum;
    price: number;
}

export interface IOffer extends IBaseModel {
    teaser: string;
    enabled: boolean;
    startTime: string;
    endTime: string;
    days: number[];
    menus: IOfferMenu[];
    pictures: string[];
}
