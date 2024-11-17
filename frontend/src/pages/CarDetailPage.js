import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCarDetails } from "../api/carApi";

function CarDetailPage() {
  const { carId } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        console.log("Fetching car details for car ID:", carId);
        const carData = await getCarDetails(carId);
        setCar(carData);
      } catch (error) {
        console.error("Failed to fetch car details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarDetails();
  }, [carId]);

  const handleVersionChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedPrice(car.prices[selectedIndex]);
  };

  if (loading) return <p>Loading...</p>;
  if (!car) return <p>Car details not available.</p>;

  return (
    <div>
      <h1>
        {car.make} - {car.model}
      </h1>
      <img
        src={car.imageUrl}
        alt={`${car.make} ${car.model}`}
        style={{ width: "300px", height: "200px" }}
      />
      <div>
        <a href={`/car-info/${carId}`}>Information</a>
        <label>
          Versions:
          <select onChange={handleVersionChange}>
            {car.versions.map((version, index) => (
              <option key={index} value={version}>
                {version}
              </option>
            ))}
          </select>
        </label>
        <div>
          Price: <input type="text" value={selectedPrice || ""} readOnly />
        </div>
        {car.brochureLink && (
          <a href={car.brochureLink} target="_blank" rel="noopener noreferrer">
            Brochure
          </a>
        )}
      </div>
    </div>
  );
}

export default CarDetailPage;
