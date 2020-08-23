export function round(value: number, precision: number): number {
  return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
}
