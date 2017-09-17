import { TODO_ADD } from './todo';
const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (message) => ({
  type: MESSAGE_SHOW,
  payload: message
});

export default function(state = "", action) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
      return 'Loaded!';
    default:
      return state;
  }
}
