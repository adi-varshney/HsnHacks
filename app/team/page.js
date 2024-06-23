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
                <div className="text-center mb-12 flex justify-center items-center">
                    <img src="/girlsWhoCode.png" alt="Girls Who Code" className="h-16 w-auto mr-4" />
                    <h1 className="text-6xl">Meet the Team</h1>
                    <img src="/CsClub.png" alt="CS Club" className="h-16 w-auto ml-4" />
                </div>
                <div className="text-center">
                    <h3 className="text-2xl">Alex Wang</h3>
                    <h3 className="text-2xl">Akshat Mehta</h3>
                    <h3 className="text-2xl">Anvitha Komarraju</h3>
                    <h3 className="text-2xl">Charlie Xue</h3>
                    <h3 className="text-2xl">Adikesh Nathan</h3>
                    <h3 className="text-2xl">Arjun Mehan</h3>
                    <h3 className="text-2xl">Rajveer Dharkar</h3>
                    <h3 className="text-2xl">Prathyush Yeturi</h3>
                    <h3 className="text-2xl">Kashish Arora</h3>
                    <h3 className="text-2xl">Hira Usman</h3>
                    <h3 className="text-2xl">Audrey Chen</h3>
                    <h3 className="text-2xl">Claire Cheng</h3>
                    <h3 className="text-2xl">Aliza Borker</h3>
                    <h3 className="text-2xl">Simrun Sabhlok</h3>
                    <h3 className="text-2xl">Sally Mundia</h3>
                    <h3 className="text-2xl">Riddhi Ganesh</h3>
                    <h3 className="text-2xl">Pragnya Goteti</h3>
                </div>
            </div>
        </div>
    );
}
