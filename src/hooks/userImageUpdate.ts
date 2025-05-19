"use server";

import minioClient from "@/lib/minioClient";
import { extension } from "mime-types";
import ky from "ky";

const userImageUpdate = async (fileFormData: File) => {
  const fileExt = extension(fileFormData.type);

  const sanitizedFileName = `${"demo"}.${fileExt}`;

  // Destination bucket
  const bucket = "dev-s3";

  try {
    const presignedUrl = await minioClient.presignedPutObject(
      bucket,
      sanitizedFileName,
      60,
    );

    console.log(presignedUrl);

    const { ok } = await ky.put(presignedUrl, {
      body: fileFormData,
      headers: {
        "Content-Type": fileFormData.type,
      },
    });
    console.log(`OK? ${ok}`);
  } catch (error) {
    console.log(error);
  }
};

export default userImageUpdate;
