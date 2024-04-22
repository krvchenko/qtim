import { IErrorResponse } from '@/api/interfaces/responses/IErrorResponse';
import { useToast } from 'vue-toastification';
import { AxiosResponse } from 'axios';

export const errorBadRequestHandler = (response: AxiosResponse<IErrorResponse>) => {
  const toast = useToast();
  if (
    response.data.error !== 'need_2fa' &&
    response.data.error !== 'Токен невалидный, продление невозможно' &&
    response.data.error !== 'nickname must NOT have more than 16 characters' && 
    response.data.error !== 'name must NOT have more than 16 characters' &&
    response.data.error !== 'old_password must NOT have fewer than 1 characters,password must NOT have fewer than 1 characters,re_password must NOT have fewer than 1 characters'
  ) {
    toast.error(response.data.error);
  }
};
