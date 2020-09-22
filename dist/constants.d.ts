export declare const imageFormats: ({
    suffix: string;
    width?: undefined;
    height?: undefined;
    option?: undefined;
} | {
    suffix: string;
    width: number;
    height: number;
    option: {
        fit: string;
    };
} | {
    suffix: string;
    width: number;
    option: {
        fit: string;
    };
    height?: undefined;
})[];
