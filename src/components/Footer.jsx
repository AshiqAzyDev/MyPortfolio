const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear}. Made with ❤️ by{" "}
        <a href="https://github.com/AshiqAzyDev">Ashique P Raj</a>.
      </p>
    </footer>
  );
};

export default Footer;
