import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Button,
  Grid,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Code as CodeIcon,
  Language as LanguageIcon,
  Computer as ComputerIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#58a6ff",
    },
    secondary: {
      main: "#f78166",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#c9d1d9",
      secondary: "#8b949e",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Astro",
  "Python",
  "Git",
];

function HomeContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 3,
          textAlign: "center",
          background: "linear-gradient(135deg, #161b22 0%, #21262d 100%)",
          border: "1px solid #30363d",
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            mb: 2,
            bgcolor: "#58a6ff",
            fontSize: 48,
          }}
        >
          N3
        </Avatar>
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          n3kosempai
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Desarrollador Full Stack
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Tooltip title="Ver GitHub">
            <IconButton
              href="https://github.com/n3kosempai"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              size="large"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <CodeIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h2">
                  Sobre mí
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary">
                Desarrollador apasionado por crear soluciones innovadoras. Esta
                página está construida con Astro + React + Material UI.
              </Typography>
              {mounted && (
                <Chip
                  label="React montado correctamente"
                  color="success"
                  size="small"
                  sx={{ mt: 2 }}
                />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              height: "100%",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ComputerIcon color="secondary" sx={{ mr: 1 }} />
                <Typography variant="h6" component="h2">
                  Tecnologías
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Card
            sx={{
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <LanguageIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Proyectos Destacados
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Explora mis repositorios y contribuciones en GitHub
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/n3kosempai?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
              >
                Ver Repositorios
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © 2024 n3kosempai. Construido con Astro + React + Material UI
        </Typography>
      </Box>
    </Container>
  );
}

export default function Home() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HomeContent />
    </ThemeProvider>
  );
}
