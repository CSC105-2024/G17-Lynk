import React from "react";
import { IoMdLink } from "react-icons/io";

const InfoCard = () => {
  const infoData = [
    { label: "Links", value: 3 },
    { label: "Playlists", value: 4 },
    { label: "Tags", value: 5 },
  ];

  return (
    // A 3-column grid card showing some stats (Links, Playlists, Tags)
    // Each column has an icon, a number, and a label
    // Responsive design: turns into a single column on small screens
    <div className="grid md:grid-cols-3 bg-[var(--info-card-bg-color)] rounded-2xl py-5 w-full">
      {infoData.map((item, idx) => (
        <div
          key={item.label}
          className={`border-[var(--seperator-color)] flex p-5 justify-center items-center gap-5 lg:gap-8 ${
            idx < infoData.length - 1 ? "md:border-r-2" : ""
          } border-[var(--seperator-color)]`}
        >
          <div className="p-2.5 text-3xl lg:text-4xl bg-[var(--info-card-icon-bg-color)] rounded-lg text-[var(--info-card-icon-color)]">
            <IoMdLink />
          </div>
          <div>
            <p className="text-3xl lg:text-4xl">{item.value}</p>
            <p>{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
