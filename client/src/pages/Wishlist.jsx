// import React, { useEffect, useContext } from "react";
// import { FiTrash2 } from "react-icons/fi";
// import { ShopContext } from "../context/ShopContext";
// import { Link } from "react-router-dom";
// import Title from "../components/Title";

// const Wishlist = () => {
//   const { backendUrl, token ,navigate, fetchWishlist, wishlist, removeFromWishlist } = useContext(ShopContext);


//    const handleRemove = async (item) => {
//     await removeFromWishlist({ item }); 
//     fetchWishlist();
//   };

//   // Fetch wishlist on mount
//   useEffect(() => {
//     fetchWishlist();
//   }, [token, backendUrl]);

  

//   return (
//     <section className="max-w-5xl mx-auto mt-10 p-4">
//       <div className="text-xl text-center sm:text-2xl my-3">
//             <Title text1={"MY"} text2={ "WISHLIST"} animate={false} />
//         </div>
//       {wishlist.length === 0 ? (
//         <div className="text-center text-gray-400 py-20">
//           <p className="mb-4">Your wishlist is empty.</p>
//           <button
//             className="primary-btn px-6 py-2"
//             onClick={() => navigate("/products")}
//           >
//             Browse Products
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {wishlist.map(item => (
//             <div
//               key={item.id}
//               className="relative bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/10 dark:border-secondary/20 overflow-hidden flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Remove Button Overlay */}
//               <button
//                 className="absolute top-3 right-3 bg-red-500/80 hover:bg-red-600 text-white rounded-full p-2 shadow transition"
//                 onClick={() => handleRemove(item)}
//                 title="Remove"
//               >
//                 <FiTrash2 />
//               </button>
//               <Link
//                 to={`/product/${item.id}`}
//                 className="flex-1 flex flex-col items-center justify-center w-full h-full cursor-pointer"
//                 tabIndex={0}
//                 aria-label={`View details for ${item.name}`}
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-48 object-cover rounded-t-2xl"
//                 />
//                 <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
//                   <div className="font-normal dark:text-gray-300 text-lg text-center">{item.name}</div>
//                   <div className="text-primary text-base font-bold mt-2">{item.price}</div>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Wishlist;




import React, { useEffect, useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Title from "../components/Title";

const Wishlist = () => {
  const { backendUrl, token ,navigate, fetchWishlist, wishlist } = useContext(ShopContext);



  // Fetch wishlist on mount
  useEffect(() => {
    fetchWishlist();
  }, [token, backendUrl]);

  

  return (
    <section className="max-w-5xl mx-auto mt-10 p-4">
      <div className="text-xl text-center sm:text-2xl my-3">
            <Title text1={"MY"} text2={ "WISHLIST"} animate={false} />
        </div>
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-400 py-20">
          <p className="mb-4">Your wishlist is empty.</p>
          <button
            className="primary-btn px-6 py-2"
            onClick={() => navigate("/products")}
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map(item => (
            <div
              key={item.id}
              className="relative bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl border border-primary/10 dark:border-secondary/20 overflow-hidden flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              {/* Remove Button Overlay */}
              {/* <button
                className="absolute top-3 right-3 bg-red-500/80 hover:bg-red-600 text-white rounded-full p-2 shadow transition"
                onClick={() => handleRemove(item)}
                title="Remove"
              >
                <FiTrash2 />
              </button> */}
              <Link
                to={`/product/${item.id}`}
                className="flex-1 flex flex-col items-center justify-center w-full h-full cursor-pointer"
                tabIndex={0}
                aria-label={`View details for ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
                  <div className="font-normal dark:text-gray-300 text-lg text-center">{item.name}</div>
                  <div className="text-primary text-base font-bold mt-2">{item.price}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wishlist;