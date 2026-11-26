import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router";
import { Header } from "../../components/Header";
import "./OrdersPage.css";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import { OrdersGrid } from "./OrdersGrid";

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      const response = await axios.get("/api/orders?expand=products")
      setOrders(response.data);
      
    };
    fetchOrderData();
  }, []);
  return (
    <>
      <title>Orders</title>

      <link rel="icon" href="/orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}/>
      </div>
    </>
  );
}
