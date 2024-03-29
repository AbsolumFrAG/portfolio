import Head from "components/head";
import Header from "components/header";
import styles from "./page.module.scss";

const Page = ({
  header = true,
  title,
  description,
  image = undefined,
  showHeaderTitle = true,
  children,
}: {
  header?: boolean;
  title?: string;
  description?: string;
  image?: string;
  showHeaderTitle?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.wrapper}>
      <Head
        title={`${title ? `${title} - ` : ""}Lou Tigroudja`}
        description={description}
        image={image}
      />

      {header && <Header title={showHeaderTitle ? title : undefined} />}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Page;
