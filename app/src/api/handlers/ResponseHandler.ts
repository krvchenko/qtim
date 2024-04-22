import { IResponse, ResponseTypeEnum } from '@/api/interfaces/responses/IResponse';
import { useToast } from 'vue-toastification';
import { AxiosResponse } from 'axios';

export const responseHandler = (response: AxiosResponse<IResponse<never>>) => {
  const toast = useToast();
  if (response.data.type === ResponseTypeEnum.Success) {
    toast.success(response.data.message);
  } else if (response.data.type === ResponseTypeEnum.Error) {
    toast.error(response.data.message);
  } else if (response.data.type === ResponseTypeEnum.Warning) {
    toast.warning(response.data.message);
  } else if (response.data.type === ResponseTypeEnum.Info) {
    toast.info(response.data.message);
  }
};
