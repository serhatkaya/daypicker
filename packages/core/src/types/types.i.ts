import Swiper from 'swiper';

export interface DPOptions {
  customTemplate?: (day: DPDay) => string;
  onSelect?: (selected: DPDay) => void;
  onInit?: () => void;
  onNext?: (day: DPDay) => void;
  language?: string;
  mode: DPMode;
  startFromToday?: boolean;
  customDate?: DPCustomDate;
  spaceBetween?: number;
  quickSwipeEnabled?: boolean;
}

export interface DPDay {
  day: number;
  year: number;
  month: number;
  startYear: number;
  localizedNames?: {
    day: string;
    month: string;
  };
}

export enum DPMode {
  CURRENT_MONTH = 'CURRENT',
  CUSTOM = 'CUSTOM',
}

export interface DPCustomDate {
  start: Date;
  end: Date;
}

export type SwiperExt = Swiper & { [key: string]: any };
