/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DPCustomDate, DPDay, DPMode, DPOptions } from "./types/types.i";
export { DPCustomDate, DPDay, DPMode, DPOptions } from "./types/types.i";
export namespace Components {
    /**
     * DayPickerComponent is a custom Stencil component for displaying a day picker.
     * It renders a swiper-based interface for selecting days within a specified range.
     * @function customTemplate - Used to pass custom template for each day.
     * @fires selected - Event fired when a day is selected.
     * @fires init - Event fired when the component is initialized.
     * @fires next - Event fired when navigating to the next day.
     */
    interface SkDaypicker {
        /**
          * Configuration options for the day picker component.
          * @prop {DPOptions} [config]
          * @description Other properties will be ignored when a config is provided.
         */
        "config"?: DPOptions;
        /**
          * Custom date range for the day picker component.
          * @property {Date} start - The start date of the custom date range.
          * @property {Date} end - The end date of the custom date range.
         */
        "customDate"?: DPCustomDate;
        /**
          * Fires when a custom template function is provided for rendering days.
          * @event customTemplate
          * @param customTemplate - The function to render a custom template for a day.
          * @param day - The day object for which the custom template is rendered.
          * @returns The custom template for the specified day.
         */
        "customTemplate"?: (day: DPDay) => string;
        "language"?: string;
        /**
          * Enumeration representing different modes for the day picker component.
          * @readonly 
          * @enum *
          * @property {string} CURRENT_MONTH - Mode for displaying days of the current month.
          * @property {string} CUSTOM - Mode for displaying days within a custom date range.
         */
        "mode": DPMode;
        /**
          * Whether quick swipe navigation is enabled.
          * @prop {boolean} [quickSwipeEnabled]
         */
        "quickSwipeEnabled"?: boolean;
        /**
          * Space between slides in the swiper component.
          * @prop {number} [spaceBetween]
         */
        "spaceBetween"?: number;
        /**
          * Whether to start displaying days from today.
          * @prop {boolean} [startFromToday]
         */
        "startFromToday"?: boolean;
        /**
          * Whether to use default options for the day picker component.
          * @prop {boolean} [useDefaults]
         */
        "useDefaults"?: boolean;
    }
}
export interface SkDaypickerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSkDaypickerElement;
}
declare global {
    interface HTMLSkDaypickerElementEventMap {
        "selected": DPDay;
        "init": any;
        "next": DPDay;
    }
    /**
     * DayPickerComponent is a custom Stencil component for displaying a day picker.
     * It renders a swiper-based interface for selecting days within a specified range.
     * @function customTemplate - Used to pass custom template for each day.
     * @fires selected - Event fired when a day is selected.
     * @fires init - Event fired when the component is initialized.
     * @fires next - Event fired when navigating to the next day.
     */
    interface HTMLSkDaypickerElement extends Components.SkDaypicker, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSkDaypickerElementEventMap>(type: K, listener: (this: HTMLSkDaypickerElement, ev: SkDaypickerCustomEvent<HTMLSkDaypickerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSkDaypickerElementEventMap>(type: K, listener: (this: HTMLSkDaypickerElement, ev: SkDaypickerCustomEvent<HTMLSkDaypickerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSkDaypickerElement: {
        prototype: HTMLSkDaypickerElement;
        new (): HTMLSkDaypickerElement;
    };
    interface HTMLElementTagNameMap {
        "sk-daypicker": HTMLSkDaypickerElement;
    }
}
declare namespace LocalJSX {
    /**
     * DayPickerComponent is a custom Stencil component for displaying a day picker.
     * It renders a swiper-based interface for selecting days within a specified range.
     * @function customTemplate - Used to pass custom template for each day.
     * @fires selected - Event fired when a day is selected.
     * @fires init - Event fired when the component is initialized.
     * @fires next - Event fired when navigating to the next day.
     */
    interface SkDaypicker {
        /**
          * Configuration options for the day picker component.
          * @prop {DPOptions} [config]
          * @description Other properties will be ignored when a config is provided.
         */
        "config"?: DPOptions;
        /**
          * Custom date range for the day picker component.
          * @property {Date} start - The start date of the custom date range.
          * @property {Date} end - The end date of the custom date range.
         */
        "customDate"?: DPCustomDate;
        /**
          * Fires when a custom template function is provided for rendering days.
          * @event customTemplate
          * @param customTemplate - The function to render a custom template for a day.
          * @param day - The day object for which the custom template is rendered.
          * @returns The custom template for the specified day.
         */
        "customTemplate"?: (day: DPDay) => string;
        "language"?: string;
        /**
          * Enumeration representing different modes for the day picker component.
          * @readonly 
          * @enum *
          * @property {string} CURRENT_MONTH - Mode for displaying days of the current month.
          * @property {string} CUSTOM - Mode for displaying days within a custom date range.
         */
        "mode"?: DPMode;
        /**
          * Fires when the component is initialized.
          * @event init
          * @param init - The function to be executed when the component is initialized.
         */
        "onInit"?: (event: SkDaypickerCustomEvent<any>) => void;
        /**
          * Fires when the next day is set.
          * @event next
          * @param next - The function to be executed when the next day is set.
          * @param next - The next day object.
         */
        "onNext"?: (event: SkDaypickerCustomEvent<DPDay>) => void;
        /**
          * Fires when a day is selected.
          * @event selected
          * @param selected - The function to be executed when a day is selected.
          * @param selected - The selected day object.
         */
        "onSelected"?: (event: SkDaypickerCustomEvent<DPDay>) => void;
        /**
          * Whether quick swipe navigation is enabled.
          * @prop {boolean} [quickSwipeEnabled]
         */
        "quickSwipeEnabled"?: boolean;
        /**
          * Space between slides in the swiper component.
          * @prop {number} [spaceBetween]
         */
        "spaceBetween"?: number;
        /**
          * Whether to start displaying days from today.
          * @prop {boolean} [startFromToday]
         */
        "startFromToday"?: boolean;
        /**
          * Whether to use default options for the day picker component.
          * @prop {boolean} [useDefaults]
         */
        "useDefaults"?: boolean;
    }
    interface IntrinsicElements {
        "sk-daypicker": SkDaypicker;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * DayPickerComponent is a custom Stencil component for displaying a day picker.
             * It renders a swiper-based interface for selecting days within a specified range.
             * @function customTemplate - Used to pass custom template for each day.
             * @fires selected - Event fired when a day is selected.
             * @fires init - Event fired when the component is initialized.
             * @fires next - Event fired when navigating to the next day.
             */
            "sk-daypicker": LocalJSX.SkDaypicker & JSXBase.HTMLAttributes<HTMLSkDaypickerElement>;
        }
    }
}
