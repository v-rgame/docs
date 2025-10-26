import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import {useState} from 'react'; // Thêm import này

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isHovered, setIsHovered] = useState(false); // State để theo dõi hover

  return (
    <header 
      className={clsx('hero hero--primary', styles.heroBanner)}
      onMouseEnter={() => setIsHovered(true)} // Khi chuột vào
      onMouseLeave={() => setIsHovered(false)} // Khi chuột ra
      style={{
        backgroundImage: isHovered 
          ? "url('/docs/img/homepagebg.png')" // Khi hover
          : "url('/docs/img/homepagebg1.png')", // Khi không hover
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        transition: 'background-image 0.3s ease-in-out' // Hiệu ứng chuyển đổi mượt
      }}
    >
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p 
          className="hero__subtitle" 
          dangerouslySetInnerHTML={{__html: siteConfig.tagline}} 
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.youtube.com/watch?v=aZrt3XF45Nw">
            Hướng dẫn tải và cài đặt 📥
          </Link>
        </div>
      </div>
      {/* Lớp phủ tối */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}
      />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tài liệu chính thức RGameV - Hướng dẫn tải, cài đặt và cấu hình">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}