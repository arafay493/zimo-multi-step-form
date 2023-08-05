// https://restcountries.com/v2/all
import React, { useState, useEffect } from "react";
import Header2 from "../Header2";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import { setCountryCode, setDetails1 } from "@/store/slices/userDetails";
import { useFormik } from "formik";
import { Details1_Validaion_Schema } from "../schema";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import axios from "axios";
import { country_codes_and_flags } from "../Helpers";

const Details1 = ({ step, setStep }) => {
  const [countryCodeChanged, setCountryCodeChanged] = useState(false);

  const dispatch = useDispatch();
  const {
    email,
    confirmEmail,
    firstName,
    lastName,
    dob,
    country,
    countryCode,
    phone,
  } = useSelector((state) => state.details);

  const initialValues = {
    email: email,
    confirmEmail: confirmEmail,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    country: country,
    countryCode: countryCode,
    phone: phone,
  };

  const countries = country_codes_and_flags.map((item) => ({
    value: "+" + item.callingCodes[0],
    label: "+" + item.callingCodes[0],
    image: item.flags.png,
  }));

  const defaultSelectItem = country_codes_and_flags.filter(
    (item) => item.name === country
  );

  const handleNext = (values) => {
    // {
    //   countryCodeChanged
    //     ? dispatch(
    //         setDetails1({
    //           ...values,
    //           countryCode: defaultSelectItem[0].callingCodes[0],
    //         })
    //       )
    //     : dispatch(
    //         setDetails1({
    //           ...values
    //         })
    //       );
    // }
    dispatch(
      setDetails1({
        ...values,
        countryCode: defaultSelectItem[0].callingCodes[0],
      })
    );
    setStep(step + 1);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleNext,
    validationSchema: Details1_Validaion_Schema,
  });

  // const SelectChange = (values) => {
  //   setCountryCodeChanged(true);
  //   dispatch(setCountryCode({countryCode: values.value}));
  //   // console.log(values.value);
  // };
  // console.log(countryCode)

  const select = (
    <Select
      defaultValue={{
        value: "+" + defaultSelectItem[0].callingCodes[0],
        label: "+" + defaultSelectItem[0].callingCodes[0],
        image: defaultSelectItem[0].flags.png,
      }}
      // value={{
      //   value: "+" + defaultSelectItem[0].callingCodes[0],
      //   label: "+" + defaultSelectItem[0].callingCodes[0],
      //   image: defaultSelectItem[0].flags.png,
      // }}
      options={countries}
      formatOptionLabel={(country) => (
        <div className="country-option flex items-center justify-between">
          <img src={country.image} alt="country-image" className="w-[20px] " />
          <span>{country.label}</span>
        </div>
      )}
      // onChange={SelectChange}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: "1px solid black",
          borderRadius: "0.5rem",
          width: "120px",
          padding: "0.5rem 0.25rem",
        }),
      }}
    />
  );

  // console.log(countries)
  // selected = {item.name === country? true : false}
  // console.log(countryDetails)

  // const filterDefaultValue = countryDetails.filter(
  //   (item) => item.name === country
  // );
  // console.log(filterDefaultValue[0].callingCodes[0])

  // const countries = [
  //   { value: "me", label: "Montenegro", image: "https://flagcdn.com/w320/pk.png" },
  //   { value: "rs", label: "Serbia", image: "https://flagcdn.com/w320/sr.png" },
  // ];

  // console.log(formik)

  return (
    <div
      className="flex flex-col justify-between h-full select-none backdrop-blur-sm p-5"
      style={{ backgroundColor: "#fff", backgroundSize: "100% 100%" }}
    >
      <Header2 />
      <form
        className="w-full lg:w-[800px] rounded-2xl m-auto relative mb-[85px]"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col gap-2 justify-between items-center my-10">
          <input
            name="email"
            type="email"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            name="confirmEmail"
            type="email"
            required
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            placeholder="Confirm Email Address"
            onChange={formik.handleChange}
            value={formik.values.confirmEmail}
          />
          {formik.values.email !== formik.values.confirmEmail && (
            <span className="text-xs text-red-600">
              {formik.errors.confirmEmail}
            </span>
          )}
          <input
            name="firstName"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="First Name"
          />
          <span className="text-sm text-center">
            Use your legal name as it appears on your official documents
          </span>
          <input
            name="lastName"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder="Last Name ( Including Miiddle Name)"
          />
          <input
            name="dob"
            type="date"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black placeholder:uppercase px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56]"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          <input
            name="country"
            type="text"
            required
            id="email"
            className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full md:w-[500px] focus:border-[#BE9F56] select-none"
            placeholder="Country"
            readOnly
            disabled
            value={formik.values.country}
          />
          <div className="flex gap-2 w-full md:w-[500px]">
            {/* <select
              name="countryCode"
              className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-[100px] md:w-[150px]"
              onChange={formik.handleChange}
              defaultValue={`+${filterDefaultValue[0]?.callingCodes[0]}`}
              value={formik.values.countryCode}
            >
              <option value="">code</option>
              <option value="+92" className="flex justify-between">
                <span>+92</span>
              </option>
              <option value="+91">+91</option>
              {options}
            </select> */}
            {select}
            <input
              name="phone"
              type="number"
              required
              className="border border-black rounded-lg bg-transparent ring-0 outline-none text-center text-lg md:tracking-[4px] placeholder:text-black px-5 py-3 w-full focus:border-[#BE9F56]"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>
        </div>
        {/* Next Button */}
        <button
          className="uppercase  absolute right-10 lg:-right-[4rem] -bottom-[4rem] lg:bottom-10 block rounded-lg bg-black text-white w-24 h-24"
          type="submit"
        >
          Continue
        </button>

        {/* Back Button */}
        <button
          className="uppercase  absolute left-10 lg:-left-[4rem] -bottom-[4rem] lg:bottom-10 block rounded-lg bg-black text-white w-24 h-24"
          onClick={() => setStep(step - 1)}
        >
          Back
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Details1;
