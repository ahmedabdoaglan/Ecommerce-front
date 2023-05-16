import { createSlice } from "@reduxjs/toolkit";
const initialState = { loading: false, error: null, records: [] };

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {},
});

export default categorySlice.reducer;
