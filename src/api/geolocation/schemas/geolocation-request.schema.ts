import z from 'zod';

export const geolocationRequestSchema = z.object({
  params: z.object({
    ip: z.string().ip('Invalid IP address'),
  }),
});

export type GeolocationRequest = z.infer<typeof geolocationRequestSchema>;
export type GeolocationRequestParams = GeolocationRequest['params'];
