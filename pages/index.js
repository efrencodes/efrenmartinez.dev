import Head from "next/head";
import Image from "next/image";
import imge from "../public/imge.png";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>@efrencodes</title>
                <meta name="description" content="Follow me @efrencodes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>This Page is Lost in Space.</h1>
                <h1 className={styles.title}>
                    Find me in{" "}
                    <a href="https://www.efrencodes.com/">efrencodes.com</a>
                </h1>
                <div className={styles.grid}>
                    <Image
                        src={imge}
                        alt="Lost in page"
                        height={300}
                        width={300}
                    />
                </div>
            </main>
        </div>
    );
}
