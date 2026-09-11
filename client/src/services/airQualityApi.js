import { api } from "../api/axios"
export const getAirQuality = async (lat, lon) =>{
    try{
        const response = await api.get("/air_pollution", {
            params: {
                lat: lat,
                lon: lon    
            }
        })
        return response.data
    }
    catch(error){
        console.error("Air Quality API Error:", error)
        throw error
    }
}