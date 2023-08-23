import axios from "axios"

export const uploadFile = async({file})=>{
   try {
    const response = await axios.post('https://upload-nodejs.onrender.com/upload', file, { "Content-Type": "multipart/form-data"})
    console.log(response)
} catch (error) {
    console.log(error)
   } 
}