import { fetchApi } from '../redux/Diseases/diseasesSlice';

describe('Testing the fetchApi', () => {
  it('should fetch the data', () => {
    const dispatch = jest.fn();
    fetchApi()(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
