let planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];

const getAll = (req, res) => {
    res.status(200).json(planets);
};

const getOneById = (req, res) => {
    const { id } = req.params;
    const planet = planets.find((element) => element.id === Number(id));
  
    res.status(200).json(planet);
};

const create = (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
  
    res.status(201).json({ msg: "New planet created" });
};

const updateById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map((element) => element.id === Number(id) ? ({...element, name}) : element);
  
    res.status(200).json({ msg: "Planet updated" });
};

const deleteById = (req, res) => {
    const { id } = req.params;
    planets = planets.filter((element) => element.id !== Number(id));
  
    res.status(200).json({ msg: "Planet deleted" });
};

export {
    getAll, getOneById, create, updateById, deleteById
};