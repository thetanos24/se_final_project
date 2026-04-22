import "./Resources.css";

function Resources() {
  const videos = [
    {
      id: 1,
      title: "Sourdough Starter Masterclass",
      url: "https://www.youtube.com/embed/boxvPpwH8w4?si=l_ooMHCjOhgvrLyN",
      description:
        "Everything you need to know to feed, fix, and maintain a strong starter.",
    },
    {
      id: 2,
      title: "The Window Pane Test",
      url: "https://www.youtube.com/embed/hLnyrvDRzGw?si=cOhWpBxjD4sdQqF0",
      description:
        "The essential test to check if your gluten development is complete.",
    },
    {
      id: 3,
      title: "Stretch and Fold Technique",
      url: "https://www.youtube.com/embed/QYzxulQY1Gc?si=MJiGHcjc6F1lEY8D",
      description:
        "Learn how to build strength in your dough without intense kneading.",
    },
  ];

  return (
    <section className="resources">
      <div className="resources__container">
        <h2 className="resources__title">mastering sourdough</h2>
        <p className="resources__subtitle">
          ESSENTIAL TECHNIQUES FOR THE ARID BAKER.
        </p>

        <div className="resources__grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-card__iframe-wrapper">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-card__info">
                <h3 className="video-card__title">{video.title}</h3>
                <p className="video-card__description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
