import { footer } from "./components/footer/footer.mjs";
import { navbar } from "./components/navbar/navbar.mjs";
import { header } from "./components/header/header.mjs";
import { discover } from "./components/discover_card/discover.mjs";
import { featured } from "./components/joc_Featured/Joc_Featured.mjs";

const init = () => {
    footer();
    navbar();
    header();
    discover();
    featured();
}

init();