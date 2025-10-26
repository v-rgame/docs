import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'RgameV là gì ?',
    imageUrl: require('@site/static/img/homepage1.png').default,
    description: (
      <>
        RgameV là một dự án độc đáo dựa trên GTA V, cho phép hàng ngàn người chơi tương tác với nhau trực tiếp
      </>
    ),
  },
  {
    title: 'Làm thế nào để bắt đầu trên RGameV?',
    imageUrl: require('@site/static/img/homepage2.png').default,
    description: (
      <>
        Đầu tiên bạn cần tải xuống GTA V Legacy bản quyền sau đó cài đặt RGame Launcher
      </>
    ),
  },
  {
    title: 'Tôi có thể làm gì trên máy chủ?',
    imageUrl: require('@site/static/img/homepage3.png').default,
    description: (
      <>
        Ngoài việc có một lựa chọn lớn các công việc và tương tác giữa người chơi, chúng tôi có cập nhật thường xuyên và các sự kiện theo mùa
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          src={imageUrl} 
          className={styles.featureImg} 
          alt={title} 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}