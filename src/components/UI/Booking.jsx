import { CardAdmin } from "./admin/CardAdmin";

export const Booking = ({ bookingUser = [] }) => {
  return (
    <div>
      <CardAdmin cards={bookingUser} />
    </div>
  );
};
