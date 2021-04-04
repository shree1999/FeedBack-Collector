import { Button } from "antd";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";

import { handlePayment } from "../../redux/actions/paymentAction";

// TODO: change amount from dollar(cents) to rupees,
export const CheckoutButton = () => {
  const dispatch = useDispatch();

  return (
    <StripeCheckout
      amount={500}
      token={(token) => dispatch(handlePayment(token))}
      stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_TEST_KEY}
      name="Emaily"
      description="$5 for 5 emails that can be sent"
    >
      <Button className="btn btn-primary">Add Credits</Button>
    </StripeCheckout>
  );
};
