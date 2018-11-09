interface Action {
  type: string;
}

const APP_DEFAULT_STATE = {
  loading: false,
};

export const appReducer = (state = APP_DEFAULT_STATE, action: Action) => {
  switch (action.type) {
    case 'sometype':
      return state;
    default:
      return state;
  }
};
