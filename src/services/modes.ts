export type Mode = {
  name: string;
};

export type TodayModes = {
  modes: Mode[];
  updatedAt: number;
};

type ApiResponse = {
  data: {
    modes: Mode[];
    createdAt: string;
  };
};

export const getTodaysModes = async (): Promise<TodayModes> => {
  const response = await fetch(
    "https://overwatcharcade.today/api/v1/overwatch/today"
  );

  if (!response.ok) {
    throw new Error(`${response.status}: ${await response.text()}`);
  }

  const { data } = (await response.json()) as ApiResponse;

  return {
    modes: data.modes,
    updatedAt: new Date(data.createdAt).getTime(),
  };
};

export const isItMayhem = (modes: Mode[]) =>
  !!modes.find((mode) => mode.name === "Total Mayhem");
