import dotenv from 'dotenv';
import { RestWalletTypes, Spot } from '../../../src/index';

dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const currentTimestamp = Date.now();

client.getConvertTransfer(
    currentTimestamp - 100000,
    currentTimestamp
).then((res: RestWalletTypes.getConvertTransferResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
