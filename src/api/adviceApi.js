import axios from 'axios'

export const adviceApi = axios.create({
    baseURL: 'https://api.adviceslip.com/advice',
})

export const getAdvice = async () => {
    try {
        const response = await adviceApi.get()
        return response
    } catch (error) {
        console.log ( error )
    } 
}