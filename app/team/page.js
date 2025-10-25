import Image from "next/image";
import NavBar from "../_components/NavBar";

export default function Team() {

  const Card = ({ name, about }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {about}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div className="text-center">
        <div className="text-center mb-12 flex justify-center items-center py-5">
          <Image
            src="/girlsWhoCode.png"
            alt="Girls Who Code"
            width={256}
            height={64}
            className="h-16 w-auto mr-4"
            priority
          />
          <h1 className="text-6xl">Meet the Team</h1>
          <Image
            src="/CsClub.png"
            alt="CS Club"
            width={256}
            height={64}
            className="h-16 w-auto ml-4"
            priority
          />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-4xl">Leads</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          <Card
            name="Alex Wang"
            about="Hackathon Director"
          />
          <Card
            name="Kashish Arora"
            about="Hackathon Director"
          />
        </div>

        <div className="py-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl">Logistics</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <Card
              name="Akshat Mehta"
              about="Department Leader"
            />
            <div className="w-full"></div>
            <Card
              name="Prathyush Yeturi"
              about="Member"
            />
            <Card
              name="Charlie Xue"
              about="Member"
            />
            <Card
              name="Rajveer Dharkar"
              about="Member"
            />
            <Card
              name="Arjun Mehan"
              about="Member"
            />
          </div>
        </div>

        <div className="py-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl">Sponsorship</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <Card name="Audrey Chen" about="Department Director" />
            <div className="w-full"></div>
            <Card
              name="Prathyush Yeturi"
              about="Member"
            />
            <Card
              name="Hira Usman"
              about="Member"
            />
            <Card
              name="Claire Cheng"
              about="Member"
            />
            <Card
              name="Rajveer Dharkar"
              about="Member"
            />
          </div>
        </div>

        <div className="py-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl">Outreach</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <Card name="Aliza Borker" about="Department Director" />
            <div className="w-full"></div>
            <Card
              name="Anvitha Komarraju"
              about="Member"
            />
            <Card
              name="Sally Mundia"
              about="Member"
            />
            <Card
              name="Simrun Sabhlok"
              about="Member"
            />
          </div>
        </div>

        <div className="py-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl">Curriculum</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <Card name="Adikesh Nathan" about="Department Director" />
            <div className="w-full"></div>
            <Card
              name="Riddhi Ganesh"
              about="Member"
            />
            <Card
              name="Pragnya Goteti"
              about="Member"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
