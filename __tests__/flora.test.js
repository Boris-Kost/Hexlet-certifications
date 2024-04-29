/* global describe, test, expect */
import fs from 'fs';
import path from 'path';
import solution from '../index';

describe('solution', () => {
  // Чтение содержимого файла flora.csv
  const filePath = path.join(process.cwd(), '__fixtures__', 'flora.csv');
  const content = fs.readFileSync(filePath, 'utf-8');

  test('step1', () => {
    const result = solution(content);
    expect(result.totalPlants).toBe(20);
  });

  test('step2', () => {
    const result = solution(content);
    expect(result.sortedPlants).toEqual([
      'Алоэ',
      'Бамбук',
      'Белена',
      'Береза',
      'Боярышник',
      'Ель',
      'Кактус',
      'Клевер',
      'Ландыш',
      'Мак',
      'Орхидея',
      'Папоротник',
      'Плющ',
      'Роза',
      'Рябина',
      'Сосна',
      'Хвощ',
      'Цикламен',
      'Черника',
      'Ядовитый дуб',
    ]);
  });

  test('step3', () => {
    const result = solution(content);
    expect(result.percentageDangerous).toBe(30);
    expect(result.percentageSafe).toBe(70);
  });

  test('step4', () => {
    const result = solution(content);
    expect(result.averageForestLifespan).toBe(146);
  });

  test('step5', () => {
    const result = solution(content);
    expect(result.mostCommonHabitatDangerous).toBe('Леса');
  });
});
