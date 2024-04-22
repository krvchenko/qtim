import { onMounted, ref, Ref } from 'vue';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { ErrorResponseException } from '@/api/exceptions/ErrorResponseException';
import { usePostStore } from '@/store/usePostStore';
import { usePost } from '@/api/composition/usePosts';
import { IPost } from '@/api/interfaces/responses/IPost';
import { storeToRefs } from 'pinia';

const posts = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const { getItems, setItems } = usePostStore();

  const { getPosts } = usePost();

  const items = getItems();

  if (items.length) {
    return next();
  }

  try {
    const response: IPost[] = await getPosts();
    setItems(response);
  } catch (error: unknown) {
    if (error instanceof ErrorResponseException && error.getErrorResponse().status === 401) {
    }
  }

  next();
};

const post = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const { getItem, setItem } = usePostStore();

  const { getPost } = usePost();

  try {
    const id: number = Number(to.params.id);
    const response: IPost = await getPost(id);
    console.log(response);
    setItem(response);
  } catch (error: unknown) {
    if (error instanceof ErrorResponseException && error.getErrorResponse().status === 401) {
    }
  }

  next();
};

export {
  posts,
  post
};