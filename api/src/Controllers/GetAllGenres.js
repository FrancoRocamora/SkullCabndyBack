const axios = require('axios')
require('dotenv').config()
const {API_KEY} = process.env
const {Genre} = require('../db')

const getAllGenres = async () => {
    const getAllGenres = async () => {
        const genresArray = []
        const addToBdd = []
        const data = await Genre.findAll()
        const response  = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        response.data.results.forEach(element => {
            addToBdd.push({name: element.name})
            genresArray.push(element.name)
        });
        if(!data.length){
        const responsebdd = await Genre.bulkCreate(addToBdd)}
        else{
            return genresArray
        }
        return genresArray
    }
}


module.exports = getAllGenres