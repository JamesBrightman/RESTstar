export const fetchPlanets = async(key, page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return res.json(); //gets the data - returns a promise
};

export const fetchPeople = async() => {
    const res = await fetch(`https://swapi.dev/api/people/`);
    return res.json(); //gets the data - returns a promise
};