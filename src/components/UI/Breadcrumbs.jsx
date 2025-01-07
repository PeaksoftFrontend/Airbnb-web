import { Breadcrumbs as MuiBreadcrumbs, Link } from "@mui/material";

export const Breadcrumbs = ({ path = [] }) => {
  return (
    <MuiBreadcrumbs>
      {path.map((item, index) => (
        <Link
          key={item.id}
          href={item.url}
          underline="hover"
          color={index === path.length - 1 ? "text.primary" : "inherit"}
        >
          {item.title}
        </Link>
      ))}
    </MuiBreadcrumbs>
  );
};
