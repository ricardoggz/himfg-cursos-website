import axios from "axios"

export const uploadFile = async({file})=>{
   try {
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch('https://upload-nodejs.onrender.com/upload', {
        method: 'POST',
        body: formData,
      })
    return response
} catch (error) {
    console.log(error)
   } 
}