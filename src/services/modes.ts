export type Mode = {
  name: string;
};

type Modes = Record<string, Mode>;

export type TodayModes = {
  modes: Modes;
  updatedAt: number;
};

type ApiResponse = {
  modes: Modes;
  // eslint-disable-next-line camelcase
  created_at: string;
};

export const getTodaysModes = async (): Promise<TodayModes> => {
  const response = await fetch(
    "https://overwatcharcade.today/api/overwatch/today"
  );

  if (!response.ok) {
    throw new Error(`${response.status}: ${await response.text()}`);
  }

  const data = (await response.json()) as ApiResponse;

  return {
    modes: data.modes,
    updatedAt: new Date(data.created_at).getTime(),
  };
};

export const isItMayhem = (modes: Modes) =>
  !!Object.values(modes).find((mode) => mode.name === "Total Mayhem");
