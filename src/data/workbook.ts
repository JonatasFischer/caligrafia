export type PracticeGroup = {
  id: string;
  models: string;
  words: string[];
  sentences: string[];
};

export type DayPlan = {
  id: string;
  model: string;
  words: string[];
  sentence: string;
};

export type WeekPlan = {
  id: string;
  number: number;
  days: DayPlan[];
};

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
      {
        id: "day1",
        model: "Aa 123",
        words: ["Haus", "Schule", "Heft", "Buch", "heute"],
        sentence: "Heute ist ein guter Tag.",
      },
      {
        id: "day2",
        model: "| - / o o",
        words: ["Linie", "leicht", "langsam", "ruhig"],
        sentence: "Ich schreibe langsam.",
      },
      {
        id: "day3",
        model: "a e i b d g p",
        words: ["Ball", "Hund", "gehen", "Papa", "Tag"],
        sentence: "Meine Buchstaben stehen auf der Linie.",
      },
      {
        id: "day4",
        model: "ich gehe zur schule",
        words: ["ich", "bin", "neun", "Jahre", "alt"],
        sentence: "Ich bin neun Jahre alt.",
      },
      {
        id: "day5",
        model: "l t i h b d",
        words: ["la", "le", "li", "lo", "lu"],
        sentence: "Ich starte oben.",
      },
      {
        id: "day6",
        model: "Ich kann",
        words: ["lesbar", "langsam", "Linie", "Stift"],
        sentence: "Ich kann lesbarer schreiben, wenn ich langsam arbeite.",
      },
    ],
  },
  {
    id: "week2",
    number: 2,
    days: [
      {
        id: "day1",
        model: "c o a d g q",
        words: ["da", "Tag", "oder", "ganz", "gut"],
        sentence: "Der Tag ist gut.",
      },
      {
        id: "day2",
        model: "i l t f j",
        words: ["ist", "mit", "oft", "jetzt", "Stift"],
        sentence: "Der Stift ist rot.",
      },
      {
        id: "day3",
        model: "n m h r u",
        words: ["und", "nur", "mein", "Hund", "ruhig"],
        sentence: "Mein Hund ist ruhig.",
      },
      {
        id: "day4",
        model: "e s z",
        words: ["es", "sein", "lesen", "Zeit", "Satz"],
        sentence: "Ich lese einen Satz.",
      },
      {
        id: "day5",
        model: "b p k v w x y",
        words: ["bei", "Papa", "was", "Weg", "Kind"],
        sentence: "Ich schreibe viel besser.",
      },
      {
        id: "day6",
        model: "a o b d p q n m",
        words: ["a/o", "b/d", "p/q", "n/m", "u/v"],
        sentence: "Diese Buchstaben sind klar.",
      },
    ],
  },
  {
    id: "week3",
    number: 3,
    days: [
      {
        id: "day1",
        model: "I L T F E H",
        words: ["Ich", "Lisa", "Tag", "Fisch", "Haus"],
        sentence: "Ich wohne in Bremen.",
      },
      {
        id: "day2",
        model: "O C G Q D",
        words: ["Oma", "Clara", "Garten", "Quelle", "Dorf"],
        sentence: "Oma geht in den Garten.",
      },
      {
        id: "day3",
        model: "A V W X Y K Z",
        words: ["Auto", "Vater", "Wasser", "Kind", "Zeit"],
        sentence: "Das Kind geht den Weg.",
      },
      {
        id: "day4",
        model: "B P R S M N",
        words: ["Bremen", "Papa", "Rose", "Schule", "Mutter"],
        sentence: "Meine Schule ist in Bremen.",
      },
      {
        id: "day5",
        model: "0 1 2 3 4 5 6 7 8 9",
        words: ["48", "27", "75", "100", "903"],
        sentence: "Das Ergebnis ist 75.",
      },
      {
        id: "day6",
        model: "ä ö ü Ä Ö Ü ß",
        words: ["Mädchen", "schön", "für", "größer", "Straße"],
        sentence: "Die Straße ist lang.",
      },
    ],
  },
  {
    id: "week4",
    number: 4,
    days: [
      {
        id: "day1",
        model: "der die das",
        words: ["der", "die", "das", "ein", "eine", "und", "oder", "aber"],
        sentence: "Der Hund ist da.",
      },
      {
        id: "day2",
        model: "ich du er sie wir",
        words: ["ich", "du", "er", "sie", "wir", "mein", "dein"],
        sentence: "Ich schreibe langsam.",
      },
      {
        id: "day3",
        model: "bin bist ist sind",
        words: ["bin", "bist", "ist", "sind", "hat", "haben", "kann"],
        sentence: "Ich kann sauber schreiben.",
      },
      {
        id: "day4",
        model: "Schule Heft Buch",
        words: ["Schule", "Heft", "Buch", "Stift", "Tafel", "Aufgabe"],
        sentence: "Die Aufgabe steht im Heft.",
      },
      {
        id: "day5",
        model: "heute morgen gestern",
        words: ["heute", "morgen", "gestern", "Montag", "Woche"],
        sentence: "Heute übe ich Schreiben.",
      },
      {
        id: "day6",
        model: "Wort Satz Text",
        words: ["Antwort", "Satz", "Text", "Linie", "Pause"],
        sentence: "Dieses Wort muss ich verbessern.",
      },
    ],
  },
  {
    id: "week5",
    number: 5,
    days: [
      {
        id: "day1",
        model: "Heute ist Montag",
        words: ["Heute", "Montag", "Heft", "Tisch"],
        sentence: "Ich arbeite bis der Timer klingelt.",
      },
      {
        id: "day2",
        model: "Die Antwort ist",
        words: ["Antwort", "denke", "zuerst", "dann"],
        sentence: "Die Antwort ist klar.",
      },
      {
        id: "day3",
        model: "Ich rechne zuerst",
        words: ["rechne", "addiere", "prüfe", "Ergebnis"],
        sentence: "Ich rechne zuerst die Zehner.",
      },
      {
        id: "day4",
        model: "Bremen Wasser Hund",
        words: ["Baum", "Wasser", "Bremen", "Hund", "Weser"],
        sentence: "Bremen liegt an der Weser.",
      },
      {
        id: "day5",
        model: "Ich achte auf die Linie",
        words: ["langsam", "Linie", "Wörter", "Platz"],
        sentence: "Zwischen den Wörtern lasse ich Platz.",
      },
      {
        id: "day6",
        model: "Ich kontrolliere",
        words: ["lesbar", "ordentlich", "Antwort", "Revision"],
        sentence: "Ich bin nicht fertig, bevor ich kontrolliert habe.",
      },
    ],
  },
  {
    id: "week6",
    number: 6,
    days: [
      {
        id: "day1",
        model: "Ich kontrolliere",
        words: ["Schrift", "kontrollieren", "Wörter", "fertig"],
        sentence: "Ich prüfe meine Wörter, bevor ich fertig bin.",
      },
      {
        id: "day2",
        model: "Lücke lassen",
        words: ["Tempo", "Wort", "Satz", "Lücke"],
        sentence: "Wenn ich ein Wort verliere, lasse ich Platz.",
      },
      {
        id: "day3",
        model: "Warum ist Schrift wichtig",
        words: ["lesbar", "wichtig", "Lehrerin", "Antwort"],
        sentence:
          "Lesbare Schrift ist wichtig, weil andere Menschen meinen Text verstehen.",
      },
      {
        id: "day4",
        model: "Das Ergebnis ist",
        words: ["Zehner", "addiere", "prüfe", "Ergebnis"],
        sentence: "Dann addiere ich die Zehner.",
      },
      {
        id: "day5",
        model: "Ich bleibe ruhig",
        words: ["ruhig", "Pause", "Text", "Zahl"],
        sentence: "Ich bleibe ruhig und kontrolliere meine Schrift.",
      },
      {
        id: "day6",
        model: "Ich habe gelernt",
        words: ["gelernt", "langsamer", "lesbarer", "Timer"],
        sentence: "Ich habe gelernt, langsamer und lesbarer zu schreiben.",
      },
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

export const ratingCriteria = [
  "form",
  "line",
  "size",
  "spacing",
  "pressure",
  "speed",
  "review",
  "patience",
];
