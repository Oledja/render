type CoinStats = {
    price: number;
    symbol: string;
};

interface CoinsStatsRawResponse {
    result: [CoinStats];
}

export default CoinsStatsRawResponse;
