export interface InformationCardData {
    coin: string;
    price: {
        current: number;
        currentPrecision: number;
        change: number;
        tvl: number;
    };
    popularPairs: string[];
}

export interface Coin {
    name: string;
    icon: string;
    gradientColor: string;
}