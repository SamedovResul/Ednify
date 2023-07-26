import axios from "axios";
import Swal from 'sweetalert2'
// https://enteskcrmserver.azurewebsites.net/api/demo/send
// http://localhost:4000

export const senEmail = async (Data) =>{
  console.log(Data);
  try {
    
    const {data} = await axios.post("https://enteskcrmserver.azurewebsites.net/api/demo/send",
    Data)
    if(data){
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
  } catch (error) {
    console.log(error)
  }
}