export const getCloudinessLevel = (cloudiness) => {
    if(cloudiness <= 10) return "Clear"    
    if(cloudiness <= 30) return "Mostly Clear"    
    if(cloudiness <= 60) return "Partly Cloudy"    
    if(cloudiness <= 80) return "Mostly Cloudy"    
    return "Overcast"
}