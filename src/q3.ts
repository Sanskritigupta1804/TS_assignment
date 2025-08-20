function findMax(arr: number[]): number | null {
  if (arr.length === 0) return null;
  return Math.max(...arr);
}

const nums1: number[] = [1, 2, 3, 4];
const nums2: number[] = [];

console.log(findMax(nums1)); 
console.log(findMax(nums2)); 
