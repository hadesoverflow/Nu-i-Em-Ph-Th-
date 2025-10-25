
export interface NavLink {
  path: string;
  label: string;
}

export interface FinancialRecord {
  date: string;
  supporter: string;
  amount: number;
  purpose: string;
  note: string;
}

export interface MediaItemDetail {
  heading: string;
  subheading?: string;
  paragraphs: string[];
}

export interface MediaItem {
  id: number;
  imageUrl: string; // for thumbnail
  originalImageUrl: string; // for lightbox
  title: string;
  category: string;
  detail?: MediaItemDetail;
}

export interface Statistic {
  icon: React.ElementType;
  value: string;
  label: string;
}
