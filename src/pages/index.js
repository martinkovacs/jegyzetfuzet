import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/index">
            Tartalomjegyzék
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomescreenIndex() {
  return (
    <div className={clsx(styles.index)}>
      <h2>Tételek</h2>
      <ul>
        <li><a href="docs/tetelek/angol">Angol</a></li>
        <li><a href="docs/tetelek/irodalom">Irodalom</a></li>
        <li><a href="docs/tetelek/nyelvtan">Nyelvtan</a></li>
        <li><a href="docs/tetelek/tortenelem">Történelem</a></li>
      </ul>
      <h2>Vázlatok</h2>
      <h3>Irodalom</h3>
      <ul>
        <li><a href="docs/vazlatok/irodalom/12-1">12-1: Az avantgárd irodalmából</a></li>
        <li><a href="docs/vazlatok/irodalom/12-2">12-2: A 20. Század világirodalmából</a></li>
        <li><a href="docs/vazlatok/irodalom/12-3">12-3: Irodalmunk a két világháború között</a></li>
      </ul>
      <h3>Töri</h3>
      <ul>
        <li><a href="docs/vazlatok/tori/11-5">11-5: Magyarország a két világháború között és a második világháborúban</a></li>
        <li><a href="docs/vazlatok/tori/12-1">12-1: A hidegháború korszaka</a></li>
        <li><a href="docs/vazlatok/tori/12-2">12-2: Magyarország 1945-1956 között</a></li>
        <li><a href="docs/vazlatok/tori/12-3">12-3: A két világrendszer versengése - a szovjet tömb felbomlása</a></li>
        <li><a href="docs/vazlatok/tori/12-4">12-4: A Kádár-korszak</a></li>
        <li><a href="docs/vazlatok/tori/12-5">12-5: Az egységesülő Európa, A globalizáció kiteljesedése</a></li>
      </ul>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/img/docusaurus.png" />
      </Head>
      <HomepageHeader />
      <HomescreenIndex />
    </Layout>
  );
}
