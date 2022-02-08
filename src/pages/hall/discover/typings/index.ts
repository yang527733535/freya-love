interface HallList {
  categories: any[];
  has_direct_read: number;
  has_popup_bubble: number;
  list: any[];
  mybook_holder: number;
  saloon_version: number;
  user_group: string;
  [key: string]: any;
}

//Banner类型的接口
interface BannerContent {
  [key: string]: any;
}

export { HallList, BannerContent };
