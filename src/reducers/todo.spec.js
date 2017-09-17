import reducer from './todo';

describe('Todo Reducer', () => {
  test('returns a state object', () => {
    const result = reducer(undefined, { type: 'ANYTHING' })
    expect(result).toBeDefined()
  });

  test('adds a todo', () => {
    const startState = {
      todos: [
        { id: 1, name: 'Have some beer', isComplete: true },
        { id: 2, name: 'Have some wine', isComplete: false },
        { id: 3, name: 'Have some vodka', isComplete: false },
      ]
    };
    const expectedState = {
      todos: [
        { id: 1, name: 'Have some beer', isComplete: true },
        { id: 2, name: 'Have some wine', isComplete: false },
        { id: 3, name: 'Have some vodka', isComplete: false },
        { id: 4, name: 'Have some brendi', isComplete: false },
      ]
    };
    const action = { type: 'TODO_ADD', payload: { id: 4, name: 'Have some brendi', isComplete: false }};
    const result = reducer(startState, action);
    expect(result).toEqual(expectedState);
  });
});
