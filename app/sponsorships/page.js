export default function Team() {

  const NavBar = () => {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img src="../favicon.ico" alt="favicon" className="w-9 h-9 mr-2" />
          <div className="text-xl font-bold">HSN Hacks</div>
        </div>
        <ul className="flex gap-4">
          <li><a className="hover:text-gray-400" href="/">Home</a></li>
          <li><a className="hover:text-gray-400" href="/more-info">FAQ</a></li>
          <li><a className="hover:text-gray-400" href="/team">Our Team</a></li>
          <li><a className="hover:text-gray-400" href="/workshops">Workshops</a></li>
          <li><a className="hover:text-gray-400" href="/sponsorships">Sponsors</a></li>
        </ul>
      </nav>
    );
  };

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
            <a href="https://www.partycity.com/" target="_blank">
              <img src="/partycity.png" alt="Party City" className="h-32 w-auto" />
            </a>
            <a href="https://artofproblemsolving.com/" target="_blank">
              <img src="/aops.png" alt="AOPS" className="h-32 w-auto" />
            </a>
            <a href="https://gen.xyz/" target="_blank">
              <img src="/xyz.jpeg" alt="XYZ Domains" className="h-32 w-auto" />
            </a>
            <a href="https://www.janestreet.com/" target="_blank">
              <img src="/jane-street.png" alt="Jane Street" className="h-32 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )  
}