import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone, DollarSign, Clock, Users } from "lucide-react";

const MindfulnessWorkshop = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    document
      .querySelectorAll(".scroll-reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => window.open("https://wa.me/972526615611", "_blank");

  return (
    <div
      className="min-h-screen bg-background font-assistant text-right"
      dir="rtl"
    >
      {/* Hero */}
      <section className="hero-bg px-4 py-16 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/logo.png"
            alt="סדנת זן ומיינדפולנס"
            className="scroll-reveal mx-auto mb-6 w-28 h-28 md:w-36 md:h-36 object-contain"
          />
          <h1 className="scroll-reveal font-assistant text-4xl md:text-6xl font-semibold text-foreground mb-4 leading-tight">
            סדנת זן ומיינדפולנס
          </h1>
          <p
            className="scroll-reveal text-2xl md:text-3xl text-warm-muted font-medium mb-2"
            style={{ transitionDelay: "0.1s" }}
          >
            להתחבר לאינטואיציה
          </p>
          <p
            className="scroll-reveal text-lg md:text-xl text-warm-muted font-light mb-10"
            style={{ transitionDelay: "0.16s" }}
          >
            3 שעות של תרגול ולימוד מיינדפולנס וזן
          </p>

          <div className="max-w-2xl mx-auto text-right space-y-5">
            <p
              className="scroll-reveal text-lg text-warm-muted leading-relaxed"
              style={{ transitionDelay: "0.2s" }}
            >
              בסדנה נחקור את הדרך להתחבר לאינטואיציה, לקול הפנימי שמאפשר לנו
              לזהות מה חשוב לנו, מה מדליק אותנו ולאן אנחנו רוצים ללכת.
            </p>
            <p
              className="scroll-reveal text-lg font-semibold text-foreground leading-relaxed"
              style={{ transitionDelay: "0.28s" }}
            >
              מקור לחיים עם יותר משמעות, אומץ ועוצמה.
            </p>
          </div>

          <div
            className="scroll-reveal mt-10 flex flex-col items-center gap-2"
            style={{ transitionDelay: "0.36s" }}
          >
            <p className="text-lg font-medium text-foreground">
              יום רביעי | 23.9.2026 | 19:00–22:00
            </p>
            <p className="text-lg font-medium text-foreground">
              נס ציונה | קבוצה קטנה ואינטימית
            </p>
            <p className="text-xl font-bold text-foreground">מחיר: 250 ₪</p>
          </div>

          <div
            className="scroll-reveal mt-8"
            style={{ transitionDelay: "0.44s" }}
          >
            <Button className="btn-pulse px-10 py-3 text-lg" onClick={openWhatsApp}>
              להרשמה לסדנה
            </Button>
          </div>
        </div>
      </section>

      {/* Sometimes We Just Stop Listening */}
      <section className="px-4 py-20 bg-warm-muted/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-semibold text-center mb-10">
            לפעמים אנחנו פשוט מפסיקים להקשיב
          </h2>

          <div className="space-y-4 mb-6">
            {[
              "כולנו חיים עם פחדים, תסכולים, עומס ומטענים.",
              "ובתוך כל הרעש הזה, חלקנו כבר שכחנו מה באמת מדליק אותנו.",
              "לפעמים דווקא עולה משהו.",
            ].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted leading-relaxed"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="space-y-1 mb-6">
            {["רעיון שמסקרן אותי.", "משהו שאני רוצה לעשות.", "כיוון שמרגיש לי נכון."].map(
              (text, i) => (
                <p
                  key={i}
                  className="scroll-reveal text-lg text-warm-muted leading-relaxed"
                  style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
                >
                  {text}
                </p>
              )
            )}
          </div>

          <p
            className="scroll-reveal text-lg text-warm-muted leading-relaxed mb-2"
            style={{ transitionDelay: "0.55s" }}
          >
            ואז מהר מאוד מגיעים הקולות:
          </p>
          <div className="space-y-1 mb-6">
            {[
              "“זה לא יעבוד”",
              "“אף אחד אחר לא יתעניין בזה”",
              "“זה לא הזמן”",
              "“מה יחשבו עליי?”",
            ].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted italic leading-relaxed"
                style={{ transitionDelay: `${0.62 + i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <p
            className="scroll-reveal text-lg text-warm-muted leading-relaxed mb-2"
            style={{ transitionDelay: "1s" }}
          >
            אבל יש שם גם קול אחר. שקט יותר.
          </p>
          <div className="space-y-1 mb-6">
            {["“זה מעניין אותי.”", "“זה מרגש אותי.”"].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted italic leading-relaxed"
                style={{ transitionDelay: `${1.08 + i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="space-y-4 mb-6">
            {[
              "אבל עם הזמן הוא מקבל פחות ופחות מקום.",
              "לעיתים הוא כל כך שקט שאנחנו מרגישים מנותקים מהעשייה שלנו.",
            ].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted leading-relaxed"
                style={{ transitionDelay: `${1.3 + i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
          </div>

          <p
            className="scroll-reveal text-xl font-bold text-foreground text-center"
            style={{ transitionDelay: "1.5s" }}
          >
            זה לא חייב להיות ככה.
          </p>
        </div>
      </section>

      {/* What Will We Do */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-semibold text-center mb-10">
            אז מה נעשה בסדנה?
          </h2>
          <div className="space-y-4 mb-8">
            {[
              "במשך שלוש שעות נשתמש בתרגולים מעולמות המיינדפולנס והזן כדי ליצור קצת שקט בתוך הרעש ולחקור את הקול הפנימי שלנו.",
              "נתרגל כלים שעוזרים לזהות ביקורת עצמית, מחשבות מגבילות, פחדים ותפקידים שאנחנו מחזיקים על עצמנו, ולרגע להניח אותם בצד.",
              "ומתוך המרחב הזה נחקור:",
            ].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted leading-relaxed"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
          </div>
          <ul className="space-y-3">
            {[
              "מה מדליק אותי?",
              "מה מושך אותי?",
              "מה מרגיש לי חשוב?",
              "ואיך האינטואיציה שלי בכלל מרגישה?",
            ].map((item, i) => (
              <li
                key={i}
                className="scroll-reveal flex items-start gap-3 text-lg font-semibold text-foreground"
                style={{ transitionDelay: `${0.3 + i * 0.09}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-warm-muted/50 shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Should You Take Away */}
      <section className="px-4 py-20 bg-warm-muted/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-semibold text-center mb-10">
            מה אני רוצה שתיקחו מהמפגש?
          </h2>
          <div className="space-y-4">
            {[
              "כולנו מכירים דברים שאנחנו מסוגלים ללכת בהם לאיבוד מתוך עניין, סקרנות או תשוקה.",
              "מה היה קורה אם היינו נותנים לרגעים האלה קצת יותר מקום?",
              "המטרה היא לא לצאת מהסדנה עם “הייעוד שלי בחיים”.",
            ].map((text, i) => (
              <p
                key={i}
                className="scroll-reveal text-lg text-warm-muted leading-relaxed"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {text}
              </p>
            ))}
            <p
              className="scroll-reveal text-lg font-semibold text-foreground leading-relaxed"
              style={{ transitionDelay: "0.3s" }}
            >
              אלא לצאת עם משהו קונקרטי שאתם מזהים כ“זה מדליק אותי”, היכרות
              טובה יותר עם האינטואיציה שלכם, עם איך שהיא מרגישה בגוף, וקצת יותר
              אומץ לתת לה מקום.
            </p>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-semibold text-center mb-10">
            למי הסדנה מתאימה?
          </h2>
          <ul className="space-y-3 mb-8">
            {[
              "למי שמרגיש שחוק או קצת מנותק מהעשייה שלו.",
              "למי שרוצה לחזק את תחושת הכיוון והמשמעות בחיים.",
              "למי שיש דברים שמעניינים או מושכים אותו, אבל מוצא את עצמו מכבה אותם מהר.",
              "ולמי שפשוט רוצה לעצור לכמה שעות, להוריד קצת רעש ולבדוק מה קורה בפנים.",
            ].map((item, i) => (
              <li
                key={i}
                className="scroll-reveal flex items-start gap-3 text-lg text-warm-muted"
                style={{ transitionDelay: `${i * 0.09}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-warm-muted/50 shrink-0 mt-2.5" />
                {item}
              </li>
            ))}
          </ul>
          <div className="space-y-2 text-center">
            <p
              className="scroll-reveal text-lg font-semibold text-foreground leading-relaxed"
              style={{ transitionDelay: "0.4s" }}
            >
              אין צורך בניסיון קודם במיינדפולנס או במדיטציה.
            </p>
            <p
              className="scroll-reveal text-lg text-warm-muted leading-relaxed"
              style={{ transitionDelay: "0.48s" }}
            >
              לא נחקור טראומות ילדות, לא נחפור בעבר ולא נעסוק במיסטיקה.
            </p>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="px-4 py-20 bg-warm-muted/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-semibold text-center mb-4">
            מי אני?
          </h2>
          <p className="scroll-reveal text-xl font-bold text-foreground text-center mb-8">
            עמית בירן
          </p>
          <Card className="scroll-reveal border-r-2 border-l-0 border-t-0 border-b-0 border-warm-muted/25 rounded-none shadow-none bg-transparent pr-6">
            <CardContent className="p-0">
              <div className="text-lg leading-relaxed text-warm-muted space-y-5">
                {[
                  "מורה מוסמך לדהרמה בדרך הזן ומנחה מוסמך למדיטציה ומיינדפולנס.",
                  "מתרגל מיינדפולנס ותנועה כבר קרוב לעשרים שנה.",
                  "בשנת 2023 הבנתי שיש בי רצון עמוק לחלוק את הכלים האלה עם אנשים נוספים.",
                  "אני מגיע מעולם ההייטק, ולכן אני מכיר היטב את הקצב, הלחץ והנטייה לחפש פתרונות בעוד עשייה ובעוד תוכן. עוד ניתוח, עוד מחשבה.",
                  "עם השנים גיליתי שדווקא כשאנחנו מעזים לעצור ולהתבונן, משהו מתחיל להתבהר.",
                  "הגישה שלי פרקטית, בגובה העיניים ואינטראקטיבית. המטרה היא לא לדבר על רעיונות יפים, אלא לתרגל, לחקור ולראות מה באמת עובד עבורנו בחיים וביחסים עם הסובבים אותנו.",
                  "אני לא מאמין שיש לי את התשובות בשבילכם.",
                  "אני מאמין שהתשובות כבר נמצאות אצלכם.",
                  "לפעמים כל מה שחסר הוא מרחב בטוח לעצור, להקשיב ולפגוש אותן.",
                ].map((text, i) => (
                  <p
                    key={i}
                    className="scroll-reveal"
                    style={{ transitionDelay: `${i * 0.09}s` }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Session Details */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="scroll-reveal section-title font-assistant text-3xl font-bold text-center mb-12">
            פרטים והרשמה
          </h2>
          <Card className="scroll-reveal border-warm-border shadow-sm">
            <CardContent className="p-8">
              <div className="space-y-7">
                {[
                  {
                    icon: <MapPin className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "📍 מיקום",
                    content: <p className="text-warm-muted">רחוב הבנים 21, נס ציונה</p>,
                  },
                  {
                    icon: <Calendar className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "📅 תאריך",
                    content: <p className="text-warm-muted">יום רביעי | 23.9.2026</p>,
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "🕖 משך הסדנה",
                    content: <p className="text-warm-muted">3 שעות | 19:00–22:00</p>,
                  },
                  {
                    icon: <Users className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "👥 קבוצה",
                    content: (
                      <p className="text-warm-muted">
                        קבוצה קטנה ואינטימית. מספר המקומות מוגבל כדי לשמור על
                        קבוצה קטנה ואפשרות לעבודה אישית.
                      </p>
                    ),
                  },
                  {
                    icon: <DollarSign className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "💰 מחיר",
                    content: <p className="text-warm-muted font-semibold">250 ₪ למשתתף</p>,
                  },
                  {
                    icon: <Phone className="w-5 h-5 text-warm-muted mt-0.5 shrink-0" />,
                    label: "📩 הרשמה",
                    content: (
                      <>
                        <p className="text-warm-muted">
                          ההרשמה מתבצעת באמצעות תשלום מראש ב־Bit.
                        </p>
                        <p className="text-warm-muted font-medium mt-2">📱 052-661-5611</p>
                        <p className="text-warm-muted mt-2">
                          שלחו לי הודעה בוואטסאפ ואשמח לענות על כל שאלה.
                        </p>
                      </>
                    ),
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="scroll-reveal flex items-start gap-4"
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {row.icon}
                    <div>
                      <h3 className="font-bold mb-1">{row.label}</h3>
                      {row.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-warm-border text-center">
                <img
                  src="/logo.png"
                  alt="סדנת זן ומיינדפולנס"
                  className="scroll-reveal mx-auto mb-6 w-20 h-20 object-contain"
                />
                <Button className="btn-pulse px-10 py-3 text-lg" onClick={openWhatsApp}>
                  אני רוצה להירשם
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MindfulnessWorkshop;
