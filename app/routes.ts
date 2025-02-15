import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("team", "routes/team.tsx"),
    route("impressum", "routes/imprint.tsx"),
    route("datenschutz", "routes/dataProtection.tsx"),
    route("kontakt", "routes/contact.tsx"),
    route("arbeit", "routes/work.tsx"),
    route("standorte", "routes/locations.tsx"),
  ]),
] satisfies RouteConfig;
