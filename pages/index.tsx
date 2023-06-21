import { Dataipa } from "components/icons";
import iconStyles from "components/icons/icons.module.scss";
import Link from "components/link";
import NowPlaying from "components/now-playing";
import Page from "components/page";

const Home = () => {
  return (
    <Page description="Lou Tigroudja - Développeur Web.">
      <article>
        <h1>Lou Tigroudja</h1>

        <p>
          Développeur Web Full-Stack,{" "}
          <Link underline href="https://github.com/AbsolumFrAG" external>
            open-source
          </Link>
        </p>

        <p>
          Travaille chez DataIPA{" "}
          <Link href="https://dataipa.com/" external>
            <Dataipa className={iconStyles.inline} />
          </Link>
        </p>
      </article>
      <NowPlaying />
    </Page>
  );
};

export default Home;
