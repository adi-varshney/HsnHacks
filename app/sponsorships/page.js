export default function Team() {

    const NavBar = () => {
        return(
          <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">HSN Hacks</div>
            <ul className="flex gap-4">
              <li><a className="hover:text-gray-400" href="/">Home</a></li>
              <li><a className="hover:text-gray-400" href="/more-info">FAQ</a></li>
              <li><a className="hover:text-gray-400" href="/team">Our Team</a></li>
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
                <div className="flex text-center justify-center mb-12">
                    <img src="/prizes.gif" alt="CS Club" className="h-16 w-auto ml-4" />
                </div>
                <div className="text-center">
                    <h3 className="text-4xl mb-5">Gold Sponsors</h3>
                    <h3 className="text-2xl mb-5">Coming Soon</h3>
                    <h3 className="text-4xl mb-5">Silver Sponsors</h3>
                    <h3 className="text-2xl mb-5">Coming Soon</h3>
                    <h3 className="text-4xl mb-5">Bronze Sponsors</h3>
                    <h3 className="text-2xl mb-5">Coming Soon</h3>

                </div>
            </div>
        </div>
    )
}