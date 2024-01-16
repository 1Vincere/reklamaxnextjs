import { z } from 'zod'

export const FormDataSchema = z.object({
  firstName: z.string(),
  // .min(1, 'Name is required'),
  namber: z.string(),
  // .min(1, 'Namber is required'),
  email: z.string(),
  // .min(1, 'Email is required').email('Invalid email address'),


  lastName: z.string(),
  // .min(1, 'Last name is required'),
  domen: z.string(),
  activity: z.string(),
  // .min(1, 'Activity is required'),
  products: z.string(),
  // .min(1, 'Products is required'),


  goals: z.string(),
  // .min(1, 'Goals is required'),
  tasks: z.string(),
  // .min(1, 'Tasks is required'),

  answer: z.string().nullable().refine((value) => value !== null && value.length >= 1, {
    message: 'Answer is required',
  }),
  color: z.string(),
  fonts: z.string(),
  mood: z.string(),
  like: z.string(),
  // .min(1, 'Exampl is required'),
  notLike: z.string(),
  // .min(1, 'Exampl is required'),

  structure: z.string(),
  // .min(1, 'Exampl is required'),
  functionality: z.string(),
  // .min(1, 'Exampl is required'),
})