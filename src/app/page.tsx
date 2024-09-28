"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "../utils/supabase";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user: any) => {
    // console.log(user);
    const { data, error } = await supabase
      .from("form")
      .insert([
        {
          full_name: user.full_name,
          email: user.email,
          contact_number: user.contact_number,
          dept: user.dept,
          year: user.year,
        },
      ])
      .select();

    if (error) {
      console.error(error);
      return;
    } else {
      localStorage.setItem("registered", "true");
      // console.log("Data inserted successfully", data);
    }

    if (data.length === 0) {
      console.error("No data returned from the insert operation.");
      return;
    }
  };

  if (localStorage.getItem("registered") === "true") {
    return (
      <div className="w-full h-screen text-white bg-black flex flex-col justify-center items-center p-4 md:p-0">
        <h1 className="text-2xl font-bold text-center">
          You have already registered for the session
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen text-white bg-black flex flex-col justify-center items-center gap-4 p-4 md:p-0">
        <h1 className="text-2xl font-bold text-center">
          OSS LIVE SESSION REGISTRATION
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col ustify-center items-center"
        >
          <div className="w-full flex flex-col justify-center gap-6 max-w-sm items-center space-x-2 text-white">
            <div className="w-full">
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                type="text"
                placeholder="Full Name"
                {...register("full_name")}
                className="text-white w-full"
                name="full_name"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="text-white w-full"
                name="email"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="contact_number">Contact Number</Label>
              <Input
                type="tel"
                placeholder="Contact No."
                {...register("contact_number")}
                className="text-white w-full"
                name="contact_number"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="dept">Department</Label>
              <select
                {...register("dept", { required: true })}
                className="w-full border border-white p-2 rounded-md bg-black text-white"
              >
                <option value="AI">AI</option>
                <option value="CSE">CSE</option>
                <option value="CYBER">CYBER</option>
                <option value="IT">IT</option>
                <option value="OTHER">OTHER</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="year">Year</label>
              <select
                {...register("year", { required: true })}
                className="w-full border border-white p-2 rounded-md bg-black text-white"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    </>
  );
}
