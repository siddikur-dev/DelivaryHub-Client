import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, emailVerified, photoURL } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(displayName || "");
  const [photo, setPhoto] = useState(photoURL || "");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {
        setSuccessMsg("Profile updated successfully!");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Error updating profile: " + error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="min-h-[80vh] bg-base-200 py-12 px-4 flex justify-center items-center">
      <title>Profile - Toy Universe</title>
      <div className="bg-base-100 shadow-xl rounded-2xl w-full max-w-3xl overflow-hidden">
        {/* Top Cover / Banner */}
        <div className="h-40 bg-gradient-to-r from-primary to-secondary bg-[url('https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000')] bg-cover bg-center relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={
                photo ||
                "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              }
              alt={name}
              className="w-32 h-32 rounded-full border-4 border-base-100 shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          {!isEditing ? (
            <>
              <h2 className="text-3xl font-bold text-primary">{displayName}</h2>
              <p className="text-base-content/70 mt-1">{email}</p>
              <p className="text-base-content/70 mt-1">
                Email verification: {emailVerified ? "Verified" : "Unverified"}
              </p>

              <div className="mt-8">
                <button
                  className="btn btn-primary gap-2"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            </>
          ) : (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <input
                  type="text"
                  className="input input-bordered w-full max-w-md"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="input input-bordered w-full max-w-md"
                  placeholder="Photo URL"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              <div className="flex justify-center gap-4 mt-4">
                <button
                  type="submit"
                  className="btn btn-primary gap-2"
                  disabled={loading}
                >
                  <FaSave /> {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline gap-2"
                  onClick={() => setIsEditing(false)}
                >
                  <FaTimes /> Cancel
                </button>
              </div>
              {successMsg && (
                <p className="mt-2 text-green-500 font-semibold">
                  {successMsg}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
