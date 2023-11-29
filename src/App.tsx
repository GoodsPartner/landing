import {Welcome} from "./components/welcome.component.tsx";
import {Benefits} from "@/components/benefits.component.tsx";
import {Header} from "@/components/header.component.tsx";
import {Users} from "@/components/users.component.tsx";
import {Approach} from "@/components/approach.component.tsx";
import {Statistics} from "@/components/statistics.component.tsx";
import {Footer} from "@/components/footer.component.tsx";
import {Contact} from "@/components/contact.component.tsx";

function App() {
    return (
        <>
            <Header/>
            <Welcome/>
            <Benefits/>
            <Users/>
            <Statistics/>
            <Approach/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
