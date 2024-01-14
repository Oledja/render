declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_PORT: string;
            CERT_PATH: string;
            COINBASE_URL: string;
            COINSTATS_URL: string;
            COINSTATS_API_KEY: string;
            COIN_MARKET_CAP_API_KEY: string;
            COIN_MARKET_CAP_URL: string;
            COIN_PAPRIKA_URL: string;
            DB_DATABASE: string;
            DB_HOST: string;
            DB_PASSWORD: string;
            DB_PORT: number;
            DB_USERNAME: string;
            KEY_PATH: string;
            KUCOIN_URL: string;
        }
    }
}

export {};
