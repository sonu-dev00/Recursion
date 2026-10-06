import { merge, mergeSort } from "./app";

test('merge unsorted array and sort them', () => {
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toStrictEqual([3,  9, 10, 27,
  38, 43, 82]);
  expect(mergeSort([])).toStrictEqual([]);
  expect(mergeSort([73])).toStrictEqual([73]);
  expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});

