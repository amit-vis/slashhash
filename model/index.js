const db = require('../config/datanase');

const Data = {
    addFavorites: async (data)=>{
        const [addFovorites] = await db.query('INSERT INTO favorites (name, countary, website) VALUES (?, ?, ?)',[data.name, data.countary, data.website]);
        return addFovorites.insertId;
    }
}

module.exports = Data;