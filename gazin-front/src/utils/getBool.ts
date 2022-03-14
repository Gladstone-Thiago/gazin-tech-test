export function getBool(val) {
  if (val) {
    return !!JSON.parse(String(val).toLowerCase());
  } else {
    false;
  }
}
