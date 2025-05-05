import React from "react";
import { Card } from "../components/ui/card";

const TeamFooter = () => {
  const team = [
    {
      name: "M Bilal Afzal",
      role: "Team Member",
      image: "/mBilal.png",
    },
    {
      name: "Anas Arshad",
      role: "Team Member",
      image: "/public/anast.jpeg",
    },
    {
      name: "Anas Tahir",
      role: "Team Member",
      image: "/public/anasa.jpeg",
    },
    {
      name: "M Mubashir ",
      role: "Team Member",
      image: "/public/mubashir.jpeg",
    },
  ];

  return (
    <footer className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Powered By
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-none hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="w-32 h-32 mx-auto rounded-full  overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full  object-fill"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-center">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default TeamFooter;
