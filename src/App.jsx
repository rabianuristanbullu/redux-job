import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import JobList from "./pages/JobList";
import AddJob from "./pages/AddJob";
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
        <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
