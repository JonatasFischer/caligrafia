export type PracticeGroup = {
  id: string;
  models: string;
  words: string[];
  sentences: string[];
};

export type ActivityKind =
  | "setup"
  | "guidedPractice"
  | "wordPractice"
  | "sentencePractice"
  | "review"
  | "assessment";

export type SheetKind =
  | "dailyOverview"
  | "guidedPractice"
  | "wordPractice"
  | "sentencePractice"
  | "dailyAssessment"
  | "weeklyReview";

export type ActivityPlan = {
  kind: ActivityKind;
  minutes: number;
  sheet: SheetKind;
};

export type DailyAssessmentPlan = {
  criteria: string[];
  adultReadOptions: string[];
};

export type DayPlan = {
  id: string;
  code: string;
  globalDay: number;
  dayNumber: number;
  model: string;
  words: string[];
  sentence: string;
  activities: ActivityPlan[];
  requiredSheets: SheetKind[];
  assessment: DailyAssessmentPlan;
};

export type WeekPlan = {
  id: string;
  number: number;
  days: DayPlan[];
};

const defaultCriteria = [
  "form",
  "line",
  "size",
  "spacing",
  "pressure",
  "speed",
  "review",
  "patience",
];

const defaultAdultReadOptions = ["yes", "partial", "no"];

const defaultActivities: ActivityPlan[] = [
  { kind: "setup", minutes: 5, sheet: "dailyOverview" },
  { kind: "guidedPractice", minutes: 15, sheet: "guidedPractice" },
  { kind: "wordPractice", minutes: 15, sheet: "wordPractice" },
  { kind: "sentencePractice", minutes: 10, sheet: "sentencePractice" },
  { kind: "review", minutes: 5, sheet: "dailyAssessment" },
  { kind: "assessment", minutes: 5, sheet: "dailyAssessment" },
];

const defaultRequiredSheets: SheetKind[] = [
  "dailyOverview",
  "guidedPractice",
  "wordPractice",
  "sentencePractice",
  "dailyAssessment",
];

function code(weekNumber: number, dayNumber: number) {
  return `W${String(weekNumber).padStart(2, "0")}-D${String(dayNumber).padStart(2, "0")}`;
}

function day(
  weekNumber: number,
  dayNumber: number,
  model: string,
  words: string[],
  sentence: string,
): DayPlan {
  return {
    id: `day${dayNumber}`,
    code: code(weekNumber, dayNumber),
    globalDay: (weekNumber - 1) * 6 + dayNumber,
    dayNumber,
    model,
    words,
    sentence,
    activities: defaultActivities,
    requiredSheets: defaultRequiredSheets,
    assessment: {
      criteria: defaultCriteria,
      adultReadOptions: defaultAdultReadOptions,
    },
  };
}

export const practiceGroups: PracticeGroup[] = [
  {
    id: "round",
    models: "c o a d g q",
    words: ["da", "Tag", "oder", "ganz", "gut", "doch", "Auto", "Oma"],
    sentences: ["Oma hat ein Auto.", "Der Tag ist gut."],
  },
  {
    id: "vertical",
    models: "i l t f j",
    words: ["ist", "mit", "oft", "fit", "jetzt", "Tafel", "Linie", "Stift"],
    sentences: ["Der Stift ist rot.", "Jetzt arbeite ich langsam."],
  },
  {
    id: "bridges",
    models: "n m h r u",
    words: ["und", "nur", "mein", "Hund", "Mutter", "Haus", "haben", "ruhig"],
    sentences: ["Mein Hund ist ruhig.", "Ich habe ein Heft."],
  },
  {
    id: "curves",
    models: "e s z",
    words: ["es", "sein", "lesen", "Zeit", "Ziel", "Satz", "sitzen", "zeigen"],
    sentences: ["Ich lese einen Satz.", "Mein Ziel ist lesbar schreiben."],
  },
  {
    id: "diagonals",
    models: "b p k v w x y",
    words: ["bei", "Papa", "kommen", "was", "viel", "Weg", "Kind", "Yoga"],
    sentences: ["Papa kommt bald.", "Ich schreibe viel besser."],
  },
  {
    id: "uppercaseStraight",
    models: "I L T F E H",
    words: ["Ich", "Lisa", "Tag", "Fisch", "Eis", "Haus"],
    sentences: ["Ich wohne in Bremen.", "Meine Schule ist in Bremen."],
  },
  {
    id: "uppercaseRound",
    models: "O C G Q D",
    words: ["Oma", "Clara", "Garten", "Quelle", "Dorf"],
    sentences: ["Oma geht in den Garten.", "Das Dorf ist ruhig."],
  },
  {
    id: "numbersGerman",
    models: "0 1 2 3 4 5 6 7 8 9 ä ö ü ß",
    words: [
      "Mädchen",
      "schön",
      "für",
      "größer",
      "Fuß",
      "Straße",
      "über",
      "müde",
    ],
    sentences: ["Das Mädchen liest.", "Die Straße ist lang."],
  },
];

export const weeks: WeekPlan[] = [
  {
    id: "week1",
    number: 1,
    days: [
      day(
        1,
        1,
        "Aa 123",
        ["Haus", "Schule", "Heft", "Buch", "heute"],
        "Heute ist ein guter Tag.",
      ),
      day(
        1,
        2,
        "| - / o o",
        ["Linie", "leicht", "langsam", "ruhig"],
        "Ich schreibe langsam.",
      ),
      day(
        1,
        3,
        "a e i b d g p",
        ["Ball", "Hund", "gehen", "Papa", "Tag"],
        "Meine Buchstaben stehen auf der Linie.",
      ),
      day(
        1,
        4,
        "ich gehe zur schule",
        ["ich", "bin", "neun", "Jahre", "alt"],
        "Ich bin neun Jahre alt.",
      ),
      day(
        1,
        5,
        "l t i h b d",
        ["la", "le", "li", "lo", "lu"],
        "Ich starte oben.",
      ),
      day(
        1,
        6,
        "Ich kann",
        ["lesbar", "langsam", "Linie", "Stift"],
        "Ich kann lesbarer schreiben, wenn ich langsam arbeite.",
      ),
    ],
  },
  {
    id: "week2",
    number: 2,
    days: [
      day(
        2,
        1,
        "c o a d g q",
        ["da", "Tag", "oder", "ganz", "gut"],
        "Der Tag ist gut.",
      ),
      day(
        2,
        2,
        "i l t f j",
        ["ist", "mit", "oft", "jetzt", "Stift"],
        "Der Stift ist rot.",
      ),
      day(
        2,
        3,
        "n m h r u",
        ["und", "nur", "mein", "Hund", "ruhig"],
        "Mein Hund ist ruhig.",
      ),
      day(
        2,
        4,
        "e s z",
        ["es", "sein", "lesen", "Zeit", "Satz"],
        "Ich lese einen Satz.",
      ),
      day(
        2,
        5,
        "b p k v w x y",
        ["bei", "Papa", "was", "Weg", "Kind"],
        "Ich schreibe viel besser.",
      ),
      day(
        2,
        6,
        "a o b d p q n m",
        ["a/o", "b/d", "p/q", "n/m", "u/v"],
        "Diese Buchstaben sind klar.",
      ),
    ],
  },
  {
    id: "week3",
    number: 3,
    days: [
      day(
        3,
        1,
        "I L T F E H",
        ["Ich", "Lisa", "Tag", "Fisch", "Haus"],
        "Ich wohne in Bremen.",
      ),
      day(
        3,
        2,
        "O C G Q D",
        ["Oma", "Clara", "Garten", "Quelle", "Dorf"],
        "Oma geht in den Garten.",
      ),
      day(
        3,
        3,
        "A V W X Y K Z",
        ["Auto", "Vater", "Wasser", "Kind", "Zeit"],
        "Das Kind geht den Weg.",
      ),
      day(
        3,
        4,
        "B P R S M N",
        ["Bremen", "Papa", "Rose", "Schule", "Mutter"],
        "Meine Schule ist in Bremen.",
      ),
      day(
        3,
        5,
        "0 1 2 3 4 5 6 7 8 9",
        ["48", "27", "75", "100", "903"],
        "Das Ergebnis ist 75.",
      ),
      day(
        3,
        6,
        "ä ö ü Ä Ö Ü ß",
        ["Mädchen", "schön", "für", "größer", "Straße"],
        "Die Straße ist lang.",
      ),
    ],
  },
  {
    id: "week4",
    number: 4,
    days: [
      day(
        4,
        1,
        "der die das",
        ["der", "die", "das", "ein", "eine", "und", "oder", "aber"],
        "Der Hund ist da.",
      ),
      day(
        4,
        2,
        "ich du er sie wir",
        ["ich", "du", "er", "sie", "wir", "mein", "dein"],
        "Ich schreibe langsam.",
      ),
      day(
        4,
        3,
        "bin bist ist sind",
        ["bin", "bist", "ist", "sind", "hat", "haben", "kann"],
        "Ich kann sauber schreiben.",
      ),
      day(
        4,
        4,
        "Schule Heft Buch",
        ["Schule", "Heft", "Buch", "Stift", "Tafel", "Aufgabe"],
        "Die Aufgabe steht im Heft.",
      ),
      day(
        4,
        5,
        "heute morgen gestern",
        ["heute", "morgen", "gestern", "Montag", "Woche"],
        "Heute übe ich Schreiben.",
      ),
      day(
        4,
        6,
        "Wort Satz Text",
        ["Antwort", "Satz", "Text", "Linie", "Pause"],
        "Dieses Wort muss ich verbessern.",
      ),
    ],
  },
  {
    id: "week5",
    number: 5,
    days: [
      day(
        5,
        1,
        "Heute ist Montag",
        ["Heute", "Montag", "Heft", "Tisch"],
        "Ich arbeite bis der Timer klingelt.",
      ),
      day(
        5,
        2,
        "Die Antwort ist",
        ["Antwort", "denke", "zuerst", "dann"],
        "Die Antwort ist klar.",
      ),
      day(
        5,
        3,
        "Ich rechne zuerst",
        ["rechne", "addiere", "prüfe", "Ergebnis"],
        "Ich rechne zuerst die Zehner.",
      ),
      day(
        5,
        4,
        "Bremen Wasser Hund",
        ["Baum", "Wasser", "Bremen", "Hund", "Weser"],
        "Bremen liegt an der Weser.",
      ),
      day(
        5,
        5,
        "Ich achte auf die Linie",
        ["langsam", "Linie", "Wörter", "Platz"],
        "Zwischen den Wörtern lasse ich Platz.",
      ),
      day(
        5,
        6,
        "Ich kontrolliere",
        ["lesbar", "ordentlich", "Antwort", "Revision"],
        "Ich bin nicht fertig, bevor ich kontrolliert habe.",
      ),
    ],
  },
  {
    id: "week6",
    number: 6,
    days: [
      day(
        6,
        1,
        "Ich kontrolliere",
        ["Schrift", "kontrollieren", "Wörter", "fertig"],
        "Ich prüfe meine Wörter, bevor ich fertig bin.",
      ),
      day(
        6,
        2,
        "Lücke lassen",
        ["Tempo", "Wort", "Satz", "Lücke"],
        "Wenn ich ein Wort verliere, lasse ich Platz.",
      ),
      day(
        6,
        3,
        "Warum ist Schrift wichtig",
        ["lesbar", "wichtig", "Lehrerin", "Antwort"],
        "Lesbare Schrift ist wichtig, weil andere Menschen meinen Text verstehen.",
      ),
      day(
        6,
        4,
        "Das Ergebnis ist",
        ["Zehner", "addiere", "prüfe", "Ergebnis"],
        "Dann addiere ich die Zehner.",
      ),
      day(
        6,
        5,
        "Ich bleibe ruhig",
        ["ruhig", "Pause", "Text", "Zahl"],
        "Ich bleibe ruhig und kontrolliere meine Schrift.",
      ),
      day(
        6,
        6,
        "Ich habe gelernt",
        ["gelernt", "langsamer", "lesbarer", "Timer"],
        "Ich habe gelernt, langsamer und lesbarer zu schreiben.",
      ),
    ],
  },
];

export const alphabet = {
  lower: "abcdefghijklmnopqrstuvwxyz".split(""),
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  extra: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "ä",
    "ö",
    "ü",
    "Ä",
    "Ö",
    "Ü",
    "ß",
  ],
};

export const ratingCriteria = defaultCriteria;
