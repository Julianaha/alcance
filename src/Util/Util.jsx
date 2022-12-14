import Swal from "sweetalert2";

export const Success = () => {
  Swal.fire({
    position: "top-center",
    title: "Sucesso!",
    text: "Solicitação Concluída",
    icon: "success",
    showConfirmButton: false,
    timer: 1000,
  });
};

export const Incorrect = () => {
  Swal.fire({
    title: "Error!",
    text: "Revise as Informações",
    icon: "error",
    confirmButtonColor: "#7cdddb",
    confirmButtonText: "OK",
  });
};

export const SuccessDelete = () => {
  Swal.fire({
    title: "Excluir...",
    text: "Tem certeza que quer deletar esse usuario?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sim, tenho certeza!",
    cancelButtonText: "Não",
    reverseButtons: true,
  });
};
