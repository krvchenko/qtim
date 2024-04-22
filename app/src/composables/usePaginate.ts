import { IPaginator } from '@/types';
import { RouteNameEnum } from '@/router/RouteNameEnum';
import { router } from '@/router';

export const usePaginate = () => {
  const paginate = (items: Array<any>, page: number = 1, perPage: number = 8, index: RouteNameEnum, route: RouteNameEnum): IPaginator => {
    const offset = perPage * (page - 1);
    const total = Math.ceil(items.length / perPage);
    const paged = items.slice(offset, perPage * page);
    const prev = page - 1 ? page - 1 : null;
    const next = (total > page) ? page + 1 : null;
    const from = items.indexOf(items[offset]);
    const to = from + perPage;
    const prevRoute = router.resolve({
      name: prev && prev - 1 ? route : index,
      params: { page: prev }
    });
    const nextRoute = router.resolve({
      name: route,
      params: { page: next }
    });
    
    return {
      items: paged,
      last: total,
      current: page,
      prevUrl: prev ? prevRoute.path : null,
      nextUrl: next ? nextRoute.path : null,
      from: from,
      to: to,
      total: total,
    };
  };

  return {
    paginate
  }
};