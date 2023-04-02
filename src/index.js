const cities = ['Ciudad de Mexico', 'Bogota',
    'Guadalajara', 'Ciudad de Guatemala'];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string
}

module.exports = randomString;
