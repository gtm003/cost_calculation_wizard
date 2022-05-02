export interface OptionItem {
  title: string;
  price: number;
}

export interface Select {
  title: string;
  items: OptionItem[];
}

export interface Variant {
  title: string;
  description: string;
  color: string;
  price_default: number;
  options: OptionItem[];
  select: Select[];
}

export interface Block {
  id: number;
  title: string;
  variants: Variant[];
  selectedVariant: OptionItem;
}
