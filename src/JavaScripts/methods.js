class Methods {
  // Checking Supercase
  checkingSupercase = (day) => {
    let lastDigit = 0;

    if (day == 11 || day == 12 || day == 13) return "th";
    else {
      lastDigit = day % 10;
      return lastDigit == 1
        ? "st"
        : lastDigit == 2
        ? "nd"
        : lastDigit == 3
        ? "rd"
        : "th";
    }
  };

  checkingToday = (month = 0, year = 0) => {
    const date = new Date();
    if (month == date.getMonth() + 1 && year == date.getFullYear()) return true;
    else return false;
  };
}

export default Methods;
