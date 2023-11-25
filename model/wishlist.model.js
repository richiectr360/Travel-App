const mongoose = require('mongoose');
const router = require('../routes/dataimport.router');

const wishlistSchema = new mongoose.Schema({
    hotelId: { type: String, required: true }
})

const Wishlistishlist = mongoose.model('Wishlist', wishlistSchema);

router.route("/")
    .get(async (req, res) => {
        try {
            const wishlist = await Wishlist.find({});
            wishlist ? res.json(wishlist) : res.json({ message: "No items found in the wishlist"});
        } catch (err) {
            console.log(err);
            res.status(500).json(err)
        }
    })

module.exports = Wishlist;