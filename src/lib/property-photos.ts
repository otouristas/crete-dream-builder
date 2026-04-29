/**
 * All property photos under `/public/photos` (AVIF), sorted for stable gallery order.
 */
export const PROPERTY_PHOTO_PATHS: readonly string[] = [
  "/photos/0107a896-9a09-4957-a3e5-15d8601f4f0e.avif",
  "/photos/10d30e46-8c3a-4083-af22-0545bddf49a3.avif",
  "/photos/3d1f8dff-452c-4364-8940-873280c7f4ef.avif",
  "/photos/550cddec-5fcd-4761-b86c-d5dda8b09955.avif",
  "/photos/5cf88c7f-fa57-4a5e-9e75-a9ce506a704c.avif",
  "/photos/8e472436-e3c7-41ab-8eef-d63844425edf.avif",
  "/photos/9dfea34a-2a4d-4ecc-8e76-2968131a967b.avif",
  "/photos/a0062924-4719-4179-8409-d39fb5c2be69.avif",
  "/photos/dd2d1e36-86ba-4bf9-a18b-c16b07692c07.avif",
  "/photos/e40af5b3-6028-45d4-b992-49166bf02739.avif",
  "/photos/e50cbbe2-5a13-4a34-9ce9-bfec356676df.avif",
  "/photos/e68ddb3c-39ec-4f7f-a63d-2bfcc69b1991.avif",
  "/photos/e6ecc8c4-dfee-44ed-8648-ece3190883f3.avif",
  "/photos/f30e9a27-3ec9-4f7f-ba07-a2f82e3e6005.avif",
  "/photos/fce569b2-5807-4879-8d05-c1ad5fe2c980.avif",
] as const;

export interface PropertyPhoto {
  readonly src: string;
  readonly alt: string;
}

export function getPropertyPhotos(): readonly PropertyPhoto[] {
  return PROPERTY_PHOTO_PATHS.map((src, index) => ({
    src,
    alt: `Kagiampakis Concept Residences, Avdou — interior and spaces (${index + 1})`,
  }));
}
