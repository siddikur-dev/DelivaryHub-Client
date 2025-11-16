import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Helper component — fly to coords when searchClicked
const FlyTo = ({ coords }) => {
  const map = useMap();
  if (coords) map.flyTo(coords, 10);
  return null;
};

const Coverage = () => {
  const mapRef = useRef();
  const inputRef = useRef();
  const [flyCoords, setFlyCoords] = useState(null);
  const serviceCenter = useLoaderData();

  const handleSearch = () => {
    const text = inputRef.current.value.toLowerCase();
    if (!text) return;

    const match = serviceCenter.find(
      ({ district, city, covered_area }) =>
        district.toLowerCase().includes(text) ||
        city.toLowerCase().includes(text) ||
        covered_area.some((area) => area.toLowerCase().includes(text))
    );

    if (match) {
      setFlyCoords([match.latitude, match.longitude]);
    } else {
      alert("No matching location found!");
    }
  };

  const centerPosition = [23.685, 90.3563];

  return (
    <div className="bg-base-100 py-8 md:py-16 px-10 md:px-20 rounded-xl mb-8 md:mb-16">
      <div className="flex flex-col items-start">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          We are available in 64 districts
        </h2>

        <div className="flex justify-center mb-6">
          <div className="flex items-stretch w-full max-w-xl rounded-full overflow-hidden">
            <div className="flex flex-grow items-center bg-primary/5 pl-6 pr-4">
              <FaSearch className="text-accent mr-4" size={22} />

              <input
                type="text"
                placeholder="Search here"
                ref={inputRef}
                className="w-full h-full bg-transparent text-primary placeholder-gray-500 focus:outline-none text-lg py-2"
              />
            </div>

            <button
              onClick={handleSearch}
              className="btn btn-secondary text-primary rounded-full -ml-5 font-bold px-6 py-3 text-lg whitespace-nowrap"
            >
              Search
            </button>
          </div>
        </div>

        <hr className="border-dashed border-b w-full border-primary/30 mb-4" />

        <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">
          We deliver almost all over Bangladesh
        </h3>
      </div>

      {/* Map */}
      <MapContainer
        center={centerPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Fly when search happens */}
        <FlyTo coords={flyCoords} />

        {serviceCenter.map((center, index) => (
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
                  alt="Flowchart"
                  className="mt-2 w-full"
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Coverage;
