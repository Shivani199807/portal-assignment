import rewardPoints from "../Utils/rewardPoints";

describe("rewardPoints function", () => {
  it("should return 0 when price is 50 or less", () => {
    expect(rewardPoints(50)).toBe(0);
    expect(rewardPoints(30)).toBe(0);
    expect(rewardPoints(0)).toBe(0);
    expect(rewardPoints(-10)).toBe(0);
});

  it("should calculate correct points for price between 51 and 100", () => {
    expect(rewardPoints(51)).toBe(1);
    expect(rewardPoints(75)).toBe(25);
    expect(rewardPoints(100)).toBe(50);
});

  it("should calculate correct points for price above 100", () => {
    expect(rewardPoints(101)).toBe(52);
    expect(rewardPoints(120)).toBe(90);
    expect(rewardPoints(150)).toBe(150);
  });

  it("should handle non-numeric or missing price values", () => {
    expect(rewardPoints({})).toBe(0);
    expect(rewardPoints(null)).toBe(0);
    expect(rewardPoints(undefined)).toBe(0);
    expect(rewardPoints("not a number" )).toBe(0);
  });

  it("should floor the price before calculation", () => {
    expect(rewardPoints(99.9 )).toBe(49);
    expect(rewardPoints(150.7 )).toBe(150);
  });
});
