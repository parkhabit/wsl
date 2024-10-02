import Image from "next/image";

interface RowData {
  logo: string;
  teamName: string;
  shortTeamName: string;
  points: number;
  position: number;
}

export default function StandingsRow({
  logo,
  teamName,
  shortTeamName,
  points,
  position,
}: RowData) {
  return (
    <>
      <div className="flex">
        <p className="px-2 text-sm text-[#9e9e9e]">{position}</p>
        <Image src={logo} width={24} height={24} alt={teamName} />
        <p className="px-2 text-sm text-[#9e9e9e]">{shortTeamName}</p>
      </div>

      <p className="text-sm text-[#9e9e9e]">{`${points} pts.`}</p>
    </>
  );
}
