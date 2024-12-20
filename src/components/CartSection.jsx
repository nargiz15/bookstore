"use client";

import React, { useState } from "react";
import { X, CreditCard, Truck, Check } from "lucide-react";
import "../assets/styles/order.css";
import "../assets/styles/cardsection.css";
const CartSection = ({ cart, total, onRemoveFromCart }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "card",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0) return null;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setCheckoutStep(3);
  };

  const resetCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep(1);
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      paymentMethod: "card",
    });
  };

  return (
    <>
      <div className="cart-container">
        <h2 className="cart-title">Səbətiniz</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-details">
                  {item.quantity} x {item.price} AZN
                </p>
              </div>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="remove-button"
              >
                Sil
              </button>
            </div>
          ))}
          <div className="cart-total">
            <span>Cəmi:</span>
            <span>{total} AZN</span>
          </div>
          <button
            className="checkout-button"
            onClick={() => setIsCheckoutOpen(true)}
          >
            Sifariş et
          </button>
        </div>
      </div>

      {isCheckoutOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">Sifariş</h2>
                <button className="close-button" onClick={resetCheckout}>
                  <X />
                </button>
              </div>

              <div className="progress-steps">
                <div className="step">
                  <div
                    className={`step-circle ${
                      checkoutStep >= 1 ? "active" : ""
                    }`}
                  >
                    {checkoutStep > 1 ? <Check /> : "1"}
                  </div>
                  <span className="step-text">Məlumatlar</span>
                </div>
                <div className="step">
                  <div
                    className={`step-circle ${
                      checkoutStep >= 2 ? "active" : ""
                    }`}
                  >
                    {checkoutStep > 2 ? <Check /> : "2"}
                  </div>
                  <span className="step-text">Ödəniş</span>
                </div>
                <div className="step">
                  <div
                    className={`step-circle ${
                      checkoutStep >= 3 ? "active" : ""
                    }`}
                  >
                    {checkoutStep > 3 ? <Check /> : "3"}
                  </div>
                  <span className="step-text">Təsdiq</span>
                </div>
              </div>

              {checkoutStep === 1 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCheckoutStep(2);
                  }}
                  className="form-container"
                >
                  <div className="form-group">
                    <label className="form-label">Ad Soyad</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ünvan</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Şəhər</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <button type="submit" className="button button-primary">
                    Davam et
                  </button>
                </form>
              )}

              {checkoutStep === 2 && (
                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                    />
                    <CreditCard className="payment-icon" />
                    <span>Kart ilə ödəniş</span>
                  </label>

                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleInputChange}
                    />
                    <Truck className="payment-icon" />
                    <span>Çatdırılma zamanı nağd ödəniş</span>
                  </label>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="button button-primary"
                  >
                    {isSubmitting ? "Gözləyin..." : "Sifarişi təsdiqlə"}
                  </button>
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="success-container">
                  <div className="success-icon">
                    <Check />
                  </div>
                  <h3 className="success-title">Sifariş uğurla tamamlandı!</h3>
                  <p className="success-message">
                    Sifarişiniz qəbul edildi. Tezliklə sizinlə əlaqə
                    saxlanılacaq.
                  </p>
                  <button
                    onClick={resetCheckout}
                    className="button button-primary"
                  >
                    Bağla
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSection;