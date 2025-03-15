import { Box, styled } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { InnerHotel } from "../../pages/InnerHotel";
import { useParams, useNavigate } from "react-router-dom";
import {
  useAcceptedAnnouncementMutation,
  useAnnouncementDetailQuery,
} from "../../redux/api/application.service";
import { useState } from "react";
import { Modal } from "../../components/UI/Modal";
import { Button } from "../../components/UI/Button";

export const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [acceptedAnnouncement] = useAcceptedAnnouncementMutation();

  const { data } = useAnnouncementDetailQuery(productId, { skip: !productId });
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const path = [
    { id: 1, url: "/admin/users", title: "Users" },
    { id: 1, url: "/admin/users", title: data?.fullName },
    { id: 2, url: "#", title: data?.title },
  ];

  const handleOutlinedClick = () => {
    setIsActive(!isActive);
  };

  const handleContainedClick = async () => {
    await acceptedAnnouncement({
      id: productId,
      value: "accept",
    });
    navigate("/admin/application");
  };

  const handleRejectSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setError(true);
      return;
    }
    await acceptedAnnouncement({
      id: productId,
      message: value,
      value: "reject",
    });
    setValue("");
    setIsActive(false);
    setError(false);
    navigate("/admin/application");
  };

  return (
    <StyledContainer>
      <Box>
        <Breadcrumbs path={path} />
      </Box>
      <Box>
        <InnerHotel
          data={data}
          outlined="REJECT"
          contained="ACCEPT"
          onOutlinedFunc={handleOutlinedClick}
          onContainedFunc={handleContainedClick}
        />
      </Box>

      <Modal open={isActive} onClose={() => setIsActive(false)}>
        <Form onSubmit={handleRejectSubmit}>
          <Title>Reject</Title>
          <StyledInput
            error={error}
            value={value}
            placeholder="Write the reason for your rejection"
            onChange={(e) => setValue(e.target.value)}
          />
          <ActionWrapper>
            <button
              onClick={() => {
                setValue("");
                setIsActive(false);
              }}
            >
              CANCEL
            </button>
            <Button type="submit" disabled={!value.trim()}>
              send
            </Button>
          </ActionWrapper>
        </Form>
      </Modal>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  paddingLeft: "40px",
  marginTop: "46px",
});

const Form = styled("form")({
  padding: "30px",
});

const StyledInput = styled("textarea")(({ error }) => ({
  width: "474px",
  padding: "10px 16px",
  borderRadius: "2px",
  height: "104px",
  color: "#C4C4C4",
  fontSize: "16px",
  border: error ? "2px solid red" : "1px solid #C4C4C4",
  cursor: error ? "not-allowed" : "pointer",
  "&::placeholder": {
    color: "#C4C4C4",
  },
}));

const Title = styled("h2")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#000000",
  textAlign: "center",
  marginBottom: "24px",
  textTransform: "uppercase",
});

const ActionWrapper = styled("div")({
  marginTop: "22px",
  display: "flex",
  gap: "8px",
  justifyContent: "center",

  "& button:first-of-type": {
    width: "150px",
    color: "#828282",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    fontWeight: "400",
    cursor: "pointer",
  },
  "& button:last-of-type": {
    width: "196px",
    color: "#F7F7F7",
    background: "#DD8A08",
    border: "none",
    borderRadius: "0",
  },
});
