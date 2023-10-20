import { RestMarginTypes, Side, TimeInForce } from '../../../../src/index';

export const mockResponse: RestMarginTypes.getForceLiquidationRecordResponse = {
    'rows': [ {
        'avgPrice': '0.00388359',
        'executedQty': '31.39000000',
        'orderId': 180015097,
        'price': '0.00388110',
        'qty': '31.39000000',
        'side': Side.SELL,
        'symbol': 'BNBBTC',
        'timeInForce': TimeInForce.GTC,
        'isIsolated': true,
        'updatedTime': 1558941374745
    }],
    'total': 1
};
