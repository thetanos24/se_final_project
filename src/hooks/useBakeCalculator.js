export function useBakeCalculator(localHumidity, hydrationRate = 70) {
  const baseWater = (500 * hydrationRate) / 100;

  const adjustedWater = Number(localHumidity) < 25 ? baseWater + 15 : baseWater;

  return { adjustedWater };
}
