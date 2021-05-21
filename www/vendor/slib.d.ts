declare namespace S {
    /**
     * Reference to the window objetct to prevent typescript type errors.
     */
    const Window: any;
    function isObject(v: any): boolean;
    function getMetaTag(key: string): string;
    let debug: boolean;
    let needToLoadModules: boolean;
    function isEmpty(v: any): boolean;
    function isNumeric(v: any): boolean;
    function isCharFromCode(n: number): boolean;
    function isChar(n: string): boolean;
    function isDigit(n: string): boolean;
    interface Map<T> {
        [key: string]: T;
    }
    function toInt(value: any): number;
    function parseCurrency(value: any, defaultValue?: number): number;
    function parseFloat(value: any, defaultValue?: number): number;
    function toFloat(value: string | number): number;
    function round(number: number, decimals?: number): number;
    /**
     * Deep clone an object
     */
    function clone<T>(obj: T): T;
    interface AnyProperty {
        [prop: string]: any;
    }
}
/**
 * Extensions of the global javascript objects
 */
interface String {
    replaceAll(find: string, replace: string): string;
    contains(value: string): boolean;
    hasPrefix(prefix: string): boolean;
    hasSuffix(suffix: string): boolean;
    trimPrefix(prefix: string): string;
    trimSuffix(suffix: string): string;
    splitEx(separator: string | RegExp): string[];
    equalFold(other: string): boolean;
    toTitle(): string;
    toUntitle(): string;
}
interface KeyIndexer<T> {
    [key: string]: T;
}
interface Array<T> {
    first(func?: (t: T) => boolean): T | null;
    firstIndex(func: (t: T) => boolean): number;
    last(func?: (t: T) => boolean): T | null;
    contains(v: T): boolean;
    remove(v: T): void;
    removeAt(i: number): void;
    removeWhere(func: (t: T) => any): void;
    insertAt(i: number, v: T): void;
    any(func: (t: T) => any): boolean;
    all(func: (t: T) => any): boolean;
    where(func: (t: T) => any): Array<T>;
    take(n: number): Array<T>;
    select<K>(func: (t: T) => K): Array<K>;
    selectMany<K>(func: (t: T) => K[]): Array<K>;
    count(func: (t: T) => boolean): number;
    min(func: (t: T) => number): number;
    max(func: (t: T) => number): number;
    distinct(): Array<T>;
    sum<K extends number>(func?: (t: T) => K): number;
    groupBy(func: (t: T) => string | number): KeyIndexer<T[]>;
}
declare namespace S {
    function toBool(v: string | boolean): boolean;
}
declare namespace S {
    function removeDiacritics(str: string): string;
}
declare namespace S {
    function clear(element: HTMLElement): void;
    function setContent(element: HTMLElement, child: HTMLElement): void;
    function insertFirst(childNode: HTMLElement, parent: HTMLElement): void;
    function replace(newNode: Node, oldNode: Node): void;
    function insertBefore(newNode: HTMLElement, referenceNode: HTMLElement): void;
    function insertAfter(newNode: HTMLElement, referenceNode: HTMLElement): void;
    function addClass(element: HTMLElement, classNames: string): void;
    function removeClass(element: HTMLElement, className: string): void;
    function create<K extends keyof HTMLElementTagNameMap>(tagName: K, className?: string, parent?: HTMLElement, content?: string | number | HTMLElement): HTMLElementTagNameMap[K];
    function create(type: string, className?: string, parent?: HTMLElement, content?: string | number | HTMLElement): HTMLElement;
    function createInput(type: string, className?: string, parent?: HTMLElement, value?: any): HTMLInputElement;
    function setText(element: HTMLElement, text: string, lineBreaks?: boolean): void;
    function getOffset(element: HTMLElement): {
        top: number;
        left: number;
    };
    function getSize(element: HTMLElement): {
        height: number;
        width: number;
    };
}
declare namespace S {
    function setGlobalHeader(key: string, value: string): void;
    function get(url: string, data?: any): Promise<any>;
    function put(url: string, data?: any): Promise<any>;
    function post(url: string, data?: any): Promise<any>;
    function del(url: string): Promise<any>;
    function request(method: HTTPMethod, url: string, data?: any): Promise<any>;
    type FetchInterceptor = (method: HTTPMethod, url: string, data?: any, headers?: HeadersInit) => any;
    function setFetchInterceptor(i: FetchInterceptor): void;
    function postMultipart(url: string, data?: any, headers?: any): Promise<any>;
}
declare namespace S {
    function pathBase(path: string): string;
}
declare namespace S {
    function format(pattern: string, v: any): string;
    function formatNumber(value: number): string;
    function formatPercent(value: number): string;
    interface NumberCulture {
        numberOfDecimals: number;
        decimalSeparator: string;
        thousandSeparator: string;
    }
    interface CurrencyFormat {
        numberOfDecimals: number;
        currencySymbol: string;
        currencyPattern: string;
        decimalSeparator: string;
        thousandSeparator: string;
    }
    function fmt(key: string, ...args: any[]): string;
}
declare namespace S {
    /**
     * dynamically execute a function, even if it is namespaced ("foo.bar()")
     */
    function exec(name: string, ...args: any[]): any;
    function throttleCall(fn: Function, millis?: number): void;
    function getFuncion(name: string): any;
    function instantiate(name: string, ...args: any[]): any;
    function getUniqueID(): string;
}
declare namespace i18n {
    interface Language {
        rules: PluralizationRule[];
        resources: S.Map<Translation>;
    }
    type Translation = StringOrPlurals | S.Map<StringOrPlurals>;
    type StringOrPlurals = string | string[];
    interface PluralizationRule {
        min?: number;
        max?: number;
        index: number;
    }
    function addRules(lang: string, rules: PluralizationRule[]): void;
    function setTranslations(module: string, lang: string, data: Language): void;
    function T(key: string, ...args: any[]): string;
    function getText(type: string, count: number, key: string, ...args: any[]): string;
}
declare namespace S {
    let locale: Locale;
    function setLocale(loc: Locale): void;
    interface Locale {
        timezone?: string;
        language?: string;
        pluralizationRules?: i18n.PluralizationRule[];
        culture: string;
        currencySymbol: string;
        currencyPattern: string;
        numberOfDecimals: number;
        decimalSeparator: string;
        thousandSeparator: string;
        dateTimePattern: string;
        shortDatePattern: string;
        dateMonthTimePattern: string;
        longDatePattern: string;
        dateMonthPattern: string;
        firstDayOfWeek: number;
    }
    function loadTranslations(module: string, type?: string): Promise<void>;
}
declare namespace Keys {
    const DEL = 8;
    const TAB = 9;
    const ENTER = 13;
    const SHIFT = 16;
    const CTRL = 17;
    const ALT = 18;
    const ESC = 27;
    const SPACE = 32;
    const PAGEUP = 33;
    const PAGEDOWN = 34;
    const END = 35;
    const HOME = 36;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;
    const SUPR = 46;
    const KEY_0 = 48;
    const KEY_1 = 49;
    const KEY_2 = 50;
    const KEY_3 = 51;
    const KEY_4 = 52;
    const KEY_5 = 53;
    const KEY_6 = 54;
    const KEY_7 = 55;
    const KEY_8 = 56;
    const KEY_9 = 57;
    const A = 65;
    const B = 66;
    const C = 67;
    const D = 68;
    const E = 69;
    const F = 70;
    const G = 71;
    const H = 72;
    const I = 73;
    const J = 74;
    const K = 75;
    const L = 76;
    const M = 77;
    const N = 78;
    const O = 79;
    const P = 80;
    const Q = 81;
    const R = 82;
    const S = 83;
    const T = 84;
    const U = 85;
    const V = 86;
    const W = 87;
    const X = 88;
    const Y = 89;
    const Z = 90;
    const NUM0 = 96;
    const NUM1 = 97;
    const NUM2 = 98;
    const NUM3 = 99;
    const NUM4 = 100;
    const NUM5 = 101;
    const NUM6 = 102;
    const NUM7 = 103;
    const NUM8 = 104;
    const NUM9 = 105;
    const MUL = 106;
    const ADD = 107;
    const SUB = 109;
    const POINT = 110;
    const DIV = 111;
    const F1 = 112;
    const F2 = 113;
    const F3 = 114;
    const F4 = 115;
    const F5 = 116;
    const F6 = 117;
    const F7 = 118;
    const F8 = 119;
    const F9 = 120;
    const F10 = 121;
    const F11 = 122;
    const F12 = 123;
    const SEMICOLON = 186;
    const EQUAL = 187;
    const COMMA = 188;
    const DASH = 189;
    const PERIOD = 190;
    const FORWARDSLASH = 191;
    const ACCENT = 192;
    const OPENBRACKET = 219;
    const BACKSLASH = 220;
    const CLOSEBRACKET = 221;
    const SINGLEQUOTE = 222;
    const META = 224;
    const ALTGR = 225;
    function getKeyString(keyCode: number): "A" | "Z" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "DEL" | "TAB" | "ENTER" | "SHIFT" | "CTRL" | "ALT" | "ESC" | "PAGEUP" | "PAGEDOWN" | "END" | "HOME" | "LEFT" | "UP" | "RIGHT" | "DOWN" | "SUPR" | "NUM0" | "NUM1" | "NUM2" | "NUM3" | "NUM4" | "NUM5" | "NUM6" | "NUM7" | "NUM8" | "NUM9" | "MUL" | "ADD" | "SUB" | "POINT" | "DIV" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "SEMICOLON" | "EQUAL" | "COMMA" | "DASH" | "PERIOD" | "FORWARDSLASH" | "ACCENT" | "OPENBRACKET" | "BACKSLASH" | "CLOSEBRACKET" | "SINGLEQUOTE" | "META" | "ALTGR";
}
declare namespace S {
    class List<T> extends Array {
        onInsert: (v: T) => void;
        onRemove: (v: T) => void;
        onChange: Function;
        push(v: T, cancelEvent?: boolean): number;
        insertAt(i: number, v: T, cancelEvent?: boolean): void;
        remove(v: T, cancelEvent?: boolean): void;
        removeAt(i: number, cancelEvent?: boolean): void;
        clear(cancelEvent?: boolean): void;
    }
}
declare namespace S {
    interface LoadScriptParams {
        urls: string[];
        async?: boolean;
        cache?: boolean;
    }
    function setLoadedFile(file: string): void;
    /**
     * Dynamically load scripts
     */
    function loadFiles(params: LoadScriptParams): Promise<void>;
}
declare namespace S {
    function addIgnoreError(error: any): void;
    function getErrorMessage(err: any): any;
    /**
     * Send the error to the server and show it to the client.
     */
    function logError(err: any): Promise<void>;
}
declare namespace orm {
    const PASSWORD_MASK = "****";
    type Type = "int" | "decimal" | "currency" | "percent" | "lookup" | "picklist" | "picklistKey" | "bool" | "duration" | "string" | "text" | "mediumText" | "encrypted" | "hash" | "file" | "time" | "date" | "datetime" | "blob" | "mediumblob" | "image" | "color" | "markdown" | "json" | "email" | "phone" | "url" | "code" | "html" | "masterDetail" | "oneToMany";
    interface Entity {
        name?: string;
        readonly properties: Property[];
        label?: string;
        pluralLabel?: string;
        description?: string;
        helpURL?: string;
        permissions?: Permission[];
        module?: string;
        fullName?: string;
        tags?: boolean;
    }
    interface Property {
        name: string;
        type?: Type;
        label?: string;
        refTable?: string;
        refDesc?: string;
        transient?: boolean;
        transientType?: string;
        /**
         * A ref to an entity
         */
        entity?: Entity;
        items?: PickItem[];
        nullable?: boolean;
        nullableInType?: boolean;
        size?: number;
        decimals?: number;
        sqlExpression?: boolean;
        /**
         * Private property should be keept private to the client (ignore if it
         * makes changes to it)
         */
        private?: boolean;
        /**
         * In case it is of type image or attachment, if it is public or private.
         */
        isPublic?: boolean;
        /**
         * In case it is of type image or attachment, the max file size
         */
        maxSize?: number;
        editable?: boolean;
        readOnly?: boolean;
        autogenerated?: boolean;
        /**
         * Shows a help icon in the widget.
         */
        help?: string;
        /**
         * If it is a image.
         */
        width?: number;
        /**
         * If it is a image.
         */
        height?: number;
        /**
         * If it is a image.
         */
        aspectRatio?: number;
        /**
         * The default widget value
         */
        default?: any;
        /**
         * If it is of type image allow to open the webcam.
         */
        allowCam?: boolean;
        /**
         * The class name to apply to the control
         */
        classList?: string;
    }
    interface PickItem {
        value?: number | string;
        name?: string;
        label?: string;
    }
    interface Permission {
        flags: string;
        name: string;
    }
    function getRefDesc(p: Property): string;
    function hasPermission(permissionFlag: string, permissions: Permission[], p?: Property): boolean;
    function getDefaultValue(p: Property): any;
}
declare namespace S {
    function parse(pattern: string, v: any): any;
}
declare namespace S {
    export interface DatePeriodModel {
        range: PeriodType;
        start?: Time;
        end?: Time;
    }
    export type PeriodType = "today" | "yesterday" | "thisMonth" | "lastMonth" | "thisYear" | "lastYear";
    interface Period {
        name: PeriodType;
        label: string;
        func: () => {
            start: Time;
            end: Time;
        };
    }
    export function parsePeriod(type: PeriodType): {
        start: Time;
        end: Time;
    };
    export function toPeriodString(model: DatePeriodModel): string;
    export const PeriodTypes: Period[];
    export {};
}
declare namespace S {
    export let systemSession: Session;
    export function setSystemSession(s: Session): void;
    interface User {
        name: string;
        avatar: string;
    }
    export interface Session {
        tenant?: string;
        permissions: string[];
        user: User;
        items?: any;
        advancedSettings?: any;
    }
    export function hasPermission(permission: string): boolean;
    export {};
}
declare namespace S {
    interface shortcut {
        func: (e: Event) => void;
        help?: string;
        global?: boolean;
    }
    var shortcuts: {
        [key: string]: shortcut;
    };
    function registerShortcut(keysID: string, shortcut: shortcut): void;
    function unregisterAll(): void;
    function unregister(keysID: string): void;
    /**
     * Removes all the not global shortcuts
     */
    function clearLocalShortcuts(): void;
    function initShorcuts(): void;
    function isWord(keyCode: number): boolean;
    function getChar(keyCode: number, ignoreModifiers: boolean): "A" | "Z" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "DEL" | "TAB" | "ENTER" | "SHIFT" | "CTRL" | "ALT" | "ESC" | "PAGEUP" | "PAGEDOWN" | "END" | "HOME" | "LEFT" | "UP" | "RIGHT" | "DOWN" | "SUPR" | "NUM0" | "NUM1" | "NUM2" | "NUM3" | "NUM4" | "NUM5" | "NUM6" | "NUM7" | "NUM8" | "NUM9" | "MUL" | "ADD" | "SUB" | "POINT" | "DIV" | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10" | "F11" | "F12" | "SEMICOLON" | "EQUAL" | "COMMA" | "DASH" | "PERIOD" | "FORWARDSLASH" | "ACCENT" | "OPENBRACKET" | "BACKSLASH" | "CLOSEBRACKET" | "SINGLEQUOTE" | "META" | "ALTGR";
}
declare namespace S {
    function repeat(s: string, times: number): string;
    function padLeft(s: string, pad: string, n: number): string;
    function padRight(s: string, pad: string, n: number): string;
    function take(s: string, max: number): string;
    function toTitle(s: string): string;
    function toUntitle(s: string): string;
    function removePrefix(s: string, prefix: string): string;
    function trim(s: string, mask: string): string;
    function trimLeft(s: string, mask: string): string;
    function trimRight(s: string, mask: string): string;
}
declare namespace S {
    const ISO_DATE_FORMAT = "yyyy-MM-dd";
    const ISO_DATETIME_FORMAT = "yyyy-MM-ddTHH:mm:ss";
    function now(): Time;
    function newTime(millis: number, location?: string): Time;
    function newDate(year?: number, month?: number, day?: number, hour?: number, min?: number, sec?: number, location?: string): Time;
    function parseTime(s: string | Time): Time;
    class TimeParser {
        private format;
        private value;
        formats: string[];
        constructor();
        parse(s: string): Time;
        private doParse;
        private nextFormatToken;
        private nextValueToken;
    }
    class Time {
        private _date;
        private _location;
        private _locationOffset;
        constructor(d?: Date, location?: string);
        get location(): string;
        get locationOffset(): number;
        get nativeDate(): Date;
        get hour(): number;
        get minute(): number;
        get second(): number;
        get millisecond(): number;
        get milliseconds(): number;
        get day(): number;
        get weekDay(): number;
        get month(): number;
        get year(): number;
        before(d: Time): boolean;
        beforeOrEqual(d: Time): boolean;
        after(d: Time): boolean;
        afterOrEqual(d: Time): boolean;
        isSameDay(d: Time): boolean;
        addMilliseconds(millis: number): Time;
        addMinutes(minutes: number): Time;
        addHours(hours: number): Time;
        addDays(days: number): Time;
        isLeapYear(): boolean;
        daysInMonth(): number;
        addMonths(months: number): Time;
        addYears(years: number): Time;
        setDay(day: number): Time;
        setTime(hour: string): Time;
        in(location: string): Time;
        startOfDay(): Time;
        endOfDay(): Time;
        copy(): Time;
        getUTCTime(): number;
        toUTC(): Time;
        private getTimezoneOffset;
        private formatTimezone;
        toString(): string;
        format(pattern: string): string;
        toJSON(): string;
        private getFormat;
        private parseISOLocal;
    }
    enum weekDay {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }
    var weekDayNames: string[];
    let weekDaysShort: string[];
    function getWeekdayName(dayOfWeek: number): string;
    let monthNames: string[];
}
declare namespace S {
    const cacheBreaker: string;
    function parseURL(url: string): {
        href: string;
        protocol: string;
        host: string;
        hostname: string;
        port: string;
        pathname: string;
        search: string;
        hash: string;
    };
    function serializeURLParam(value: any): any;
    /**
     * Serializes the object values for querystring.
     */
    function serializeURLObject(value: any): string;
    function getURLBool(paramName: string | null | undefined): boolean;
    function getURLInt(paramName: string | null | undefined): number;
    function queryTime(paramName: string): Time;
    function getURLJSON(paramName: string | null | undefined): any;
    /**
        Devuelve una variable del querystring.
    */
    function getURLSTring(paramName: string): string;
    function getURLWithValue(key: string, value: string | number | boolean | Date): string;
    function setUrlValue(url: string, key: string, value: any): string;
    function postForm(url: string, data: any, target?: string): void;
    function getBrowser(): {
        name: string;
        version: string;
    };
}
declare namespace S {
    export function isControlPressed(): boolean;
    export function isLocal(): boolean;
    export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
    export let needToReloadPage: boolean;
    export let isDirty: boolean;
    type ConfirmLeaveFunc = () => boolean;
    export interface Action {
        data: any;
        route: Route;
        routeParams: any;
    }
    export type Filter = () => boolean;
    export type Handler = (routeParams?: any, data?: any) => void;
    export interface Route {
        url: string;
        params?: string[];
        filter: Filter;
        handler: Handler;
    }
    export function addRoute(url: string, filter: Filter, handler: Handler): void;
    export function getBackURL(defaultURL?: string): string;
    export function getRouteURLs(): string[];
    export function addPublicRoute(url: string, handler: Handler): void;
    export function addRouteChangeAction(f: Function): void;
    export function setDirty(dirty: boolean, confirm?: string | ConfirmLeaveFunc): void;
    export function confirmLeave(msg?: string): boolean;
    export function executeInNewTab(url: string, params?: any): void;
    export function reloadDocument(url?: string): void;
    export function reloadView(): Promise<void>;
    export function refresh(url?: string): void;
    export function redirect(url: string): void;
    export function getRouteParams(): string[];
    export function getCurrentURL(): string;
    export function getCurrentAction(): Action;
    export function getCurrentPath(): string;
    export type ExecuteMode = "DontAddToHistory" | "ReplaceHistory" | "InPlace";
    export function goBack(url?: string): void;
    export function areSamePath(urlA: string, urlB: string): boolean;
    export function parseRoute(url?: string): {
        tenant: string;
        module: string;
    };
    export function getURLPath(url: string): string;
    export function executeWithReturn(url: string, params?: any): void;
    export interface ActionArgs {
        mode?: ExecuteMode;
        data?: any;
    }
    export function executeAction(url: string, params?: any, args?: ActionArgs): Promise<void>;
    export function fixURL(url: string): string;
    export let loadModuleType: string;
    export function setAsLoadedModule(module: string): void;
    export function setLoadModuleType(type: string): void;
    export function loadModule(module: string, type?: string): Promise<void>;
    export function getURL(url: string, params?: any): string;
    export function errorToString(err: any): any;
    export function handleError(err: any): void;
    export function pushURL(url: string, title?: string): void;
    export function pushTitle(title: string): void;
    /**
     * Update history and the URL with a query param
     */
    export function replaceURLValue(key: string, value: any, title?: string): void;
    export function pushAsBase64(key: string, obj: any): void;
    export function getFromBase64(key: string): any;
    /**
     * Update history and the URL with a query param
     */
    export function pushURLValue(key: string, value: any, addURLToHistory?: boolean): void;
    /**
     * Like history.pushState but updates the title in chrome and firefox.
     * TODO:// remove if its ever fixed natively.
     * http://stackoverflow.com/questions/26324990
     */
    export function pushState(data: any, title: string, url: string | null): void;
    /**
     * Like history.pushState but updates the title in chrome and firefox.
     * TODO:// remove if its ever fixed natively.
     * http://stackoverflow.com/questions/26324990
     */
    export function replaceState(data: any, title: string, url?: string | null): void;
    export {};
}
declare namespace ui {
    function addResizeObserver(c: Control, fn: Function, throttle?: number): void;
    function blur(): void;
    function isTouchScreen(): boolean;
    function getById(id: string): Control;
    function getControl(p: Property): InputControl;
}
declare namespace ui {
    interface BuildModel extends S.AnyProperty {
        imports?: string[];
        type: string;
    }
    function build(model: BuildModel | string): Control;
}
declare namespace ui {
    interface Closer extends Control {
        close(): void;
    }
    function addCloser(c: Closer): void;
    function removeCloser(c: Closer): void;
    function closeAll(): void;
    function closeDescendants(item: Control): void;
    function closeOthers(item: Control): void;
}
declare namespace ui {
    type SignalMode = "bubbleUp" | "bubbleDown" | "bubbleAll" | "dontBubble";
    type SettingType = "string" | "number" | "boolean" | "function" | "icon" | "color" | "control" | "controlList" | "object" | "objectList";
    type SettingKind = "property" | "style" | "signal";
    type Settings = {
        [key: string]: ControlSetting;
    };
    interface ControlSetting {
        type: SettingType;
        kind: SettingKind;
        settings?: Settings;
        arguments?: any;
        readonly?: true;
    }
    class Control {
        readonly element: HTMLElement;
        private _children;
        private _parent;
        private listeners;
        settings: Settings;
        displayed: boolean;
        customData: any;
        constructor(type: string, className?: string, parent?: Control, content?: string | Control);
        protected addSettings(settings: Settings): void;
        get classList(): DOMTokenList;
        get style(): CSSStyleDeclaration;
        get textContent(): string;
        set textContent(v: string);
        private _id;
        get id(): string;
        set id(v: string);
        get parent(): Control;
        protected setParent(v: Control, cancelEvent?: boolean): void;
        private _windowParent;
        get windowParent(): Control;
        private _childWindows;
        get childWindows(): Control[];
        appendWindow<T extends Control>(control: T): T;
        get children(): S.List<Control>;
        set children(v: S.List<Control>);
        contains(control: Control): boolean;
        getDescendants(): Control[];
        getAncestors(): Control[];
        removeChild(control: Control, cancelEvent?: boolean): void;
        replaceChild(control: Control, old?: Control): void;
        setChild(control: Control): void;
        private onInsertChildren;
        private onRemoveChildren;
        appendChild<T extends Control>(control: T): T;
        clear(): void;
        remove(): void;
        addFinalListener(type: string, listener: Listener): void;
        addSignalListener(type: string, listener: Listener): void;
        removeSignalListener(listener: Listener): void;
        sendSignal(type: string, data?: any, mode?: SignalMode): void;
        private bubbleUp;
        private doSendSignal;
        getById(id: string): Control;
        getTopParent(): Control;
    }
    class Signal {
        source?: Control;
        type: string;
        data: any;
        propagationStopped: boolean;
        stopPropagation(): void;
    }
    type Listener = (signal: Signal) => void;
    function addClass(control: Control, classNames: string): void;
    function forEach(ctrl: Control, fn: (c: Control) => void): void;
}
declare namespace ui {
    interface Option {
        label: string;
        value: string;
        class?: string;
        data?: any;
    }
    function addGlobalClick(callback: Function, ...ignoreElements: Control[]): Listener;
    function removeGlobalClick(globalFn: Listener): void;
    type GlobalResizeFunc = (e: MouseEvent) => void;
    function addGlobalResize(callback: Function): (e: MouseEvent) => void;
    function removeGlobalResize(globalFn: GlobalResizeFunc): void;
}
declare namespace ui {
    function getIcon(name: string, width?: number, height?: number): Icon;
    function getIcons(): string[];
    function setIconPath(name: string, path: string): void;
    function getIconElement(name: string, width?: number, height?: number): SVGSVGElement;
}
declare namespace ui {
    abstract class InputControl extends Control {
        abstract get value(): any;
        abstract set value(v: any);
        abstract get inlineLabel(): boolean;
        abstract get property(): Property;
        abstract set property(p: Property);
        validations: ValidateFunc[];
        validateLabel: string;
        focusVisible: boolean;
        constructor(element: string, className?: string, parent?: Control, content?: string | Control);
        abstract showError(error: string): void;
        addValidation(f: ValidateFunc): void;
        validate(): string;
    }
    abstract class Input extends InputControl {
        private inputPanel;
        private errorPanel;
        prefixElement: Control;
        clearElement: Control;
        suffixElement: Control;
        input: HTMLInputElement;
        property: orm.Property;
        format: string;
        constructor(type: string, classList?: string);
        showError(error: string): void;
        get id(): string;
        set id(v: string);
        get inlineLabel(): boolean;
        protected onInput(e: KeyboardEvent): void;
        protected updateClearIcon(): void;
        private _clearIcon;
        get clearIcon(): boolean;
        set clearIcon(v: boolean);
        get value(): any;
        set value(v: any);
        get placeholder(): string;
        set placeholder(v: string);
        set prefixIcon(icon: string);
        get prefix(): string;
        set prefix(v: string);
        get prefixSolid(): boolean;
        set prefixSolid(v: boolean);
        get suffix(): string;
        set suffix(v: string);
        set suffixIcon(icon: string);
    }
}
declare namespace ui {
    interface ConfirmArgs {
        title?: string;
        className?: string;
        content: Control | string;
        okLabel?: string;
        destructive?: boolean;
        accept?: () => Promise<void | boolean>;
        cancel?: () => Promise<void | boolean>;
        leftButtons?: Control;
    }
    /**
     * Confirm shows a modal window and blocks.
     */
    function confirm(args: ConfirmArgs | string): Promise<boolean>;
    interface AlertArgs {
        title?: string;
        className?: string;
        content: Control | string;
        okLabel?: string;
        destructive?: boolean;
        accept?: () => Promise<void | boolean>;
        leftButtons?: Control;
    }
    function alert(args: AlertArgs | string): void;
    interface ModalArgs {
        title: string;
        content: Control;
        okLabel?: string;
        accept?: Function;
        cancelButton?: boolean;
        className?: string;
    }
    function newModal(args: ModalArgs): Promise<{
        modal: Modal;
        show: () => void;
        close: () => void;
        okButton: Button;
        accept: () => Promise<void>;
        cancelButton: Button;
    }>;
}
declare namespace ui {
    abstract class ModelControl extends Control {
        abstract get model(): any;
        abstract set model(v: any);
        constructor(element: string, className?: string, parent?: Control);
    }
}
declare namespace ui {
    interface Property extends orm.Property {
        control?: InputControl;
        help?: string;
        inlineHelp?: string;
        inlineLabel?: boolean;
        options?: any;
        requiredHint?: boolean;
        render?: (value: any, cell: Control, p: Property) => void;
    }
    function formatProperty(p: Property, value: any): any;
}
declare namespace ui {
    function insertText(element: HTMLInputElement | HTMLTextAreaElement, newText: string): void;
}
declare namespace ui {
    let currentView: Control;
    function setView(view: Control): void;
}
declare namespace ui {
    type WaitSize = "small" | "normal";
    abstract class WaitControl extends Control {
        protected waitElement: Control;
        protected waitSize: "small" | "normal";
        private _wait;
        private overlay;
        constructor(element: string, className?: string, parent?: Control, waitElement?: Control);
        private _spinnerColor;
        get spinnerColor(): string;
        set spinnerColor(v: string);
        private _waitDelay;
        get waitDelay(): number;
        set waitDelay(v: number);
        get wait(): boolean;
        set wait(v: boolean);
        private waitTimeout;
        private setWait;
    }
}
declare namespace ui {
    class Accordion extends Control {
        constructor(parent?: Control);
        addItem(header?: Control, body?: Control): AccordionItem;
        add(item: AccordionItem): void;
    }
}
declare namespace ui {
    class AccordionItem extends Control {
        private headerRow;
        private arrowWrap;
        private bodyElement;
        data: any;
        onExpand: () => Promise<void>;
        header: Control;
        body: Control;
        constructor(header?: Control, body?: Control);
        render(): void;
        private _bodyWrap;
        get bodyWrap(): Control;
        set bodyWrap(v: Control);
        togle(): void;
        open(): Promise<void>;
        private adjustHeight;
        close(): void;
    }
}
declare namespace ui {
    interface Action {
        id?: string;
        label?: string;
        icon?: string;
        click?: Function;
        classList?: string;
        separator?: boolean;
        permission?: string;
    }
    class ActionList extends Control {
        rows: ui.Control[];
        constructor();
        private _actions;
        get actions(): Action[];
        set actions(v: Action[]);
        select(id: string): void;
        render(): void;
    }
}
declare namespace ui {
    export let globalAdminMenu: Menu[];
    export function setGlobalMenu(data: Menu[]): void;
    export class AdminView extends Control {
        private innerElement;
        private globalClickFunc;
        private removeListenerFuncs;
        private _page;
        topBar: Topbar;
        body: Control;
        navigation: Navigation;
        toast: Toast;
        contextBar: ContextBar;
        constructor();
        get title(): string;
        set title(v: string);
        get page(): Control;
        set page(p: Control);
        get showNavigation(): boolean;
        set showNavigation(v: boolean);
        private _mainMenu;
        get mainMenu(): Menu[];
        set mainMenu(v: Menu[]);
        private renderMenu;
        showToast(text: string): void;
        closeToast(): void;
        showContextBar(onSave: () => Promise<boolean>, onDiscard?: Function): void;
        closeContextBar(): void;
        private initializeResponsiveNavigation;
        private removeListeners;
        private onMenuIconClick;
        private showResonsiveNavigation;
        private hideResonsiveNavigation;
    }
    interface Menu {
        label: string;
        name?: string;
        groupName?: string;
        isGroup?: string;
        parent?: string;
        icon?: string;
        url?: string;
        func?: Function;
        disabled?: boolean;
    }
    export function getAdminViewOrNull(): AdminView;
    export function getAdminView(): AdminView;
    export function setPage(page: Page): void;
    export {};
}
declare namespace ui {
    class AnnotatedLayout extends Control {
        constructor(parent?: Control);
        addRow(title: string, description?: string, content?: Control): AnnotatedRow;
    }
    class AnnotatedRow extends Control {
        annotation: Control;
        title: Control;
        description: Control;
        content: Control;
        constructor(title: string, description: string, content: Control);
    }
}
declare namespace ui {
    class Audit extends ModelControl {
        constructor();
        private _model;
        get model(): any;
        set model(v: any);
        private render;
    }
}
declare namespace ui {
    interface OptionRow {
        row: Control;
        option: Option;
    }
    class Autocomplete extends InputControl {
        private inputPanel;
        private errorPanel;
        private popupOptions;
        private selectedIndex;
        private prefixElement;
        private clearElement;
        private suffixElement;
        property: orm.Property;
        loadURL: string;
        input: HTMLInputElement;
        selectedOption: Option;
        popup: Popup;
        constructor();
        showError(error: string): void;
        get id(): string;
        set id(v: string);
        selectOption(option: Option): void;
        get text(): string;
        get value(): any;
        set value(v: any);
        get inlineLabel(): boolean;
        private updateClearIcon;
        private _clearIcon;
        get clearIcon(): boolean;
        set clearIcon(v: boolean);
        get placeholder(): string;
        set placeholder(v: string);
        set prefixIcon(icon: string);
        get prefix(): string;
        set prefix(v: string);
        get suffix(): string;
        set suffix(v: string);
        private _options;
        get options(): Option[];
        set options(v: Option[]);
        private onSelectOption;
        private doSelectOption;
        private renderValue;
        private onKeydown;
        private selectRow;
        inputTimeout: number;
        private onInput;
        private showPopup;
        private refreshPopupList;
        private getOptions;
        private getFilterValue;
    }
}
declare namespace ui {
    type BadgeStatus = "success" | "warning";
    class Badge extends Control {
        constructor(status?: BadgeStatus, text?: string);
        private _status;
        get status(): BadgeStatus;
        set status(v: BadgeStatus);
        private _text;
        get text(): string;
        set text(v: string);
    }
}
declare namespace ui {
    type BannerStatus = "success" | "warning" | "info" | "critical";
    export class Banner extends Control {
        private _action;
        private _status;
        private wrap;
        private bodyPanel;
        private headerPanel;
        private titlePanel;
        private dismissPanel;
        private iconPanel;
        actionsPanel: Control;
        contentPanel: Control;
        constructor(status?: BannerStatus, title?: string, text?: string);
        get title(): string;
        set title(v: string);
        get text(): string;
        set text(v: string);
        get action(): Action;
        set action(v: Action);
        get status(): BannerStatus;
        set status(v: BannerStatus);
        private _dismissible;
        get dismissible(): boolean;
        set dismissible(v: boolean);
        dismiss(): void;
    }
    export {};
}
declare namespace ui {
    class Button extends WaitControl {
        private left;
        private center;
        private right;
        popup: Popup;
        click: ((b: Button) => void) | string;
        constructor(text?: string, className?: string, click?: ((b: Button) => void) | string);
        get text(): string;
        set text(v: string);
        private _icon;
        get icon(): string;
        set icon(v: string);
        private _dropdownIcon;
        get dropdownIcon(): string;
        set dropdownIcon(v: string);
        private _dropdown;
        get dropdown(): boolean;
        set dropdown(v: boolean);
        get destructive(): boolean;
        set destructive(v: boolean);
        get disabled(): boolean;
        set disabled(v: boolean);
        get highlighted(): boolean;
        set highlighted(v: boolean);
        get plain(): boolean;
        set plain(v: boolean);
        get more(): boolean;
        set more(v: boolean);
        private _actions;
        get actions(): Action[];
        set actions(v: Action[]);
        private _popupHorizontalMode;
        get popupHorizontalMode(): PopupHorizontalMode;
        set popupHorizontalMode(v: PopupHorizontalMode);
        private togleActions;
    }
}
declare namespace ui {
    class ButtonGroup extends Control {
        constructor(segmented?: boolean, parent?: Control);
        get right(): boolean;
        set right(v: boolean);
        get segmented(): boolean;
        set segmented(v: boolean);
    }
}
declare namespace ui {
    class Card extends WaitControl {
        constructor(parent?: Control);
    }
}
declare namespace ui {
    class Checkbox extends InputControl {
        private inputPanel;
        private errorPanel;
        label: Control;
        input: HTMLInputElement;
        property: orm.Property;
        constructor(label?: string);
        get checked(): boolean;
        set checked(v: boolean);
        private _inlineLabel;
        get inlineLabel(): boolean;
        set inlineLabel(v: boolean);
        get value(): any;
        set value(v: any);
        get text(): string;
        set text(v: string);
        private onCheckClick;
        private onLabelClick;
        showError(error: string): void;
    }
}
declare namespace ui {
    interface Choice {
        label: string;
        description?: string;
        value: string;
    }
    class ChoiceList extends Control {
        private titlePanel;
        private choicesPanel;
        private inputs;
        selectedChoice: Choice;
        constructor(multiple?: boolean, parent?: Control);
        private _values;
        get values(): string[];
        set values(v: string[]);
        private _selectedChoices;
        get selectedChoices(): Choice[];
        set selectedChoices(v: Choice[]);
        private _value;
        get value(): string;
        set value(v: string);
        get title(): string;
        set title(v: string);
        private _multiple;
        get multiple(): boolean;
        set multiple(v: boolean);
        private _choices;
        get choices(): Choice[];
        set choices(v: Choice[]);
        render(): void;
        private onChoiceClick;
        private addSelectedChoice;
        private removeSelectedChoice;
        clearSelection(): void;
    }
    interface ChoiceInput {
        choice: Choice;
        selected: boolean;
        values: string[];
    }
}
declare namespace ui {
    class CodeEditor extends InputControl {
        private inputPanel;
        private errorPanel;
        private editor;
        property: orm.Property;
        inlineLabel: boolean;
        constructor(parent?: Control, onLoad?: Function);
        private initialize;
        format(): void;
        addLib(text: string): void;
        setModel(text: string, language?: string): void;
        focus(): void;
        private _language;
        get language(): string;
        set language(v: string);
        addNativeLib(): void;
        private _value;
        get value(): string;
        set value(v: string);
        showError(error: string): void;
    }
}
declare namespace ui {
    class ColorButton extends InputControl {
        private inputPanel;
        private errorPanel;
        private labelElement;
        private previewElement;
        private popup;
        private list;
        property: orm.Property;
        constructor(text?: string);
        showError(error: string): void;
        get text(): string;
        set text(v: string);
        get inlineLabel(): boolean;
        private _value;
        get value(): string;
        set value(v: string);
        private onKeydown;
    }
}
declare namespace ui {
    interface HSV {
        h: number;
        s: number;
        v: number;
        a: number;
    }
    export class ColorList extends Control {
        private picker;
        private pickerHandle;
        private hueBar;
        private hueHandle;
        private alphaBar;
        private alphaHandle;
        private dragging;
        private dragType;
        private hsv;
        private preview;
        private txtInput;
        constructor();
        get value(): string;
        set value(v: string);
        build(): void;
        private onMouseDown;
        private getCoords;
        private getPercent;
        private onPickerMousedown;
        private onHueMousedown;
        private onAlphaMousedown;
        private setValueCoords;
        private setHueCoords;
        private setAlphaCoords;
        setColor(hsv: HSV): void;
        refresh(): void;
        private onMouseMove;
        private refreshPickerColor;
        private refreshPreviewColor;
        private fireInputEvent;
    }
    export {};
}
declare namespace ui {
    class ColorPicker extends InputControl {
        private inputPanel;
        private errorPanel;
        private labelElement;
        private previewElement;
        private popup;
        private list;
        property: orm.Property;
        constructor();
        private onFocus;
        private onBlur;
        showError(error: string): void;
        get inlineLabel(): boolean;
        private _value;
        get value(): string;
        set value(v: string);
        private onKeydown;
    }
}
declare namespace ui {
    class ContextBar extends Control {
        private titlePanel;
        private actionsPanel;
        saveButton: Button;
        cancelButton: Button;
        onSave: () => Promise<boolean>;
        onDiscard: Function;
        constructor();
        show(onSave?: () => Promise<boolean>, onDiscard?: Function): void;
        close(): void;
        get title(): string;
        set title(v: string);
    }
}
declare namespace ui {
    class DatePicker extends Input {
        constructor();
        protected onInput(e: KeyboardEvent): void;
        showCalendar(): void;
        private selectDate;
        private _value;
        get value(): any;
        set value(v: any);
    }
}
declare namespace ui {
    class DateTimeInput extends Input {
        constructor();
        private onKeydown;
        get value(): any;
        set value(v: any);
    }
}
declare namespace ui {
}
declare namespace ui {
    class EmptyState extends Control {
        private imageElement;
        private titlePanel;
        private textPanel;
        private actionsPanel;
        constructor(text?: string);
        set icon(v: string);
        set image(v: string);
        get title(): string;
        set title(v: string);
        get text(): string;
        set text(v: string);
        set action(v: Control);
    }
}
declare namespace ui {
    class Filedrop extends InputControl {
        private inputPanel;
        private errorPanel;
        private subtitleRow;
        private input;
        property: orm.Property;
        constructor();
        private _value;
        get value(): File;
        set value(v: File);
        showError(error: string): void;
        private addDropEvents;
        get inlineLabel(): boolean;
        private onDragover;
        private onDragenter;
        private onDragleave;
        private onDrop;
        private onFilePicked;
        private onFileSelected;
    }
}
declare namespace ui {
    class Filepicker extends InputControl {
        private inputPanel;
        private errorPanel;
        private input;
        private label;
        private clearIcon;
        property: orm.Property;
        constructor();
        private _value;
        get value(): File;
        set value(v: File);
        private _values;
        get values(): FileList;
        set values(v: FileList);
        get multiple(): boolean;
        set multiple(v: boolean);
        showError(error: string): void;
        get inlineLabel(): boolean;
        private onFilePicked;
        private clearFiles;
        private onFileSelected;
    }
}
declare namespace ui {
    interface FilterValues {
        search?: string;
        properties?: any;
    }
    class Filter extends Control {
        private filtersRow;
        private filterButtons;
        private tagsStack;
        private buttonGroup;
        filterValuesRow?: Control;
        constructor(parent?: Control);
        appendTagsRowTo(control: Control): void;
        private _values;
        get values(): FilterValues;
        set values(v: FilterValues);
        removeListeners(): void;
        private timeoutId;
        private resizeFunc;
        private onResize;
        private refreshPromotedButtons;
        private _placeholder;
        get placeholder(): string;
        set placeholder(v: string);
        private _showSearch;
        get showSearch(): boolean;
        set showSearch(v: boolean);
        private _query;
        get query(): string[];
        set query(v: string[]);
        private _promotedFilters;
        get promotedFilters(): Property[];
        set promotedFilters(v: Property[]);
        private _filters;
        get filters(): Property[];
        set filters(v: Property[]);
        get allFilters(): Property[];
        render(): void;
        private showFilter;
        private buildFilterPanel;
        private onFilterChange;
        private onPicklistChange;
        private addFilter;
        private clearFilter;
        private setTag;
        private removeTag;
        private onMoreFiltersClick;
        private changeTimeout;
        private onChange;
        private fireChangeEvent;
        clear(): void;
    }
}
declare namespace ui {
    class FlexPanel extends WaitControl {
        constructor(className?: string, parent?: Control);
    }
}
declare namespace ui {
    function validate(ctrl: Control): boolean;
    function focus(ctrl: Control): boolean;
    type ValidateFunc = () => string;
    type SendSuccess = (data: any) => void;
    class Form extends Control {
        errorPanel: Control;
        contentPanel: Panel;
        buttonsPanel: ButtonGroup;
        method: S.HTTPMethod;
        URL: string | Function;
        useSaveContextBar: boolean;
        preValidate: (model: any) => any;
        sendSuccess: SendSuccess | string;
        reviewErrorsMessage: boolean;
        validations: ValidateFunc[];
        container: Panel;
        constructor(parent?: Control);
        addValidation(f: ValidateFunc): void;
        addButton(c: Control): void;
        addSubmitButton(text?: string, url?: string, sendSuccess?: SendSuccess | string): Button;
        private onInput;
        showAsDirty(): void;
        private _submitButton;
        get submitButton(): Button;
        set submitButton(v: Button);
        private _model;
        get model(): any;
        set model(v: any);
        setContainer(c: Panel): Panel;
        addContainer(c: Panel): void;
        endContainer(): void;
        addFields(...properties: Property[]): Control;
        addRow(...controls: Control[]): Control;
        addCells(...cells: FormCell[]): Control;
        focus(): void;
        refresh(): void;
        submit(): Promise<boolean>;
        validate(): boolean;
        showError(err: string): void;
    }
}
declare namespace ui {
    class Form2 extends WaitControl {
        constructor(className?: string, parent?: Control);
        private onInput;
        private _model;
        get model(): any;
        set model(v: any);
        refresh(): void;
    }
}
declare namespace ui {
    class FormCell extends Control {
        labelPanel: Control;
        controlPanel: Control;
        helpPanel: Control;
        constructor(label?: string, control?: InputControl);
        private _control;
        get control(): InputControl;
        set control(v: InputControl);
    }
}
declare namespace ui {
    type Type = "primaryAndSecondary";
    export class HorizontalLayout extends WaitControl {
        constructor(type?: Type, className?: string, parent?: Control);
        private _type;
        get type(): string;
        set type(v: string);
        get gap(): string;
        set gap(v: string);
    }
    export {};
}
declare namespace ui {
    class HTMLEditor extends InputControl {
        private inputPanel;
        private errorPanel;
        private toolbar;
        private editorIFrame;
        private editorDocument;
        private HTMLMode;
        private closeFunc;
        property: orm.Property;
        constructor();
        private handleFocus;
        close(): void;
        showError(error: string): void;
        get inlineLabel(): boolean;
        private fireChanged;
        private _value;
        get value(): string;
        set value(v: string);
        private _mode;
        get mode(): string;
        set mode(v: string);
        render(): void;
        private sendCommand;
        private showLinkDialog;
        private showImageDialog;
        private execCommand;
        private toggleHTML;
    }
}
declare namespace ui {
    class Icon extends Control {
        private svg;
        private spinner;
        constructor(svg: SVGElement);
        private _wait;
        get wait(): boolean;
        set wait(v: boolean);
    }
}
declare namespace ui {
    class IconButton extends Button {
        constructor(icon: string, className?: string, click?: ((b: Button) => void) | string);
    }
}
declare namespace ui {
    class ImagePicker extends InputControl {
        private inputPanel;
        private errorPanel;
        private innerPanel;
        private imgDisplay;
        private previewButtons;
        property: orm.Property;
        onSelect: Function;
        onEdit: Function;
        constructor();
        showError(error: string): void;
        get inlineLabel(): boolean;
        render(): void;
        private _value;
        get value(): File;
        set value(f: File);
        private renderEmpty;
        showSelectFile(): void;
        private onFilePicked;
        private renderImage;
        clear(): void;
    }
}
declare namespace ui {
    class Imagedrop extends Control {
        private innerPanel;
        private subtitleRow;
        private input;
        private data;
        private cropArea;
        private cropImage;
        private cropLayer;
        private cropperBounds;
        private draggingElement;
        private mouseStart;
        private startBounds;
        url: string;
        aspectRatio: number;
        constructor();
        private addDropEvents;
        render(): void;
        clear(): void;
        isEmpty(): boolean;
        private renderEmpty;
        private onDragover;
        private onDragenter;
        private onDragleave;
        private onDrop;
        private onFilePicked;
        private onFileSelected;
        private startCrop;
        private onCancelCrop;
        saveCrop(): void;
        private getCroppedImage;
        private showCropper;
        private startDragging;
        private stopDragging;
        private onMouseMove;
        private adjustGrid;
        private adjustCropperBounds;
    }
}
declare namespace ui {
    class Img extends Control {
        constructor(className?: string, parent?: Control);
        get image(): HTMLImageElement;
        get src(): string;
        set src(v: string);
    }
}
declare namespace ui {
    class Link extends Control {
        click: Function;
        constructor(text?: string, url?: string | Function, parent?: Control);
        get text(): string;
        set text(v: string);
        get link(): HTMLLinkElement;
        private _url;
        get url(): any;
        set url(v: any);
        private onClick;
    }
}
declare namespace ui {
    class List extends Control {
        constructor(numbered?: boolean, className?: string, parent?: Control);
        private _numbered;
        get numbered(): boolean;
        set numbered(v: boolean);
        private _options;
        get options(): string[];
        set options(v: string[]);
        render(): void;
    }
}
declare namespace ui {
    class Modal extends Control {
        private overlay;
        headerPanel: Control;
        dismissPanel: Control;
        dialog: Control;
        onDismiss: Function;
        titlePanel: Control;
        contentPanel: Control;
        footerPanel: Control;
        footerLeft: Control;
        footerRight: Control;
        closeOnOverlayClick: boolean;
        constructor();
        private overlayClick;
        get width(): string;
        set width(v: string);
        get maxWidth(): string;
        set maxWidth(v: string);
        get height(): string;
        set height(v: string);
        get maxHeight(): string;
        set maxHeight(v: string);
        show(callback?: Function): void;
        addContent<T extends Control>(control: T): T;
        clear(): void;
        close(): void;
        private _dismissible;
        get dismissible(): boolean;
        set dismissible(v: boolean);
        get title(): string;
        set title(v: string);
    }
}
declare namespace ui {
    export class MonthCalendar extends Control {
        firstDayOfWeek: number;
        showYear: boolean;
        showHeader: boolean;
        showMonthArrows: boolean;
        pastDatesDisabled: boolean;
        multiSelect: boolean;
        cells: CalendarCell[];
        todayCell: Control;
        constructor(d?: S.Time, parent?: Control);
        private _selectedDate;
        get selectedDate(): S.Time;
        set selectedDate(v: S.Time);
        private _selectedDates;
        get selectedDates(): S.Time[];
        set selectedDates(dates: S.Time[]);
        private _date;
        get date(): S.Time;
        set date(v: S.Time);
        render(): void;
        private isSelected;
        onDayClick(d: S.Time, cell: Control): void;
        clearSelection(): void;
    }
    class CalendarCell extends Control {
        date: S.Time;
        constructor(time: S.Time, parent: ui.Control);
    }
    export {};
}
declare namespace ui {
    class MultiSelect extends Control {
        private inputPanel;
        private errorPanel;
        private modal;
        property: orm.Property;
        loadURL: string;
        search: boolean;
        loaded: boolean;
        options: Option[];
        actions: Action[];
        loadFunction: () => Promise<Option[]>;
        renderSelectedOption: (option: Option) => Control;
        renderItem: (option: Option) => Control;
        placeHolder: string;
        constructor(id?: string);
        private togleOption;
        showError(error: string): void;
        get selectedValues(): any[];
        set selectedValues(v: any[]);
        private _selectedOptions;
        get selectedOptions(): Option[];
        set selectedOptions(v: Option[]);
        render(): void;
        close(): void;
        private getOptions;
        show(): Promise<void>;
        private updateList;
    }
}
declare namespace ui {
    interface NavSection {
        text?: string;
        items?: NavItem[];
    }
    interface NavItem {
        url?: string;
        label: string;
        icon?: string;
        click?: Function;
        activePaths?: string[];
        parent?: NavItem;
        children?: NavItem[];
        name?: string;
        parentName?: string;
        control?: Control;
        childrenWrap?: Control;
        childrenPanel?: Control;
        disabled?: boolean;
    }
    class Navigation extends WaitControl {
        private selected;
        private path;
        mainPanel: Control;
        bottomPanel: Control;
        mainSections: NavSection[];
        constructor();
        render(): void;
        private renderMain;
        private addSections;
        private renderBottom;
        private navigate;
        clearSelection(): void;
        private select;
        private toggle;
        private expand;
        private collapse;
        private selectIfIsPath;
        private onRouteChange;
    }
}
declare namespace ui {
    class NumberInput extends Input {
        constructor();
        private onKeydown;
    }
}
declare namespace ui {
    class OptionsButton extends Button {
        constructor(parent?: Control);
    }
}
declare namespace ui {
    class Overlay extends Control {
        constructor();
    }
}
declare namespace ui {
    type PageWidth = "full" | "narrow" | "narrower" | "veryNarrow";
    class Page extends WaitControl {
        private internalElement;
        private header;
        private titleRow;
        private backIcon;
        private titleLabelWrap;
        private titleLabelPanel;
        metadataPanel: Control;
        subtitleRow: Control;
        titleRowLeft: Control;
        titleRowRight: Control;
        primaryActions: Control;
        paginationPanel: Control;
        secondaryActions: Control;
        contextbarSave: () => Promise<boolean>;
        thumbnail: string;
        content: Control;
        constructor(width?: PageWidth, className?: string);
        private onLoad;
        private _back;
        get back(): string | Function;
        set back(v: string | Function);
        get view(): AdminView;
        private _title;
        get title(): string;
        set title(v: string);
        private _titleMetadata;
        get titleMetadata(): Control;
        set titleMetadata(v: Control);
        get subtitle(): string;
        set subtitle(v: string);
        private _pagination;
        get pagination(): Pagination;
        set pagination(v: Pagination);
        get narrowWidth(): boolean;
        set narrowWidth(v: boolean);
        get veryNarrowWidth(): boolean;
        set veryNarrowWidth(v: boolean);
        get headerBorder(): boolean;
        set headerBorder(v: boolean);
    }
}
declare namespace ui {
    interface PaginatedModel {
        rowIndex?: number;
        page: number;
        pageSize: number;
        totalCount: number;
        rows: any[];
        aggregates?: any;
    }
    class Pagination extends Control {
        private left;
        private right;
        labelElement: Control;
        pageChange: (page: number) => void;
        rowChange: Function;
        rowMode: boolean;
        pageSize: number;
        constructor(pageSize?: number);
        private totalPages;
        private _model;
        get model(): PaginatedModel;
        set model(v: PaginatedModel);
        get label(): string;
        set label(v: string);
        clear(): void;
        refresh(): void;
    }
}
declare namespace ui {
    class Panel extends WaitControl {
        constructor(className?: string, parent?: Control);
    }
}
declare namespace ui {
    class Paragraph extends Control {
        constructor(text?: string, parent?: Control);
        get value(): string;
        set value(v: string);
    }
}
declare namespace ui {
    class PasswordInput extends Input {
        constructor();
        private onKeydown;
    }
}
declare namespace ui {
    class PeriodPanel extends Control {
        private rightPanel;
        private form;
        private actionList;
        private startCal;
        private endCal;
        constructor();
        get value(): S.DatePeriodModel;
        set value(v: S.DatePeriodModel);
        private refresh;
    }
}
declare namespace ui {
    class PeriodPicker extends Input {
        private periodPanel;
        popup: Popup;
        constructor();
        get value(): S.DatePeriodModel;
        set value(v: S.DatePeriodModel);
        private refresh;
        private onIconclick;
        private onKeydown;
    }
}
declare namespace ui {
    type PopupWidthMode = "center" | "activatorWidth";
    type PopupHorizontalMode = "left" | "right";
    type PopupVerticalMode = "top" | "bootom";
    class Popup extends Control {
        private globalClickFunc;
        private globalResizeFunc;
        offsetX: number;
        offsetY: number;
        widthMode: PopupWidthMode;
        horizontalMode: PopupHorizontalMode;
        verticalMode: PopupVerticalMode;
        activator: Control;
        onClose: Function;
        transitionEnd: Function;
        constructor(classList?: string);
        get visible(): boolean;
        togle(): void;
        togleFor(activator: Control): void;
        show(activator?: Control): void;
        close(): void;
    }
}
declare namespace ui {
    class PropertyLabel extends InputControl {
        private inputPanel;
        private errorPanel;
        property: orm.Property;
        constructor(property?: orm.Property, parent?: Control, value?: any);
        get inlineLabel(): boolean;
        private _value;
        get value(): any;
        set value(v: any);
        showError(error: string): void;
    }
}
declare namespace ui {
    class PropertyLabels extends Control {
        properties: Property[];
        constructor(parent?: Control);
        private _model;
        get model(): any;
        set model(v: any);
        private render;
    }
}
declare namespace ui {
    class Radio extends InputControl {
        private inputPanel;
        private errorPanel;
        label: Control;
        input: HTMLInputElement;
        property: orm.Property;
        constructor(name?: string, label?: string);
        get name(): string;
        set name(v: string);
        get checked(): boolean;
        set checked(v: boolean);
        private _inlineLabel;
        get inlineLabel(): boolean;
        set inlineLabel(v: boolean);
        get value(): any;
        set value(v: any);
        get text(): string;
        set text(v: string);
        private onCheckClick;
        private onLabelClick;
        showError(error: string): void;
    }
}
declare namespace ui {
    class RangeInput extends InputControl {
        private inputPanel;
        private errorPanel;
        property: orm.Property;
        input: HTMLInputElement;
        label: Control;
        constructor(min?: number, max?: number);
        showError(error: string): void;
        get inlineLabel(): boolean;
        get value(): any;
        get id(): string;
        set id(v: string);
        set value(v: any);
        get min(): string;
        set min(v: string);
        get max(): string;
        set max(v: string);
        get step(): string;
        set step(v: string);
    }
}
declare namespace ui {
    class RowList extends Control {
        rows: Control[];
        constructor(parent?: Control);
        addRow(content: Control | string, action?: Function | string): Control;
    }
}
declare namespace ui {
    class RowPanel extends Control {
        constructor(parent?: Control);
    }
}
declare namespace ui {
    class Section extends WaitControl {
        private headerElement;
        private collapseIcon;
        private contentWrap;
        private contentMaxHeight;
        private collapsable;
        titleElement: Control;
        content: Control;
        constructor(title?: string, parent?: Control, collapsable?: boolean);
        private headerClick;
        private _collapsed;
        get collapsed(): boolean;
        set collapsed(v: boolean);
    }
}
declare namespace ui {
    class SectionGroup extends Control {
        blocks: SectionBlock[];
        constructor(parent?: Control);
        addBlock(title: string, body?: Control): SectionBlock;
    }
    class SectionBlock extends Control {
        private headerPanel;
        titlePanel: Control;
        actionsPanel: Control;
        content: Control;
        constructor(title: string, body?: Control);
        get bottomBorder(): boolean;
        set bottomBorder(v: boolean);
        addAction(label: string, click: Function): Link;
        addIconAction(iconName: string, click: Function): Icon;
    }
}
declare namespace ui {
    class SegmentedRow extends Control {
        left: Control;
        right: Control;
        constructor(parent?: Control);
    }
}
declare namespace ui {
    class Select extends InputControl {
        private inputPanel;
        private errorPanel;
        private displayedOptions;
        private highlightedIndex;
        private labelElement;
        private iconElement;
        private modal;
        property: orm.Property;
        loadURL: string;
        search: boolean;
        loaded: boolean;
        options: Option[];
        actions: Action[];
        loadFunction: () => Promise<Option[]>;
        renderSelectedOption: (option: Option) => Control;
        renderItem: (option: Option) => Control;
        placeHolder: string;
        constructor(id?: string);
        private onFocus;
        private onBlur;
        private higlightOption;
        selectOption(option: Option): void;
        showError(error: string): void;
        get inlineLabel(): boolean;
        private renderLabel;
        private _selectedOption;
        get selectedOption(): Option;
        set selectedOption(v: Option);
        private _value;
        get value(): string;
        set value(v: string);
        private _icon;
        get icon(): string;
        set icon(v: string);
        private _label;
        get label(): string;
        set label(v: string);
        private _labelPrefix;
        get labelPrefix(): boolean;
        set labelPrefix(v: boolean);
        render(): void;
        close(): void;
        private getOptions;
        private onKeyDown;
        show(): Promise<void>;
        private updateList;
        private onSelectOption;
    }
}
declare namespace ui {
    interface Slide {
        id?: string;
        control: Control;
        hidden?: boolean;
    }
    class Slider extends Control {
        private panel;
        private _index;
        private slides;
        constructor(parent?: Control);
        get index(): number;
        set index(v: number);
        current(): Slide;
        byIndex(i: number): Slide;
        byID(id: string): Slide;
        addSlideId(id: string, ctrl?: Control): Slide;
        addSlide(ctrl?: Control): Slide;
        back(): void;
        next(): void;
        show(id: string): void;
        private onResize;
        private setPanelPosition;
    }
}
declare namespace ui {
    class Sortable extends WaitControl {
        private placeholders;
        private draggingItem;
        private dragItemStartY;
        private mouseStartY;
        private mouseOverRow;
        private placeholder;
        private rows;
        controls: Control[];
        constructor(parent?: Control);
        private _rightHandle;
        get rightHandle(): boolean;
        set rightHandle(v: boolean);
        clear(): void;
        addRows(...items: {
            text: string;
            data: any;
        }[]): Control[];
        addControls(...controls: Control[]): void;
        render(): void;
        private nextRowId;
        private getIdIndex;
        private onDragStart;
        private onMouseMove;
        private onDrop;
        private getPreviousTopId;
    }
}
declare namespace ui {
    class Spinner extends Control {
        private _color;
        private spinnerIcon;
        constructor();
        start(): void;
        stop(): void;
        get color(): string;
        set color(v: string);
        private _size;
        get size(): number;
        set size(v: number);
        get borderWidth(): string;
        set borderWidth(v: string);
    }
}
declare namespace ui {
    class Stack extends Control {
        constructor(parent?: Control);
        get distribution(): string;
        set distribution(v: string);
    }
}
declare namespace ui {
    interface Aggregate {
        name: string;
        label?: string;
        format?: string;
        column: string;
    }
    class Table extends WaitControl {
        private checkboxes;
        private contentElement;
        private headerCheckbox;
        private table;
        private allSelected;
        selectRows: boolean;
        sortable: boolean;
        order: string;
        columns: orm.Property[];
        stickyHeader: boolean;
        emptyState: EmptyState;
        renderCell: (cell: Control, value: any, p: orm.Property) => boolean;
        rowClick: (data: {
            model: any;
            index: number;
        }) => void;
        constructor(parent?: Control);
        setHeaderCheck(checked: boolean): void;
        private _idProperty;
        get idProperty(): string;
        set idProperty(v: string);
        private _selectedIds;
        get selectedIds(): any[];
        set selectedIds(v: any[]);
        private _model;
        get model(): any[];
        set model(v: any[]);
        appendRows(rows: any[]): void;
        scrollToEnd(): void;
        setContent(c: Control): void;
        addContent(c: Control): void;
        clearContent(): void;
        render(): void;
        private doRender;
        private renderSortableCell;
        private getSorIcon;
        private addRows;
        private format;
        private onCheckClick;
        private onHeaderCheckClick;
        selectAll(selected: boolean): void;
        private updateCheckedState;
        adjustBounds(): void;
        private adjustVerticalScroll;
    }
}
declare namespace ui {
    interface Tab {
        id?: string;
        icon?: string;
        label?: string;
        selected?: boolean;
        data?: any;
        system?: boolean;
        control?: Control;
        click?: Function;
    }
    class TabPanel extends Control {
        private btnShowMoreTabs;
        selectedTab: Tab;
        constructor(tabs?: Tab[]);
        private _tabs;
        get tabs(): Tab[];
        set tabs(v: Tab[]);
        render(): void;
        private adjustVisibleTabs;
        private onTabClick;
        selectId(id: string, fireEvent?: boolean): void;
        selectTab(t: Tab): void;
    }
}
declare namespace ui {
    class Tag extends Control {
        constructor(text?: string);
        private _text;
        get text(): string;
        set text(v: string);
        private _closeAction;
        get closeAction(): Function;
        set closeAction(v: Function);
        render(): void;
    }
}
declare namespace ui {
    class TagEditor extends Control {
        autocomplete: Autocomplete;
        stack: Stack;
        constructor();
        get placeholder(): string;
        set placeholder(v: string);
        private onAutocompleteSelect;
        private onKeydown;
        addTag(tag: string): Tag;
        private _tags;
        get tags(): string[];
        set tags(v: string[]);
    }
}
declare namespace ui {
    class Text extends Control {
        constructor(text?: string, parent?: Control);
        get value(): string;
        set value(v: string);
    }
}
declare namespace ui {
    class TextArea extends InputControl {
        private inputPanel;
        private errorPanel;
        autosize: boolean;
        input: HTMLTextAreaElement;
        property: orm.Property;
        constructor();
        get spellcheck(): boolean;
        set spellcheck(v: boolean);
        private onFocus;
        private onBlur;
        get inlineLabel(): boolean;
        private adjustHeightIfNeeded;
        adjustHeight(): void;
        get value(): any;
        set value(v: any);
        get placeholder(): string;
        set placeholder(v: string);
        showError(error: string): void;
    }
}
declare namespace ui {
    class TextInput extends Input {
        constructor();
        private onKeydown;
    }
}
declare namespace ui {
    class Title extends Control {
        constructor(text?: string, parent?: Control, padding?: boolean);
        private _padding;
        get padding(): boolean;
        set padding(v: boolean);
        get text(): string;
        set text(v: string);
    }
}
declare namespace ui {
    type ToastType = "default" | "success" | "info" | "warning" | "error";
    function showToast(text?: string, type?: ToastType, autoClose?: boolean): void;
    class Toast extends Control {
        private detached;
        contentPanel: HTMLElement;
        dismissPanel: HTMLElement;
        constructor(parent?: Control);
        show(text?: string, type?: ToastType, autoClose?: boolean): void;
        close(): void;
        get visible(): boolean;
        get text(): string;
        set text(v: string);
    }
}
declare namespace ui {
    class Tooltip extends Control {
        private text;
        private activator;
        popup: Popup;
        constructor(text: string, activator: Control);
        private ensureInitialized;
        show(): void;
        togle(): void;
        close(): void;
    }
}
declare namespace ui {
    class Topbar extends Control {
        left: Control;
        center: Control;
        right: Control;
        menuIcon: Control;
        search: TextInput;
        constructor();
        render(): void;
    }
}
declare namespace ui {
    class VerticalLayout extends WaitControl {
        constructor(parent?: Control);
    }
}
declare namespace ui {
    class View extends Control {
        private _title;
        constructor(className?: string);
        get title(): string;
        set title(v: string);
    }
}
