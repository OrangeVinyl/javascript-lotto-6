const ERROR = Object.freeze({
  PREFIX: '[ERROR] ',

  PAYMENT_NOT_INPUT: '결제 금액을 입력하지 않았습니다.',
  PAYMENT_NOT_THOUSAND: '결제 금액은 1000원 단위로 입력해주셔야 합니다.',
  PAYMENT_NOT_NUMBER: '결제 금액은 숫자만 입력해주셔야 합니다.',

  WINNING_NOT_RANGE: "당첨 번호는 1부터 45까지의 '숫자'만 입력해주셔야 합니다.",
  WINNING_NOT_NUMBER: "당첨 번호는 '숫자'만 입력해주셔야 합니다.",
  WINNING_DUPLICATE:
    '당첨 번호는 1부터 45까지의 중복되지 않는 숫자를 입력해주셔야 합니다.',
  WINNING_NOT_INPUT:
    '당첨 번호는 6개의 숫자를 입력해주셔야 합니다. 번호의 구분은 쉼표(,)로 해주세요.',

  BONUS_NOT_INPUT: '보너스 번호를 입력하지 않았습니다.',
  BONUS_NOT_NUMBER: "보너스 번호는 '숫자'만 입력해주셔야 합니다.",
  BONUS_NOT_RANGE: "보너스 번호는 1부터 45까지의 '숫자'만 입력해주셔야 합니다.",
  BONUS_DUPLICATE:
    '보너스 번호는 1부터 45까지의 자연수 중 당첨 번호와 중복되지 않는 값을 입력해주셔야 합니다.',
});

export default ERROR;
