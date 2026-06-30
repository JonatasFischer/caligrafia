import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  alphabet,
  practiceGroups,
  ratingCriteria,
  weeks,
  type DayPlan,
  type WeekPlan,
} from "../data/workbook";
import { CaligraphyGuide } from "./CaligraphyGuide";
import { Checklist } from "./Checklist";
import { Field } from "./Field";
import { PracticeBlock } from "./PracticeBlock";
import { RatingTable } from "./RatingTable";
import { WorkbookPage } from "./WorkbookPage";

type PageSpec = {
  key: string;
  title: string;
  kicker?: string;
  note?: string;
  body: ReactNode;
};

function textList(value: unknown): string[] {
  return Array.isArray(value) ? value.map(String) : [];
}

function textRows(value: unknown): string[][] {
  return Array.isArray(value)
    ? value.map((row) => (Array.isArray(row) ? row.map(String) : []))
    : [];
}

export function Workbook() {
  const { t } = useTranslation();
  const pages: PageSpec[] = [
    coverPage(t),
    parentGuidePage(t),
    routinePage(t),
    diagnosisPage(t),
    alphabetPage(t),
    ...practiceGroups.map((group) => ({
      key: `practice-${group.id}`,
      title: t(`practiceGroups.${group.id}.name`),
      kicker: t(`practiceGroups.${group.id}.focus`),
      note: t("notes.review"),
      body: <PracticeBlock group={group} />,
    })),
    ...weeks.flatMap((week) => [
      weekOverviewPage(t, week),
      ...week.days.map((day) => dayPracticePage(t, week, day)),
    ]),
    blankDailyPage(t),
    monotonyPage(t),
    deliveryChecklistPage(t),
    weeklyRubricPage(t),
    copyDictationPage(t),
    portfolioPage(t),
  ];

  return (
    <main className="workbook" aria-label={t("app.title")}>
      {pages.map((page, index) => (
        <WorkbookPage
          key={page.key}
          title={page.title}
          kicker={page.kicker}
          note={page.note}
          pageNumber={index + 1}
        >
          {page.body}
        </WorkbookPage>
      ))}
    </main>
  );
}

function coverPage(t: (key: string) => string): PageSpec {
  return {
    key: "cover",
    title: t("sections.coverTitle"),
    kicker: t("sections.coverKicker"),
    note: t("notes.cover"),
    body: (
      <div className="cover-layout">
        <div className="cover-model">Aa Bb Cc 123</div>
        <div className="form-card">
          <Field label={t("common.student")} />
          <Field label={t("common.period")} />
          <p>
            <strong>{t("common.goal")}:</strong> {t("sections.objective")}
          </p>
        </div>
      </div>
    ),
  };
}

function parentGuidePage(
  t: (key: string, options?: Record<string, unknown>) => unknown,
): PageSpec {
  return {
    key: "parent-guide",
    title: String(t("sections.parentGuide")),
    kicker: String(t("sections.howToUse")),
    note: String(t("notes.parent")),
    body: (
      <div className="two-column">
        <div className="info-card soft">
          <h3>{String(t("sections.coreRule"))}</h3>
          <p>{String(t("sections.coreRuleText"))}</p>
          <p>
            <strong>{String(t("sections.coreSentence"))}</strong>
          </p>
          <Checklist
            title={String(t("sections.blockSequence"))}
            items={textList(t("lists.blockSequence", { returnObjects: true }))}
          />
        </div>
        <div className="info-card warning">
          <h3>{String(t("sections.painWarning"))}</h3>
          <p>{String(t("sections.painWarningText"))}</p>
          <Checklist
            title={String(t("sections.goodReinforcement"))}
            items={textList(
              t("lists.goodReinforcement", { returnObjects: true }),
            )}
          />
          <Checklist
            title={String(t("sections.avoid"))}
            items={textList(t("lists.avoid", { returnObjects: true }))}
          />
        </div>
      </div>
    ),
  };
}

function routinePage(
  t: (key: string, options?: Record<string, unknown>) => unknown,
): PageSpec {
  const headers = textList(t("routine.headers", { returnObjects: true }));
  const rows = textRows(t("routine.rows", { returnObjects: true }));

  return {
    key: "routine",
    title: String(t("sections.dailyRoutine")),
    kicker: String(t("sections.dailyRoutineText")),
    note: String(t("notes.quality")),
    body: (
      <>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <Checklist
          title={String(t("sections.checklistBeforeBlock"))}
          items={textList(t("lists.beforeBlock", { returnObjects: true }))}
        />
      </>
    ),
  };
}

function diagnosisPage(t: (key: string) => string): PageSpec {
  return {
    key: "diagnosis",
    title: t("sections.diagnosis"),
    kicker: t("sections.diagnosisKicker"),
    note: t("notes.review"),
    body: (
      <>
        <div className="two-column compact-columns">
          <div>
            <Field label={t("common.student")} />
            <Field label={t("common.date")} />
          </div>
          <div>
            <Field label={t("common.timer")} />
            <Field label={t("common.observation")} />
          </div>
        </div>
        <h3>Schreibe 5 Sätze über deine Ferien.</h3>
        <CaligraphyGuide rows={7} compact />
        <h3>Heute ist ein guter Tag. Ich schreibe langsam und lesbar.</h3>
        <CaligraphyGuide rows={4} compact />
      </>
    ),
  };
}

function alphabetPage(t: (key: string) => string): PageSpec {
  return {
    key: "alphabet",
    title: t("sections.alphabet"),
    kicker: t("sections.alphabetKicker"),
    note: t("notes.quality"),
    body: (
      <>
        <h3>abcdefghijklmnopqrstuvwxyz</h3>
        <div className="letter-grid">
          {alphabet.lower.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <h3>ABCDEFGHIJKLMNOPQRSTUVWXYZ</h3>
        <div className="letter-grid">
          {alphabet.upper.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <h3>0-9 · ä ö ü Ä Ö Ü ß</h3>
        <div className="letter-grid">
          {alphabet.extra.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <CaligraphyGuide trace="Aa Bb Cc Dd Ee Ff" rows={4} />
      </>
    ),
  };
}

function weekOverviewPage(
  t: (key: string) => string,
  week: WeekPlan,
): PageSpec {
  return {
    key: `${week.id}-overview`,
    title: `${t("common.page")} ${week.number}: ${t(`weeks.${week.id}.title`)}`,
    kicker: t(`weeks.${week.id}.goal`),
    note: t(`weeks.${week.id}.metric`),
    body: (
      <>
        <div className="info-card soft">
          <strong>{t("sections.weeklyGoal")}:</strong>{" "}
          {t(`weeks.${week.id}.metric`)}
        </div>
        <table>
          <thead>
            <tr>
              <th>{t("common.date")}</th>
              <th>{t("sections.modelAndRepetition")}</th>
              <th>{t("common.words")}</th>
              <th>{t("sections.dailySentence")}</th>
            </tr>
          </thead>
          <tbody>
            {week.days.map((day) => (
              <tr key={`${week.id}-${day.id}`}>
                <td>{t(`days.${day.id}`)}</td>
                <td className="model-text">{day.model}</td>
                <td>{day.words.join(", ")}</td>
                <td>{day.sentence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  };
}

function dayPracticePage(
  t: (key: string) => string,
  week: WeekPlan,
  day: DayPlan,
): PageSpec {
  return {
    key: `${week.id}-${day.id}`,
    title: `${t(`days.${day.id}`)} · ${t(`weeks.${week.id}.title`)}`,
    kicker: day.model,
    note: t("notes.review"),
    body: (
      <>
        <div className="two-column compact-columns">
          <div className="info-card soft">
            <p>
              <strong>{t("common.timer")}:</strong> _____ min
            </p>
            <p>
              <strong>{t("common.breaks")}:</strong> _____
            </p>
          </div>
          <div className="info-card">
            <p>
              <strong>{t("common.words")}:</strong> {day.words.join(", ")}
            </p>
            <p>
              <strong>{t("sections.dailySentence")}:</strong> {day.sentence}
            </p>
          </div>
        </div>
        <h3>{t("sections.modelAndRepetition")}</h3>
        <CaligraphyGuide trace={day.model} rows={4} />
        <h3>{t("sections.dailyWords")}</h3>
        <CaligraphyGuide trace={day.words.join("   ")} rows={4} compact />
        <h3>{t("sections.dailySentence")}</h3>
        <p className="model-text">{day.sentence}</p>
        <CaligraphyGuide rows={3} compact />
        <RatingTable
          criteria={["form", "line", "spacing", "speed", "patience", "review"]}
        />
      </>
    ),
  };
}

function blankDailyPage(t: (key: string) => string): PageSpec {
  return {
    key: "blank-daily",
    title: t("sections.blankDailySheet"),
    kicker: t("sections.modelAndRepetition"),
    note: t("notes.review"),
    body: (
      <>
        <Field label={t("common.date")} />
        <Field label={t("common.goal")} />
        <CaligraphyGuide rows={10} />
        <RatingTable criteria={ratingCriteria} />
      </>
    ),
  };
}

function monotonyPage(t: (key: string) => string): PageSpec {
  return {
    key: "monotony",
    title: t("sections.monotonySheet"),
    kicker: t("notes.monotony"),
    note: t("notes.monotony"),
    body: (
      <>
        <Field label={t("sections.modelAndRepetition")} />
        <Field label={t("common.timer")} />
        <CaligraphyGuide rows={12} />
      </>
    ),
  };
}

function deliveryChecklistPage(
  t: (key: string, options?: Record<string, unknown>) => unknown,
): PageSpec {
  return {
    key: "delivery-checklist",
    title: String(t("sections.deliveryChecklist")),
    kicker: "Português · Deutsch",
    note: String(t("notes.review")),
    body: (
      <>
        <div className="two-column">
          <Checklist
            title="Português"
            items={textList(t("lists.deliveryPt", { returnObjects: true }))}
          />
          <Checklist
            title="Deutsch"
            items={textList(t("lists.deliveryDe", { returnObjects: true }))}
          />
        </div>
        <h3>{String(t("sections.modelAndRepetition"))}</h3>
        <CaligraphyGuide rows={8} compact />
      </>
    ),
  };
}

function weeklyRubricPage(t: (key: string) => string): PageSpec {
  return {
    key: "weekly-rubric",
    title: t("sections.weeklyRubric"),
    kicker: "0-3",
    note: t("notes.quality"),
    body: (
      <>
        <RatingTable criteria={ratingCriteria} />
        <Field label={t("common.observation")} />
        <Field label={t("sections.weeklyGoal")} />
      </>
    ),
  };
}

function copyDictationPage(t: (key: string) => string): PageSpec {
  return {
    key: "copy-dictation",
    title: `${t("sections.copyFromFar")} · ${t("sections.dictation")}`,
    kicker: "Bremen · Schule · Schrift",
    note: t("notes.review"),
    body: (
      <>
        <p className="model-text">
          Ich schreibe langsam. Ich achte auf die Linie. Zwischen den Wörtern
          lasse ich Platz.
        </p>
        <CaligraphyGuide rows={4} compact />
        <p className="model-text">
          Bremen ist eine Stadt an der Weser. In der Schule schreibe ich lesbar
          und ordentlich.
        </p>
        <CaligraphyGuide rows={4} compact />
        <p className="model-text">
          Haus · Schule · Heft · Buch · Tafel · heute · morgen · Bremen · Straße
        </p>
        <CaligraphyGuide rows={5} compact />
      </>
    ),
  };
}

function portfolioPage(t: (key: string) => string): PageSpec {
  return {
    key: "portfolio",
    title: `${t("sections.portfolio")} · ${t("sections.maintenance")}`,
    kicker: t("sections.schoolMessage"),
    note: t("notes.cover"),
    body: (
      <>
        <Field label="Meine beste Schrift diese Woche" />
        <Field label="Meine lesbarste Zeile" />
        <Field label="Was ich weiter trainiere" />
        <p className="model-text">
          Ich habe gelernt, langsamer und lesbarer zu schreiben. Ich kann auch
          langweilige Aufgaben schaffen, wenn ich ruhig bleibe und bis zum Timer
          arbeite.
        </p>
        <CaligraphyGuide rows={6} compact />
      </>
    ),
  };
}
