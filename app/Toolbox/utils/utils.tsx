import { toast } from 'react-toastify';
export function isNumber(value: string | null): boolean {
    if(value === null){
        return true;
    }
    const number = parseFloat(value);

    return !isNaN(number) && isFinite(number);
}

export const errorMsg = () => {
    toast.error("No has seleccionado una mesa.", {
      position: 'top-right',
    });
  };
export const successMsg = () => {
    toast.success("Pedido exitoso.", {
      position: 'top-right',
    });
  };