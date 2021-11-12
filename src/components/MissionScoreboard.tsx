import React, { useEffect, useState } from "react";
import { getMissionScoreboard, Score } from "../services/scoreboard";

interface Props {
  logo: any;
  missionId: number | string;
}

export default function MissionScoreboard({ logo, missionId }: Props) {
  const [scoreboard, setScoreboard] = useState<Score[]>([]);

  useEffect(() => {
    (async () => {
      setScoreboard(await getMissionScoreboard(missionId));
    })();
  }, []);

  return (
    <div className="z-50">
      <img src={logo} className="mx-auto" />
      <div className="font-poppins text-white text-center mt-2 ">
        SCOREBOARD
      </div>
      <div className="flex flex-col gap-3 h-52 overflow-y-auto z-20">
        {scoreboard.map((log) => (
          <p className="border-2 rounded-full px-3 text-white font-poppins flex gap-2 justify-between font-thaifonts">
            <span>{log.teamName}</span>
            <span>{log.durationStr}</span>
          </p>
        ))}
        {scoreboard.length === 0 && (
          <p className="border-2 rounded-full px-3 text-white font-poppins flex gap-2 justify-between">
            <span>{"------"}</span>
            <span>{"--:--"}</span>
          </p>
        )}
      </div>
    </div>
  );
}
