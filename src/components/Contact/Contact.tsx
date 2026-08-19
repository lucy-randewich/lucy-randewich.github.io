import { Box, Link, Typography } from "@mui/material";
import { colors, layout } from "../../theme";

interface ContactProps {
  id?: string;
}

export const Contact = ({ id }: ContactProps) => (
  <section id={id}>
    <Box
      component="footer"
      sx={{
        bgcolor: colors.ink,
        color: colors.paper,
        px: { xs: 2.5, md: 4 },
        py: { xs: 7, md: 9 },
      }}
    >
      <Box sx={{ maxWidth: layout.contentWidth, mx: "auto" }}>
        <Typography
          sx={{
            color: colors.accentSoft,
            fontSize: ".75rem",
            letterSpacing: ".16em",
            fontWeight: 700,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Get in touch
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: "2.7rem", md: "4.5rem" },
            lineHeight: 1,
            letterSpacing: "-.05em",
            maxWidth: 720,
          }}
        >
          Interested in working together?
        </Typography>
        <Link
          href="mailto:lucyrandewich@gmail.com"
          underline="none"
          sx={{
            display: "inline-block",
            color: colors.paper,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: 600,
            borderBottom: `1px solid ${colors.accentSoft}`,
            mt: 4,
            pb: 0.5,
            "&:hover": { color: colors.accentSoft },
          }}
        >
          lucyrandewich@gmail.com
        </Link>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            mt: 7,
            pt: 2.5,
            borderTop: `1px solid ${colors.footerBorder}`,
          }}
        >
          <Link
            href="https://github.com/lucy-randewich"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: colors.borderStrong,
              "&:hover": { color: colors.paper },
            }}
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/lucyrandewich"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: colors.borderStrong,
              "&:hover": { color: colors.paper },
            }}
          >
            LinkedIn
          </Link>
          <Typography
            sx={{
              color: colors.footerMuted,
              ml: { md: "auto" },
              fontSize: ".85rem",
            }}
          >
            © {new Date().getFullYear()} Lucy Randewich
          </Typography>
        </Box>
      </Box>
    </Box>
  </section>
);
