import { Component, EventEmitter, Host, Prop, State, Element as StencilElement, Event as StencilEvent, h } from '@stencil/core';
import Swiper from 'swiper';
import { DP_NEXT_CLASS, DP_STR_FALLBACK_LANG } from '../../constants/constants';
import { DPCustomDate, DPDay, DPMode, DPOptions, SwiperExt } from '../../types/types.i';
import { getDays } from '../../utils/utils';

const DP_DEFAULT_OPTIONS: DPOptions = {
  mode: DPMode.CUSTOM,
  quickSwipeEnabled: true,
  language: navigator.language || DP_STR_FALLBACK_LANG,
  spaceBetween: 20,
  customDate: {
    start: new Date(2024, 11, 2),
    end: new Date(2025, 1, 2),
  },
};

/**
 * DayPickerComponent is a custom Stencil component for displaying a day picker.
 * It renders a swiper-based interface for selecting days within a specified range.
 * @function customTemplate - Used to pass custom template for each day.
 * @fires selected - Event fired when a day is selected.
 * @fires init - Event fired when the component is initialized.
 * @fires next - Event fired when navigating to the next day.
 */
@Component({
  tag: 'sk-daypicker',
  styleUrls: ['./../../../../../node_modules/swiper/swiper.min.css', 'sk-daypicker.css'],
  shadow: true,
})
export class DayPickerComponent {
  @StencilElement() el!: HTMLElement;
  /** States */
  @State() protected swiper: SwiperExt;
  @State() protected timelineArr: DPDay[] = [];
  @State() protected _config: DPOptions;
  @State() protected prevSlide: Element;

  /******** Events *********/
  /**
   * Fires when a day is selected.
   * @event selected
   * @param {(selected: DPDay) => void} [selected] - The function to be executed when a day is selected.
   * @param {DPDay} selected - The selected day object.
   */
  @StencilEvent() selected!: EventEmitter<DPDay>;
  /**
   * Fires when the component is initialized.
   * @event init
   * @param {() => void} [init] - The function to be executed when the component is initialized.
   */
  @StencilEvent() init!: EventEmitter;
  /**
   * Fires when the next day is set.
   * @event next
   * @param {(day: DPDay) => void} [next] - The function to be executed when the next day is set.
   * @param {DPDay} next - The next day object.
   */
  @StencilEvent() next!: EventEmitter<DPDay>;
  /**
   * Language ISO for day name localization.
   * @prop {string} [language] - Example: 'tr'.
   */

  /**
   * Fires when a custom template function is provided for rendering days.
   * @event customTemplate
   * @param {(day: DPDay) => string} [customTemplate] - The function to render a custom template for a day.
   * @param {DPDay} day - The day object for which the custom template is rendered.
   * @returns {string} The custom template for the specified day.
   */
  @Prop() public customTemplate?: (day: DPDay) => string;

  @Prop() language?: string;
  /**
   * Enumeration representing different modes for the day picker component.
   * @readonly
   * @enum {string}
   * @property {string} CURRENT_MONTH - Mode for displaying days of the current month.
   * @property {string} CUSTOM - Mode for displaying days within a custom date range.
   */
  @Prop() mode: DPMode;

  /**
   * Custom date range for the day picker component.
   * @property {Date} start - The start date of the custom date range.
   * @property {Date} end - The end date of the custom date range.
   */
  @Prop() customDate?: DPCustomDate;
  /**
   * Space between slides in the swiper component.
   * @prop {number} [spaceBetween]
   */
  @Prop() spaceBetween?: number;
  /**
   * Whether to start displaying days from today.
   * @prop {boolean} [startFromToday]
   */
  @Prop() startFromToday?: boolean;
  /**
   * Whether quick swipe navigation is enabled.
   * @prop {boolean} [quickSwipeEnabled]
   */
  @Prop() quickSwipeEnabled?: boolean;
  /**
   * Configuration options for the day picker component.
   * @prop {DPOptions} [config]
   * @description Other properties will be ignored when a config is provided.
   */
  @Prop() config?: DPOptions;
  /**
   * Whether to use default options for the day picker component.
   * @prop {boolean} [useDefaults]
   */
  @Prop() useDefaults?: boolean;

  componentWillLoad() {
    if (this._config) {
      Object.keys(this.config || {}).forEach(key => (this._config[key] = this.config[key]));
    } else {
      this._config = {
        mode: this.mode,
        onSelect: v => {
          this.selected.emit(v);
        },
        onInit: () => {
          this.init.emit();
        },
        customDate: this.customDate,
        language: this.language,
        customTemplate: this.customTemplate,
        onNext: day => {
          this.next.emit(day);
        },
        startFromToday: this.startFromToday,
        spaceBetween: this.spaceBetween,
        quickSwipeEnabled: this.quickSwipeEnabled,
      };
    }

    if (this.useDefaults) {
      this._config = DP_DEFAULT_OPTIONS;
    }

    this.timelineArr = getDays(this._config);
  }

  componentDidLoad() {
    this.initSwiper();
  }

  /**
   * Initializes the swiper for the day picker component.
   */
  initSwiper() {
    if (this.swiper) {
      this.swiper.destroy();
      this.swiper = null;
    }
    const container = this.el.shadowRoot.querySelector('.swiper') as HTMLElement;
    const self = this;
    this.swiper = new Swiper(container, {
      slidesPerView: 'auto',
      grabCursor: true,
      spaceBetween: self._config.spaceBetween && self._config.spaceBetween > 29 ? self._config.spaceBetween : 30,
      simulateTouch: true,
      centeredSlides: true,
      edgeSwipeDetection: true,
      cssMode: self._config.quickSwipeEnabled ? true : false,
      freeMode: { enabled: self._config.quickSwipeEnabled ? true : false },
      on: {
        sliderMove() {
          const translate = self.swiper.rtlTranslate ? self.swiper.translate : -self.swiper.translate;
          const snapIndex = self.swiper.slidesGrid.findIndex(snap => snap >= translate);
          const activeIndex = snapIndex !== -1 ? snapIndex : self.swiper.slidesGrid.length - 1;
          self.setNextSlide(activeIndex);
        },
        touchEnd(_) {
          self.releasePreviousSlide();
        },
        activeIndexChange(e) {
          if (self._config.onSelect) {
            self._config.onSelect(self.timelineArr[e.activeIndex]);
          }
        },
      },
    });
  }

  /**
   * Sets the next slide based on the active index.
   * @param {number} i The index of the active slide.
   */
  protected setNextSlide(i: number) {
    if (i > -1) {
      const el = this.el.shadowRoot.querySelector(`[data-slide="${i}"]`);
      if (Boolean(el) && el !== this.prevSlide) {
        if (this.prevSlide) {
          this.prevSlide.classList.remove(DP_NEXT_CLASS);
        }

        el.classList.add(DP_NEXT_CLASS);
        this.prevSlide = el;

        if (this._config.onNext) {
          this._config.onNext(this.timelineArr[i]);
        }
      }
    }
  }

  /**
   * Releases the previous slide.
   */
  protected releasePreviousSlide() {
    if (this.prevSlide) {
      this.prevSlide.classList.remove(DP_NEXT_CLASS);
    }
  }

  renderDay(dpt: DPDay, i: number) {
    if (this._config.customTemplate) {
      return (
        <div
          class="swiper-slide"
          data-slide={i}
          onClick={() => {
            this.swiper.slideTo(i, 500, true);
          }}
        >
          {this._config.customTemplate(dpt)}
        </div>
      );
    }

    return (
      <div
        class="swiper-slide"
        data-slide={i}
        onClick={() => {
          this.swiper.slideTo(i, 500, true);
        }}
      >
        <div class="day-data">
          <h3 class="month-name">{dpt.localizedNames.month}</h3>
          <h1 class="day-date">{dpt.day}</h1>
          <span class="day-name">{dpt.localizedNames.day}</span>
          {dpt.year != dpt.startYear && <h3 class="dpt-year">{dpt.year}</h3>}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <div class="swiper">
          <div class="swiper-wrapper">{this.timelineArr.map((dpt, i) => this.renderDay(dpt, i))}</div>
        </div>
      </Host>
    );
  }
}
