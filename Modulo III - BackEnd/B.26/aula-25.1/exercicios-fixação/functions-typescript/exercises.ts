export function losangle(largerDiagonal: number, lowestDiagonal: number): number {
  return (largerDiagonal * lowestDiagonal) / 2;
};

export function trapeze(largerBase: number, lowestBase: number, height: number): number {
  return ((largerBase * lowestBase) * height) / 2;
};

export function circle(radius: number): number {
  return (Math.PI * (radius ** 2));
};
