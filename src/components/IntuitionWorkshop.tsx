import React from "react";
import { whatsappUrl, type Workshop } from '../content/siteContent';
import './IntuitionWorkshop.css';

const pains = [
  '״זה לא בשבילי.״',
  '״מה יחשבו עליי?״',
  '״ואם אני אכשל?״',
  '״אני לא מספיק טוב בשביל זה.״',
  '״זה לא הזמן.״',
  '״עדיף להישאר עם מה שאני מכיר.״',
];

export default function IntuitionWorkshop({ workshop }: { workshop: Workshop }) {
  const registration = whatsappUrl(`היי עמית, אשמח לשמוע על סדנת ${workshop.shortTitle} בתאריך ${workshop.date}.`);
  const button = <a className="iw-button" href={registration} target="_blank" rel="noreferrer">להרשמה לסדנה</a>;
  return <main className="intuition-page" dir="rtl">
    <section className="iw-hero"><div className="iw-wide iw-center">
      <img className="iw-logo" src="/logo.png" alt="סדנת זן ומיינדפולנס" />
      <h1>סדנת זן ומיינדפולנס</h1>
      <p className="iw-subtitle">להתחבר לאינטואיציה</p>
      <p className="iw-description">3 שעות של תרגול ולימוד מיינדפולנס וזן</p>
      <p className="iw-promise">להקשיב למה שחשוב לי, ולמצוא את האומץ לתת לו מקום.</p>
      <div className="iw-meta"><p>{workshop.date} | {workshop.time}</p><p>נס ציונה | קבוצה קטנה ואינטימית</p><p>מחיר: {workshop.price}</p></div>
      {button}
    </div></section>

    <section className="iw-section iw-soft"><div className="iw-wide">
      <h2>לאילו קולות אנחנו נותנים מקום?</h2>
      <p className="iw-opening">לפעמים עולה בנו רצון, רעיון או כיוון שמרגש אותנו. ואז מגיעים הקולות:</p>
      <ul className="iw-pains">{pains.map(pain => <li key={pain}>{pain}</li>)}</ul>
      <div className="iw-callout"><p>האם אנחנו נותנים מקום רק לקולות של הפחד?</p><p>או שיש מקום גם לשאול:<br />מה באמת מדליק אותי? מה חשוב לי?</p></div>
      <div className="iw-narrow iw-possibility"><h3>אפשר לפגוש את עצמנו אחרת</h3><p>אפשר לתת מקום לאינטואיציה שלנו, לקול הזה שאומר: ״זה מעניין אותי״, ״זה מדליק אותי״.</p><p>אבל חלקנו כבר למדנו להתעלם ממנו.</p></div>
    </div></section>

    <section className="iw-section"><div className="iw-narrow"><h2>אז מה נעשה בסדנה?</h2><p>נשלב מדיטציה, נשימה, תנועה קשובה, תרגול בזוגות ושיח. נחקור ריקות דרך תרגול של ״לא־יודע״, ונניח לרגע תפקידים, הגדרות ודעות שאנחנו מחזיקים על עצמנו.</p><ul className="iw-points">{['מה באמת מניע אותי — ומה מדליק בי עניין?', 'אילו קולות מצמצמים את מה שאני מרשה לעצמי לרצות?', 'איך מרגישה ההקשבה לקול הפנימי שלי?', 'מה חשוב לי, ואיך אני נותן לזה מקום בחיים?'].map(item => <li key={item}>{item}</li>)}</ul></div></section>

    <section className="iw-section iw-soft"><div className="iw-narrow"><h2>מה אני רוצה שתיקחו מהמפגש?</h2><ul className="iw-points">{['כלים פשוטים ליצירת מרחב מול מחשבות וביקורת עצמית.', 'היכרות קרובה יותר עם מה שמסקרן ומניע אתכם.', 'יותר חופש לפגוש את עצמכם מעבר להגדרות המוכרות.', 'צעד קטן שנותן מקום למשהו שחשוב לכם.'].map(item => <li key={item}>{item}</li>)}</ul><p className="iw-emphasis">לא חייבים לצאת עם תשובה גדולה על הייעוד בחיים. אפשר להתחיל ב״זה חשוב לי״ — ובקצת יותר אומץ להקשיב לזה.</p></div></section>

    <section className="iw-section"><div className="iw-narrow"><h2>למי הסדנה מתאימה?</h2><ul className="iw-points">{['למי שמרגיש קצת מנותק מהעשייה שלו ורוצה לפגוש מחדש עניין ומשמעות.', 'למי שנמצא בצומת או רוצה לבדוק כיוון שמושך אותו.', 'למי שמזהה שהוא מכבה רצונות ורעיונות לפני שנתן להם הזדמנות.', 'ולמי שרוצה לעצור לכמה שעות, לתרגל ולהקשיב למה שקורה בפנים.'].map(item => <li key={item}>{item}</li>)}</ul><p className="iw-center iw-emphasis">אין צורך בניסיון קודם במיינדפולנס או במדיטציה.</p></div></section>

    <section className="iw-section iw-soft"><div className="iw-narrow"><h2>מי אני?</h2><p className="iw-center iw-emphasis">עמית בירן</p><img className="iw-portrait" src="/amit-portrait.png" alt="עמית בירן" loading="lazy" /><div className="iw-bio"><p>מורה מוסמך לדהרמה בדרך הזן ומנחה מוסמך למדיטציה ומיינדפולנס.</p><p>אני מגיע מעולם ההייטק, ומכיר את הקצב, הלחץ והנטייה לחפש תשובות בעוד עשייה ובעוד מחשבה. עם השנים גיליתי שדווקא כשאנחנו עוצרים ומתבוננים, משהו מתחיל להתבהר.</p><p>הגישה שלי פרקטית, בגובה העיניים ואינטראקטיבית. נתרגל, נחקור ונראה מה עובד עבורנו בחיים וביחסים.</p><p>אני מאמין שיש בכם הרבה מה לגלות. לפעמים כל מה שחסר הוא מרחב לעצור ולהקשיב.</p></div></div></section>

    <section className="iw-section"><div className="iw-narrow"><h2>פרטים והרשמה</h2><div className="iw-details"><dl><div><dt>📍 מיקום</dt><dd>{workshop.location}</dd></div><div><dt>📅 תאריך</dt><dd>{workshop.date}</dd></div><div><dt>🕖 משך הסדנה</dt><dd>3 שעות | {workshop.time}</dd></div><div><dt>👥 קבוצה</dt><dd>קבוצה קטנה ואינטימית. מספר המקומות מוגבל כדי לאפשר עבודה אישית.</dd></div><div><dt>₪ מחיר</dt><dd>{workshop.price} למשתתף</dd></div><div><dt>📩 הרשמה</dt><dd>תשלום מראש ב־Bit. שלחו לי הודעה בוואטסאפ ואשמח לענות על כל שאלה.<br /><span dir="ltr">052-661-5611</span></dd></div></dl><div className="iw-details-cta"><img src="/logo.png" alt="" />{button}</div></div></div></section>
  </main>;
}
