import AppHeader from '../AppHeader/AppHeader'
import Main from '../Main/Main'
import { mockOrder } from "../../utils/data";
import { mockData } from "../../utils/data";

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <Main items={mockData} orders={mockOrder} />
    </div>
  );
}

