import { CronJob } from "cron";
import CryptoService from "../services/CryptoService";

const cryptoService = new CryptoService();
const saveRateByAllMarkets = () =>
    new CronJob(
        "0 */5 * * * *",
        async () => {
            try {
                console.log("cron started");

                await cryptoService.saveRateByAllMarkets();
                console.log("Rates by all markets saved successfully");
            } catch (error) {
                console.log(error);
            }
        },
        null,
        true
    );

export { saveRateByAllMarkets };
