import { App, Plugin } from 'vue';
import { AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';
import { HttpClient } from '@/api/HttpClient';
import { useToast } from 'vue-toastification';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import { router } from '@/router';
import { responseHandler } from '@/api/handlers/ResponseHandler';
import { errorBadRequestHandler } from '@/api/handlers/ErrorBadRequestHandler';

export const axios: Plugin = {
  install: async (app: App, options: CreateAxiosDefaults) => {
    HttpClient.setGlobalAxiosSettings(options);
    const httpClientInstance = HttpClient.getInstance();
    const toast = useToast();

    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$http = httpClientInstance;

    app.provide('$http', httpClientInstance);

    httpClientInstance.setAxiosResponseInterceptor((response: AxiosResponse) => {
      if (
        response?.data?.type !== undefined
        && response?.data?.message !== undefined
      ) {
        responseHandler(response);
      }

      return response;
    }, (error) => {
      if (
        error.response?.type !== undefined
        && error.response.message !== undefined
      ) {
        responseHandler(error);
      } else if (error.response.status === 400) {
        errorBadRequestHandler(error.response);
      } else if (error.response.status >= 500) {
        toast.error('Ошибка сервера');
      }

      return Promise.reject(error);
    });

    httpClientInstance.setAxiosRequestInterceptor(async (config: InternalAxiosRequestConfig) => {
        const controller = new AbortController();

        return {
          ...config,
          signal: controller.signal
        };
      },
      (error) => Promise.reject(error)
    );
  },
};
