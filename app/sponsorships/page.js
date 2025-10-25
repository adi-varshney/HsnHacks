import Image from "next/image";
import NavBar from "../_components/NavBar";

export default function Sponsorships() {

  return (
    <div>
      <NavBar />
      <div className="p-10">
        <div className="text-center justify-center">
          <h1 className="text-6xl">Meet our Sponsors</h1>
        </div>
        <br></br>
        <div className="text-center">
          <div className="flex justify-center space-x-8">
            <a href="https://www.partycity.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/partycity.png"
                alt="Party City"
                width={240}
                height={128}
                className="h-32 w-auto"
              />
            </a>
            <a href="https://artofproblemsolving.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/aops.png"
                alt="AOPS"
                width={240}
                height={128}
                className="h-32 w-auto"
              />
            </a>
            <a href="https://gen.xyz/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/xyz.jpeg"
                alt="XYZ Domains"
                width={240}
                height={128}
                className="h-32 w-auto"
              />
            </a>
            <a href="https://www.janestreet.com/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/jane-street.png"
                alt="Jane Street"
                width={240}
                height={128}
                className="h-32 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
