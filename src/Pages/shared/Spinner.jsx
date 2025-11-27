import delivaryVan from "../../../assets/Project/delivery-van.png";

const Spinner = () => {
  return (
    <div className="min-h-[calc(100vh-300px)] flex justify-center items-center bg-base-100">
      <div className="overflow-hidden w-[200px]">
        <img
          src={delivaryVan}
          alt="Delivery Van"
          className="w-24 h-24 mb-4 rounded-full shadow-lg car-move"
        />
      </div>
    </div>

  );
};

export default Spinner;
