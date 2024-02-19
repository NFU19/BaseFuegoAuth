import { AuthProvider } from "./context/AuthContext";
import FormsFirebase from "./page/FormsFireBase"
function App() {
  return (
    <div>
      <AuthProvider>
        <h1>UrisLogin</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
  );
}

export default App;