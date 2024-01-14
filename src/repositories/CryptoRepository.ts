import { client } from "../db/connection";
import { Currency } from "../interfices/currency";
import Crypto from "../interfices/Crypto";
import {
    INSERT,
    SELECT_BY_NAME_AND_TIME,
    SELECT_BY_NAME_AND_TIME_AND_MARKET,
} from "../utils/Queries";

class CryptoRepository {
    getBySymbolAndTime = async (
        symbol: string,
        time: Date
    ): Promise<Crypto[]> => {
        const result = await client.query<Crypto>(SELECT_BY_NAME_AND_TIME, [
            symbol,
            time,
        ]);
        return result.rows;
    };

    getBySymbolAndTimeAndMarket = async (
        symbol: string,
        time: Date,
        market: string
    ): Promise<Crypto[]> => {
        const result = await client.query<Crypto>(
            SELECT_BY_NAME_AND_TIME_AND_MARKET,
            [symbol, time, market]
        );
        return result.rows;
    };

    save = async (crypto: Currency[]) => {
        try {
            for (let i = 0; i < crypto.length; i++) {
                await client.query(INSERT, [...crypto[i]]);
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export default CryptoRepository;
