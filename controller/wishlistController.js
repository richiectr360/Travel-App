const Wishlist = require("../model/wishlist.model");

const createWishlistHandler = async (req, res) => {
    const newWishList = new Wishlist(req.body);
    try {
        const savedWishList = await newWishList.save();
        res.status(201).json(savedWishList);
    } catch(err) {
        res.status(500).json({ message: "Failed to create wishlist" });
    }
}

const deleteWishlistHandler = async (req, res) => {
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Deleted from Wishlist"});
    } catch (err){
        res.status(500).json({ message: "Could not delete hotel from wishlist"});
    }
}

const getWishlistHandler = async (req, res) => {
        try {
            const wishList = await newWishList.find({});
            wishList ? res.json(wishlist) : res.json({ message: "No items found in the wishlist"});
        } catch(err) {
            console.log(err);
            res.status(500).json(err);
        }
}

module.exports = {createWishlistHandler, deleteWishlistHandler, getWishlistHandler};