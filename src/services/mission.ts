import { Axios, AxiosResponse } from "axios";
import client from "../utils/api";

export const submitMission1 = (
  answer: number | undefined
): Promise<boolean> => {
  return client
    .post(
      "mission/submitanswer/1",
      { answer: Number(answer) },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("access_token"),
        },
      }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => false);
};

export const submitMission2 = (
  answer: string | undefined
): Promise<boolean> => {
  return client
    .post(
      "mission/submitanswer/2",
      { answer: answer },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("access_token"),
        },
      }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => false);
};

export const submitMission3 = (
  answer: (number | undefined)[]
): Promise<boolean> => {
  return client
    .post(
      "mission/submitanswer/3",
      { answer: answer },
      {
        headers: {
          Authorization: `Bearer ` + localStorage.getItem("access_token"),
        },
      }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => false);
};

export const submitMission4 = (
  answer: (string | undefined)[]
): Promise<AxiosResponse> => {
  return client.post(
    "mission/submitanswer/4",
    { answer: answer },
    {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("access_token"),
      },
    }
  );
};

export const submitMission5 = (
  answer: (string | undefined)[]
): Promise<AxiosResponse> => {
  return client.post(
    "mission/submitanswer/5",
    { answer: answer },
    {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("access_token"),
      },
    }
  );
};

export const submitMission6 = (answer: boolean[][]): Promise<AxiosResponse> => {
  return client.post(
    "mission/submitanswer/6",
    { answer: answer },
    {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("access_token"),
      },
    }
  );
};

export const startMission = (missionId: number | string) => {
  return client.post(
    "mission/startmission/" + missionId,
    { test: "test" },
    {
      headers: {
        Authorization: `Bearer ` + localStorage.getItem("access_token"),
      },
    }
  );
};

export const getMission = (missionId: number | string) => {
  return client.get("mission/" + missionId, {
    headers: {
      Authorization: `Bearer ` + localStorage.getItem("access_token"),
    },
  });
};

export const getDuration = (d1: Date, d2: Date) => {
  const timemil = d2.getTime() - d1.getTime();

  return {
    getMinutes: function () {
      return Math.floor(timemil / 1000 / 60);
    },
    getMilliseconds: function () {
      return Math.floor((timemil / 1000) % 60);
    },
    toString: function () {
      return (
        this.addZero(this.getMinutes()) +
        ":" +
        this.addZero(this.getMilliseconds()) +
        ""
      );
    },
    toDuration: function () {
      return timemil;
    },
    addZero: function (str: number) {
      let newStr = String(str);
      if (newStr.length < 2) {
        newStr = "0" + newStr;
      }
      return newStr;
    },
  };
};
