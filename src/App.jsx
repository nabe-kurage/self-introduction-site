import "./App.css";
// Switchは今なくて、Routes を使っておなじことができる
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { Work } from "./pages/Work";

function App() {
    return (
        <div className="root">
            <h1>my site</h1>
            <p>test</p>
            <ul className="linkList">
                <li className="linkListItem">
                    <a className="link" href="/self-introduction-site/profile">
                        profile
                    </a>
                </li>
                <li className="linkListItem">
                    <a className="link" href="/self-introduction-site/works">
                        works
                    </a>
                </li>

                <li className="linkListItem">
                    <a className="link" href="/self-introduction-site/">
                        top
                    </a>
                </li>
            </ul>

            <BrowserRouter basename={"/self-introduction-site"}>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/works" element={<Work />} />
                    <Redirect to="/" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
