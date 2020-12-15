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

export const getTodaysModes = async () =>
  fetch("https://overwatcharcade.today/api/overwatch/today").then(
    (r) => (r.json() as unknown) as TodayModes
  );

export const isItMayhem = (todayModes: TodayModes) =>
  !!Object.values(todayModes.modes).find((mode) => mode.id === ModeId.MAYHEM);
