Вам дан файл flora.csv, он уже прочитан и его содержание находится в переменной content.

На основе имеющихся данных выведите ответы на следующие вопросы:

1. Сколько всего растений содержится в файле?
2. Отсортируйте список растений в алфавитном порядке. При этом все растения должны начинаться с большой буквы.
3. Выведите количество опасных и безопасных для человека растений в данной таблице в процентном соотношении.
4. Выведите среднее время жизни всех лесных растений. Не каждого растения, а всех растений вместе. То есть среднее арифметическое для всех лесных растений.
5. Определите какое место обитания больше всего свойственно опасным для человека растениям.

Пример запуска:

```bash
node bin/plants.js __fixtures__/flora.csv
```

Тесты написаны на Jest
