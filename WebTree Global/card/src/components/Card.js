import React, { useEffect, useState } from "react";

const Card = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(" https://randomuser.me/api/?page=1&results=1&seed=abc");
      
      const data = await response.json();
      console.log(data);
      const user = data.results[0];
      setUserData({
        image: user.picture.large,
        firstName: user.name.first,
        lastName: user.name.last,
        gender: user.gender,
        phone: user.phone,
      });
    };
    fetchData();
  }, []);

  if (!userData) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="border border-white-600 p-10 border-8 rounded-xl bg-gradient-to-br from-blue-500 to-black">
        <div className=" border-4 border-black max-w-md mx-auto bg-white-300 p-6 rounded-xl shadow-lg ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        <div className="flex justify-center items-center">
          <img
            src={userData.image}
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
          />
        </div>
        
        
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold text-white">
            {userData.firstName} {userData.lastName}
          </h2>
          <p className="text-white text-lg mt-2">Gender: {userData.gender}</p>
          <p className="text-white text-lg mt-2">Phone: {userData.phone}</p>
        </div>
      </div>
    </div>

    </div>
    
  );
};

export default Card;
