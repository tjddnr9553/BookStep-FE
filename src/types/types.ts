export interface BookData {
  'isbn13': string;
  'title': string;
  'description': string;
  'author': string;
  'cover': string;
  'publisher': string;
  'pubDate': string;
  'itemPage': string;
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
  onClick: () => void;
}

export interface FunctionButtonProps {
  content?: string;
  onClick?: () => void;
  cover?: string;
  bgColor: string;
  color: string;
  borderColor?: string;
}
