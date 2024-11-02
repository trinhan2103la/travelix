import { useState } from 'react';

const Search = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Hotels',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/hotel.webp',
    },
    {
      label: 'Car Rentals',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/car.webp',
    },
    {
      label: 'Flights',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/fly.webp',
    },
    {
      label: 'Trips',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/trip.webp',
    },
    {
      label: 'Cruises',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/cruises.webp',
    },
    {
      label: 'Activities',
      imgSrc:
        'https://tranhoangkhang1212.github.io/travelix/assets/images/activities.webp',
    },
  ];

  return (
    <div className="search relative w-[100%]">
      <div className="grids wide">
        <div className="search-container-tabs grids wide absolute bottom-[100%] cursor-pointer">
          <div className="row">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`search-container-tab d-flex ${
                  activeTab === index ? 'active' : ''
                }`}
                onClick={() => setActiveTab(index)}
              >
                <img src={tab.imgSrc} alt={tab.label} />
                <span>{tab.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="search-container h-[192px]">
          <div className="row">
            <div className="search-container--item one-4 num-6 c-12">
              <div>
                <span>Destination</span>
              </div>
              <input type="text" />
            </div>
            <div className="search-container--item one-2 num-6 c-12">
              <div>
                <span>Check-In</span>
              </div>
              <input type="text" placeholder="DD-MM-YYYY" />
            </div>
            <div className="search-container--item one-2 num-6 c-12">
              <div>
                <span>Check Out</span>
              </div>
              <input type="text" placeholder="DD-MM-YYYY" />
            </div>
            <div className="search-container--item one-1 num-3 c-6">
              <div>
                <span>Adluts</span>
              </div>
              <select name="" id="">
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
              </select>
            </div>
            <div className="search-container--item one-1 num-3 c-6">
              <div>
                <span>Children</span>
              </div>
              <select name="" id="">
                <option value="">00</option>
                <option value="">01</option>
                <option value="">02</option>
              </select>
            </div>
            <div className="search-container--btn one-2 num-4 c-4">
              <a href="#">Search</a>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
