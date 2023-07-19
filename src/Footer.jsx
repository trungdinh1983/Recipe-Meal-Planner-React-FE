import ScrollToTop from "react-scroll-to-top";
export function Footer() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <center>
        <p>Copyright 2023</p>
      </center>
      <div className="App">
        <ScrollToTop />
        <div className="section section1"></div>
        <div className="section section2"></div>
        <div className="section section3"></div>
        <div className="section section4"></div>
        <div className="section section5"></div>
      </div>
    </footer>
  );
}
