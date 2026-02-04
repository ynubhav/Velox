export const toSortedQueryString = (queryObj:Record<string, string>) => {
  const keys = Object.keys(queryObj).sort();
  const params = new URLSearchParams();

  for (const key of keys) {
    const val = queryObj[key];
    if (val !== undefined && val !== null) {
      params.append(key, val);
    }
  }

  if (keys.length) return "?" + params.toString();
  else return params.toString();
};