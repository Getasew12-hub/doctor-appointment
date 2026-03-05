import { v2 as cloudinary } from 'cloudinary';

export const cloudinaryConfig=async () => {
     try {
           cloudinary.config({ 
        cloud_name: 'djcy1qwuy', 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret:process.env.CLOUDINARY_API_SECRET
    });

    console.log("cloudinary connected");
        
     } catch (error) {
        console.log("error on cloudinary config",error.message);
        
     }
}