import axios from "axios";
import Swal from 'sweetalert2'
// https://enteskcrmserver.azurewebsites.net/api/demo/send
// http://localhost:4000

export const sendEmail = async (Data,setdata) =>{
  console.log(Data)
  try {
    Swal.fire(
			{	
				title: ' istək göndərildi ',
        color:"green",
				timerProgressBar: true,
				showConfirmButton:false,
				timer: 2000,
			}
		)
    const {data} = await axios.post("https://enteskcrmserver.azurewebsites.net/api/email/edinify",
    Data)
    if(data){
      Swal.fire(
        {	
          title: ' tezliklə sizinlə əlaqə saxlanılacaq ',
          color:"green",
          timerProgressBar: true,
          showConfirmButton:false,
          timer: 2000,
        }
      )
      setdata({
        features:[],
        companyName:'',
        studentCount:'',
        name:'',
        surName:'',
        email:'',
        phone:'',
        contactTime:[]
      })    }
  } catch (error) {
    console.log(error)
  }
}
