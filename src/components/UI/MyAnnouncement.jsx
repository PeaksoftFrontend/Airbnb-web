import { CardAdmin } from "./admin/CardAdmin";

export const MyAnnouncement = ({ announcementResponses = [] }) => {
  return (
    <div>
      <CardAdmin cards={announcementResponses} />
    </div>
  );
};
