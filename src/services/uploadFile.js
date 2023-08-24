import axios from "axios"

export const uploadFile = async({file})=>{
   try {
    const response = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: file,
      })
      console.log(response.text())
} catch (error) {
    console.log(error)
   } 
}