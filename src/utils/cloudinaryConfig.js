import {v2 as cloudinary} from 'cloudinary';
          
export const cloudinaryDb=cloudinary.config({ 
  cloud_name: 'dxqbb56ul', 
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});