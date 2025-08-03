/* eslint-disable no-unused-vars */
import { Sidebar } from "./component/sidebar";
import { Nav } from "./component/nav";
import { useEffect, useState } from "react";
import { Outlet, useLocation, matchPath } from "react-router-dom";
import { navList } from "./assets/component_assets/nav_list";
import dummyprofile from "./assets/images/dummyprofile.png";

export function Home() {
  const location = useLocation();
  const [childPaths, setChildPaths] = useState([]);
  const [user, setUser] = useState({
    first_name: "Harish",
    last_name: "Nigam",
    dob: "18/02/2002",
    role: "admin",
    img: dummyprofile,
  }); //fetch data from db
  useEffect(() => {
    setChildPaths([]);
    for (let i = 1; i < navList().length; i++) {
      setChildPaths((pre) => [...pre, navList()[i].path]);
      if (navList()[i].sub_list) {
        for (let j = 0; j < navList()[i].sub_list.length; j++) {
          setChildPaths((pre) => [...pre, navList()[i].sub_list[j].path]);
        }
      }
    }
  }, []);
  const hasChildRouteMatch = childPaths.some((pathPattern) =>
    matchPath(pathPattern, location.pathname)
  );
  return (
    <main>
      <Nav user={user} />
      <Sidebar />
      {hasChildRouteMatch ? (
        <section className="flex justify-center animate-[fromDown_1s_ease] p-2">
          <Outlet />
        </section>
      ) : (
        <section className="animate-[fromUp_1s_ease]">
          <section class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
            <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
              <div class="md:w-1/2 text-center md:text-left">
                <h1 class="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Your Health, Our <span class="text-[#3d854a]">Priority</span>
                </h1>
                <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                  Providing compassionate and comprehensive healthcare for you
                  and your family. Our team of dedicated professionals is here
                  to help you every step of the way.
                </p>
                <div class="mt-8 flex justify-center md:justify-start space-x-4">
                  <p class="bg-[#3d854a] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                    Schedule Appointment
                  </p>
                  <p class="bg-white text-[#3d854a] px-8 py-3 rounded-full font-semibold border border-[#3d854a] hover:bg-blue-50 transition duration-300 transform hover:scale-105">
                    Learn More
                  </p>
                </div>
              </div>
              <div class="md:w-1/2 mt-8 md:mt-0">
                <img
                  src="https://placehold.co/800x600/e0e7ff/3f51b5?text=Medical+Team"
                  alt="Medical team smiling"
                  class="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section class="py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900">
                Our Services
              </h2>
              <p class="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                We offer a wide range of medical services to meet the diverse
                needs of our community, all delivered with the highest standards
                of care.
              </p>

              <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div class="flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-[#3d854a]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M12 11h.01"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    General Medicine
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Comprehensive primary care for all ages, focusing on
                    preventive care and routine check-ups.
                  </p>
                </div>

                <div class="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div class="flex items-center justify-center w-16 h-16 bg-green-200 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Emergency Care
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Rapid and effective treatment for urgent medical conditions
                    and injuries, 24/7.
                  </p>
                </div>

                <div class="bg-red-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div class="flex items-center justify-center w-16 h-16 bg-red-200 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Cardiology
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Specialized care for heart health, including diagnostics,
                    treatment, and prevention.
                  </p>
                </div>

                <div class="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div class="flex items-center justify-center w-16 h-16 bg-yellow-200 rounded-full mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-yellow-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-gray-900">
                    Pediatrics
                  </h3>
                  <p class="mt-2 text-gray-600">
                    Dedicated and friendly healthcare services for children,
                    from newborns to teenagers.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section class="py-16 md:py-24 bg-gray-100">
            <div class="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
              <div class="md:w-1/2">
                <img
                  src="https://placehold.co/800x600/d1e2f6/3f51b5?text=Clinic+Interior"
                  alt="A clean and modern clinic interior"
                  class="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div class="md:w-1/2 text-center md:text-left">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
                  Why Choose HealthHub?
                </h2>
                <p class="mt-4 text-lg text-gray-600">
                  At HealthHub, we believe in a patient-first approach. Our
                  state-of-the-art facilities, combined with our compassionate
                  and experienced medical team, ensure that you receive the best
                  possible care. We are committed to your well-being and
                  building a healthier community.
                </p>
                <ul class="mt-6 space-y-3 text-left max-w-md mx-auto md:mx-0">
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#3d854a] flex-shrink-0 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">
                      Experienced and Certified Professionals
                    </span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#3d854a] flex-shrink-0 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">
                      State-of-the-Art Medical Technology
                    </span>
                  </li>
                  <li class="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#3d854a] flex-shrink-0 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span class="text-gray-700">
                      Patient-Centric and Compassionate Care
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section class="py-16 md:py-24 bg-white">
            <div class="container mx-auto px-4">
              <h2 class="text-3xl md:text-4xl font-bold text-center text-gray-900">
                What Our Patients Say
              </h2>
              <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                  <div class="flex items-center mb-4">
                    <img
                      src="https://placehold.co/64x64/a5b4fc/4338ca?text=RS"
                      alt="John Doe"
                      class="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 class="font-semibold text-gray-900">Rajveer S.</h4>
                      <p class="text-gray-500 text-sm">Satisfied Patient</p>
                    </div>
                  </div>
                  <p class="text-gray-700 italic">
                    "The care I received at HealthHub was exceptional. The staff
                    was friendly, and the doctors were thorough and took the
                    time to answer all my questions. Highly recommend!"
                  </p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                  <div class="flex items-center mb-4">
                    <img
                      src="https://placehold.co/64x64/a5b4fc/4338ca?text=DP"
                      alt="Jane Smith"
                      class="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 class="font-semibold text-gray-900">Darshan P.</h4>
                      <p class="text-gray-500 text-sm">Satisfied Patient</p>
                    </div>
                  </div>
                  <p class="text-gray-700 italic">
                    "I've been going to HealthHub for years, and they
                    consistently provide top-notch care. The new facility is
                    amazing and the patient portal is incredibly convenient."
                  </p>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200">
                  <div class="flex items-center mb-4">
                    <img
                      src="https://placehold.co/64x64/a5b4fc/4338ca?text=YS"
                      alt="Peter T."
                      class="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 class="font-semibold text-gray-900">Yash S.</h4>
                      <p class="text-gray-500 text-sm">Satisfied Patient</p>
                    </div>
                  </div>
                  <p class="text-gray-700 italic">
                    "Scheduling was easy, and the wait time was minimal. The
                    doctor was very knowledgeable and made me feel at ease
                    throughout the entire visit."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
    </main>
  );
}
