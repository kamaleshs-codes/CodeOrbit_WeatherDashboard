import AppLayout from "./Layouts/AppLayout";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState({
    name: "Chennai",
    lat: 13.0878,
    lon: 80.2785,
    state: "Tamil Nadu",
    country: "IN",
  });
  return (
    <>
      <AppLayout location={location} setLocation={setLocation} />
    </>
  );
}

export default App;
