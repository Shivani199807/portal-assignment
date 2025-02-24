import rewardPoints from "../Utils/rewardPoints";

describe("rewardPoints function", () => {
    it("should return 0 when price is 50 or less", () => {
        expect(rewardPoints({ price: 50 })).toBe(0);
        expect(rewardPoints({ price: 30 })).toBe(0);
        expect(rewardPoints({ price: 0 })).toBe(0);
        expect(rewardPoints({ price: -10 })).toBe(0);
    });

    it("should calculate correct points for price between 51 and 100", () => {
        expect(rewardPoints({ price: 51 })).toBe(1); 
        expect(rewardPoints({ price: 75 })).toBe(25); 
        expect(rewardPoints({ price: 100 })).toBe(50);
    });

    it("should calculate correct points for price above 100", () => {
        expect(rewardPoints({ price: 101 })).toBe(52); 
        expect(rewardPoints({ price: 120 })).toBe(90); 
        expect(rewardPoints({ price: 150 })).toBe(150); 
    });

    it("should handle non-numeric or missing price values", () => {
        expect(rewardPoints({})).toBe(0);
        expect(rewardPoints(null)).toBe(0);
        expect(rewardPoints(undefined)).toBe(0);
        expect(rewardPoints({ price: "not a number" })).toBe(0);
    });

    it("should floor the price before calculation", () => {
        expect(rewardPoints({ price: 99.9 })).toBe(49); 
        expect(rewardPoints({ price: 150.7 })).toBe(150);
    });
});
