import { Slide, Zoom, toast } from "react-toastify";

//  Get Installed Apps From LocalStorage
const getStoredBookPlace = () => {
  const bookPlace = localStorage.getItem("Book Place");
  if (bookPlace) {
    return JSON.parse(bookPlace);
  }
  return [];
};

//  LocalStorage Set Installed Apps
const addToBookPlaceLS = (id) => {
  const bookPlaces = getStoredBookPlace();

  if (bookPlaces.includes(id)) {
    toast.warn("This book place already in Installed!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      theme: "dark",
      transition: Slide,
    });
  } else {
    bookPlaces.push(id);
    localStorage.setItem("Book Place", JSON.stringify(bookPlaces));

    toast.success("Book Place successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
      transition: Zoom,
    });
  }
};
//  Remove Installed LS
const removeBookPlace = (id) => {
  const bookPlace = getStoredBookPlace();
  const newBookPlace = bookPlace.filter((bookPlaceId) => bookPlaceId !== id);

  if (bookPlace.length === newBookPlace.length) {
    toast.info("This book place is not in the list!", {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
      transition: Zoom,
    });
  } else {
    localStorage.setItem("Book Place", JSON.stringify(newBookPlace));
    toast.success("Book Place Removed successfully!", {
      position: "top-right",
      autoClose: 2000,
      theme: "light",
      transition: Zoom,
    });
  }
};

export { getStoredBookPlace, addToBookPlaceLS, removeBookPlace };
