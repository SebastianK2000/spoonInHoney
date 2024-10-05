//import { people } from "../data/AboutData"
import chef1 from "../assets/chef1.jpg"
import chef2 from "../assets/chef2.jpg"
import chef3 from "../assets/chef3.jpg"
import chef4 from "../assets/chef4.jpg"
import chef5 from "../assets/chef5.jpg"
import chef6 from "../assets/chef6.jpg"

function AboutUs() {
  return (

    <div>
      {/*About section*/}
      <div className="bg-white">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-12 sm:py-28 lg:py-36">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                O nas
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Witaj w Łyżka w miodzie, miejscu, gdzie pasja do włoskiej kuchni spotyka się z lokalnym klimatem! Nasza restauracja to rodzinny projekt, zrodzony z miłości do włoskich smaków i kultury, którą chcemy dzielić się z naszymi gośćmi.
                Nasze menu jest hołdem dla tradycyjnej kuchni Włoch – od aromatycznych makaronów, przez świeże owoce morza, po doskonałe pizze wypiekane w piecu. Starannie wybieramy składniki, współpracując z lokalnymi dostawcami, aby każdy posiłek był świeży, pełen smaku i najwyższej jakości.
                W Łyżka w miodzie stawiamy na prostotę i autentyczność – tak, jak robią to Włosi. Wszystkie nasze dania przygotowywane są z pasją, według sprawdzonych, tradycyjnych przepisów, które przeniosą Was prosto na słoneczne, włoskie wybrzeże.
                Dbamy o to, aby każda wizyta u nas była nie tylko ucztą dla podniebienia, ale także okazją do spotkań w przyjaznej, rodzinnej atmosferze. Niezależnie od tego, czy przychodzicie na szybki lunch, romantyczną kolację, czy spotkanie w większym gronie – zawsze możecie liczyć na ciepłe powitanie i doskonałe jedzenie.
                Zapraszamy do Łyżki w miodzie, aby poczuć prawdziwy smak Italii tu, na miejscu!
              </p>
            </div>
          </div>
        </div>
      </div>
        {/*Team section*/}
        <h1 className="text-balance text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Oto nasz zespół!
        </h1>
        <section className="container mx-auto py-36 px-8">
          <div className="grid lg:grid-cols-3 gap-6">

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef1} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef2} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef3} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef4} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef5} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-lg relative overflow-hidden group">
              <div className="shadow-lg rounded-lg relative overflow-hidden group">
                <img className="rounded-lg" src={chef6} alt="Pracownik" />
                <div className="absolute bg-black bg-opacity-75 -translate-x-full rounded-lg top-0 left-0 w-full h-full flex items-center justify-center group-hover:translate-x-0 duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-2xl font-bold mb-2">John Doe</h3>
                    <h4 className="text-white text-lg font-normal mb-2">Chef</h4>
                    <ul>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-instagram"></i></a></li>
                      <li className="inline-block mx-3"><a className="text-white hover:text-creme duration-300" href=""><i className="fa-brands fa-x-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
    </div>
    
  )
}

export default AboutUs