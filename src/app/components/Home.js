import Nav from "./header/Nav";
import Countries from "./main/Countries";

const Home = () => {
    return(
        <>
            <header>
                <Nav/>
            </header>
            <main>
                <Countries/>
            </main>
        </>
    )
}

export default Home;