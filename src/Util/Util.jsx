import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



export const deuCerto = () =>{
  //const nav = useNavigate()
    Swal.fire({
      title: 'Sucesso!',
      text: 'Inscrição Concluida',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#7cdddb',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ir para Login',
      cancelButtonText: 'Continuar navegando'
    }).then((result) => {
      if (result.value) {
        
        Swal.fire(
          //nav("/login")
          "em construção"
        )
      }
    })
  }

export const deuErrado = () =>{
    Swal.fire({
      title: 'Error!',
      text: 'Revise as Informações',
      icon: 'error',
      confirmButtonColor: '#7cdddb',
      confirmButtonText: 'OK'
    })
  }