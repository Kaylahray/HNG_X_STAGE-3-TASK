import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import "react-loading-skeleton/dist/skeleton.css";

import { Context } from "./context/Context";
function App() {
  const { user, loading, error } = Context();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <> {user ? <GalleryPage /> : <AuthPage />} </>
      )}
    </div>
  );
}

export default App;
