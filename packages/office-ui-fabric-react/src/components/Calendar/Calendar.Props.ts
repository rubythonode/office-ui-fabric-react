import * as React from 'react';
import { Calendar } from './Calendar';

export interface ICalendar {
  /** Sets focus to the selected date. */
  focus(): void;
}

export interface ICalendarProps extends React.Props<Calendar> {
  /**
  * Callback issued when a date is selected
  */
  onSelectDate?: (date: Date) => void;

  /**
   * Callback issued when calendar is closed
   */
  onDismiss?: () => void;

  /**
   * Whether the month picker is shown beside the day picker or hidden.
   * @defaultvalue true
   */
  isMonthPickerVisible?: boolean;

  /**
   * Default value of the Calendar, if any
   */
  value?: Date;

  /**
   * The first day of the week for your locale.
   * @defaultvalue DayOfWeek.Sunday
   */
  firstDayOfWeek?: DayOfWeek;

  /**
   * @deprecated
   * This property has been removed at 0.80.0 in place of the focus method, to be removed @ 1.0.0.
   *
   */
  shouldFocusOnMount?: boolean;

  /**
   * Localized strings to use in the Calendar
   */
  strings: ICalendarStrings;
}

export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

export interface ICalendarStrings {
  /**
   * An array of strings for the full names of months.
   * The array is 0-based, so months[0] should be the full name of January.
   */
  months: string[];

  /**
   * An array of strings for the short names of months.
   * The array is 0-based, so shortMonths[0] should be the short name of January.
   */
  shortMonths: string[];

  /**
   * An array of strings for the full names of days of the week.
   * The array is 0-based, so days[0] should be the full name of Sunday.
   */
  days: string[];

  /**
   * An array of strings for the initials of the days of the week.
   * The array is 0-based, so days[0] should be the initial of Sunday.
   */
  shortDays: string[];

  /**
   * String to render for button to direct the user to today's date.
   */
  goToToday: string;
}
