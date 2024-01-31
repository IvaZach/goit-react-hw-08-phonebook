const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        YOUR PHONE BOOK
        <img
          src="https://img.youscreen.ru/wall/14977347587960/14977347587960_1920x1200.jpg"
          width="980"
          alt="phone"
        />
      </h1>
    </div>
  );
}
