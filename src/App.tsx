import {Welcome} from "./components/welcome.component.tsx";
import {Benefits} from "@/components/benefits.component.tsx";
import {Header} from "@/components/header.component.tsx";
import {Users} from "@/components/users.component.tsx";
import {Approach} from "@/components/approach.component.tsx";

function App() {
    return (
        <>
            <Header/>
            <Welcome/>
            <Benefits/>
            <Users/>
            <Approach/>
        </>
    )
}

export default App
