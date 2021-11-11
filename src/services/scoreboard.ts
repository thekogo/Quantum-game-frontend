import client from "../utils/api";

export interface Score {
  userId: number;
  missionId: number;
  startTime: Date;
  endTime: Date;
  durationStr: string;
  teamName?: string;
}

export interface IMainScorebaord {
  userId: number;
  teamName: string;
  missionPass: number;
  durationStr: string;
  durationMil: number;
}

export const getMissionScoreboard = async (missionId: number | string) => {
  const res = await client.get<Score[]>("scoreboard/" + missionId, {
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("access_token"),
    },
  });
  let scores = res.data;
  scores = scores.sort((a, b) => {
    let aDuration =
      new Date(a.endTime).getTime() - new Date(a.startTime).getTime();
    let bDuration =
      new Date(b.endTime).getTime() - new Date(b.startTime).getTime();
    return aDuration - bDuration;
  });
  return scores;
};

export const getMyPass = async () => {
  const res = await client.get<Score[]>("scoreboard/missionpass", {
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("access_token"),
    },
  });
  let scores = res.data;
  return scores;
};

export const getGameScoreboard = async (): Promise<IMainScorebaord[]> => {
  const res = await client.get<IMainScorebaord[]>("scoreboard", {
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("access_token"),
    },
  });
  let scores = res.data;
  const sortScores = scores.sort((a, b) => {
    if (a.missionPass > b.missionPass) {
      return -1;
    } else if (a.missionPass === b.missionPass) {
      return a.durationMil - b.durationMil;
    }
    return 1;
  });
  return sortScores;
};
