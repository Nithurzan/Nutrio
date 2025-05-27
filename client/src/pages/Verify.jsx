import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';

const Verify = () => {
    const {navigate, setCartItem, token, backendUrl} = useContext(ShopContext);
    const [searchParams, setSearcParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(
                backendUrl + "/api/order/verifyStripe",
                { orderId, success },
                { headers: { token } }
            );

            if (response.data.success) {
                setCartItem({});
                navigate("/orders");
                toast.success("Payment verified successfully!");
            } else {
                navigate("/cart");
                toast.error(response.data.message || "Payment verification failed.");
                console.log("Payment verification failed.");
            }
        } catch (error) {
            console.error("Verification Error: ", error);
            toast.error(error.message );
        }
    }

    useEffect(()=>{
        verifyPayment();
    },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
