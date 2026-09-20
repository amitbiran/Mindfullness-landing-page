export const whatsappNumber = "972526615611";
export const whatsappUrl = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const sharedDetails = {
  time: "19:30–22:30",
  location: "בבית של דנה, רחוב הבנים 21, נס ציונה",
  price: "200 ₪",
};

export const workshops = [
  {
    ...sharedDetails,
    id: "inner-cleaning",
    title: "סדנת ניקיון פנימי",
    shortTitle: "ניקיון פנימי",
    date: "21.10.2026",
    intro: "שלוש שעות של עצירה, תרגול והתבוננות, כדי לפנות מעט מהרעש וליצור מרחב נקי ובהיר יותר בפנים.",
    points: ["נזהה מה מעמיס ומעסיק אותנו כרגע", "נתרגל כלים מעולמות המיינדפולנס והזן", "ניצור מרחב שמאפשר לראות ולבחור בצורה בהירה יותר"],
  },
  {
    ...sharedDetails,
    id: "intuition",
    title: "סדנת חיבור לאינטואיציה",
    shortTitle: "חיבור לאינטואיציה",
    date: "22.11.2026",
    intro: "שלוש שעות של תרגול ולימוד מיינדפולנס וזן, כדי להנמיך את הרעש ולהקשיב לקול הפנימי שלנו.",
    points: ["נזהה ביקורת עצמית ומחשבות שמגבילות אותנו", "נחקור מה מסקרן, מושך ומדליק אותנו", "נכיר טוב יותר את האופן שבו האינטואיציה מורגשת בגוף"],
  },
] as const;

export type Workshop = (typeof workshops)[number];
