function containsDuplicate(array: number[]) {
  const seen = new Set<number>();
  for (const num of array) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}


