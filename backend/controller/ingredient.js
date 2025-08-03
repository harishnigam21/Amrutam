const prisma = require("../shortcut/prisma_initilization");
const date = require("../shortcut/returnDate");
const getIng = async (req, res) => {
  try {
    const Ing = await prisma.ingredients.findMany();
    if (!Ing || Ing.length === 0) {
      return res
        .status(404)
        .json({ message: "There is no ingredients added yet" });
    }
    console.log("Successfully got Ingredients");
    return res
      .status(200)
      .json({ message: "Successfully got Ingredients", data: Ing });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const postIng = async (req, res) => {
  const { data } = req.body;
  try {
    if (!data) {
      return res.status(404).json({ message: "Missing Ingredient details" });
    }
    const alreadThere = await prisma.ingredients.findMany({
      where: { name: data.name },
    });
    if (alreadThere.length > 0) {
      return res.status(409).json({
        message: `we already have a ingredients named as "${data.name}"`,
      });
    }
    const create = await prisma.ingredients.create({
      data: {
        name: data.name,
        createdAt: date(),
        details: JSON.stringify(data),
      },
    });
    if (!create) {
      console.log("Unable to add new Ingredient right now.");
      return res
        .status(503)
        .json({ message: "Unable to add new Ingredient right now." });
    }
    console.log("Successfully added new Ingredient");
    return res
      .status(200)
      .json({ message: "Successfully added new Ingredient" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const deleteIng = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      return res.status(404).json({ message: "Missing Ing ID" });
    }
    const deleteIng = await prisma.ingredients.delete({ where: { id: id } });
    if (!deleteIng) {
      console.log("Unable to delete Ingredient right now.");
      return res
        .status(503)
        .json({ message: "Unable to delete Ingredient right now." });
    }
    console.log("Successfully deleted Ingredient");
    return res.status(200).json({ message: "Successfully deleted Ingredient" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
const updateIng = async (req, res) => {
  const { id, data } = req.body;
  try {
    if (!id || !data) {
      return res.status(404).json({ message: "Missing Ing detail/ID" });
    }
    const updateIng = await prisma.ingredients.update({
      where: { id: id },
      data: { details: JSON.stringify(data) },
    });
    if (!updateIng) {
      console.log("Unable to update Ingredient right now.");
      return res
        .status(503)
        .json({ message: "Unable to update Ingredient right now." });
    }
    console.log("Successfully updated Ingredient");
    return res.status(200).json({ message: "Successfully updated Ingredient" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { getIng, postIng, deleteIng, updateIng };
