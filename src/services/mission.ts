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
          Authorization: `Bearer` + localStorage.getItem("acces_token"),
        },
      }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => false);
};

export const submitMission5 = (
  answer: (number | undefined)[]
): Promise<boolean> => {
  return client
    .post(
      "mission/submitanswer/5",
      { answer: answer },
      {
        headers: {
          Authorization: `Bearer` + localStorage.getItem("acces_token"),
        },
      }
    )
    .then((res) => {
      return true;
    })
    .catch((err) => false);
};
