import axios from "axios";

const baseUrl = "http://localhost:3001/persons"

const getAll = () => axios.get(baseUrl)
const create = newObject => axios.post(baseUrl, newObject)
const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject)
const deleteItem = (id) => axios.delete(`${baseUrl}/${id}`)

export default {
    getAll: getAll,
    create: create,
    update: update,
    deleteItem: deleteItem,
}