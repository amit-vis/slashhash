const Data = require('../model/index');
module.exports.test = async (req,res)=>{
    return res.render('home',{
        title: "Home Page"
    })
}
module.exports.addFavorites = async (req, res) => {
    try {
        const favorites = await Data.addFavorites(req.body);
        return res.status(200).json({
            message: "Your favorite data added",
            success: true,
            favorites
        })
    } catch (error) {
        console.error('Error adding to favorites:', error);
        res.status(500).json({ success: false, error: error.message });
    }
};