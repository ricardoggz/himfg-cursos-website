import axios from "axios";
import Swal from "sweetalert2";

export const uploadFile= async({file})=>{
    const formData = new FormData()
    formData.append('file', file)
    try {
      const response = await axios.post(
        'https://himfg.edu.mx/archivos/documentacion-alumnos/upload-file.php',
        formData,
        {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        })
      if(response.status===200){
      return response.data.fileUrl
      }else{
        Swal.fire({
            icon:'error',
            title:'Error al cargar elrchivo, intente nuevamente',
            showCloseButton:true,
            showConfirmButton:false
        })
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon:'error',
        title:'Error al cargar elrchivo, intente nuevamente',
        showCloseButton:true,
        showConfirmButton:false
    })
    }
  }