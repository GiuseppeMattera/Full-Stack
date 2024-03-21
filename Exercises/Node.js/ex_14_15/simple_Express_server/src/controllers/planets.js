import Joi from "joi";
import { db } from "../db.js";

const planetSchema = Joi.object({
    name: Joi.string().required()
})

const getAll = async (req, res) => {
    const planets = await db.many(`SELECT * FROM planets;`);
    res.status(200).json(planets);
};

const getOneById = async (req, res) => {
    const { id } = req.params;
    const planet = await db.one(`SELECT * FROM planets WHERE id=$1;`, Number(id));

    res.status(200).json(planet);
};

const create = async (req, res) => {
    const { name } = req.body;
    const newPlanet = { name };
    const validatedNewPlanet = planetSchema.validate(newPlanet);

    if(validatedNewPlanet.error) {
        res.status(400).json({ msg: validatedNewPlanet.error.details[0].message })
    } else {
        await db.none(`INSERT INTO planets (name) VALUES ($1)`, name);

        res.status(201).json({ msg: "New planet created" });
    }
};

const updateById = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);

    res.status(200).json({ msg: "Planet updated" });
};

const deleteById = async (req, res) => {
    const { id } = req.params;

    await db.none(`DELETE FROM planets WHERE id=$1`, Number(id));

    res.status(200).json({ msg: "Planet deleted" });
};

const createImage = async (req, res) => {
    const { id } = req.params;
    const filename = req.file?.path;

    if(filename) {
        db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, filename]);
        res.status(201).json({ msg: "Planet image uploaded successfully" });
    } else {
        res.status(400).json({ msg: "Planet image failed to upload" })
    }

}

export {
    getAll, getOneById, create, deleteById, updateById, createImage 
};