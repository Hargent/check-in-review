export type DailyStars = {
  primary: string;
  likes: number;
};

export type Series = {
  label: string;
  data: DailyStars[];
};
