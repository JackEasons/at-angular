import { EventEmitter, OnInit } from '@angular/core';
import { Moment } from "moment";
import { AtDate } from "../at-day";
import 'moment/locale/zh-cn';
export declare class CalendarComponent implements OnInit {
    _clickMonth: EventEmitter<any>;
    _clickYear: EventEmitter<any>;
    constructor();
    _clickDate: EventEmitter<any>;
    disableDate: any;
    _show_value: any;
    showValue: any;
    monthName: any[];
    _disabledDate: any;
    private: any;
    _atType: 'full' | 'month' | 'year';
    atType: "year" | "month" | "full";
    private _weeks;
    private _months;
    private _years;
    years: Array<any>;
    months: Array<any>;
    atValue: any;
    private _atValue;
    private _atYear;
    private _atMonth;
    private _atDay;
    weeks: Array<any>;
    atYear: number;
    atMonth: number;
    format: string;
    atDay: number;
    ngOnInit(): void;
    buildMonth(d: Moment): Array<AtDate>;
    buildWeek(date: Moment, month: Moment): Array<AtDate>;
    buildCentury(year: any): any[];
    buildYears(date: Moment): any[];
    buildCalendar(): void;
    clickDay(day: any): void;
    clickMonth(single: any): void;
    clickYear(year: any): void;
}
