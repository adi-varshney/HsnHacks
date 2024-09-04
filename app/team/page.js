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
          <li><a className="hover:text-gray-400" href="/sponsorships">Sponsors</a></li>
        </ul>
      </nav>
    );
  };

  const Card = ({ name, imageURL, about }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <a href="#">
          <img className="rounded-t-lg w-full h-48 object-cover" src={imageURL} alt={name} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{about}</p>
        </div>
      </div>
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
        <div className="flex flex-wrap justify-center">
          <Card
            name="Name 1"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 2"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 3"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 4"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 5"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 6"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 7"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
          <Card
            name="Name 8"
            imageURL="https://via.placeholder.com/400x400"
            about="A small paragraph about the person"
          />
        </div>
      </div>
    </div>
  );
}
