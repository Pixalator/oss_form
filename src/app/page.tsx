"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <>
      <div className="w-full h-screen text-white bg-black flex flex-col justify-center items-center p-4 md:p-0">
        <h1 className="text-2xl font-bold text-center">
          OSS LIVE SESSION REGISTRATION
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col ustify-center items-center"
        >
          <div className="w-full flex flex-col justify-center gap-6 max-w-sm items-center space-x-2 text-white">
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                placeholder="Full Name"
                {...register("Full Name", { max: 50, min: 10, maxLength: 50 })}
                className="text-white w-full"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                {...register("Email", { max: 50, min: 10, maxLength: 50 })}
                className="text-white w-full"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                type="tel"
                placeholder="Contact No."
                {...register("Contact No.", { required: true })}
                className="text-white w-full"
              />
            </div>

            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Select {...register("Dept.", { required: true })}>
                <SelectTrigger className="w-full text-white">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Department</SelectLabel>
                    <SelectItem value="AI">AI</SelectItem>
                    <SelectItem value="CSE">CSE</SelectItem>
                    <SelectItem value="ETC">ETC</SelectItem>
                    <SelectItem value="CYBER">CYBER</SelectItem>
                    <SelectItem value="IT">IT</SelectItem>
                    <SelectItem value="OTHER">OTHER</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Select {...register("Year", { required: true })}>
                <SelectTrigger className="w-full text-white">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Year</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </div>
    </>
  );
}
