// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const titles: string[] = [
  'Midnight Special',
  'Macbeth',
  'Bohemian Rhapsody',
  'Aviator',
  'We need to talk about Kevin',
  'What We Do in the Shadows',
  'Revenant',
  'Johnny English',
  'Shutter Island',
  'Pulp Fiction',
  'No Country for Old Men',
  'Snatch',
  'Moonrise Kingdom',
  'Seven Years in Tibet',
  'War of the Worlds',
  'Dardjeeling Limited',
  'Orlando',
  'Mindhunter',
];

const pictures: string[] = [
  'img/bohemian-rhapsody.jpg',
  'img/macbeth.jpg',
  'img/aviator.jpg',
  'img/we-need-to-talk-about-kevin.jpg',
  'img/what-we-do-in-the-shadows.jpg',
  'img/revenant.jpg',
  'img/johnny-english.jpg',
  'img/shutter-island.jpg',
  'img/pulp-fiction.jpg',
  'img/no-country-for-old-men.jpg',
  'img/snatch.jpg',
  'img/moonrise-kingdom.jpg',
  'img/seven-years-in-tibet.jpg',
  'img/midnight-special.jpg',
  'img/war-of-the-worlds.jpg',
  'img/dardjeeling-limited.jpg',
  'img/orlando.jpg',
  'img/mindhunter.jpg',
  'img/midnight-special.jpg'
];

const getRandomFilm = () => ({
  id: getRandomInteger(0,1000),
  title: titles[getRandomInteger(0, titles.length - 1)],
  picture: pictures[getRandomInteger(0, pictures.length - 1)],
});

export const filmsMock = Array.from({length:20}, getRandomFilm);
