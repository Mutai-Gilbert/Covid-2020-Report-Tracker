import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracker: [],
  status: null,
  details: null,
};

export const fetchApi = createAsyncThunk('virus', async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries/');
  const data = await response.json();
  return data;
});

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {
    getDetails(state, action) {
      const details = state;
      details.details = action.payload;
    },
  },
  extraReducers(virus1) {
    virus1
      .addCase(fetchApi.pending, (state) => {
        const isPending = state;
        isPending.status = 'pending';
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.tracker = action.payload;
      })
      .addCase(fetchApi.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
  },
});

export const { getDetails } = covidSlice.actions;
export default covidSlice.reducer;
