import { createSlice } from "@reduxjs/toolkit";

// number: `${countryCode}${phone}`
const initialState = {
  field: "",
  country: "",
  email: "",
  confirmEmail: "",
  firstName: "",
  lastName: "",
  dob: "",
  countryCode: "",
  phone: "",
  cnic: "",
  address1: "",
  address2: "",
  city: "",
  region: "",
  zip_code: "",
  qualification: "",
  year_completion: "",
  university: "",
  experience: "",
  employment_status: "",
};
export const userDetail = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setCountry(state, action) {
      state.country = action.payload.country;
    },
    setField(state, action) {
      state.field = action.payload.field;
    },
    setDetails1(state, action) {
      // console.log(action.payload)
      state.email = action.payload.email;
      state.confirmEmail = action.payload.confirmEmail;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dob = action.payload.dob;
      state.country = action.payload.country;
      state.countryCode = action.payload.countryCode;
      state.phone = action.payload.phone;
    },
    setCountryCode(state , action) {
      // console.log(action.payload)
      state.countryCode = action.payload.countryCode;
      console.log({...state})
    },
    setDetails2(state, action) {
      state.cnic = action.payload.cnic
      state.address1 = action.payload.address1
      state.address2 = action.payload.address2
      state.city = action.payload.city
      state.region = action.payload.region
      state.zip_code = action.payload.zip_code

    },
    setDetails3(state, action) {
      state.qualification = action.payload.qualification
      state.year_completion = action.payload.year_completion
      state.university = action.payload.university
      state.experience = action.payload.experience
      state.employment_status = action.payload.employment_status
      console.log({...state})
    },
  },
});

export const { setCountry, setField, setDetails1, setCountryCode, setDetails2, setDetails3 } =
  userDetail.actions;

export default userDetail.reducer;
