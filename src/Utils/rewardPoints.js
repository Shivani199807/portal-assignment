const rewardPoints = (data) => {
    let totalPoints = 0;
  
    const price = data?.price > 0 ? Math.floor(data.price) : 0;
   
    if (price > 100) {
        totalPoints = 2 * (price - 100) + 50;
    } else if (price > 50) {
        totalPoints = price - 50;
    } else {
        totalPoints = 0;
    }
    return totalPoints
}

export default rewardPoints;