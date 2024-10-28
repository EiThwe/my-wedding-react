"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import MyInput from "@/components/form/MyInput";
import MySelect from "@/components/form/MySelect";
import MyTextarea from "@/components/form/MyTextarea";
import { Button } from "@/components/ui/button";
import MyFormItem from "@/components/form/MyFormItem";
import { useForm } from "react-hook-form";
import { registrationFormSchema } from "@/app/schema/registrationFormSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Form } from "@/components/ui/form";
import { ImSpinner8 } from "react-icons/im";
import { twMerge } from "tailwind-merge";
import config from "@/app/config";

const RegistrationFormSection = () => {
  // Initialize the form with validation using Zod
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      noOfGuests: "1",
      status: "attending",
      message: "",
    },
    mode: "onBlur",
  });

  // Destructure necessary methods from the form
  const {
    handleSubmit,

    formState: { isSubmitting },
  } = form;

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof registrationFormSchema>) => {
    try {
      const newData = { ...data, noOfGuests: parseInt(data["noOfGuests"]) };

      const response = await axios.post(
        `${config.BASE_URL}registrations`,
        newData
      );
      console.log("Form submitted successfully:", response.data);
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <section
      id="attendance"
      className="container lg:py-20 sm:py-16 pt-8 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      <SectionHeader
        title="Are you attending?"
        description="Please let us know if you'll be celebrating with us on our special day. Your response helps us plan for an unforgettable wedding!"
      />
      <div className="lg:w-[750px] w-full relative mt-8">
        <Image
          width={512}
          height={1024}
          className="lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] absolute lg:-bottom-[20%] -bottom-[12%] lg:-left-[20%] sm:-left-[10%] -left-[15%]"
          src={
            "https://i.postimg.cc/GtyKgVfg/Download-Watercolor-Floral-Flower-Design-Watercolor-Flower-Arrangements-Floral-Watercolor-Flower-D.png"
          }
          alt="left-flower"
        />
        <Image
          width={512}
          height={1024}
          className="lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] absolute lg:-top-[30%] sm:-top-[18%] -top-[12%] lg:-right-[20%] -right-[15%]"
          src={
            "https://i.postimg.cc/GtyKgVfg/Download-Watercolor-Floral-Flower-Design-Watercolor-Flower-Arrangements-Floral-Watercolor-Flower-D.png"
          }
          alt="right-flower"
        />
        <div className="lg:w-[750px] w-full border-4 border-double bg-white border-primary-200 shadow-2xl rounded-sm relative lg:p-12 sm:p-8 p-5">
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full grid sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-5"
            >
              <MyFormItem form={form} name="name">
                {(field) => <MyInput placeholder="Your Name" {...field} />}
              </MyFormItem>

              <MyFormItem form={form} name="phone">
                {(field) => (
                  <MyInput placeholder="Your Phone Number" {...field} />
                )}
              </MyFormItem>

              <MyFormItem form={form} name="noOfGuests">
                {(field) => (
                  <MySelect
                    placeholder="Number of Guests"
                    inputClassName="text-gray-500"
                    data={[
                      { name: "1", value: "1" },
                      { name: "2", value: "2" },
                      { name: "3", value: "3" },
                      { name: "4", value: "4" },
                    ]}
                    {...field}
                  />
                )}
              </MyFormItem>

              <MyFormItem form={form} name="status">
                {(field) => (
                  <MySelect
                    placeholder="I'm attending"
                    data={[
                      { name: "I'm attending", value: "attending" },
                      { name: "I'm not attending", value: "not attending" },
                    ]}
                    inputClassName="text-gray-500"
                    {...field}
                  />
                )}
              </MyFormItem>

              <div className="sm:col-span-2">
                <MyFormItem form={form} name="message">
                  {(field) => (
                    <MyTextarea
                      rows={8}
                      placeholder="Your Message"
                      {...field}
                    />
                  )}
                </MyFormItem>
              </div>

              <div className="sm:col-span-2 flex w-full justify-end">
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className={twMerge("w-[200px] h-12 text-base relative")}
                >
                  {isSubmitting ? (
                    <>
                      <ImSpinner8 size={20} className="animate-spin" />
                      <span className="sr-only">Spinner Loading</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default RegistrationFormSection;
