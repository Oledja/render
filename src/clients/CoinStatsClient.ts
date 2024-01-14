import axios from "axios";
import getErrorMessage from "../utils/getErrorMessage";
import CoinStatsRawResponse from "../interfices/CoinStatsRawResponse";
import * as dotenv from "dotenv";

dotenv.config();

class CoinStatsClient {
    private API_URL = process.env.COINSTATS_URL;
    private API_KEY = process.env.COINSTATS_API_KEY;

    getCoinStatsRates = async (): Promise<CoinStatsRawResponse> => {
        try {
            // const { data: { result } } = await axios.get<CoinStatsRawResponse>(
            //     this.API_URL,
            //     {
            //         headers: {
            //             accept: "application/json",
            //             "X-API-KEY": this.API_KEY,
            //         },
            //     }
            // );
            // console.log("Response", data);
            const { data: response } = await axios.get<CoinStatsRawResponse>(
                this.API_URL,
                {
                    headers: {
                        accept: "application/json",
                        "X-API-KEY": this.API_KEY,
                    },
                }
            );
            return response;
        } catch (error) {
            throw new Error(getErrorMessage(error));
        }
    };
}

export default CoinStatsClient;
