import {Welcome} from "./components/welcome.component.tsx";
import {Benefits} from "@/components/benefits.component.tsx";
import {Header} from "@/components/header.component.tsx";

function App() {
    return (
        <>
            <Header/>
            <Welcome/>
            <Benefits/>
        </>
    )
}

export default App
