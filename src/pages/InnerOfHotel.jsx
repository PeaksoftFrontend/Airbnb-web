import { useEffect, useState } from "react";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Select } from "../components/UI/Select";
import { Box, Pagination, styled } from "@mui/material";
import { Icons } from "../assets";
import { CardUser } from "../components/user/CardUser";
import { Data } from "../utils/constants/cardUser";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAnnouncementsFilterQuery } from "../redux/api/auth.servers";

const main = [
  { id: 1, url: "/main", title: "Main" },
  { id: 2, url: "/main", title: "Naryn" },
];

export const InnerOfHotel = () => {
  const { data, error, isLoading } = useGetAnnouncementsFilterQuery();
  const { region } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const categoryFromURL = params.get("category") || "";
  const [page, setPages] = useState(1);
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState(categoryFromURL || "");
  const [select3, setSelect3] = useState("");
  const [select4, setSelect4] = useState("");

  useEffect(() => {
    if (categoryFromURL) {
      setSelect2(categoryFromURL);
    }
  }, [categoryFromURL]);

  const handleCategoryChange = (value) => {
    setSelect2(value);
    navigate(`${location.pathname}?category=${value}`);
  };
  const options1 = data ? [...new Set(data.map((item) => item.region))] : [];
  const options2 = data ? [...new Set(data.map((item) => item.category))] : [];
  const options3 = data ? [...new Set(data.map((item) => item.type))] : [];
  const options4 = data
    ? [...new Set(data.map((item) => item.priceRange))]
    : [];
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки данных</div>;

  // const options = [
  //   { value: "Batken", label: "Batken" },
  //   { value: "Jalalabat", label: "Jalalabat" },
  //   { value: "Naryn", label: "Naryn" },
  //   { value: "Issyk-Kul", label: "Issyk-Kul" },
  //   { value: "Talas", label: "Talas" },
  //   { value: "Osh", label: "Osh" },
  //   { value: "Chui", label: "Chui" },
  //   { value: "Bishkek", label: "Bishkek" },
  // ];

  // const option2 = [
  //   { value: "popular", label: "popular" },
  //   { value: "The lastest", label: "The lastest" },
  // ];
  // const option3 = [
  //   { value: "House", label: "House" },
  //   { value: "apartment", label: "apartment" },
  // ];
  // const option4 = [
  //   { value: "Low to high", label: "Low to high" },
  //   { value: "High to low", label: "High to low" },
  // ];
  const handleSelectChange = (event, select) => {
    const value = event.target.value;
    if (select === "select1") {
      setSelect1(value);
    } else if (select === "select2") {
      setSelect2(value);
    } else if (select === "select3") {
      setSelect3(value);
    } else if (select === "select4") {
      setSelect4(value);
    }
  };

  const clearSelections = () => {
    setSelect1("");
    setSelect2("");
    setSelect3("");
    setSelect4("");
  };

  const deletetext = (select) => {
    if (select === "select1") setSelect1("");
    if (select === "select2") setSelect2("");
    if (select === "select3") setSelect3("");
    if (select === "select4") setSelect4("");
  };

  const cardsPerPage = 16;

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const currentCards = data.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  const handlePageChange = (_, value) => {
    setPages(value);
  };

  return (
    <div>
      <StyleHeadElements>
        <Breadcrumbs path={main} />
        <StyleRegionNameandSlect>
          <StyleTitle>
            {region}
            <span>({Data.length})</span>
          </StyleTitle>

          <StyleDiv>
            <StyleSelects>
              <StyleSelect
                options={options1.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={select1}
                onChange={(value) => handleSelectChange(value, "select1")}
                placeholder="Sort by:"
              ></StyleSelect>
              <StyleSelect
                options={options2.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={select2}
                onChange={(event) => handleCategoryChange(event.target.value)}
                placeholder={select2 || "Sort by:"}
              />

              <StyleSelect
                options={options3.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={select3}
                onChange={(value) => handleSelectChange(value, "select3")}
                placeholder={select3 || "Filter by home type:"}
              ></StyleSelect>
              <StyleSelect
                options={options4.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={select4}
                onChange={(value) => handleSelectChange(value, "select4")}
                placeholder={select4 || "Filter by price:"}
              ></StyleSelect>
            </StyleSelects>
            <StyleOptions>
              <StyleSelectText1 hasText={select1 !== ""}>
                {select1 && (
                  <Icons.Remove onClick={() => deletetext("select1")} />
                )}
                {select1}
              </StyleSelectText1>
              <StyleSelectText2 hasText={select2 !== ""}>
                {select2 && (
                  <Icons.Remove onClick={() => deletetext("select2")} />
                )}
                {select2}
              </StyleSelectText2>
              <StyleSelectText3 hasText={select3 !== ""}>
                {select3 && (
                  <Icons.Remove onClick={() => deletetext("select3")} />
                )}
                {select3}
              </StyleSelectText3>
              <StyleSelectText4 hasText={select4 !== ""}>
                {select4 && (
                  <Icons.Remove onClick={() => deletetext("select4")} />
                )}
                {select4}
              </StyleSelectText4>
              <StyleClearAll onClick={clearSelections}>Clear all</StyleClearAll>
            </StyleOptions>
          </StyleDiv>
        </StyleRegionNameandSlect>
      </StyleHeadElements>
      <CardUser cards={currentCards} />
      <StylePogination>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </StylePogination>
    </div>
  );
};

const StyleSelect = styled(Select)({
  width: "271px",
  height: "42px",
  "& fieldset": { borderRadius: "0" },
});

const StyleSelects = styled("div")({ display: "flex", gap: "10px" });

const StyleDiv = styled("div")({
  display: "flex",
  gap: "30px",
  flexDirection: "column",
});

const StyleOptions = styled("div")({ display: "flex", gap: "10px" });

const StyleRegionNameandSlect = styled("div")({ display: "flex", gap: "10px" });

const StyleSelectText1 = styled("p")(({ hasText }) => ({
  background: hasText ? "#F3F3F3" : "transparent",
  padding: "8px 8px",
  display: hasText ? "flex" : "none",
  alignItems: "center",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
  textTransform: "uppercase",
  gap: "5px",
  "&:hover": { background: "#C4C4C4" },
}));

const StyleSelectText2 = styled("p")(({ hasText }) => ({
  background: hasText ? "#F3F3F3" : "transparent",
  padding: "8px 8px",
  display: hasText ? "flex" : "none",
  alignItems: "center",
  cursor: "pointer",
  gap: "5px",
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
  textTransform: "uppercase",
  "&:hover": { background: "#C4C4C4" },
}));

const StyleSelectText3 = styled("p")(({ hasText }) => ({
  background: hasText ? "#F3F3F3" : "transparent",
  padding: "8px 8px",
  display: hasText ? "flex" : "none",
  alignItems: "center",
  cursor: "pointer",
  gap: "5px",
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
  textTransform: "uppercase",
  "&:hover": { background: "#C4C4C4" },
}));

const StyleSelectText4 = styled("p")(({ hasText }) => ({
  background: hasText ? "#F3F3F3" : "transparent",
  padding: "8px 8px",
  display: hasText ? "flex" : "none",
  alignItems: "center",
  cursor: "pointer",
  gap: "5px",
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
  textTransform: "uppercase",
  "&:hover": { background: "#C4C4C4" },
}));

const StyleHeadElements = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  padding: "30px 30px",
});

const StyleClearAll = styled("span")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#828282",
  borderBottom: "1.5px solid #828282",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

const StylePogination = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "100px 100px",
  "& .MuiButtonBase-root": {
    background: "none",
    color: "#BDBDBD",
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": { background: "none" },
  },
  "& .Mui-selected": { background: "none", color: "#DD8A08" },
  "& .MuiPaginationItem-icon": {
    fill: "#DD8A08",
    width: "25px",
    height: "25px",
  },
});

const StyleTitle = styled("p")({
  fontSize: "20px",
  fontWeight: 500,
  color: "#000000",
  "& span": { color: "#646464", fontSize: "18px", fontWeight: 400 },
});
