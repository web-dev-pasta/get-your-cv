import { z } from "zod";
export const enterValue = (message: string) => {
  return z.string().trim().min(1, message);
};
export const generalInfoSchema = z.object({
  title: enterValue("Please Enter Title"),
  description: z.string().trim().optional().or(z.literal("")),
});

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

export const personalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Please Enter Image File",
    )
    .refine(
      (file) => !file || file.size <= 1024 * 1024 * 4,
      "File must be less than 4MB",
    ),
  firstName: enterValue("Please Enter First Name"),
  lastName: enterValue("Please Enter Last Name"),
  jobTitle: enterValue("Please Enter Job Title"),
  city: enterValue("Please Enter City"),
  country: enterValue("Please Enter Country"),
  phone: enterValue("Please Enter Phone"),
  email: enterValue("Please Enter Email"),
});

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
