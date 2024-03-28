// Createa function called distanceFromHqInBlocks
function distanceFromHqInBlocks(Pickuplocation) {
  return Math.abs(Pickuplocation - 42); 
}

// Function calculates the distance in feet from Scuber's HQ to the pickup location
function distanceFromHqInFeet(pickuplocation) {
    return distanceFromHqInBlocks(pickuplocation) * 264;
}

//Function to calculate the distance travelled
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

//Function to calculate fare price for a trip
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination );
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}