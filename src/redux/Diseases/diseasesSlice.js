import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracker: [],
  status: null,
};

export const fetchApi = createAsyncThunk('virus', async () => {
  const Omooo = await fetch('https://disease.sh/v3/covid-19/countries/');
  const Omooo1 = await Omooo.json();
  return Omooo1;
});

const covidSlice = createSlice({
  name: 'covid',
  initialState,
  reducers: {},
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

export default covidSlice.reducer;
