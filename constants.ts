import type { NavLink, MediaItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Trang chủ' },
  { path: '/gioithieu', label: 'Giới thiệu' },
  { path: '/tulieu', label: 'Tư liệu' },
  { path: '/taichinh', label: 'Tài chính' },
  { path: '/donggop', label: 'Đóng góp' },
];

export const MOCK_MEDIA_ITEMS: MediaItem[] = [
  { id: 1, imageUrl: 'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/1154723/pexels-photo-1154723.jpeg', title: 'Con đường tới trường', category: 'Hoạt động chung' },
  { id: 2, imageUrl: 'https://images.pexels.com/photos/8947688/pexels-photo-8947688.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947688/pexels-photo-8947688.jpeg', title: 'Giờ học cùng cô giáo', category: 'Hoạt động chung' },
  { id: 3, imageUrl: 'https://images.pexels.com/photos/8947682/pexels-photo-8947682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947682/pexels-photo-8947682.jpeg', title: 'Bữa trưa đoàn viên', category: 'Xã Minh Đài' },
  { id: 4, imageUrl: 'https://images.pexels.com/photos/8947691/pexels-photo-8947691.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947691/pexels-photo-8947691.jpeg', title: 'Cùng bạn đến trường', category: 'Xã Xuân Đài' },
  { id: 5, imageUrl: 'https://images.pexels.com/photos/8947677/pexels-photo-8947677.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947677/pexels-photo-8947677.jpeg', title: 'Giờ học hăng say', category: 'Xã Xuân Đài' },
  { id: 6, imageUrl: 'https://images.pexels.com/photos/8947671/pexels-photo-8947671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947671/pexels-photo-8947671.jpeg', title: 'Nụ cười trong veo', category: 'Chân dung' },
  { id: 7, imageUrl: 'https://images.pexels.com/photos/8947690/pexels-photo-8947690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947690/pexels-photo-8947690.jpeg', title: 'Hăng say phát biểu', category: 'Hoạt động chung' },
  { id: 8, imageUrl: 'https://images.pexels.com/photos/8947683/pexels-photo-8947683.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2', originalImageUrl: 'https://images.pexels.com/photos/8947683/pexels-photo-8947683.jpeg', title: 'Vui đùa cùng bạn', category: 'Hoạt động chung' },
];


export const GOOGLE_SHEETS_LINK = "https://docs.google.com/spreadsheets/d/1zdawBZOXsaYasL1B1XavpW1DtCHdALo9/edit?usp=sharing&gid=1502235076";

export const QR_CODE_URL = "https://api.vietqr.io/image/970422-8660-compact2.png?accountName=Le Thi Hong Van&addInfo=Ten%20ban%20-%20SDT%20-%20Nuoi%20em";