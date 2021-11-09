import client from "../utils/api";

export interface Score {
  userId: number;
  missionId: number;
  startTime: Date;
  endTime: Date;
  durationStr: string;
  teamName?: string;
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
      new Date(a.endTime).getTime() - new Date(a.startTime).getTime();
    return bDuration - aDuration;
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
