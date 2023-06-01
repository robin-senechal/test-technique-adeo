const includeWithLowerCase = (str, find) => str.toLowerCase().includes(find);

const formatCount = (name, count) => `${name} [${count}]`;

const filterCountriesByAnimalName = (countries, animalName) => {
  const searchName = animalName.toLowerCase();
  return countries.reduce((filteredCountries, country) => {
    const filteredPeople = country.people.reduce((filteredPeople, person) => {
      const filteredAnimals = person.animals.filter((animal) =>
        includeWithLowerCase(animal.name, searchName)
      );
      if (filteredAnimals.length) {
        filteredPeople.push({ ...person, animals: filteredAnimals });
      }
      return filteredPeople;
    }, []);
    if (filteredPeople.length) {
      filteredCountries.push({ ...country, people: filteredPeople });
    }
    return filteredCountries;
  }, []);
};

const count = (countries) => {
  return countries.map((country) => ({
    ...country,
    name: formatCount(country.name, country.people.length),
    people: country.people.map((people) => ({
      ...people,
      name: formatCount(people.name, people.animals.length),
    })),
  }));
};

module.exports = { count, filterCountriesByAnimalName };
