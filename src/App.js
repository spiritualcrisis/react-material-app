import AppContextProvider from "./components/DataProvider";
import Layout from "./components/layout";
function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Layout />
      </div>
    </AppContextProvider>
  );
}

export default App;
