import React from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactOfTeam = () => {
  const team = [
    {
      name: "M Bilal Afzal",
      role: "Frontend developer & COO of Arezal group of technologies",
      image: "/mBilal.png",
      email: "bilalkhanghouri37@gamil.com",
      phone: "+92 (325) 5705107",
      linkedin: "https://www.linkedin.com/in/muhammad-bilal-afzal-768184242/",
      github: "https://github.com/bilalafzal6349",
    },

    {
      name: "M. Ans Arshad",
      role: "Senior Artificial Intelligence Engineer",
      image: "/annss.jpeg",
      email: "ansarshad059@gmail.com",
      phone: "+92 334 7268868",
      linkedin: "https://www.linkedin.com/in/ans-arshad-60a5971b5/",
      github: "https://github.com/rannss",
    },
    {
      name: "Anas Tahir",
      role: "MLOps Engineer",
      image: "/WhatsApp Image 2025-05-13 at 1.42.13 PM.jpeg",
      email: "tahiranas987@gamil.com",
      phone: "+92 3216967893",
      linkedin: "alex-martinez-ai",
      github: "cheena g",
    },
    {
      name: " Mubashir ",
      role: "AI Engineer and Research Specialist",
      image: "/mubashir.jpeg",
      email: "mubashir420@gmail.com",
      phone: "03180414677",
      linkedin: "cheena g",
      github: "etaylor-ml",
    },
  ];

  return (
    <footer className="py-16 px-4 bg-transparent">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Contact Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-none hover:transform hover:scale-105 transition-all duration-300 rounded-xl"
            >
              <div className="p-6 text-center">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4">
                  <Avatar className="w-full h-full">
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-4">{member.role}</p>

                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={`${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Github className="h-4 w-4" />
                    <span>{member.github}</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default ContactOfTeam;
