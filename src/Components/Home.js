import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";


function Home() {
  return (
    <div>
        <section className="bg-center bg-no-repeat bg-cover" style={{
            backgroundImage: `url('https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            minHeight: '80vh',  // Set the minimum height as per your requirement
            width: '100%',       // Ensure the section takes full width
            backgroundColor: '#718096', // Set a fallback background color
            backgroundBlendMode: 'multiply' // Adjust blend mode as needed
        }}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We turn your dreams into reality, welcome to World and visit Kenya</h1>
            
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <AnchorLink href="#packages" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Our Packages             
                </AnchorLink>
            </div>
            <div className="my-4"></div>

            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <AnchorLink href="#upcomingevents" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Upcoming Events             
                </AnchorLink>
            </div>
            </div>
        </section>

        <section id = "packages" class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            Packages
            </h2>

                    <div class="grid grid-cols-2 gap-4grid grid-cols-2 md:grid-cols-3 gap-4">
                
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMHJvb218ZW58MHx8MHx8fDA%3D"alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $10,000
                                </h3>

                                <Link to ="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1683740128759-a98b27869973?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1ZGllbmNlfGVufDB8fDB8fHww" alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $3,000
                                </h3>
                                <Link to="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                </Link>
                            </div>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1570126646281-5ec88111777f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZyUyMHJvb218ZW58MHx8MHx8fDA%3D" alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $15,000
                                </h3>
                                <Link to="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                </Link>
                            </div>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D" alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $15,500
                                </h3>
                                <Link to="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                </Link>
                            </div>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmclMjBwYXJ0eXxlbnwwfHwwfHx8MA%3D%3D" alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $8,000
                                </h3>
                                <Link to="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                </Link>
                            </div>
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1581887300455-5eb259f6eac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZXRpbmclMjByb29tfGVufDB8fDB8fHww" alt=""/>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                                Price $4,000
                                </h3>
                                <Link to="/book#booknow" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Book Now
                                </Link>
                            </div>
                    </div>
            </div>

            
        </section>

        <section id = "upcomingevents" class="mb-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                Upcoming Events
            </h2>            

        </section>     

    </div>
  )
}

export default Home;
