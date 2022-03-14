export function validateArrayUndefined(array: any) {
  if (-1 !== Object.values(array).findIndex((v) => v == null || v === '')) {
    return true;
  } else {
    return false;
  }
}
