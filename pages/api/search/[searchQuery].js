const ytsr = require('ytsr');

export default async(req, res) => {
    const { searchQuery } = req.query
     const searchResults = await ytsr(searchQuery)

    res.json(searchResults)
}