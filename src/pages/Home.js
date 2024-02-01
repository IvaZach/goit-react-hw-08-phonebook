const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 500,
    fontSize: 'calc( (100vw - 480px)/(1280 - 480) * (48 - 24 + 24px)',
    textAlign: 'center',
  },
  img: {
    objectFit: 'cover',
    height: 'auto',
    width: '100%',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>YOUR PHONE BOOK</h1>{' '}
      <img
        style={styles.img}
        src="https://img.youscreen.ru/wall/14977347587960/14977347587960_1920x1200.jpg"
        width="980"
        alt="phone"
      />
    </div>
  );
}
