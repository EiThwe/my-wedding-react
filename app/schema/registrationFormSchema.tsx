import { z } from "zod";

// Define the status options
const statusOptions = ["attending", "not attending"] as const;

// Create the registration form schema
export const registrationFormSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Name is required.",
    })
    .max(100, {
      message: "Name cannot exceed 100 characters.",
    }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 digits.",
    })
    .max(15, {
      message: "Phone number cannot exceed 15 digits.",
    })
    .regex(/^\d+$/, {
      message: "Phone number must be numeric.",
    }),
  noOfGuests: z
    .string()
    .min(1, {
      message: "Number of guests must be at least 1.",
    })
    .max(4, {
      message: "Number of guests cannot exceed 4.",
    }),
  status: z.enum(statusOptions, {
    message: "Status must be either 'attending' or 'not attending'.",
  }),
  message: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(500, {
      message: "Message cannot exceed 500 characters.",
    }),
});
