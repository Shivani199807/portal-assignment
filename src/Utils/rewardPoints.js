const rewardPoints = (data) => {
    let totalPoints = 0;
    console.log(data)
    const price = data?.price > 0 ? Math.floor(data.price) : 0;
    if (price > 50) {
        totalPoints = totalPoints + (price - 50)

    } else if (price > 100) {
        totalPoints = totalPoints + 2 * (price - 100) + 50;
    } else {
        totalPoints = 0
    }
    return totalPoints
}

export default rewardPoints;