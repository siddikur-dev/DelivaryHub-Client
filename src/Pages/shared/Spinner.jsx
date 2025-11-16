import foodPlate from "../../assets/images/food-plate.webp";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex  justify-center items-center bg-base-100">
      <div>
        <img
          src={foodPlate}
          alt="Foodio Food Plate"
          className="w-24 h-24 mb-4 rounded-full shadow-lg animate-spin border-4 border-secondary border-dashed"
          style={{ animationDuration: "1.2s" }}
        />
      </div>
    </div>
  );
};

export default Spinner;
