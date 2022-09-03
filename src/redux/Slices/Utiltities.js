import {createSlice} from '@reduxjs/toolkit';

export const utiltitiesSlice = createSlice({
  name: 'utiltities',
  initialState: {filterSheet: false, quickServiceSheet: false},
  reducers: {
    openFilters: state => {
      state.filterSheet = true;
    },
    closeFilters: state => {
      state.filterSheet = false;
    },
    openQuickServiceSheet: state => {
      state.quickServiceSheet = true;
    },
    closeQuickServiceSheet: state => {
      state.quickServiceSheet = false;
    },
  },
});

export const {
  openFilters,
  closeFilters,
  openQuickServiceSheet,
  closeQuickServiceSheet,
} = utiltitiesSlice.actions;
export default utiltitiesSlice.reducer;
