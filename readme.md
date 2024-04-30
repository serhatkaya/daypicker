# sk-daypicker

<!-- Auto Generated Below -->

## Overview

DayPickerComponent is a custom Stencil component for displaying a day picker.
It renders a swiper-based interface for selecting days within a specified range.

![1714477478238](image/readme/1714477478238.png)

## Framework Documents

- [Angular Docs](/packages/angular)

## Properties

| Property            | Attribute             | Description                                                            | Type                                    | Default     |
| ------------------- | --------------------- | ---------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `config`            | --                    | Configuration options for the day picker component.                    | `DPOptions`                             | `undefined` |
| `customDate`        | --                    | Custom date range for the day picker component.                        | `DPCustomDate`                          | `undefined` |
| `customTemplate`    | --                    | Fires when a custom template function is provided for rendering days.  | `(day: DPDay) => string`                | `undefined` |
| `language`          | `language`            |                                                                        | `string`                                | `undefined` |
| `mode`              | `mode`                | Enumeration representing different modes for the day picker component. | `DPMode.CURRENT_MONTH \| DPMode.CUSTOM` | `undefined` |
| `quickSwipeEnabled` | `quick-swipe-enabled` | Whether quick swipe navigation is enabled.                             | `boolean`                               | `undefined` |
| `spaceBetween`      | `space-between`       | Space between slides in the swiper component.                          | `number`                                | `undefined` |
| `startFromToday`    | `start-from-today`    | Whether to start displaying days from today.                           | `boolean`                               | `undefined` |
| `useDefaults`       | `use-defaults`        | Whether to use default options for the day picker component.           | `boolean`                               | `undefined` |

## Events

| Event      | Description                              | Type                 |
| ---------- | ---------------------------------------- | -------------------- |
| `init`     | Fires when the component is initialized. | `CustomEvent<any>`   |
| `next`     | Fires when the next day is set.          | `CustomEvent<DPDay>` |
| `selected` | Fires when a day is selected.            | `CustomEvent<DPDay>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
