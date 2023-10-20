import { SelfTradePreventionMode, WsAccountTypes } from '../../../../src/index';

export const mockPreventedMatches: WsAccountTypes.preventedMatchesResponse[] = [
    {
        'symbol': 'BTCUSDT',
        'preventedMatchId': 1,
        'takerOrderId': 5,
        'makerOrderId': 3,
        'tradeGroupId': 1,
        'selfTradePreventionMode': SelfTradePreventionMode.EXPIRE_MAKER,
        'price': '1.100000',
        'makerPreventedQuantity': '1.300000',
        'transactTime': 1669101687094
    }
];