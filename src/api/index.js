import axios from 'axios'

const api = axios.create({
	baseURL: 'https://swapi.dev/api',
});

const paths = {
	people: "people/",
}

export const getPeople = async ({ page = '1' }) => {
	try {
        const url = paths.people + `?page=${page}`
		const response = await api.get(url)
		return response.data
	} catch (error) {
		console.log(error)
		return false
	}
}
