export enum BalancerErrorCode {
  SWAP_ZERO_RETURN_AMOUNT = 'SWAP_ZERO_RETURN_AMOUNT',
  UNWRAP_ZERO_AMOUNT = 'UNWRAP_ZERO_AMOUNT',
  WRAP_ZERO_AMOUNT = 'WRAP_ZERO_AMOUNT',
  QUERY_BATCH_SWAP = 'QUERY_BATCH_SWAP',
  POOL_DOESNT_EXIST = 'POOL_DOESNT_EXIST',
  UNSUPPORTED_POOL_TYPE = 'UNSUPPORTED_POOL_TYPE',
  UNSUPPORTED_PAIR = 'UNSUPPORTED_PAIR',
  NO_POOL_DATA = 'NO_POOL_DATA',
  INPUT_OUT_OF_BOUNDS = 'INPUT_OUT_OF_BOUNDS',
  INPUT_LENGTH_MISMATCH = 'INPUT_LENGTH_MISMATCH',
  INPUT_TOKEN_INVALID = 'INPUT_TOKEN_INVALID',
  INPUT_ZERO_NOT_ALLOWED = 'INPUT_ZERO_NOT_ALLOWED',
  INTERNAL_ERROR_INVALID_ABI = 'INTERNAL_ERROR_INVALID_ABI',
  TOKEN_MISMATCH = 'TOKEN_MISMATCH',
  MISSING_TOKENS = 'MISSING_TOKENS',
  MISSING_AMP = 'MISSING_AMP',
  MISSING_DECIMALS = 'MISSING_DECIMALS',
  MISSING_PRICE_RATE = 'MISSING_PRICE_RATE',
  MISSING_WEIGHT = 'MISSING_WEIGHT',
  MISSING_OWNER = 'MISSING_OWNER',
  MISSING_NAME = 'MISSING_NAME',
  MISSING_SYMBOL = 'MISSING_SYMBOL',
  MISSING_SWAP_FEE = 'MISSING_SWAP_FEE',
  MISSING_FACTORY_ADDRESS = 'MISSING_FACTORY_ADDRESS',
  INVALID_TOKENS_SIZE = 'INVALID_TOKENS_SIZE',
  RELAY_SWAP_AMOUNTS = 'RELAY_SWAP_AMOUNTS',
  NO_VALUE_PARAMETER = 'NO_VALUE_PARAMETER',
  ILLEGAL_PARAMETER = 'ILLEGAL_PARAMETER',
  TIMESTAMP_IN_THE_FUTURE = 'TIMESTAMP_IN_THE_FUTURE',
  JOIN_DELTA_AMOUNTS = 'JOIN_DELTA_AMOUNTS',
  EXIT_DELTA_AMOUNTS = 'EXIT_DELTA_AMOUNTS',
}

export class BalancerError extends Error {
  constructor(public code: BalancerErrorCode) {
    super(BalancerError.getMessage(code));
    this.name = 'BalancerError';
  }

  static getMessage(code: BalancerErrorCode): string {
    switch (code) {
      case BalancerErrorCode.SWAP_ZERO_RETURN_AMOUNT:
        return 'queryBatchSwapWithSor returned 0 amount';
      case BalancerErrorCode.UNWRAP_ZERO_AMOUNT:
        return 'swapUnwrapAaveStaticExactIn unwrapped amount < 0';
      case BalancerErrorCode.WRAP_ZERO_AMOUNT:
        return 'swapUnwrapAaveStaticExactOut wrapped amount < 0';
      case BalancerErrorCode.QUERY_BATCH_SWAP:
        return 'queryBatchSwap on chain call error';
      case BalancerErrorCode.POOL_DOESNT_EXIST:
        return 'balancer pool does not exist';
      case BalancerErrorCode.UNSUPPORTED_POOL_TYPE:
        return 'unsupported pool type';
      case BalancerErrorCode.UNSUPPORTED_PAIR:
        return 'unsupported token pair';
      case BalancerErrorCode.NO_POOL_DATA:
        return 'no pool data';
      case BalancerErrorCode.INPUT_OUT_OF_BOUNDS:
        return 'input out of bounds';
      case BalancerErrorCode.INPUT_LENGTH_MISMATCH:
        return 'input length mismatch';
      case BalancerErrorCode.INPUT_TOKEN_INVALID:
        return 'input token invalid';
      case BalancerErrorCode.TOKEN_MISMATCH:
        return 'token mismatch';
      case BalancerErrorCode.MISSING_DECIMALS:
        return 'missing decimals';
      case BalancerErrorCode.MISSING_TOKENS:
        return 'missing tokens';
      case BalancerErrorCode.MISSING_AMP:
        return 'missing amp';
      case BalancerErrorCode.MISSING_PRICE_RATE:
        return 'missing price rate';
      case BalancerErrorCode.MISSING_WEIGHT:
        return 'missing weight';
      case BalancerErrorCode.INPUT_ZERO_NOT_ALLOWED:
        return 'zero input not allowed';
      case BalancerErrorCode.RELAY_SWAP_AMOUNTS:
        return 'Error when checking swap amounts';
      case BalancerErrorCode.NO_VALUE_PARAMETER:
        return 'Illegal value passed as parameter';
      case BalancerErrorCode.TIMESTAMP_IN_THE_FUTURE:
        return 'Timestamp cannot be in the future';
      case BalancerErrorCode.ILLEGAL_PARAMETER:
        return 'An illegal parameter has been passed';
      case BalancerErrorCode.JOIN_DELTA_AMOUNTS:
        return 'Error when checking join call deltas';
      case BalancerErrorCode.EXIT_DELTA_AMOUNTS:
        return 'Error when checking exit call deltas';
      default:
        return 'Unknown error';
    }
  }
}
