import { z } from 'zod';

export const companyServiceSchema = z.object({
	title: z.string().min(1, { message: 'This field is required' }),
	// description: z.string().trim(),
});
