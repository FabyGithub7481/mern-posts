//importando todo el modulo de cloudinary
// import cloudinary from 'cloudinary'

// importando solo el modulo que necesito para subir imagenes
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dckdgqwyv",
  api_key: "269838677199734",
  api_secret: "IEgJA7nMbvtFr00njs8cyQe39Gc",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};
export const deleteImage = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
