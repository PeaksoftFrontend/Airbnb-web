import { CardUserProfile } from "../../components/user/CardUserProfile";
import { TestAnnouncementsProfile } from "./TestAnnouncementProfile";

export const TestProfileData = ({ bookings, announcements, moderations }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {bookings?.length > 0 ? <CardUserProfile bookings={bookings} /> : null}
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {announcements?.length > 0 ? (
          <TestAnnouncementsProfile announcements={announcements} />
        ) : null}
      </div>
      <div>
        {moderations?.length > 0
          ? moderations.map((moderation) => (
              <div key={moderation.id}>
                <h3>{moderation.title}</h3>
                <p>{moderation.description}</p>
                <p>Price: {moderation.price}</p>
                <p>Status: {moderation.status}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
