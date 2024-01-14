import express from "express";
import { cryptoRouter } from "./routes/CryptoRouter";
import { saveRateByAllMarkets } from "./jobs/saveRatesByAllMarkets";
import * as dotenv from "dotenv";
import morgan from "morgan";
import https from "https";
import { readFileSync } from "fs";
import cors from "cors";
import CryptoService from "./services/CryptoService";

dotenv.config();

const port = process.env.APP_PORT;
// const key = process.env.KEY_PATH;
// const cert = process.env.CERT_PATH;
// const certificate = readFileSync(cert);
// const privateKey = readFileSync(key);
// const credentials = { key: privateKey, cert: certificate };
const app = express();
// const httpsServer = https.createServer(credentials, app);
app.all("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use(
    cors({
        origin: "188.163.45.86",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204,
    })
);
app.set("trust proxy", true);

app.use(morgan("dev"));
app.use(cryptoRouter);

app.listen(port, async () => {
    console.log(`Server started on port ${port}`);
    const cryptoService = new CryptoService();

    try {
        await cryptoService.saveRateByAllMarkets();
        saveRateByAllMarkets();
    } catch (error) {
        console.log(error);
    }
});

// httpsServer.listen(port, () => {
//   try {
//     console.log(`Server started on port ${port}`);
//     saveRateByAllMarkets();
//   } catch (err) {
//     console.log(err);
//   }
// });
