export interface BookData {
  isbn13: string;
  title: string;
  description: string;
  author: string;
  cover: string;
  publisher: string;
  pubDate: string;
  itemPage: string;
  progress: number;
  rating: number;
  isOwn: boolean;
}

export interface MemoData {
  $id: number;
  body: string;
  colors: string;
  position: string;
}

export interface BasicButtonProps {
  content: string;
  isActive: boolean;
  onClick?: () => void;
  icon?: string;
  color:string;
}

export interface FunctionButtonProps {
  content?: string;
  onClick?: () => void;
  cover?: string;
  bgColor: string;
  color: string;
  borderColor?: string;
  circle?: boolean;
}
