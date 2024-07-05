function twoSum(nums: number[], target: number): number[] {
    const hashMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (hashMap[complement] !== undefined) {
            return [hashMap[complement], i];
        }

        hashMap[nums[i]] = i;
    }

    return [];
};