export function sortData(a, b) {
  if (a.year > b.year) {
    return -1;
  } else if (b.year > a.year) {
    return 1;
  } else if (a.month && b.month) {
    if (parseInt(a.month) > parseInt(b.month)) {
      return -1;
    } else if (parseInt(a.month) < parseInt(b.month)) {
      return 1;
    } else if (a.day && b.day) {
      if (parseInt(a.day) > parseInt(b.day)) {
        return -1;
      } else if (parseInt(a.day) < parseInt(b.day)) {
        return 1;
      }
    }
  }

  return 0;
}
