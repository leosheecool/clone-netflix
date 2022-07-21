import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "AppRoutes";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
