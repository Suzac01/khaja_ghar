import React from 'react';
import './payment.css';

const Payment = () => {
  return (
    <>
      <div className='row'>
        <div className='col-6'>
          <div className='bo' style={{ borderBottom: '2px solid #ccc' }}>
            <div>
              <h3 style={{ padding: '10px', fontWeight: 'bold', fontSize: '22px', borderBottom: '2px solid #ccc' }}>Payment</h3>
            </div>

            <div className='form-contain'>
              <label className="payment-option">
                <input type="radio" name="payment" value="cash" />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="khalti" />
                Khalti Digital Wallet
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="imepay" />
                IME Pay
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="esewa" />
                Esewa
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="phonepay" />
                Phone Pay
              </label>

              <label className="payment-option">
                <input type="radio" name="payment" value="debit" />
                Debit/Credit Card
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
