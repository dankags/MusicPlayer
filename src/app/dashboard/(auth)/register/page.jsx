"use client";
import React, { useState } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import {
  FacebookRounded,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import Link from "next/link";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const Register = () => {
  const [showPassWord, setShowPassWord] = useState(false);

  return (
    <div className=" w-full col-span-12 flex flex-col items-center bg-white text-black overflow-y-auto scrollbar-none hover:scrollbar scrollbar-track-transparent scrollbar-thumb-neutral-500">
      <div>
        <div className="flex items-center justify-center pt-16 pb-4">
          <Image
            src="/bd9c04eda323d3e2eab326fc056adf19.jpg"
            alt=""
            height={50}
            width={50}
            className=""
          />
          <span className="text-2xl font-bold ">Spotify</span>
        </div>
        <div className="flex flex-col items-center gap-6">
          <span className="text-2xl font-bold mb-2">
            Sign up for free to start listening.
          </span>
          <div className="w-full flex justify-center items-center gap-3 ring-0 bg-blue-900 rounded-3xl px-6 py-3 font-medium text-sm dark:text-white hover:dark:bg-blue-800 cursor-pointer">
            <FacebookRounded className="" />
            Sign up with Facebook
          </div>
          <div
            className="w-full px-6 py-2 ring-2 flex justify-center items-center gap-4 ring-stone-400 rounded-3xl font-medium text-sm dark:text-stone-500 hover:dark:bg-neutral-800/10 cursor-pointer"
            onClick={() => signIn("google")}
          >
            <Image
              src="/604199df880fb029291ddd7c382e828b.jpg"
              alt="google"
              width={25}
              height={25}
              className=""
            />
            Sign up with Google
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-2 mt-5 pb-5">
          <hr className="w-5/12 dark:border-neutral-400" />
          <span className="w-1/12 text-center text-base font-medium text-neutral-500 ">
            or
          </span>
          <hr className="w-5/12 dark:border-neutral-400" />
        </div>
      </div>
      <div className="w-4/12 flex flex-col items-center gap-4">
        <form action="" className="w-10/12 flex flex-col items-center">
          <div className="w-full flex flex-col items-start gap-3">
            <div className="w-full flex flex-col">
              <label htmlFor="email" className="mb-2 text-xs font-extrabold ">
                What&apos;s your email?
              </label>
              <input
                required={true}
                type="email"
                placeholder="Enter your email."
                name="email"
                id=""
                className="py-2 pl-2 text-base font-medium placeholder:text-stone-500 placeholder:text-base placeholder:font-medium ring-1 ring-gray-500 rounded-md focus:outline-green-500"
              />
              <Link
                href=""
                className=" underline text-sm font-normal text-green-600 hover:text-green-500"
              >
                Use phone number instead
              </Link>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="email" className="mb-2 text-xs font-extrabold ">
                Create password
              </label>
              <div className="w-full flex items-center ring-1 ring-gray-500 rounded-md focus-within:outline  focus-within:outline-green-500 focus-within:outline-2">
                <input
                  required={true}
                  type={showPassWord ? "text" : "password"}
                  placeholder="Create password."
                  name="email"
                  id=""
                  className="w-11/12 focus:outline-none py-2 pl-2 text-base font-medium rounded-md placeholder:text-stone-500 placeholder:text-base placeholder:font-medium "
                />
                <span
                  href=""
                  className="w-1/12 mr-2 flex justify-center items-center  text-sm font-normal text-gray-600 hover:text-gray-500 cursor-pointer"
                  onClick={() => setShowPassWord(!showPassWord)}
                >
                  {showPassWord ? (
                    <VisibilityOutlined />
                  ) : (
                    <VisibilityOffOutlined />
                  )}
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="email" className="mb-2 text-xs font-extrabold ">
                What should we call you?
              </label>
              <input
                required={true}
                type="text"
                placeholder="Enter a profile name."
                name="email"
                id=""
                className="py-2 pl-2 text-base font-medium placeholder:text-stone-500 placeholder:text-base placeholder:font-medium ring-1 ring-gray-500 rounded-md focus:outline-green-500"
              />
              <span className="text-sm font-normal">
                This appears on your profile
              </span>
            </div>
          </div>
          <div className="w-full pt-5 flex flex-col items-start gap-2">
            <span className="text-xs font-extrabold">
              What is your date of birth?
            </span>
            <div className="w-full flex items-center gap-3">
              <div className="w-3/12 flex flex-col">
                <label htmlFor="day" className="font-medium mb-2">
                  Day
                </label>
                <input
                  required
                  placeholder="DD"
                  type="number"
                  name=""
                  id="day"
                  max="31"
                  min="1"
                  className="pl-2 py-2 ring-1 text-base font-medium ring-gray-500 rounded-md placeholder:text-stone-500 placeholder:text-base placeholder:font-medium focus:outline-green-500"
                />
              </div>

              <div className="w-6/12 flex flex-col ">
                <label htmlFor="month" className="font-medium mb-2">
                  Month
                </label>
                <select
                  name="months"
                  id="month"
                  placeholder="Month"
                  required
                  className="pl-2 py-2 ring-1 ring-gray-500 rounded-md text-base font-medium focus:outline-green-500"
                >
                  {/* <option value="" selected disabled className='text-stone-400 text-base font-medium'>Month</option> */}
                  {months.map((month, i) => (
                    <option
                      value={month}
                      key={i}
                      className=" text-base font-medium hover:bg-neutral-500 hover:text-neutral-50"
                    >
                      {month}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-3/12 flex flex-col">
                <label htmlFor="year" className="font-medium mb-2">
                  Year
                </label>
                <input
                  required
                  placeholder="YYYY"
                  type="number"
                  name=""
                  id="year"
                  min="1990"
                  className="pl-2 py-2 text-base font-medium ring-1  ring-gray-500 rounded-md placeholder:text-stone-500 placeholder:text-base placeholder:font-medium focus:outline-green-500"
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-3">
            <div className="pt-4">
              <span className="text-xs font-extrabold">
                What&apos;s your gender?
              </span>

              <div className="pt-3">
                <div className="flex gap-4 pb-3">
                  <input type="radio" name="gender" id="Male" className="" />
                  <label className="mr-4 text-sm font-bold " htmlFor="Male">
                    Male
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="Female"
                    value="Female"
                  />
                  <label className="mr-4 text-sm font-bold " htmlFor="Female">
                    Female
                  </label>
                  <input
                    type="radio"
                    name="gender"
                    id="nonBinary"
                    value="Non binary"
                  />
                  <label
                    className="mr-4 text-sm font-bold "
                    htmlFor="nonBinary"
                  >
                    Non binary
                  </label>
                </div>
                <input
                  type="radio"
                  name="gender"
                  id="notToSay"
                  value="Prefer not to say"
                />
                <label className="ml-2 text-sm font-bold " htmlFor="notToSay">
                  Prefer not to say
                </label>
              </div>

              <div className="pt-5 flex flex-col gap-3">
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-green-500 mr-2"
                  />
                  <span className="text-sm font-semibold">
                    I would prefer not to receive marketing messages from
                    spotify
                  </span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-green-500 mr-2"
                  />
                  <span className="text-sm font-semibold">
                    Share my registration data with spotify&apos;s content
                    providers for marketing purposes
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-5/12 mt-4 py-3 px-6 rounded-3xl text-lg font-bold text-black bg-green-500 hover:bg-green-400 "
          >
            Sign up
          </button>
        </form>

        <div className=" w-full pb-12 flex items-center justify-center">
          <span className="mr-2 text-base font-medium">Have an account?</span>
          <Link
            href="/dashboard/login"
            className="text-base font-medium text-green-500 underline hover:text-green-400"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
