export const getWindDirection = (degree) =>{
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] 
    const index = Math.round(degree / 45) % 8;
    return directions[index]
}