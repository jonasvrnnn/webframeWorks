export interface CounterProps {
  value: number;
  onIncrease: (index: number) => void;
  onDecrease: (index: number) => void;
  index: number;
}
