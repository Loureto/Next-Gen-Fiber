import { toast, ToastPromiseParams } from "react-toastify";

export const notifyPromise = (promise: any, params?: ToastPromiseParams) => {
  toast.promise(
    promise,
    {
      pending: params?.pending ?? "Aguarde...",
      success: params?.success ?? "Ação concluida!",
      error: params?.error ?? "Ops! Algo deu errado",
    },
    {
      toastId: 1,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }
  );
};