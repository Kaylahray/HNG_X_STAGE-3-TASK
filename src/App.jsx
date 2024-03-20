import "./App.css";
import AuthPage from "./pages/Auth/AuthPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import "react-loading-skeleton/dist/skeleton.css";

import { Context } from "./context/Context";
import { ThreeDots } from "react-loader-spinner";
function App() {
  const { user, loading, error } = Context();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#000"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <> {user ? <GalleryPage /> : <AuthPage />} </>
      )}
    </div>
  );
}

export default App;
