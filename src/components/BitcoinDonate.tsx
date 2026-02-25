import { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Paper,
  IconButton,
  Tooltip,
  Alert,
  Snackbar,
} from "@mui/material";
import {
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  CurrencyBitcoin as BitcoinIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7931a",
    },
    secondary: {
      main: "#58a6ff",
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

function BitcoinDonateContent() {
  const [wallet, setWallet] = useState("");
  const [copied, setCopied] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const walletParam =
      params.get("wallet") || "bc1qaq220dfa4dwc2eg0s76t4uzmrf28med2nr3fz0";
    setWallet(walletParam);
  }, []);

  const bitcoinUri = wallet ? `bitcoin:${wallet}` : "";

  const handleCopy = () => {
    if (wallet) {
      navigator.clipboard.writeText(wallet);
      setCopied(true);
      setOpenSnackbar(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (!wallet) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, #161b22 0%, #1c2128 100%)",
          border: "1px solid #30363d",
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Chip
            icon={<BitcoinIcon sx={{ color: "#f7931a !important" }} />}
            label="BITCOIN"
            sx={{
              bgcolor: "rgba(247, 147, 26, 0.15)",
              color: "#f7931a",
              fontWeight: "bold",
              fontSize: "1rem",
              py: 0.5,
              px: 1,
              border: "1px solid rgba(247, 147, 26, 0.3)",
            }}
          />
        </Box>

        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Donar con Bitcoin
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Escanea el código QR o copia la dirección de wallet para realizar tu
          donación
        </Typography>

        <Card
          sx={{
            mb: 3,
            backgroundColor: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
            }}
          >
            <Box
              sx={{
                bgcolor: "#ffffff",
                p: 3,
                borderRadius: 2,
                mb: 2,
              }}
            >
              <QRCodeSVG
                value={bitcoinUri}
                size={200}
                bgColor="#ffffff"
                fgColor="#000000"
                level="M"
                includeMargin={false}
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              Escanea para donar
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            mb: 3,
            backgroundColor: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ mb: 1, display: "block", textAlign: "left" }}
            >
              Dirección de Wallet
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#21262d",
                p: 1.5,
                borderRadius: 1,
                border: "1px solid #30363d",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  flex: 1,
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                  textAlign: "left",
                  color: "#58a6ff",
                }}
              >
                {wallet}
              </Typography>
              <Tooltip title={copied ? "Copiado" : "Copiar dirección"}>
                <IconButton
                  onClick={handleCopy}
                  size="small"
                  sx={{
                    color: copied ? "#3fb950" : "#8b949e",
                    "&:hover": { color: copied ? "#3fb950" : "#c9d1d9" },
                  }}
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </IconButton>
              </Tooltip>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleCopy}
            startIcon={copied ? <CheckIcon /> : <CopyIcon />}
            sx={{
              bgcolor: "#f7931a",
              color: "#000",
              fontWeight: "bold",
              "&:hover": { bgcolor: "#e8850a" },
            }}
          >
            {copied ? "Copiado" : "Copiar Dirección"}
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            href={bitcoinUri}
            startIcon={<OpenInNewIcon />}
            sx={{
              borderColor: "#f7931a",
              color: "#f7931a",
              "&:hover": {
                borderColor: "#e8850a",
                bgcolor: "rgba(247, 147, 26, 0.1)",
              },
            }}
          >
            Abrir Wallet
          </Button>
        </Box>
      </Paper>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          KliaStore - Pagos descentralizados
        </Typography>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ bgcolor: "#238636", color: "#fff" }}
        >
          Dirección copiada al portapapeles
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default function BitcoinDonate() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BitcoinDonateContent />
    </ThemeProvider>
  );
}
