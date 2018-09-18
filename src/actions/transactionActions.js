export const addWithdrawal = () => {
  console.log('Withdrawal logged');
  return { type: 'log_withdrawal' };
};
export const addDeposit = () => {
  console.log('You got paid');
  return { type: 'log_deposit' };
};