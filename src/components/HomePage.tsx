import { useState } from "react";
import { Link } from "react-router-dom";
import { whatsappUrl, workshops } from "../content/siteContent";

const galleries = {
  mindfulness: {
    title: "סדנאות מיינדפולנס וזן",
    cover: "/mindfulness-workshop-room.png",
    images: ["/mindfulness-workshop-room.png"],
  },
  organizations: {
    title: "הרצאות וסדנאות לארגונים",
    cover: "/workshop-wide-1.png",
    images: [
      "/workshop-wide-1.png",
      "/workshop-wide-2.png",
      "/workshop-wide-3.png",
      "/workshop-portrait-1.png",
      "/workshop-portrait-2.png",
      "/workshop-stage.png",
    ],
  },
} as const;

type GalleryKey = keyof typeof galleries;

const testimonials = [
  {
    name: "נועה",
    quote: "עמית ראה בי דברים שאני בעצמי לא ראיתי. נתן לי אחריות, הקשיב לי וגרם לי להרגיש שסומכים עליי. לאט לאט זה בנה לי את הביטחון, עד שהגעתי לראיונות ממקום אחר לגמרי, לא ממקום של 'רק שמישהו כבר ייקח אותי', אלא בתחושה שיש לי המון מה לתת.",
  },
  {
    name: "אלירן",
    quote: "עמית נתן לי מרחב לקבל החלטות קשות על אנשים, על כסף ועל עתיד מבלי לקחת ממני את ההחלטה עצמה. השיחות והעומק עזרו לי לקבל החלטות מורכבות בביטחון. הרגשתי שיש לידי מישהו שרואה גם את הפרויקט וגם אותי כאדם, ויודע מתי לדחוף ומתי פשוט לשבת ולהקשיב.",
  },
  {
    name: "סער",
    quote: "בכל שלב בדרך עמית תמיד ידע לשאול אותי שאלות שהפילו אצלי אסימונים. התהליך חיזק אצלי את תחושת הביטחון העצמי, חידד את מיומנויות התקשורת שלי, עזר לי להתחבר לעצמי ולהכיר את עצמי וחיזק אצלי את תחושת המסוגלות.",
  },
];

const HomePage = () => {
  const [openGallery, setOpenGallery] = useState<GalleryKey | null>(null);
  const selectedGallery = openGallery ? galleries[openGallery] : null;

  return (
    <div dir="rtl">
      <header>
        <nav className="wrap nav">
          <a href="#top" className="brand">עמית בירן</a>
          <a className="btn" target="_blank" rel="noreferrer" href={whatsappUrl("היי עמית, הגעתי דרך האתר ואשמח לשמוע עוד.")}>דברו איתי</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1 className="home-title">אימון וסדנאות לפיתוח מודעות, התפתחות, חיזוק משמעות פנימית וביטחון.</h1>
              <p className="lead">אני עוזר לאנשים להאמין ולקבל את עצמם, למצוא את הכיוון שלהם, ולפעול להגשמתו.</p>
            </div>
            <div className="hero-photo"><img src="/amit-portrait.png" alt="עמית בירן" /></div>
          </div>
        </section>

        <section className="section soft">
          <div className="wrap">
            <p className="kicker">סדנאות מינדפולנס / התפתחות</p>
            <h2>הסדנאות הקרובות</h2>
            <div className="cards">
              {workshops.map((workshop) => (
                <article className="card" key={workshop.id}>
                  <p className="meta">{workshop.date} · {workshop.time}</p>
                  <h3>{workshop.title}</h3>
                  <p>{workshop.intro}</p>
                  <Link className="link" to={`/workshops/${workshop.id}`}>לפרטים והרשמה ←</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap cards">
            <a className="card" target="_blank" rel="noreferrer" href={whatsappUrl("היי עמית, אשמח לשמוע על סדנה או הרצאה לקבוצה.")}>
              <p className="kicker">לקבוצות וארגונים</p><h3>סדנאות והרצאות</h3>
              <p>מפגש מותאם שמשלב מיינדפולנס, זן ותרגול מעשי.</p><span className="link">לשיחה בוואטסאפ ←</span>
            </a>
            <a className="card" target="_blank" rel="noreferrer" href={whatsappUrl("היי עמית, אשמח לשמוע על אימון וליווי אישי.")}>
              <p className="kicker">אחד על אחד</p><h3>אימון וליווי אישי</h3>
              <p>מפגשים אישיים בגובה העיניים, לפי הצורך וללא חבילות.</p><span className="link">לשיחה בוואטסאפ ←</span>
            </a>
          </div>
        </section>

        <section className="section soft">
          <div className="wrap">
            <p className="kicker">תמונות מהדרך</p>
            <div className="category-grid">
              {(Object.entries(galleries) as [GalleryKey, typeof galleries[GalleryKey]][]).map(([key, gallery]) => (
                <button className="category-card" key={key} onClick={() => setOpenGallery(key)}>
                  <img src={gallery.cover} alt={gallery.title} /><span>{gallery.title}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section coaching-section">
          <div className="wrap">
            <div className="coaching-intro">
              <img className="coaching-photo" src="/amit-portrait.png" alt="עמית בירן" />
              <div><h2 className="coaching-heading">אימון אישי</h2><a className="btn" target="_blank" rel="noreferrer" href={whatsappUrl("היי עמית, אשמח לשמוע על אימון וליווי אישי.")}>לשיחה בוואטסאפ</a></div>
            </div>
            <h2 className="testimonials-title">מה אנשים אומרים על התהליך איתי</h2>
            <div className="testimonials">
              {testimonials.map((testimonial) => (
                <article className="testimonial" key={testimonial.name}>
                  <h3>{testimonial.name}</h3><blockquote>“{testimonial.quote}”</blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer><div className="wrap">© {new Date().getFullYear()} עמית בירן</div></footer>

      {selectedGallery && (
        <div className="gallery-backdrop" role="presentation" onMouseDown={() => setOpenGallery(null)}>
          <div className="gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="dialog-head"><h2 id="gallery-title">{selectedGallery.title}</h2><button className="dialog-close" aria-label="סגירה" onClick={() => setOpenGallery(null)}>×</button></div>
            <div className="dialog-gallery">{selectedGallery.images.map((image) => <img src={image} alt={selectedGallery.title} key={image} />)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
