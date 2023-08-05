import MainFrom from '@/components/MainFrom'
import React from 'react'

const index = () => {
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
    employment_status: ""
  };
  return (
    <div>
      <MainFrom form_state = {initialState}/>
    </div>
  )
}

export default index