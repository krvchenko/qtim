export interface IMenuItem {
  title: string;
  url: string;
}

export interface IContactFooter {
  title: string;
  text: string;
  isLocation: boolean
}

export interface IPaginator {
  prevUrl: string | null;
  nextUrl: string | null;
  last: number;
  current: number;
  from: number;
  to: number;
  total: number;
  items: any;
}

