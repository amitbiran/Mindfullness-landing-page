# האתר של עמית בירן

אתר React שנבנה עם Vite ומוכן לשמירה ב-GitHub ולפרסום ב-Netlify.

## הרצה מקומית

```bash
npm install
npm run dev
```

## בניית גרסת פרסום

```bash
npm run build
```

הקבצים המוכנים לפרסום ייווצרו בתיקייה `dist`.

## פרסום ב-Netlify מתוך GitHub

1. מעלים את תוכן התיקייה למאגר GitHub.
2. ב-Netlify בוחרים Add new site ואז Import an existing project.
3. מחברים את המאגר. Netlify יקרא אוטומטית את `netlify.toml`.
4. פקודת הבנייה היא `npm run build` ותיקיית הפרסום היא `dist`.
