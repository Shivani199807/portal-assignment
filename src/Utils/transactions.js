import rewardPoints from "./rewardPoints";
import sortData from "./sortData";
const transactions=(data)=>{
console.log(data)
const transactionsResult=    data.map((item)=>
    ({
        ...item,
        rewardPoints:rewardPoints(item)

    })
    
    )
return sortData(transactionsResult)
}

export default transactions;