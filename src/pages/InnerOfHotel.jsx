import { useState, useMemo } from "react";
import { Breadcrumbs } from "../components/UI/Breadcrumbs";
import { Select } from "../components/UI/Select";
import { Box, Pagination, styled } from "@mui/material";
import { Icons } from "../assets";
import { CardUser } from "../components/user/CardUser";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAnnouncementsFilterQuery } from "../redux/api/auth.servers";

export const InnerOfHotel = () => {
  const { regionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const main = useMemo(
    () => [
      { id: 1, url: "/", title: "Main" },
      { id: 2, url: "#", title: regionId },
    ],
    [regionId]
  );

  const [filters, setFilters] = useState({
    region: regionId?.toUpperCase() || "",
    houseType: params.get("houseType") || "APARTMENT",
    price: params.get("price") || "",
    currentPage: Number(params.get("page")) || 1,
    pageSize: 10,
  });

  const { data } = useGetAnnouncementsFilterQuery(filters, {
    refetchOnMountOrArgChange: true,
    skip: !regionId,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => {
      const newFilters = {
        ...prev,
        [key]: value,
        currentPage: key === "currentPage" ? value : 1,
      };
      const searchParams = new URLSearchParams();

      Object.entries(newFilters).forEach(([k, v]) => {
        if (v && k !== "pageSize" && k !== "region") searchParams.append(k, v);
      });

      navigate(`?${searchParams.toString()}`);
      return newFilters;
    });
  };

  const clearSelections = () => {
    setFilters({
      region: regionId?.toUpperCase() || "",
      category: "",
      type: "",
      price: "",
      currentPage: 1,
      pageSize: 10,
    });
    navigate(`?currentPage=1`);
  };

  const deleteText = (key) => {
    handleFilterChange(key, "");
  };

  const cardsPerPage = 16;

  const { totalPages, currentCards, options } = useMemo(() => {
    if (!data) {
      return {
        totalPages: 0,
        currentCards: [],
        options: { region: [], category: [], houseType: [], price: [] },
      };
    }

    const announcementResponses = data.announcementResponses || [];

    const totalPages =
      data.totalPages || Math.ceil(announcementResponses.length / cardsPerPage);

    const currentCards = data.totalPages
      ? announcementResponses
      : announcementResponses.slice(
          (filters.currentPage - 1) * cardsPerPage,
          (filters.currentPage - 1) * cardsPerPage + cardsPerPage
        );

    const options = {
      region: [...new Set(announcementResponses.map((item) => item.region))],

      category: [...new Set(announcementResponses.map((item) => item.title))],
      houseType: [...new Set(announcementResponses.map((item) => item.title))],
      price: [
        ...new Set(announcementResponses.map((item) => item.price).map(String)),
      ],
    };

    return { totalPages, currentCards, options };
  }, [data, filters.currentPage, cardsPerPage]);

  const handlePageChange = (_, value) => {
    handleFilterChange("currentPage", value);
  };

  return (
    <div>
      <StyleHeadElements>
        <Breadcrumbs path={main} />
        <StyleRegionNameandSlect>
          <StyleTitle>
            {filters.region || regionId}
            <span>({data?.announcementResponses?.length || 0})</span>
          </StyleTitle>

          <StyleDiv>
            <StyleSelects>
              <StyleSelect
                options={options.region.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.region || ""}
                onChange={(e) => handleFilterChange("region", e.target.value)}
                placeholder="Sort by region:"
              />
              <StyleSelect
                options={options.category.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.category || ""}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                placeholder="Sort by house type:"
              />
              <StyleSelect
                options={options.houseType.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.houseType || ""}
                onChange={(e) => handleFilterChange("type", e.target.value)}
                placeholder="Sort by title:"
              />
              <StyleSelect
                options={options.price.map((option) => ({
                  value: option,
                  label: option,
                }))}
                value={filters.price || ""}
                onChange={(e) => handleFilterChange("price", e.target.value)}
                placeholder="Sort by price:"
              />
            </StyleSelects>
            <StyleOptions>
              {["region", "houseType", "price"].map((key) => (
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
