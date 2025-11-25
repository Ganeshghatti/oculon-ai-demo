export interface Point {
  x: number;
  y: number;
}

export interface Feature {
  id: string;
  title: string;
  value: string;
  change: number;
  icon: React.ComponentType<any>;
}
