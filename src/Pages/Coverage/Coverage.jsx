import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import coverageData from "../../assets/data/pickupPoint.json";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Coverage = () => {
  const [search, setSearch] = useState("");
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);

  //   const filteredLocations = coverageData.filter(
  //     ({ district, city, covered_area }) => {
  //       const searchText = search.toLowerCase();
  //       return (
  //         district.toLowerCase().includes(searchText) ||
  //         city.toLowerCase().includes(searchText) ||
  //         covered_area.some((area) => area.toLowerCase().includes(searchText))
  //       );
  //     }
  //   );

  const centerPosition = [23.685, 90.3563]; // Center of Bangladesh

  return (
    <div className="bg-base-100 py-8 md:py-16 px-10 md:px-20 rounded-xl mb-8 md:mb-16">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          We are available in 64 districts
        </h2>
        <div className="flex justify-center mb-6">
          <div className="flex items-stretch w-full max-w-xl rounded-full overflow-hidden ">
            {/* Input section (icon + text input) */}
            <div className="flex flex-grow items-center bg-primary/5 pl-6 pr-4">
              <FaSearch className="text-accent mr-4" size={22} />
              <input
                type="text"
                placeholder="Search here"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full bg-transparent text-primary placeholder-gray-500 focus:outline-none text-lg py-2"
              />
            </div>

            {/* Search Button */}
            <button className="btn btn-secondary text-primary rounded-full -ml-5 font-bold px-6 py-3 text-lg whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
        <hr className="border-dashed border-b w-full border-primary/30 mb-4" />
        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
          We deliver almost all over Bangladesh
        </h3>
      </div>

      <MapContainer
        center={centerPosition}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {serviceCenter.map((center, index) => {
          return (
            <Marker
              key={index}
              position={[center.latitude, center.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <h4 className="font-bold">
                    {center.city} ({center.district})
                  </h4>
                  <ul className="list-disc pl-4 text-sm">
                    {center.covered_area.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                  <img
                    src={center.flowchart}
                    alt={`${center.city} flowchart`}
                    className="mt-2 w-full"
                  />
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Coverage;
