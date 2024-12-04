import CardHeader from "./components/MobileCard/CardHeader";
import MobileCard from "./components/MobileCard/MobileCard";
import PhoneFrame from "./components/PhoneFrame/PhoneFrame";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <PhoneFrame>
                <CardHeader />
                <MobileCard />
            </PhoneFrame>
        </div>
    );
}

export default App;