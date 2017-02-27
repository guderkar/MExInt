"use strict";
var ArgumentException_1 = require("./Exceptions/ArgumentException");
var moment = require('moment-timezone');
exports.moment = moment;
(function (DateTimeKind) {
    DateTimeKind[DateTimeKind["Unspecified"] = 0] = "Unspecified";
    DateTimeKind[DateTimeKind["Utc"] = 1] = "Utc";
    DateTimeKind[DateTimeKind["Local"] = 2] = "Local";
})(exports.DateTimeKind || (exports.DateTimeKind = {}));
var DateTimeKind = exports.DateTimeKind;
/**
 * DateTime - basic date time based on moment.js
 */
var DateTime = (function () {
    function DateTime(date, kind) {
        if (kind === void 0) { kind = DateTimeKind.Local; }
        this.kind = DateTimeKind.Unspecified;
        this.momentDate = moment();
        if (date instanceof DateTime) {
            this.momentDate = date.Date.clone();
        }
        else {
            this.momentDate = moment(date);
        }
        this.kind = kind;
    }
    Object.defineProperty(DateTime.prototype, "Kind", {
        get: function () { return this.kind; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Date", {
        get: function () { return this.momentDate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "currentUtcOffset", {
        get: function () { return this.momentDate.utcOffset(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime, "Now", {
        get: function () { return new DateTime(moment()); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "TotalMilliSeconds", {
        get: function () { return this.momentDate.valueOf(); },
        enumerable: true,
        configurable: true
    });
    DateTime.prototype.Add = function (quantity, unit) {
        var date = moment(this.momentDate);
        date.add(quantity, unit);
        return new DateTime(date);
    };
    DateTime.Compare = function (x, y) {
        var diff = x.momentDate.diff(y.momentDate);
        if (diff === 0)
            return 0;
        if (diff < 0)
            return -1;
        return 1;
    };
    DateTime.prototype.CompareTo = function (toDate) {
        return DateTime.Compare(this, toDate);
    };
    DateTime.prototype.Difference = function (toDate) {
        return new TimeSpan(this.momentDate.diff(toDate.momentDate));
    };
    DateTime.prototype.Format = function (formatting) {
        return this.momentDate.format(formatting);
    };
    DateTime.Parse = function (value, kind) {
        if (kind === void 0) { kind = DateTimeKind.Unspecified; }
        return new DateTime(value, kind);
    };
    DateTime.prototype.ToISOString = function () { return this.momentDate.toISOString(); };
    DateTime.prototype.toString = function () { return this.ToISOString(); };
    DateTime.prototype.utcOffset = function (value) { this.momentDate.utcOffset(value); };
    DateTime.DateTimeToXSDateTime = function (dateTime) {
        var format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'; //using moment format for c#->"yyyy-MM-ddTHH:mm:ss.fff";
        // switch (dateTime.Kind) {
        // 	case DateTimeKind.Utc:
        // 		format += "Z";
        // 		break;
        // 	case DateTimeKind.Local:
        // 		format += "zzz";
        // 		break;
        // 	default:
        // 		break;
        // }
        // Depending on the current culture, DateTime formatter will replace ':' with 
        // the DateTimeFormatInfo.TimeSeparator property which may not be ':'. Force the proper string
        // to be used by using the InvariantCulture.
        return dateTime.Format(format); //, CultureInfo.InvariantCulture);
    };
    DateTime.DateTimeToXSDate = function (date) {
        var format = 'YYYY-MM-DDZ'; //using moment format for c#->"yyyy-MM-dd";
        // switch (date.Kind) {
        // 	case DateTimeKind.Utc:
        // 		format = "yyyy-MM-ddZ";
        // 		break;
        // 	case DateTimeKind.Unspecified:
        // 		format = "yyyy-MM-dd";
        // 		break;
        // 	default: // DateTimeKind.Local is remaining
        // 		format = "yyyy-MM-ddzzz";
        // 		break;
        // }
        // Depending on the current culture, DateTime formatter will 
        // translate dates from one culture to another (e.g. Gregorian to Lunar).  The server
        // however, considers all dates to be in Gregorian, so using the InvariantCulture will
        // ensure this.
        return date.Format(format); //, CultureInfo.InvariantCulture);
    };
    DateTime.MinValue = new DateTime('0001-01-01T00:00:00+00:00');
    DateTime.MaxValue = new DateTime("9999-12-31T23:59:59.9999999+00:00");
    return DateTime;
}());
exports.DateTime = DateTime;
/**
* TimeZoneInfo
*/
var TimeZoneInfo = (function () {
    function TimeZoneInfo(offset) {
        this.offset = offset;
    }
    Object.defineProperty(TimeZoneInfo, "Utc", {
        get: function () { return this.utc; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo, "Local", {
        get: function () { return this.local; },
        enumerable: true,
        configurable: true
    });
    TimeZoneInfo.IsLocalTimeZone = function (timeZone) {
        return timeZone.offset === this.local.offset;
    };
    Object.defineProperty(TimeZoneInfo.prototype, "DisplayName", {
        get: function () { return this.offset.toString(); },
        enumerable: true,
        configurable: true
    });
    TimeZoneInfo.ConvertTime = function (dateTime, sourceTZ, destinationTZ) {
        var returnDate = new DateTime(dateTime);
        //var offset = returnDate.currentUtcOffset + destinationTZ.offset - sourceTZ.offset 
        returnDate.utcOffset(destinationTZ.offset);
        return returnDate;
    };
    TimeZoneInfo.utc = new TimeZoneInfo(0);
    TimeZoneInfo.local = new TimeZoneInfo(moment().local().utcOffset());
    return TimeZoneInfo;
}());
exports.TimeZoneInfo = TimeZoneInfo;
var TimeSpan = (function () {
    function TimeSpan(args) {
        this.duration = moment.duration(args);
    }
    TimeSpan.prototype.humanize = function (withSuffix) { return this.duration.humanize(withSuffix); };
    TimeSpan.prototype.as = function (units) { return this.duration.as(units); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.milliseconds = function () { return this.duration.milliseconds(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asMilliseconds = function () { return this.duration.asMilliseconds(); };
    TimeSpan.prototype.Milliseconds = function () { return this.duration.milliseconds(); };
    Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
        get: function () { return this.duration.asMilliseconds(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.seconds = function () { return this.duration.seconds(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asSeconds = function () { return this.duration.asSeconds(); };
    TimeSpan.prototype.Seconds = function () { return this.duration.seconds(); };
    Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
        get: function () { return this.duration.asSeconds(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.minutes = function () { return this.duration.minutes(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asMinutes = function () { return this.duration.asMinutes(); };
    TimeSpan.prototype.Minutes = function () { return this.duration.minutes(); };
    Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
        get: function () { return this.duration.asMinutes(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.hours = function () { return this.duration.hours(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asHours = function () { return this.duration.asHours(); };
    TimeSpan.prototype.Hours = function () { return this.duration.hours(); };
    Object.defineProperty(TimeSpan.prototype, "TotalHours", {
        get: function () { return this.duration.asHours(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.days = function () { return this.duration.days(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asDays = function () { return this.duration.asDays(); };
    TimeSpan.prototype.Days = function () { return this.duration.days(); };
    Object.defineProperty(TimeSpan.prototype, "TotalDays", {
        get: function () { return this.duration.asDays(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.months = function () { return this.duration.months(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asMonths = function () { return this.duration.asMonths(); };
    TimeSpan.prototype.Months = function () { return this.duration.months(); };
    Object.defineProperty(TimeSpan.prototype, "TotalMonths", {
        get: function () { return this.duration.asMonths(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.years = function () { return this.duration.years(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asYears = function () { return this.duration.asYears(); };
    TimeSpan.prototype.Years = function () { return this.duration.years(); };
    Object.defineProperty(TimeSpan.prototype, "TotalYears", {
        get: function () { return this.duration.asYears(); },
        enumerable: true,
        configurable: true
    });
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.weeks = function () { return this.duration.weeks(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.asWeeks = function () { return this.duration.asWeeks(); };
    TimeSpan.prototype.Weeks = function () { return this.duration.weeks(); };
    Object.defineProperty(TimeSpan.prototype, "Totalweeks", {
        get: function () { return this.duration.asWeeks(); },
        enumerable: true,
        configurable: true
    });
    TimeSpan.prototype.add = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.add(a));
        }
        else {
            return new TimeSpan(this.duration.add(a, p));
        }
    };
    TimeSpan.prototype.Add = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.add(a));
        }
        else {
            return new TimeSpan(this.duration.add(a, p));
        }
    };
    TimeSpan.prototype.subtract = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    };
    TimeSpan.prototype.Subtract = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.toISOString = function () { return this.duration.toISOString(); };
    TimeSpan.prototype.ToISOString = function () { return this.duration.toISOString(); };
    /** @internal TODO: to be removed in 0.7. */
    TimeSpan.prototype.toJSON = function () { return this.duration.toJSON(); };
    TimeSpan.prototype.ToJSON = function () { return this.duration.toJSON(); };
    TimeSpan.FromDays = function (value) { return new TimeSpan(value * TimeSpan.MillisPerDay); };
    TimeSpan.FromHours = function (value) { return new TimeSpan(value * TimeSpan.MillisPerHour); };
    TimeSpan.FromMilliseconds = function (value) { return new TimeSpan(value); };
    TimeSpan.FromMinutes = function (value) { return new TimeSpan(value * TimeSpan.MillisPerMinute); };
    TimeSpan.FromSeconds = function (value) { return new TimeSpan(value * TimeSpan.MillisPerSecond); };
    TimeSpan.MillisPerSecond = 1000; //const
    TimeSpan.MillisPerMinute = TimeSpan.MillisPerSecond * 60; //     60,000 //const
    TimeSpan.MillisPerHour = TimeSpan.MillisPerMinute * 60; //  3,600,000 //const
    TimeSpan.MillisPerDay = TimeSpan.MillisPerHour * 24; // 86,400,000 //const
    TimeSpan.MaxSeconds = Number.MAX_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
    TimeSpan.MinSeconds = Number.MIN_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
    TimeSpan.MaxMilliSeconds = Number.MAX_VALUE; /// TimeSpan.TicksPerMillisecond; //const
    TimeSpan.MinMilliSeconds = Number.MIN_VALUE; /// TimeSpan.TicksPerMillisecond; //const
    //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const
    TimeSpan.Zero = new TimeSpan(0); //readonly
    TimeSpan.MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE); //readonly
    TimeSpan.MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE); //readonly
    return TimeSpan;
}());
exports.TimeSpan = TimeSpan;
var TimeSpan2;
(function (TimeSpan2) {
    /** TimeSpan basics from c# using momentjs */
    var TimeSpan = (function () {
        function TimeSpan(millisOrHrsOrDays, minsOrHrs, secsOrMins, seconds, milliseconds) {
            this._millis = 0;
            var argsLength = arguments.length;
            var millis = 0;
            if (typeof milliseconds !== 'undefined')
                millis = milliseconds;
            switch (argsLength) {
                case 1:
                    this._millis = millisOrHrsOrDays;
                    break;
                case 3:
                    this._millis = TimeSpan.TimeToTicks(millisOrHrsOrDays, minsOrHrs, secsOrMins);
                    break;
                case 4:
                case 5:
                    var totalSeconds = millisOrHrsOrDays * 24 * 3600 + minsOrHrs * 3600 + secsOrMins * 60 + seconds;
                    if (totalSeconds > TimeSpan.MaxSeconds || totalSeconds < TimeSpan.MinSeconds)
                        throw new ArgumentException_1.ArgumentOutOfRangeException("DateTime.ts - TimeSpan.ctor - Overflow_TimeSpanTooLong");
                    this._millis = totalSeconds * TimeSpan.MillisPerSecond + millis;
                    break;
                default:
                    throw new Error("DateTime.ts - TimeSpan.ctor - invalid number of arguments");
            }
        }
        TimeSpan.TimeToTicks = function (hour, minute, second) {
            // totalSeconds is bounded by 2^31 * 2^12 + 2^31 * 2^8 + 2^31,
            // which is less than 2^44, meaning we won't overflow totalSeconds.
            var totalSeconds = hour * 3600 + minute * 60 + second;
            if (totalSeconds > this.MaxSeconds || totalSeconds < this.MinSeconds)
                throw new ArgumentException_1.ArgumentOutOfRangeException("DateTime.ts - TimeSpan.TimeToTicks - Overflow_TimeSpanTooLong");
            return totalSeconds * this.MillisPerSecond;
        };
        Object.defineProperty(TimeSpan.prototype, "Days", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerDay); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Hours", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerHour); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Milliseconds", {
            get: function () { return Math.floor(this._millis); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Minutes", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerMinute); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Seconds", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerSecond); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalDays", {
            //public get Ticks(): number { return Math.floor( this._millis / TimeSpan.); }
            get: function () { return this._millis / TimeSpan.MillisPerDay; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalHours", {
            get: function () { return this._millis / TimeSpan.MillisPerHour; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
            get: function () { return this._millis; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
            get: function () { return this._millis / TimeSpan.MillisPerMinute; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
            get: function () { return this._millis / TimeSpan.MillisPerSecond; },
            enumerable: true,
            configurable: true
        });
        // Compares two TimeSpan values, returning an integer that indicates their
        // relationship.
        //
        TimeSpan.Compare = function (t1, t2) {
            if (t1._millis > t2._millis)
                return 1;
            if (t1._millis < t2._millis)
                return -1;
            return 0;
        };
        TimeSpan.Equals = function (t1, t2) { return t1._millis === t2._millis; };
        TimeSpan.FromDays = function (value) { return new TimeSpan(value * TimeSpan.MillisPerDay); };
        TimeSpan.FromHours = function (value) { return new TimeSpan(value * TimeSpan.MillisPerHour); };
        TimeSpan.FromMilliseconds = function (value) { return new TimeSpan(value); };
        TimeSpan.FromMinutes = function (value) { return new TimeSpan(value * TimeSpan.MillisPerMinute); };
        TimeSpan.FromSeconds = function (value) { return new TimeSpan(value * TimeSpan.MillisPerSecond); };
        //public static FromTicks(value: number): TimeSpan{ return new TimeSpan(value * TimeSpan.MillisPerDay); }
        TimeSpan.Parse = function (s) {
            return null;
        };
        //public static Parse(input: string, formatProvider: IFormatProvider): TimeSpan;
        //public static ParseExact(string input, string[] formats, IFormatProvider formatProvider): TimeSpan;
        //public static ParseExact(string input, string format, IFormatProvider formatProvider): TimeSpan;
        //public static ParseExact(string input, string[] formats, IFormatProvider formatProvider, TimeSpanStyles styles): TimeSpan;
        //public static ParseExact(string input, string format, IFormatProvider formatProvider, TimeSpanStyles styles): TimeSpan;
        //public static TryParse(string s, out TimeSpan result): boolean;
        //public static TryParse(string input, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string[] formats, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string format, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string[] formats, IFormatProvider formatProvider, TimeSpanStyles styles, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string format, IFormatProvider formatProvider, TimeSpanStyles styles, out TimeSpan result): boolean { }
        TimeSpan.prototype.Add = function (ts) {
            var result = this._millis + ts._millis;
            // Overflow if signs of operands was identical and result's sign was opposite.
            // >> 63 gives the sign bit (either 64 1's or 64 0's).
            if ((this._millis >>> 63 === ts._millis >> 63) && (this.Milliseconds >>> 63 !== result >> 63))
                throw new Error("Overflow_TimeSpanTooLong"); //OverflowException
            return new TimeSpan(result);
        };
        TimeSpan.prototype.CompareTo = function (value) {
            if (!(value instanceof TimeSpan))
                throw new Error("Arg_MustBeTimeSpan"); //ArgumentException
            var m = value._millis;
            if (this._millis > m)
                return 1;
            if (this._millis < m)
                return -1;
            return 0;
        };
        // non ticks use in js - public static     TicksPerMillisecond:number =  10000; //const
        // non ticks use in js - private static  MillisecondsPerTick:number = 1.0 / TimeSpan.TicksPerMillisecond; //const
        // non ticks use in js - public static  TicksPerSecond:number = TimeSpan.TicksPerMillisecond * 1000;   // 10,000,000 //const
        // non ticks use in js - private static  SecondsPerTick:number =  1.0 / TimeSpan.TicksPerSecond;         // 0.0001 //const
        // non ticks use in js - public static  TicksPerMinute:number = TimeSpan.TicksPerSecond * 60;         // 600,000,000 //const
        // non ticks use in js - private static  MinutesPerTick:number = 1.0 / TimeSpan.TicksPerMinute; // 1.6666666666667e-9 //const
        // non ticks use in js - public static  TicksPerHour:number = TimeSpan.TicksPerMinute * 60;        // 36,000,000,000 //const
        // non ticks use in js - private static  HoursPerTick:number = 1.0 / TimeSpan.TicksPerHour; // 2.77777777777777778e-11 //const
        // non ticks use in js - public static  TicksPerDay:number = TimeSpan.TicksPerHour * 24;          // 864,000,000,000 //const
        // non ticks use in js - private static  DaysPerTick:number = 1.0 / TimeSpan.TicksPerDay; // 1.1574074074074074074e-12 //const
        TimeSpan.MillisPerSecond = 1000; //const
        TimeSpan.MillisPerMinute = TimeSpan.MillisPerSecond * 60; //     60,000 //const
        TimeSpan.MillisPerHour = TimeSpan.MillisPerMinute * 60; //  3,600,000 //const
        TimeSpan.MillisPerDay = TimeSpan.MillisPerHour * 24; // 86,400,000 //const
        TimeSpan.MaxSeconds = Number.MAX_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
        TimeSpan.MinSeconds = Number.MIN_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
        TimeSpan.MaxMilliSeconds = Number.MAX_VALUE; /// TimeSpan.TicksPerMillisecond; //const
        TimeSpan.MinMilliSeconds = Number.MIN_VALUE; /// TimeSpan.TicksPerMillisecond; //const
        //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const
        TimeSpan.Zero = new TimeSpan(0); //readonly
        TimeSpan.MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE); //readonly
        TimeSpan.MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE); //readonly
        return TimeSpan;
    }());
})(TimeSpan2 || (TimeSpan2 = {}));
//
// Summary:
//     Defines the formatting options that customize string parsing for some date and
//     time parsing methods.
(function (DateTimeStyles) {
    //
    // Summary:
    //     Default formatting options must be used. This value represents the default style
    //     for the System.DateTime.Parse(System.String), System.DateTime.ParseExact(System.String,System.String,System.IFormatProvider),
    //     and System.DateTime.TryParse(System.String,System.DateTime@) methods.
    DateTimeStyles[DateTimeStyles["None"] = 0] = "None";
    //
    // Summary:
    //     Leading white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    DateTimeStyles[DateTimeStyles["AllowLeadingWhite"] = 1] = "AllowLeadingWhite";
    //
    // Summary:
    //     Trailing white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    DateTimeStyles[DateTimeStyles["AllowTrailingWhite"] = 2] = "AllowTrailingWhite";
    /**
     * Summary:
     *	    Extra white-space characters in the middle of the string must be ignored during
     *	    parsing, except if they occur in the System.Globalization.DateTimeFormatInfo
     *	    format patterns.
     */
    DateTimeStyles[DateTimeStyles["AllowInnerWhite"] = 4] = "AllowInnerWhite";
    /**
     * 	Summary:
     *	    Extra white-space characters anywhere in the string must be ignored during parsing,
     *	    except if they occur in the System.Globalization.DateTimeFormatInfo format patterns.
     *	    This value is a combination of the System.Globalization.DateTimeStyles.AllowLeadingWhite,
     *	    System.Globalization.DateTimeStyles.AllowTrailingWhite, and System.Globalization.DateTimeStyles.AllowInnerWhite
     *	    values.
     */
    DateTimeStyles[DateTimeStyles["AllowWhiteSpaces"] = 7] = "AllowWhiteSpaces";
    //
    // Summary:
    //     If the parsed string contains only the time and not the date, the parsing methods
    //     assume the Gregorian date with year = 1, month = 1, and day = 1. If this value
    //     is not used, the current date is assumed.
    DateTimeStyles[DateTimeStyles["NoCurrentDateDefault"] = 8] = "NoCurrentDateDefault";
    //
    // Summary:
    //     Date and time are returned as a Coordinated Universal Time (UTC). If the input
    //     string denotes a local time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeLocal,
    //     the date and time are converted from the local time to UTC. If the input string
    //     denotes a UTC time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeUniversal,
    //     no conversion occurs. If the input string does not denote a local or UTC time,
    //     no conversion occurs and the resulting System.DateTime.Kind property is System.DateTimeKind.Unspecified.
    DateTimeStyles[DateTimeStyles["AdjustToUniversal"] = 16] = "AdjustToUniversal";
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a local time.
    DateTimeStyles[DateTimeStyles["AssumeLocal"] = 32] = "AssumeLocal";
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a UTC.
    DateTimeStyles[DateTimeStyles["AssumeUniversal"] = 64] = "AssumeUniversal";
    //
    // Summary:
    //     The System.DateTimeKind field of a date is preserved when a System.DateTime object
    //     is converted to a string using the "o" or "r" standard format specifier, and
    //     the string is then converted back to a System.DateTime object.
    DateTimeStyles[DateTimeStyles["RoundtripKind"] = 128] = "RoundtripKind";
})(exports.DateTimeStyles || (exports.DateTimeStyles = {}));
var DateTimeStyles = exports.DateTimeStyles;
