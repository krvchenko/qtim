/* eslint-disable @typescript-eslint/semi */
import { AxiosError } from 'axios';
import { useHttpClient } from '@/api/composition/index';
import { ErrorResponseException } from '@/api/exceptions/ErrorResponseException';
import { IPost } from '@/api/interfaces/responses/IPost';

export const usePost = () => {
  const httpClient = useHttpClient();

  const getPost = async (id: number): Promise<IPost> => {
    try {
      const response = await httpClient.get(`/posts/${id}`);

      const { data }: { data: IPost } = response;

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new ErrorResponseException(
          error.response?.data?.message ?? 'Unhandled error',
        ).setErrorResponse(error.response);
      }

      throw error;
    }
  };


  const getPosts = async (): Promise<IPost[]> => {
    try {
      const response = await httpClient.get('/posts');

      const { data }: { data: IPost[] } = response;

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new ErrorResponseException(
          error.response?.data?.message ?? 'Unhandled error',
        ).setErrorResponse(error.response);
      }

      throw error;
    }
  };

  return {
    getPost,
    getPosts,
  };
};
