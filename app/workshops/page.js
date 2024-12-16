export default function Team() {
    const NavBar = () => {
        return (
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
                <div className="flex items-center">
                    <img src="../favicon.ico" alt="favicon" className="w-9 h-9 mr-2" />
                    <div className="text-xl font-bold">HSN Hacks</div>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <a className="hover:text-gray-400" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-gray-400" href="/more-info">
                            FAQ
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-gray-400" href="/team">
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-gray-400" href="/workshops">
                            Workshops
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-gray-400" href="/sponsorships">
                            Sponsors
                        </a>
                    </li>
                </ul>
            </nav>
        );
    };

    const Workshops = () => {
        return (
            <section className="text-center">
                <div className="text-center mb-12 flex justify-center items-center py-5">
                    <h1 className="text-6xl">Workshops</h1>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                        <div className="p-7">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Web Dev Advanced
                            </h5>
                            <ul className="list-disc ml-8 text-left">
                                <li>React (HTML/JS experience recommended but not necessary)</li>
                                <li>Basics of React, components/communication between components</li>
                                <li>Basics of React Hooks/States</li>
                                <li>Database Usage (Firebase)</li>
                                <li>How to setup the database (Firebase console, config file)</li>
                                <li>How to extract/add data from the database and display it on a website</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4">APIs</h3>
                            <ul className="list-disc ml-8 text-left">
                                <li>What an API is</li>
                                <li>How to use APIs (e.g., retrieving current stock prices)</li>
                                <li>What are REST APIs</li>
                                <li>Creating your own REST API with GET/POST requests using ExpressJS</li>
                            </ul>
                        </div>
                    </div>


                    <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                        <div className="p-7">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Web Dev Beginner
                            </h5>
                            <ul className="list-disc ml-8 text-left">
                                <li>Python setup, printing, input</li>
                                <li>Data types, conditionals, functions, loops</li>
                                <li>Enough information to prepare for ML workshops</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-4">HTML</h3>
                            <ul className="list-disc ml-8 text-left">
                                <li>Basics of HTML</li>
                                <li>Simple tags and page layout</li>
                                <li>Enough information to make simple websites</li>
                            </ul>
                        </div>
                    </div>

                    <div className="max-w-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
                        <div className="p-7">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Machine Learning
                            </h5>
                            <h3 className="text-xl font-semibold mt-4">Intro to ML & TensorFlow</h3>
                            <ul className="list-disc ml-8 text-left">
                                <li>Python experience recommended but not required (info from Python workshop is sufficient)</li>
                                <li>What is Machine Learning</li>
                                <li>Supervised vs Unsupervised Learning</li>
                                <li>Classifying images of clothes using TensorFlow Neural Networks</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <NavBar />
            <Workshops />
        </>
    );
}
