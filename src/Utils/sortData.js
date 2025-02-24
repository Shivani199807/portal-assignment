const sortData = (transactions) => {
    transactions.sort((a, b) => {
        const dateA = new Date(a.purchaseDate);
        const dateB = new Date(b.purchaseDate);
        
        const yearA = dateA.getFullYear();
        const monthA = dateA.getMonth();
        const dayA = dateA.getDate();
        
        const yearB = dateB.getFullYear();
        const monthB = dateB.getMonth();
        const dayB = dateB.getDate();

       
        if (yearB !== yearA) return yearB - yearA;

        
        if (monthB !== monthA) return monthB - monthA;

        
        return dayB - dayA;
    });

    return transactions;
};


export default sortData;