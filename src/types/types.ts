export interface BookData {
  title: string;
  author: string;
  progress: number;
  description: string;
  cover: string;
  publisher: string;
  pubDate: string;
}

export interface BasicButtonProps {
  content: string;
  isActive: boolean;
  onClick: () => void;
}

export interface FunctionButtonProps {
  content?: string,
  onClick?: () => void,
  cover?: string,
  bgColor: string
  color: string
  borderColor?: string
}
