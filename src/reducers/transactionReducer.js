const INITIAL_STATE = {
  myTransactions: [
    {
      date: '2018-09-01',
      payee: 'Honeygrow',
      memo: 'Lunch',
      amount: '12.15',
      isDeposit: false
    },
    {
      date: '2018-08-23',
      payee: 'Ds Six Pax',
      memo: 'drinks and hot dogs',
      amount: '43.33',
      isDeposit: false
    },
    {
      date: '2018-08-20',
      payee: 'Honeygrow',
      memo: 'Lunch',
      amount: '12.15',
      isDeposit: false
    },
    {
      date: '2018-08-15',
      payee: 'Work',
      memo: 'Payday',
      amount: '900.00',
      isDeposit: false
    },
  ],
  ledger: 2039.34
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'add_deposit':
      return {
        ...state,
        ledger: ''
      };
      case 'add_withdrawal':
        return {
          ...state,
          ledger: ''
        };
    default:
      return state;
  }
};
