export const getCalculatedPointsByCombo = (
  pointsRatio = 0.0,
  maxCombo = 0,
  difficulty = 0.0,
) => {
  let result = 0;
  const pointParCombo = (pointsRatio / maxCombo) * difficulty;

  if (maxCombo >= 1000) result += (maxCombo - 1000) * pointParCombo * 1.1;
  if (maxCombo >= 900)
    result += Math.min(maxCombo - 900, 100) * pointParCombo * 1.09;
  if (maxCombo >= 800)
    result += Math.min(maxCombo - 800, 100) * pointParCombo * 1.08;
  if (maxCombo >= 700)
    result += Math.min(maxCombo - 700, 100) * pointParCombo * 1.07;
  if (maxCombo >= 600)
    result += Math.min(maxCombo - 600, 100) * pointParCombo * 1.06;
  if (maxCombo >= 500)
    result += Math.min(maxCombo - 500, 100) * pointParCombo * 1.05;
  if (maxCombo >= 400)
    result += Math.min(maxCombo - 400, 100) * pointParCombo * 1.04;
  if (maxCombo >= 300)
    result += Math.min(maxCombo - 300, 100) * pointParCombo * 1.03;
  if (maxCombo >= 200)
    result += Math.min(maxCombo - 200, 100) * pointParCombo * 1.02;
  if (maxCombo >= 100)
    result += Math.min(maxCombo - 100, 100) * pointParCombo * 1.01;

  return result + Math.round((maxCombo % 100) * pointParCombo);
};
