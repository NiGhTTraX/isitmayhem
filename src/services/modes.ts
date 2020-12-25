enum ModeId {
  MAYHEM = 71,
}

export type Mode = {
  id: ModeId;
  name: string;
};

export type TodayModes = {
  modes: Record<string, Mode>;
};

export const getTodaysModes = async () => {
  const response = await fetch(
    "https://overwatcharcade.today/api/overwatch/today"
  );

  if (!response.ok) {
    throw new Error(`${response.status}: ${await response.text()}`);
  }

  return ((await response.json()) as unknown) as TodayModes;
};

export const isItMayhem = (todayModes: TodayModes) =>
  !!Object.values(todayModes.modes).find((mode) => mode.id === ModeId.MAYHEM);
