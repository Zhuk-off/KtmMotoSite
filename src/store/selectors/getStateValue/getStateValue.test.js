import { state } from '../../../Components/TestHelper/testHelper';
import { getStateValue } from './getStateValue';

describe('Selector getStateValue', () => {
  it('work with empty state', () => {
    expect(getStateValue({})).toEqual({
      loading: false,
      error: null,
      moto: [],
      page: [],
    });
  });
  it('work with empty state', () => {
    expect(getStateValue(state).moto[0].id).toBe('ktm-890-duke-2022');
  });
});
