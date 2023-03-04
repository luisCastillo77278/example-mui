import { Button, Container, Typography, Box } from '@mui/material';
import Home from './pages/Home';
function App() {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Home />
      </Box>
    </Container>
  );
}

export default App;
