import { state } from '../../../Components/TestHelper/testHelper';
import { getPagesArray } from './getPagesArray';

describe('Selector getPagesArray', () => {
  it('work with empty state', () => {
    expect(getPagesArray({})).toEqual({
      loading: false,
      error: null,
      moto: [],
      page: [],
    });
  });
  it('work with empty state', () => {
    expect(getPagesArray(state)[0].id).toBe('mx');
  });
});
