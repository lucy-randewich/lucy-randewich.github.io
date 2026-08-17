import { Box, IconButton, Typography } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Mail,
  Instagram,
} from "@mui/icons-material";

interface ContactProps {
  id?: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <section id={id} className="contact">
      <Box
        component="footer"
        sx={{
          backgroundColor: "#222",
          color: "#fff",
          px: { xs: 3, md: 6 },
          py: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Name */}
        <Box>
          <Typography
            sx={{
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Get in touch
          </Typography>

          <Typography
            sx={{
              fontSize: "0.7rem",
              color: "rgba(255, 255, 255, 0.5)",
              mt: 0.3,
            }}
          >
            Via Email or LinkedIn
          </Typography>
        </Box>

        {/* Social links */}
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
          }}
        >
          {[
            {
              label: "GitHub",
              href: "https://github.com/lucy-randewich",
              icon: <GitHub />,
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/lucyrandewich",
              icon: <LinkedIn />,
            },
            {
              label: "Email",
              href: "mailto:lucyrandewich@gmail.com",
              icon: <Mail />,
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/laurcty/",
              icon: <Instagram />,
            },
          ].map(({ label, href, icon }) => (
            <IconButton
              key={label}
              component="a"
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noreferrer"}
              aria-label={label}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                width: 38,
                height: 38,
                transition: "all 0.2s ease",

                "&:hover": {
                  color: "#fff",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </section>
  );
};

export default Contact;