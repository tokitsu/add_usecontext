import "./styles.css";
import { AuthProvider } from "./context/AuthContext";
import { UserAuth } from "./components/userAuth/UserAuth";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h2>useContext</h2>
        <UserAuth />
      </div>
    </AuthProvider>
  );
}
