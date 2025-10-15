import type { NavLink, MediaItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Trang chủ' },
  { path: '/gioithieu', label: 'Giới thiệu' },
  { path: '/tulieu', label: 'Tư liệu' },
  { path: '/taichinh', label: 'Tài chính' },
  { path: '/donggop', label: 'Đóng góp' },
];

export const MOCK_MEDIA_ITEMS: MediaItem[] = [
  { id: 1, imageUrl: '/EN01.jpg', originalImageUrl: '/EN01.jpg', title: 'EN01', category: 'Hoạt động' },
  { id: 2, imageUrl: '/EN02.jpg', originalImageUrl: '/EN02.jpg', title: 'EN02', category: 'Hoạt động' },
  { id: 3, imageUrl: '/EN05.jpg', originalImageUrl: '/EN05.jpg', title: 'EN05', category: 'Hoạt động' },
  { id: 4, imageUrl: '/EN07.jpg', originalImageUrl: '/EN07.jpg', title: 'EN07', category: 'Hoạt động' },
  { id: 5, imageUrl: '/EN09.jpg', originalImageUrl: '/EN09.jpg', title: 'EN09', category: 'Hoạt động' },
  { id: 6, imageUrl: '/EN10.jpg', originalImageUrl: '/EN10.jpg', title: 'EN10', category: 'Hoạt động' },
];


export const GOOGLE_SHEETS_LINK = "https://docs.google.com/spreadsheets/d/1zdawBZOXsaYasL1B1XavpW1DtCHdALo9/edit?usp=sharing&gid=1502235076";

export const QR_CODE_URL = "https://api.vietqr.io/image/970422-8660-compact2.png?accountName=Le Thi Hong Van&addInfo=Ten%20ban%20-%20SDT%20-%20Nuoi%20em";