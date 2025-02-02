const Home = () => {
  return (
    <main className="home container">
      <div className="home-content">
        <h1>Give Your Feet the Comfort They Deserve</h1>
        <p>
          Step into comfort and style with our premium footwear, designed to
          support and pamper your feet every step of the way.
        </p>
        <div className="home-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo"></img>
            <img src="/images/flipkart.png" alt="flipkart-logo"></img>
          </div>
        </div>
      </div>
      <div className="shoe-image">
        <img src="/images/shoe-image.png" alt="shoe-image"></img>
      </div>
    </main>
  );
};

export default Home;
