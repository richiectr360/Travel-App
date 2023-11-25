const Category = require("../model/category.model");

const categoryHandler = async (req, res) => {
    try {
        const category = await Category.find({});
        res.json(categories)
    } catch(err){
        res.status(404).json({ message: "Could not find categories"});
    }
}

module.exports = categoryHandler;