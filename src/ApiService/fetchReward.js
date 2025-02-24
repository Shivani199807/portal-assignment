
import logger from "../Utils/logger";
export const fetchRewardData = async (url) => {
    try {
        const fetchData = await fetch(`${url}`);
        if (!fetchData.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const response = await fetchData.json();


        return response
    }

    catch (error) {
        logger.error(`${error}`)
        throw error
    }
}