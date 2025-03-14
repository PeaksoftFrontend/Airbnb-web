import { useEffect, useState } from "react";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Select } from "../components/UI/Select";
import { Box, Pagination, styled } from "@mui/material";
import { Icons } from "../assets";
import { CardUser } from "../components/user/CardUser";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAnnouncementsFilterQuery } from "../redux/api/auth.servers";

const main = [
  { id: 1, url: "/main", title: "Main" },
  { id: 2, url: "/naryn", title: "Naryn" },
];

export const InnerOfHotel = () => {
  const { region } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const categoryFromURL = params.get("category") || "";
  const regionFromURL = params.get("region") || "";
  const typeFromURL = params.get("type") || "";
  const priceFromURL = params.get("price") || "";
  const pageFromURL = params.get("page") || 1;

  const [filters, setFilters] = useState({
    region: regionFromURL || region || "",
    category: categoryFromURL || "",
    type: typeFromURL || "",
    price: priceFromURL || "",
    currentPage: Number(pageFromURL) || 1,
  });

  const { data } = useGetAnnouncementsFilterQuery(filters, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      region: regionFromURL || prev.region,
      category: categoryFromURL || prev.category,
      type: typeFromURL || prev.type,
      price: priceFromURL || prev.price,
      currentPage: Number(pageFromURL) || prev.currentPage,
    }));
  }, [categoryFromURL, regionFromURL, typeFromURL, priceFromURL, pageFromURL]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: value };
      navigate(`?${new URLSearchParams(newFilters).toString()}`);
      return newFilters;
    });
  };

  const clearSelections = () => {
    setFilters({
      region: "",
      category: "",
      type: "",
      price: "",
      currentPage: 1,
    });
    navigate(`?currentPage=1`);
  };

  const deleteText = (key) => {
    setFilters((prev) => {
      const newFilters = { ...prev, [key]: "" };
      navigate(`?${new URLSearchParams(newFilters).toString()}`);
      return newFilters;
    });
  };

  const cardsPerPage = 16;
  const totalPages = data
    ? Math.ceil(data.announcementResponses.length / cardsPerPage)
    : 0;
  const currentCards = data
    ? data.announcementResponses.slice(
        (filters.currentPage - 1) * cardsPerPage,
        filters.currentPage * cardsPerPage
      )
    : [];

  const handlePageChange = (_, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev, currentPage: value };
      navigate(`?${new URLSearchParams(newFilters).toString()}`);
      return newFilters;
    });
  };

  const options1 = data
    ? [...new Set(data.announcementResponses.map((item) => item.region))]
    : [];
  const options2 = data
    ? [...new Set(data.announcementResponses.map((item) => item.category))]
    : [];
  const options3 = data
    ? [...new Set(data.announcementResponses.map((item) => item.type))]
    : [];
  const options4 = data
    ? [...new Set(data.announcementResponses.map((item) => item.price))]
    : [];

  return (
    <div>
      <StyleHeadElements>
        <Breadcrumbs path={main} />
        <StyleRegionNameandSlect>
          <StyleTitle>
            {filters.region || region}
            <span>({data ? data.announcementResponses.length : 0})</span>
          </StyleTitle>

          <StyleDiv>
            <StyleSelects>
              <StyleSelect
                options={options1.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.region}
                onChange={(e) => handleFilterChange("region", e.target.value)}
                placeholder="Sort by region:"
              />
              <StyleSelect
                options={options2.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                placeholder="Sort by category:"
              />
              <StyleSelect
                options={options3.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.type}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                placeholder="Filter by home type:"
              />
              <StyleSelect
                options={options4.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.price}
                onChange={(e) => handleFilterChange("price", e.target.value)}
                placeholder="Filter by price:"
              />
            </StyleSelects>
            <StyleOptions>
              {["region", "category", "type", "price"].map((key) => (
                <StyleSelectText key={key} hasText={filters[key] !== ""}>
                  {filters[key] && (
                    <Icons.Remove onClick={() => deleteText(key)} />
                  )}
                  {filters[key]}
                </StyleSelectText>
              ))}
              <StyleClearAll onClick={clearSelections}>Clear all</StyleClearAll>
            </StyleOptions>
          </StyleDiv>
        </StyleRegionNameandSlect>
      </StyleHeadElements>

      <CardUser cards={currentCards} />

      <StylePogination>
        <Pagination
          count={totalPages}
          page={filters.currentPage}
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

const StyleSelectText = styled("p")(({ hasText }) => ({
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
