import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

import './App.css';

import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';
import Image4 from './assets/image4.jpg';
import Image5 from './assets/image5.jpg';
import Image7 from './assets/image7.jpg';
import img4 from './assets/4.png';
import img5 from './assets/5.png';

const slides = [
  { url: Image1 },
  { url: Image2 },
  { url: Image3 },
  { url: Image4 },
  { url: Image5 },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to jump to a specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect to automate the slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      {/* Image Slider */}
      <section>
        <div className='max-w-[100%] h-[780px] w-full m-0 px-0 relative group'>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full bg-center bg-cover duration-500'
          ></div>

          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>

          <div className='flex justify-center'>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src={Image7}
              alt="Łyżka w miodzie"
              className="w-3/4"
            />
          </div>

          {/* Right Column - Text */}
          <div className="mx-8 my-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tradycja smaku z Łyżki w miodzie
            </h1>
            <p className="mx-8 my-8 text-lg md:text-xl mb-8">
              W restauracji Łyżka w Miodzie przenosimy Cię w kulinarną podróż po słonecznej Italii.
              Nasze menu to hołd dla autentycznych włoskich smaków, przygotowywanych z najwyższej jakości składników.
              Każde danie tworzymy z pasją, inspirując się tradycją włoskiej kuchni – od domowych makaronów po aromatyczne pizze.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Right Column - Text */}
          <div className="mx-10 my-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Świeżość i jakość na pierwszym miejscu
            </h1>
            <p className="mx-8 my-8 text-lg md:text-xl mb-8">
              W restauracji Łyżka w Miodzie stawiamy na najwyższą jakość składników, aby każde danie było wyjątkowe. 
              Wybieramy świeże produkty od lokalnych dostawców, którzy tak jak my, cenią sobie naturę i tradycję. 
              Od ręcznie robionych makaronów, po starannie wyselekcjonowane warzywa i owoce morza – nasze 
              menu to hołd dla autentycznych włoskich smaków, tworzonych z troską o każdy szczegół.
            </p>
          </div>

          {/* Left Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src={img5}
              alt="Nasz team"
              className="w-2/4 my-16 flex justify-center items-center"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="flex justify-center items-center">
            <img
              src={img4}
              alt="Danie"
              className="w-2/4 my-16 flex justify-center items-center"
            />
          </div>

          {/* Right Column - Text */}
          <div className="mx-8 my-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kreatywność i pasja na talerzu
            </h1>
            <p className="mx-8 my-8 text-lg md:text-xl mb-8">
              W Łyżce w Miodzie każde danie to wyraz naszej miłości do jedzenia i sztuki kulinarnej. 
              Tworzymy potrawy, które nie tylko smakują, ale i zaskakują – łącząc tradycję z nowoczesnymi akcentami. 
              Nasz zespół kucharzy inspiruje się włoską kuchnią, ale nie boi się wprowadzać własnych, kreatywnych interpretacji. 
              Dzięki temu każda wizyta w naszej restauracji staje się kulinarną podróżą, pełną nieoczywistych połączeń smaków i aromatów.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
