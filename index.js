// Code your solution in this file!


    function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
  }

  // Calculates the distance in feet from the pickup location to the headquarter
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }

  // Calculates the distance in feet travelled from the start location to the end location
  function distanceTravelledInFeet(startLocation, endLocation) {
    if (startLocation > endLocation) {
      return (startLocation - endLocation) * 264;
    } else {
      return (endLocation - startLocation) * 264;
    }
  }

  // Calculates the fare for a ride based on the distance travelled
  function calculatesFarePrice(startLocation, endLocation) {
    const distanceInFeet = distanceTravelledInFeet(startLocation, endLocation);

    // Free ride for a distance less than or equal to 400 feet
    if (distanceInFeet <= 400) {
      return 0;
    }
    // Charges 2 cents per foot for a distance between 400 and 2000 feet (first 400 feet are free)
    else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    }
    // Charges a flat fare of $25 for a distance over 2000 feet
    else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    }
    // Does not allow rides over 2500 feet
    else {
      return 'cannot travel that far';
    }
  }

