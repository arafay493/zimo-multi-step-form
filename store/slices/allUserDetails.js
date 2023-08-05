import { createSlice } from "@reduxjs/toolkit";

const initialState = [{} , {} , {}]


export const allUserDetails = createSlice({
  name: "allUserDetails",
  initialState,
  reducers: {
    setAllUserDetails(state, action) {
        console.log(action.payload)
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllUserDetails } = allUserDetails.actions;

export default allUserDetails.reducer;
