import { RestMarginTypes } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getIsolatedMarginTierDataResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'tier': 1,
        'effectiveMultiple': '10',
        'initialRiskRatio': '1.111',
        'liquidationRiskRatio': '1.05',
        'baseAssetMaxBorrowable': '9',
        'quoteAssetMaxBorrowable': '70000'
    }
];
