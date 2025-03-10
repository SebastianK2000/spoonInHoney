import '../styles/Contact.css';
import '../index.css';

import voucher1 from '../assets/menu/voucher1.jpg';

function Contact() {
  return (
    <div className='bg-black'>
      <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            {/* Sekcja po lewej */}
            <div className="lg:col-span-1 lg:row-start-1 lg:grid lg:max-w-lg lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-creme">Łyżka w miodzie</p>
                  <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-7xl">Kontakt</h1>
                  <p className="mt-6 text-base leading-9 text-white">
                    ul. Brodzińskiego 1
                    <hr className="custom-hr" />
                    Tarnów 33-100
                    <hr className="custom-hr" />
                    Poland
                    <hr className="custom-hr" />
                  </p>
                  <p className="mt-6 text-base leading-9 text-white">
                    Phone: +48 728 911 130
                    <hr className="custom-hr" />
                    Email: lyzkawmiodzie@gmail.com
                    <hr className="custom-hr" />
                  </p>
                  <p className="mt-6 text-basel leading-9 text-white">
                    Jesteśmy otwarci cały tydzień w godzinach:
                    <hr className="custom-hr" />
                    Poniedziałek - Czwartek 12:00 - 22:00
                    <hr className="custom-hr" />
                    Piątek - Sobota 12:00 - 23:00
                    <hr className="custom-hr" />
                    Niedziela 12:00 - 22:00
                    <hr className="custom-hr" />
                  </p>
                </div>
              </div>

              <div>
                <p className="mt-6 text-base font-bold leading-9 text-white">
                  Kilka informacji związanych z rezerwacją w naszej restauracji oraz organizacją.
                </p>
                <ul role="list" className="mt-6 text-base space-y-8 text-white">
                  <li className="flex gap-x-3">
                    <p className="text-white">
                      Uprzejmie informujemy, że w przypadku spóźnienia utrzymujemy Państwa rezerwację do 15 minut od
                      ustalonej godziny.
                    </p>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="text-white">
                      W razie braku potwierdzenia lub kontaktu ze strony gości 24h przed wizytą, restauracja zastrzega
                      sobie prawo do anulowania rezerwacji.
                    </p>
                  </li>
                  <li className="flex gap-x-3">
                    <p className="text-white">W restauracji obowiązuje zakaz wprowadzania zwierząt.</p>
                  </li>
                </ul>
                <p className="text-white">
                  Zapraszamy z dziećmi od 12 roku życia. Nie dysponujemy menu dziecięcym ani fotelikami.
                </p>
                <p className="text-base text-white">
                  Niestety, nie jesteśmy w stanie przygotować menu dla gości cierpiących na celiakię, a także w wersji
                  wegańskiej. Jednak, zawsze staramy się dostosować menu do potrzeb naszych gości z nietolerancją
                  laktozy lub nabiału, pod warunkiem, że zostanie to zgłoszone co najmniej 24 godziny przed planowanym
                  posiłkiem. W przypadku nietolerancji laktozy lub nabiału, staramy się wykluczyć te składniki z dania,
                  jednakże, w przypadku smażenia lub przygotowywania sosów, nie jesteśmy w stanie zrezygnować z masła.
                </p>
              </div>
            </div>

            {/* Formularz po prawej */}
            <div className="lg:col-span-1 lg:row-start-1 lg:grid lg:max-w-lg lg:px-8">

              <h2 className="mt-2 mb-4 text-base font-semibold leading-7 text-white">Mamy również możliwość zakupu Voucherów!</h2>
              <img
                src={voucher1}
                alt="voucher"
                className="mb-6 w-full rounded-lg shadow-md"
              />

              <form>
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="mt-2 text-base font-semibold leading-7 text-white">Masz do nas pytania? Napisz do nas!</h2>
                  <p className="mt-1 text-sm leading-6 text-white">
                    Podaj kilka informacji, abyśmy mogli wrócić do ciebie z odpowiedzią.
                  </p>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white">
                        Imię
                      </label>
                      <div className="mt-2">
                        <input
                          id="first-name"
                          name="first-name"
                          type="text"
                          autoComplete="given-name"
                          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-creme sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white">
                        Nazwisko
                      </label>
                      <div className="mt-2">
                        <input
                          id="last-name"
                          name="last-name"
                          type="text"
                          autoComplete="family-name"
                          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-creme sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="email" className="mt-2 block text-sm font-medium leading-6 text-white">
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-creme sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="col-span-full">
                      <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                        Opis
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-300">Napisz do nas z pytaniem!</p>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center justify-start gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-white border border-gray-300 rounded-md px-3 py-2 hover:bg-zinc-800"
                      onClick={() => console.log('Form canceled')}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-creme px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-creme/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-creme"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?q=Brodzi%C5%84skiego%201%20Tarn%C3%B3w%20Poland&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
