import CloseIcon from "@mui/icons-material/Close";
import {
  alpha,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  getLeaderboard,
  isSupabaseConfigured,
  submitLeaderboardScore,
  type LeaderboardEntry,
} from "../../services/supabase";

interface ShrimpLeaderboardProps {
  score: number;
  onClose: () => void;
}

export const ShrimpLeaderboard = ({
  score,
  onClose,
}: ShrimpLeaderboardProps) => {
  const [entries, setEntries] = useState<LeaderboardEntry[] | null>(null);
  const [name, setName] = useState("");
  const [hasSkipped, setHasSkipped] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) return;
    let isCurrent = true;
    void getLeaderboard()
      .then((scores) => {
        if (isCurrent) setEntries(scores);
      })
      .catch(() => {
        if (isCurrent) setHasError(true);
      });
    return () => {
      isCurrent = false;
    };
  }, []);

  const lowestScore = entries?.at(-1)?.score ?? 0;
  const hasHighScore = Boolean(
    entries &&
    score > 0 &&
    (entries.length < 5 || score > lowestScore) &&
    !hasSkipped &&
    !hasSubmitted,
  );

  const saveScore = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || isSaving) return;

    setIsSaving(true);
    setHasError(false);
    try {
      const updatedEntries = await submitLeaderboardScore(trimmedName, score);
      setEntries(updatedEntries);
      setHasSubmitted(true);
    } catch {
      setHasError(true);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog
      open
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      aria-label={hasHighScore ? "Add your leaderboard name" : "High scores"}
      slotProps={{
        paper: {
          sx: {
            bgcolor: "background.default",
            border: 1,
            borderColor: "divider",
            borderRadius: 3,
            boxShadow: "0 24px 70px rgb(0 0 0 / 24%)",
          },
        },
        backdrop: {
          sx: { backdropFilter: "blur(8px)" },
        },
      }}
    >
      <IconButton
        aria-label="Close leaderboard"
        onClick={onClose}
        size="small"
        sx={{
          position: "absolute",
          top: 14,
          right: 14,
          color: "text.secondary",
          zIndex: 1,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        sx={{
          px: { xs: 2.5, sm: 3 },
          pb: { xs: 2.5, sm: 3 },
          pt: hasHighScore ? 5 : 2,
        }}
      >
        {!isSupabaseConfigured || hasError ? (
          <Typography color="text.secondary">
            The leaderboard is taking a little rest. Please try again later.
          </Typography>
        ) : entries === null ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
            <CircularProgress size={26} />
          </Box>
        ) : (
          <Box>
            {hasHighScore && (
              <Box component="form" onSubmit={saveScore}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "88px minmax(0, 1fr)",
                    alignItems: "stretch",
                    gap: 2.25,
                  }}
                >
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: 128,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      color: "primary.main",
                    })}
                  >
                    <Typography
                      sx={{
                        fontFamily: "h2.fontFamily",
                        fontSize: "2.3rem",
                        lineHeight: 1,
                        letterSpacing: "-.05em",
                      }}
                    >
                      {score}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.6,
                        fontSize: ".58rem",
                        fontWeight: 700,
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                      }}
                    >
                      pellets
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      autoFocus
                      fullWidth
                      size="small"
                      label="Your name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      slotProps={{ htmlInput: { maxLength: 16 } }}
                      sx={(theme) => ({
                        bgcolor: "background.paper",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: theme.palette.divider,
                        },
                        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: theme.palette.text.secondary,
                          },
                      })}
                    />
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      disabled={!name.trim() || isSaving}
                      sx={{ mt: 1, py: 0.9, fontWeight: 700 }}
                    >
                      {isSaving ? "Saving…" : "Save score"}
                    </Button>
                  </Box>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "center", mt: 1.25 }}
                >
                  <Button
                    onClick={() => setHasSkipped(true)}
                    color="inherit"
                    size="small"
                    sx={{ color: "text.secondary", minWidth: 0, px: 1.25 }}
                  >
                    Skip
                  </Button>
                </Box>
              </Box>
            )}
            <Box
              sx={{
                mt: hasHighScore ? 2.5 : 0,
                pt: hasHighScore ? 2.5 : 0,
                borderTop: hasHighScore ? 1 : 0,
                borderColor: "divider",
              }}
            >
              {entries.length === 0 ? (
                <Box sx={{ pr: 4 }}>
                  <Typography
                    component="h2"
                    sx={{
                      fontFamily: "h2.fontFamily",
                      fontSize: "1.5rem",
                      lineHeight: 1.2,
                    }}
                  >
                    High scores
                  </Typography>
                  <Typography sx={{ mt: 1, color: "text.secondary" }}>
                    No scores yet.
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Box
                    sx={{
                      pr: 4,
                      mb: 1,
                    }}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontFamily: "h2.fontFamily",
                        fontSize: "1.5rem",
                        lineHeight: 1.2,
                      }}
                    >
                      High scores
                    </Typography>
                  </Box>
                  {entries.map((entry, index) => (
                    <Box
                      key={entry.id}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "38px minmax(0, 1fr) auto",
                        gap: 1.5,
                        minHeight: 42,
                        borderTop: 1,
                        borderColor: "divider",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontFamily: "h2.fontFamily",
                          fontSize: "1.15rem",
                        }}
                      >
                        {index + 1}
                      </Typography>
                      <Typography sx={{ fontSize: ".9rem", fontWeight: 600 }}>
                        {entry.playerName}
                      </Typography>
                      <Typography sx={{ fontSize: ".9rem", fontWeight: 700 }}>
                        {entry.score}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
