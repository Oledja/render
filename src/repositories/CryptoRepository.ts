import { pool } from "../db/connection";
import { Currency } from "../interfices/currency";
import Crypto from "../interfices/Crypto";
import {
    INSERT,
    SELECT_BY_NAME_AND_TIME,
    SELECT_BY_NAME_AND_TIME_AND_MARKET,
} from "../utils/Queries";

class CryptoRepository {
    private connection = pool;

    getBySymbolAndTime = async (
        symbol: string,
        time: Date
    ): Promise<Crypto[]> => {
        await this.connection.connect();
        const result = await this.connection.query<Crypto>(
            SELECT_BY_NAME_AND_TIME,
            [symbol, time]
        );
        return result.rows;
    };

    getBySymbolAndTimeAndMarket = async (
        symbol: string,
        time: Date,
        market: string
    ): Promise<Crypto[]> => {
        await this.connection.connect();
        const result = await this.connection.query<Crypto>(
            SELECT_BY_NAME_AND_TIME_AND_MARKET,
            [symbol, time, market]
        );
        return result.rows;
    };

    save = async (crypto: Currency[]) => {
        try {
            await this.connection.connect();
            await this.connection.query(INSERT, [crypto]);
        } catch (error) {
            console.log(error);
        }
    };
}

export default CryptoRepository;
