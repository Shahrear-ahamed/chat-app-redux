import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const checkAuth = useAuthCheck();
    return checkAuth ? (<Router>
        <Routes>
            <Route path="/" element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
            <Route path="/inbox" element={<PrivateRoute><Conversation/></PrivateRoute>}/>
            <Route path="/inbox/:id" element={<PrivateRoute><Inbox/></PrivateRoute>}/>
        </Routes>
    </Router>) : <div
        className="flex h-screen items-center justify-center font-semibold animate-pulse">Checking
        auth ...</div>;
}

export default App;
