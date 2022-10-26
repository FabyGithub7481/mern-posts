import { PostForm, HomePage, NotFoundPage } from "./pages/index";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto bg-red-100">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PostProvider>
      </div>
    </div>
  );
}

export default App;