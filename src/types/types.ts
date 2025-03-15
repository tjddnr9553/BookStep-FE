export interface BookData {
  title: string;
  author: string;
  progress: number;
  description: string;
  svgUrl: string;
}

export interface BasicButtonProps {
  content: string;
  isActive: boolean;
}

export interface FunctionButtonProps {
  content?: string,
  onClickFn?: () => void,
  svgUrl: string,
  bgColor: string
  color: string
  borderColor?: string
}
