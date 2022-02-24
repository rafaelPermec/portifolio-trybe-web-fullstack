import { SAVE_FORM } from '../actions/action';

const INITIAL_STATE = {
  form: {},
};

function myReducer(state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
  case SAVE_FORM:
    return { form: { ...state.form, ...payload } };
  default:
    return state;
  }
}

export default myReducer;
