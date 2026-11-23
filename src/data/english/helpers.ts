import type { Difficulty, EnglishFormat, EnglishQuestionInput, EnglishSubtopicId, EnglishTopic, IllustrationId, OptionIndex, Options } from '../../types/quiz'

/** s = câu điền từ, d = hội thoại 2 lượt lời, n = biển báo / tin nhắn */
type Fmt = 's' | 'd' | 'n'
const FORMAT: Record<Fmt, EnglishFormat> = { s: 'sentence', d: 'dialogue', n: 'notice' }

export interface Extra {
  /** nội dung biển báo / tin nhắn (bắt buộc với format 'n') */
  p?: string
  /** câu bẫy phân biệt các thì */
  trap?: true
  /** hình minh họa */
  ill?: IllustrationId
}

/**
 * Tạo hàm soạn câu cho một chủ điểm. Cách dùng: đáp án ĐÚNG viết đầu tiên trong `opts`;
 * hàm tự xếp đáp án đúng luân phiên vào A, B, C, D (12 câu → mỗi vị trí 3 lần).
 * Khi làm bài, thứ tự đáp án còn được xáo ngẫu nhiên thêm một lần nữa.
 */
export function section(topic: EnglishTopic, subtopic: EnglishSubtopicId) {
  let n = 0
  return (
    diff: Difficulty,
    fmt: Fmt,
    question: string,
    opts: [string, string, string, string],
    vi: [clue: string, rule: string],
    en: [clue: string, rule: string],
    extra: Extra = {},
  ): EnglishQuestionInput => {
    const pos = (n % 4) as OptionIndex
    n++
    const [correct, ...wrong] = opts
    const options = [...wrong]
    options.splice(pos, 0, correct)
    const q: EnglishQuestionInput = {
      id: `${subtopic}-${String(n).padStart(2, '0')}`,
      topic,
      subtopic,
      difficulty: diff,
      format: FORMAT[fmt],
      question_en: question,
      options_en: options as Options,
      correctIndex: pos,
      explanation_vi: `🔎 Dấu hiệu: ${vi[0]}\n📘 Quy tắc: ${vi[1]}`,
      explanation_en: `🔎 Clue: ${en[0]}\n📘 Rule: ${en[1]}`,
    }
    if (extra.p) q.passage_en = extra.p
    if (extra.trap) q.trap = true
    if (extra.ill) q.illustrationId = extra.ill
    return q
  }
}
