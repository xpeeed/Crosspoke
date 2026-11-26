export type Mode = 'test' | 'release';
export type Phase = 'question' | 'hint1' | 'hint2' | 'answer' | 'settled';
export interface Question {
    id: string;
    categoryId: string;
    category: string;
    subcategory: string;
    question: string;
    unit: string;
    answerValue: number;
    hint1: string;
    hint2: string;
    source: {
        name: string;
        url: string;
        checkedOn: string;
    };
    referenceDate: string | null;
    revision: number;
    qualityStatus: 'draft' | 'source_checked' | 'approved' | 'retired';
    hintReviewStatus: string;
    playtestStatus: string;
    questionContext: string | null;
    answerExplanation: string;
    additionalSources: string[];
}
export interface Dataset {
    schemaVersion: string;
    datasetVersion: string;
    language: string;
    releaseReady: boolean;
    categories: {
        id: string;
        name: string;
        targetCount: number;
    }[];
    questions: Question[];
}
export interface History {
    [id: string]: {
        shownCount: number;
        lastShownAt: number;
    };
}
export declare const CATEGORIES: string[];
export declare function importDataset(raw: unknown, mode: Mode): Dataset;
export declare function eligible(d: Dataset, mode: Mode): Question[];
export type Selection = {
    kind: 'selected';
    question: Question;
} | {
    kind: 'repeat_confirmation';
} | {
    kind: 'empty';
};
export declare function selectQuestion(d: Dataset, mode: Mode, history: History, seen: string[], blocked: string[], random: () => number, allowRepeat?: boolean): Selection;
export declare function questionView(q: Question, phase: Phase): {
    answerValue?: number | undefined;
    answerExplanation?: string | undefined;
    source?: {
        name: string;
        url: string;
        checkedOn: string;
    } | undefined;
    additionalSources?: string[] | undefined;
    hint2?: string | undefined;
    hint1?: string | undefined;
    id: string;
    category: string;
    question: string;
    unit: string;
    context: string | null;
};
