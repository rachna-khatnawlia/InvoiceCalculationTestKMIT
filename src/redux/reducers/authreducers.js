import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  csvData: false,
};

export const authReducer = createSlice({
  name: 'CSV',
  initialState,
  reducers: {
    storeCsv: (state, data) => {
      console.log('csvData', data?.payload);
      state.csvData = data?.payload;
    }
  },
});

export const { storeCsv } = authReducer.actions;

export default authReducer.reducer;
