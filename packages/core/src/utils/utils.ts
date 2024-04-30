import { DP_STR_DATE_LONG, DP_STR_FALLBACK_LANG } from '../constants/constants';
import { DPDay, DPMode, DPOptions } from '../types/types.i';

/**
 * Returns the names of the month and day in the specified locale for the given day object.
 * @param {DPDay} dayObject The day object containing day, month, and year.
 * @param {string} locale The locale string indicating the desired language and region.
 * @returns {{ month: string; day: string }} An object containing the month and day names.
 */
export function getMonthAndDayNames(dayObject: DPDay, locale: string): { month: string; day: string } {
  const { day, year, month } = dayObject;

  const date = new Date(year, month - 1, day);

  const monthName = new Intl.DateTimeFormat(locale, {
    month: DP_STR_DATE_LONG,
  }).format(date);
  const dayName = new Intl.DateTimeFormat(locale, {
    weekday: DP_STR_DATE_LONG,
  }).format(date);

  return { day: dayName, month: monthName };
}

/**
 * Generates an array of day objects based on the provided configuration.
 * @param {DPOptions} config The configuration object specifying options for generating days.
 * @returns {DPDay[]} An array of day objects sorted according to the specified mode.
 */
export function getDays(config: DPOptions) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();
  const dateArray: DPDay[] = [];

  if (config.mode === DPMode.CUSTOM) {
    const startDate = config.customDate?.start ? new Date(config.customDate.start.getTime()) : currentDate;
    const startYear = startDate.getFullYear();
    const endDate = config.customDate?.end ? new Date(config.customDate.end.getTime()) : startDate;
    while (startDate <= endDate) {
      const dayObj = {
        day: startDate.getDate(),
        month: startDate.getMonth() + 1,
        year: startDate.getFullYear(),
        startYear,
      };

      dateArray.push({
        ...dayObj,
        localizedNames: getMonthAndDayNames(dayObj, config.language || navigator.language || DP_STR_FALLBACK_LANG),
      });

      startDate.setDate(startDate.getDate() + 1);
    }
  } else {
    for (let day = config.startFromToday ? currentDay : 1; day <= daysInMonth; day++) {
      const dayObj = {
        day,
        month: currentMonth + 1,
        year: currentDate.getFullYear(),
        startYear: currentDate.getFullYear(),
      };
      dateArray.push({
        ...dayObj,
        localizedNames: getMonthAndDayNames(dayObj, config.language || navigator.language || DP_STR_FALLBACK_LANG),
      });
    }
  }

  return dateArray.sort((x, y) => {
    if (config.mode === DPMode.CURRENT_MONTH) {
      return x.day - y.day;
    } else {
      const yearDiff = x.year - y.year;
      if (yearDiff !== 0) {
        return yearDiff;
      }

      const monthDiff = x.month - y.month;
      if (monthDiff !== 0) {
        return monthDiff;
      }

      return x.day - y.day;
    }
  });
}
