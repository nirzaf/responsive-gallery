export interface NewsImage {
  url: string;
  title: string;
  description: string;
  category: string;
}

export interface ImageModalProps {
  image: NewsImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}