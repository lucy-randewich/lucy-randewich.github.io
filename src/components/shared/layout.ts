import type { SxProps, Theme } from "@mui/material";
import { layout } from "../../theme";

export const contentContainerSx: SxProps<Theme> = {
  maxWidth: layout.contentWidth,
  mx: "auto",
  px: { xs: 2.5, md: 4 },
};
