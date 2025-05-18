import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Tooltip,
  Card,
  CardContent,
  CardHeader,
  Fade,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ParseJSON from "../Parse";
const JSONParser = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleParse = () => {
    try {
      console.log(input);
      // Replace with your custom parser
      const parsed2 = ParseJSON(input);
      setOutput(JSON.stringify(parsed2, null, 2));
      setError("");
    } catch (err) {
      setOutput("");
      setError("❌ Invalid JSON: " + err.message);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "fit-content",
        background: "linear-gradient(to bottom right, #e0f7fa, #f1f8e9)",
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={6}
          sx={{
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <CardHeader
            title="🛠️ JSON Parser Playground"
            subheader="Enter JSON and get a pretty-printed, copyable structure"
            titleTypographyProps={{
              variant: "h5",
              sx: { fontWeight: 600 },
            }}
            subheaderTypographyProps={{
              variant: "subtitle1",
              sx: { color: "text.secondary" },
            }}
            sx={{ bgcolor: "#f5f5f5", px: 3, py: 2 }}
          />

          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid
                container
                spacing={4}
                sx={{ maxWidth: "700px", width: "100%" }}
              >
                {/* Input */}
                <Grid item xs={12}>
                  <TextField
                    label="Input JSON"
                    placeholder='{"name": "Alice", "age": 30}'
                    multiline
                    fullWidth
                    minRows={8}
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    InputProps={{
                      sx: {
                        fontFamily: "JetBrains Mono, monospace",
                      },
                    }}
                  />
                </Grid>

                {/* Parse Button */}
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleParse}
                    sx={{
                      px: 4,
                      py: 1.5,
                      textTransform: "none",
                      fontWeight: 500,
                      borderRadius: 2,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Parse JSON
                  </Button>
                </Grid>

                {/* Output */}
                <Grid item xs={12}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      position: "relative",
                      backgroundColor: "#f9f9f9",
                      border: "1px solid #ddd",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 500, mb: 1 }}
                    >
                      Output (Read-only)
                    </Typography>

                    <TextField
                      multiline
                      fullWidth
                      minRows={8}
                      variant="filled"
                      value={output}
                      InputProps={{
                        readOnly: true,
                        sx: {
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "0.95rem",
                          backgroundColor: "#f3f3f3",
                          whiteSpace: "pre",
                        },
                      }}
                    />

                    {/* Floating Copy Button */}
                    {output && (
                      <Box sx={{ position: "absolute", top: 12, right: 12 }}>
                        <Tooltip title="Copy output">
                          <IconButton onClick={handleCopy} color="primary">
                            <ContentCopyIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    )}

                    {/* Copied Tooltip */}
                    <Fade in={copied}>
                      <Box
                        sx={{
                          position: "absolute",
                          top: 14,
                          right: 50,
                          background: "#4caf50",
                          color: "#fff",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: 1,
                          fontSize: "0.75rem",
                        }}
                      >
                        Copied!
                      </Box>
                    </Fade>
                  </Paper>
                </Grid>

                {/* Error */}
                {error && (
                  <Grid item xs={12}>
                    <Typography
                      color="error"
                      variant="body1"
                      sx={{
                        fontWeight: 500,
                        backgroundColor: "#ffebee",
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      {error}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default JSONParser;
