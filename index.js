export default function solution(content) {
  // 1) всего растений содержится в файле
  const data = content.trim().split('\n').slice(2);
  const totalPlants = data.length;
  // 2) список растений в алфавитном порядке
  const plants = data.map((plant) => plant.split('|'));
  const listPlants = plants.map((plant) => plant[1]);
  const dataNamePlants = listPlants.map((sort) => {
    const trimmedSort = sort.trim();
    const capitalizedSort = trimmedSort.charAt(0).toUpperCase() + trimmedSort.slice(1);
    return capitalizedSort;
  });
  const sortedPlants = dataNamePlants.sort();
  // 3) количество опасных и безопасных для человека растений
  const habitats = plants.map((plant) => plant[5].trim());
  const dangerHabitatsCount = habitats.filter((habitat) => habitat.trim() === 'Да').length;
  const percentageDangerous = (dangerHabitatsCount / totalPlants) * 100;
  const percentageSafe = 100 - percentageDangerous;
  // 4) среднее время жизни всех лесных растений
  const plantsForest = plants.map((plant) => plant[2].trim());
  const plantsYearsLife = plants.map((plant) => plant[4]);
  const forestPlants = plantsForest.filter((plant, index) => plant.includes('Леса') && plantsYearsLife[index]);
  const forestPlantsYearsLife = plantsYearsLife.filter((life, index) => forestPlants
    .includes(plantsForest[index]));
  const numYearLife = forestPlantsYearsLife.map((spl) => spl.split(' '));
  const numbers = numYearLife
    .flatMap((arr) => arr.filter((item) => !Number.isNaN(parseInt(item, 10))))
    .map((range) => {
      const [start, end] = range.split('-').map((num) => parseInt(num, 10));
      return (start + end) / 2;
    })
    .map((value) => (Number.isNaN(value) ? 1 : value));
  const totalYears = numbers.reduce((acc, curr) => acc + curr, 0);
  const averageForestLifespan = parseFloat((totalYears / numbers.length).toFixed(0));
  // 5) Какое место обитания больше всего свойственно опасным для человека растениям
  const dangerousHabitats = habitats.filter((habitat) => habitat === 'Да');
  const plantsWithHabitats = dangerousHabitats
    .map((habitat, index) => [habitat, plantsForest[index]]);
  const plantCount = plantsWithHabitats.map((plant) => plant[1]);
  const allWords = plantCount.join(',').split(',').map((word) => word.trim());

  const wordCount = allWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
  let mostCommonHabitatDangerous;
  let maxCount = 0;
  Object.keys(wordCount).forEach((word) => {
    if (wordCount[word] > maxCount) {
      maxCount = wordCount[word];
      mostCommonHabitatDangerous = word;
    }
  });

  return {
    totalPlants,
    sortedPlants,
    percentageDangerous,
    percentageSafe,
    averageForestLifespan,
    mostCommonHabitatDangerous,
  };
}
