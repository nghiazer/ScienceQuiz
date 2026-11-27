import type { Difficulty, IllustrationId, MathQuestionInput, MathSubtopicId, MathTopic, OptionIndex, Options } from '../../types/quiz'

/** Một đáp án: chuỗi dùng chung cho cả hai ngôn ngữ (thường là số), hoặc cặp [vi, en]. */
export type Opt = string | [vi: string, en: string]

export interface MathExtra {
  /** hình minh họa */
  ill?: IllustrationId
}

const vi = (o: Opt) => (typeof o === 'string' ? o : o[0])
const en = (o: Opt) => (typeof o === 'string' ? o : o[1])

/**
 * Tạo hàm soạn câu Toán TIMO cho một chủ điểm. Cách dùng: đáp án ĐÚNG viết đầu tiên trong `opts`;
 * hàm tự xếp đáp án đúng luân phiên vào A, B, C, D (40 câu → mỗi vị trí 10 lần).
 * Khi làm bài, đáp án toàn số được xếp tăng dần, còn lại được xáo ngẫu nhiên.
 * Luôn viết số bằng chữ số (12, không viết "mười hai") để vi/en khớp nhau.
 */
export function mathSection(topic: MathTopic, subtopic: MathSubtopicId) {
  let n = 0
  return (
    diff: Difficulty,
    question: [vi: string, en: string],
    opts: [Opt, Opt, Opt, Opt],
    explainVi: [idea: string, solution: string],
    explainEn: [idea: string, solution: string],
    extra: MathExtra = {},
  ): MathQuestionInput => {
    const pos = (n % 4) as OptionIndex
    n++
    const [correct, ...wrong] = opts
    const ordered = [...wrong]
    ordered.splice(pos, 0, correct)
    const q: MathQuestionInput = {
      id: `${subtopic}-${String(n).padStart(2, '0')}`,
      topic,
      subtopic,
      difficulty: diff,
      question_vi: question[0],
      question_en: question[1],
      options_vi: ordered.map(vi) as Options,
      options_en: ordered.map(en) as Options,
      correctIndex: pos,
      explanation_vi: `🧠 Ý tưởng: ${explainVi[0]}\n✏️ Lời giải: ${explainVi[1]}`,
      explanation_en: `🧠 Idea: ${explainEn[0]}\n✏️ Solution: ${explainEn[1]}`,
    }
    if (extra.ill) q.illustrationId = extra.ill
    return q
  }
}
