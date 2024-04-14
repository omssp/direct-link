import { searchMusics } from 'node-youtube-music';

export default async (req, res) => {
    const { searchQuery } = req.query
    const searchResults = await searchMusics(searchQuery)

    res.json(searchResults)
}