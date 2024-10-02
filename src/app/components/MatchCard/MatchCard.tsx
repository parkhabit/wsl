import Image from "next/image";
import { Marker } from "../Marker";

interface MatchData {
  team1: {
    logo: string;
    name: string;
    score: number;
  };
  team2: {
    logo: string;
    name: string;
    score: number;
  };
  playStatus: {
    isPlaying: boolean;
    isFinished: boolean;
    time: string;
    video: string;
  };
  matchDate: string;
  matchTime: string;
}

export default function MatchCard({
  team1,
  team2,
  playStatus,
  matchDate,
  matchTime,
}: MatchData) {
  return (
    <div className="flex flex-row bg-[#333438] rounded-2xl p-4 pr-0 justify-between">
      <div className="flex flex-[3] flex-col justify-center w-full gap-2 border-r border-[#444746]">
        <div className="flex flex-row justify-between w-full relative">
          <div className="flex flex-row">
            <Image
              src={team1.logo}
              width={25}
              height={25}
              alt={`${team1.name} logo`}
              className="mr-2"
            />
            <p>{team1.name}</p>
          </div>
          <p className="mr-4">{team1.score}</p>
          {team1.score > team2.score && (
            <div className="absolute right-0 top-2">
              <Marker />
            </div>
          )}
        </div>
        <div className="flex flex-row justify-between w-full relative">
          <div className="flex flex-row">
            <Image
              src={team2.logo}
              width={25}
              height={25}
              alt={`${team2.name} logo`}
              className="mr-2"
            />
            <p>{team2.name}</p>
          </div>
          <p className="mr-4">{team2.score}</p>
          {team2.score > team1.score && (
            <div className="absolute right-0 top-2">
              <Marker />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-[1] flex-col items-center">
        {playStatus.isFinished ? (
          <p className="text-xs text-[#e8e8e8]">FT</p>
        ) : null}
        {playStatus.isPlaying ? (
          <p className="text-xs">{playStatus.time}</p>
        ) : (
          <p className="text-xs text-[#9e9e9e]">{matchDate}</p>
        )}
        {playStatus.isFinished && playStatus.video ? <p>VIDEO</p> : null}
        {!playStatus.isFinished && <p className="text-xs">{matchTime}</p>}
      </div>
    </div>
  );
}
