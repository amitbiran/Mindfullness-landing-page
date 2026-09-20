import { Link } from "react-router-dom";
import { whatsappUrl, type Workshop } from "../content/siteContent";

const MindfulnessWorkshop = ({ workshop }: { workshop: Workshop }) => {
  const registrationUrl = whatsappUrl(`היי עמית, אשמח להירשם לסדנת ${workshop.shortTitle} בתאריך ${workshop.date}.`);

  return (
    <div dir="rtl">
      <header><nav className="wrap nav"><Link to="/">← לעמוד הראשי</Link><a className="btn" target="_blank" rel="noreferrer" href={registrationUrl}>הרשמה</a></nav></header>
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div><p className="kicker">סדנת זן ומיינדפולנס</p><h1>{workshop.shortTitle}</h1><p className="lead">{workshop.intro}</p><p className="meta">{workshop.date} · {workshop.time} · {workshop.location} · {workshop.price}</p><a className="btn" target="_blank" rel="noreferrer" href={registrationUrl}>אני רוצה להירשם</a></div>
            <div className="logo"><img src="/logo.png" alt="הלוגו של עמית בירן" /></div>
          </div>
        </section>
        <section className="section"><div className="wrap workshop-content"><div><p className="kicker">במפגש</p><h2>מה נעשה יחד?</h2><ul className="points">{workshop.points.map((point) => <li key={point}>{point}</li>)}</ul><strong>אין צורך בניסיון קודם במדיטציה או במיינדפולנס.</strong></div></div></section>
        <section className="section soft"><div className="wrap about"><img className="photo round" src="/amit-portrait.png" alt="עמית בירן" /><div><p className="kicker">מי מנחה?</p><h2>עמית בירן</h2><p className="lead">מורה מוסמך לדהרמה בדרך הזן ומנחה מוסמך למדיטציה ומיינדפולנס. מתרגל מעל עשור. אני מגיע מעולם ההייטק ומכיר היטב את הלחצים ואת האתגר שבשילוב מיינדפולנס בחיי היום יום.</p></div></div></section>
        <section className="section center"><div className="wrap"><h2>רוצים להצטרף?</h2><p className="lead join-details">{workshop.date} · {workshop.time}<br />{workshop.location}<br /><strong>מחיר: {workshop.price}</strong></p><a className="btn" target="_blank" rel="noreferrer" href={registrationUrl}>הרשמה בוואטסאפ</a></div></section>
      </main>
    </div>
  );
};

export default MindfulnessWorkshop;
