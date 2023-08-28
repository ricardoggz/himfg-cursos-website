export const uploadFile = async({file})=>{
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'image_himfg');
    formData.append('public_id', file.name)
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/diuxbqmn5/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
  
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error)
  }
}