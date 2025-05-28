import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs. ";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItem] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [orderData, setorderData] = useState([]);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();

  // ----------------addtocart-----------------//
  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
      toast.info("Increased quantity in cart.");
    } else {
      cartData[itemId] = 1;
      toast.success("Added to cart!");
    }
    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  //---------get cart amount---------------//
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }
    return totalCount;
  };

  //------------update quanity-------------------------//
  const updateQuanity = async (itemId, quanity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quanity;
    setCartItem(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, quanity },
          { headers: { token } }
        );
        toast.info("Cart quantity updated.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  //----------get cart amount------------------------//
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find(
        (product) => String(product._id) === String(itemId)
      );
      try {
        if (cartItems[itemId] > 0) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalAmount;
  };

  //--------------get products data-------------------------//
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //--------get user cart--------------------//
  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItem(response.data.cartData);
      } else {
        console.log("No cart data found for this user.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //--------load order data--------------------//
  const loadOrderData = async () => {
    try {
      if (!token) return null;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              paymentMethod: order.paymentMethod,
              date: order.date,
              orderId: order.orderId,
              amount: order.amount,
            });
          });
        });
        setorderData(allOrdersItem.reverse());
        console.log("orderData", orderData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //--------fetch wishlist--------------------//
  const fetchWishlist = async () => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/wishlist/list`,
        {},
        { headers: { token } }
      );
      if (res.data.success) {
        setWishlist(
          res.data.wishlist.map((item) => ({
            id: item._id,
            name: item.name,
            price: item.price,
            image: Array.isArray(item.image) ? item.image[0] : item.image,
          }))
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  //------ Remove from wishlist----//
  const removeFromWishlist = async (product) => {
    try {
      const productId = product._id;
      const res = await axios.post(
        `${backendUrl}/api/wishlist/remove`,
        { productId },
        { headers: { token } }
      );
      if (res.data.success) {
        setWishlist((prev) => prev.filter((item) => item.id !== productId));
        toast.success("Removed from wishlist");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to remove from wishlist: " + err.message);
    }
  };

  const addWishList = async (product) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/wishlist/add`,
        { productId: product._id },
        { headers: { token } }
      );
      if (res.data.success) {
        setWishlist((prev) => [...prev, { id: product._id, ...product }]);
        toast.success("Added to wishlist");
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to add to wishlist: " + err.message);
    }
  };

  //------logout-----///
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItem({});
    toast.success("Logout successfully");
    navigate("/");
  };

  const value = {
    backendUrl,
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItem,
    addToCart,
    getCartCount,
    updateQuanity,
    getCartAmount,
    navigate,
    logout,
    token,
    setToken,
    setCategory,
    category,
    categories,
    setCategories,
    loadOrderData,
    orderData,
    fetchWishlist,
    wishlist,
    removeFromWishlist,
    addWishList,
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(backendUrl + "/api/category/");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (!token && storedToken) {
    setToken(storedToken);
    getUserCart(storedToken);
    loadOrderData(storedToken);
    fetchWishlist(storedToken);
  }
}, []);

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
