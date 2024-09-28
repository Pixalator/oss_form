"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input />

      <input
        type="text"
        placeholder="Full Name"
        {...register("Full Name", { max: 50, min: 10, maxLength: 50 })}
      />
      <input
        type="email"
        placeholder="Email"
        {...register("Email", { max: 50, min: 10, maxLength: 50 })}
      />
      <input
        type="number"
        placeholder="Contact No."
        {...register("Contact No.", { required: true })}
      />
      <select {...register("Dept.", { required: true })}>
        <option value="AI">AI</option>
        <option value="CSE">CSE</option>
        <option value="ETC">ETC</option>
        <option value="CYBER">CYBER</option>
        <option value="IT">IT</option>
        <option value="OTHER">OTHER</option>
      </select>
      <select {...register("Year", { required: true })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <input type="submit" />
    </form>
  );
}
