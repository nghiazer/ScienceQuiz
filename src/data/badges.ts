import type { BadgeDef, Subject, Topic } from '../types/quiz'
import { SUBJECT_TOPICS } from './topics'

const SUBJECT_PLAYED = (subject: Subject) => (p: Parameters<BadgeDef['check']>[0]) =>
  SUBJECT_TOPICS[subject].some((t) => p.topicStats[t].total > 0)

const TOPIC_MASTER = (t: Topic) => (p: Parameters<BadgeDef['check']>[0]) => {
  const s = p.topicStats[t]
  return s.total >= 5 && s.correct / s.total >= 0.8
}

export const BADGES: BadgeDef[] = [
  {
    id: 'first-quiz', emoji: '🚀', subject: 'science',
    name_vi: 'Phi hành gia nhí', name_en: 'Little Astronaut',
    desc_vi: 'Hoàn thành bài Khoa học đầu tiên', desc_en: 'Finish your first science quiz',
    check: SUBJECT_PLAYED('science'),
  },
  {
    id: 'first-english-quiz', emoji: '📖', subject: 'english',
    name_vi: 'Học trò nhí', name_en: 'Little Learner',
    desc_vi: 'Hoàn thành bài Tiếng Anh đầu tiên', desc_en: 'Finish your first English quiz',
    check: SUBJECT_PLAYED('english'),
  },
  {
    id: 'stars-10', emoji: '⭐',
    name_vi: '10 ngôi sao', name_en: '10 Stars',
    desc_vi: 'Đạt 10 sao', desc_en: 'Collect 10 stars',
    check: (p) => p.totalStars >= 10,
  },
  {
    id: 'stars-50', emoji: '🌟',
    name_vi: '50 ngôi sao', name_en: '50 Stars',
    desc_vi: 'Đạt 50 sao', desc_en: 'Collect 50 stars',
    check: (p) => p.totalStars >= 50,
  },
  {
    id: 'perfect', emoji: '💯',
    name_vi: 'Điểm tuyệt đối', name_en: 'Perfect Score',
    desc_vi: 'Đúng 100% một bài', desc_en: 'Get 100% on a quiz',
    check: (p) => p.perfectCount >= 1,
  },
  {
    id: 'streak-3', emoji: '🔥',
    name_vi: 'Chăm chỉ 3 ngày', name_en: '3-Day Streak',
    desc_vi: 'Học 3 ngày liên tiếp', desc_en: 'Learn 3 days in a row',
    check: (p) => p.streak >= 3,
  },
  {
    id: 'streak-7', emoji: '🏆',
    name_vi: 'Chăm chỉ 7 ngày', name_en: '7-Day Streak',
    desc_vi: 'Học 7 ngày liên tiếp', desc_en: 'Learn 7 days in a row',
    check: (p) => p.streak >= 7,
  },
  {
    id: 'mock-done', subject: 'science', emoji: '🎓',
    name_vi: 'Thí sinh thi thử', name_en: 'Mock Test Contestant',
    desc_vi: 'Hoàn thành bài thi thử', desc_en: 'Finish a mock test',
    check: (p) => p.mockCompleted >= 1,
  },
  {
    id: 'master-living', subject: 'science', emoji: '🌱',
    name_vi: 'Bậc thầy Sinh học', name_en: 'Living Things Master',
    desc_vi: 'Đúng từ 80% ở mảng Sinh học (ít nhất 5 câu)', desc_en: '80%+ correct in Living Things (5+ questions)',
    check: TOPIC_MASTER('living'),
  },
  {
    id: 'master-physical', subject: 'science', emoji: '🧲',
    name_vi: 'Bậc thầy Vật lý', name_en: 'Physical Science Master',
    desc_vi: 'Đúng từ 80% ở mảng Vật lý (ít nhất 5 câu)', desc_en: '80%+ correct in Physical Science (5+ questions)',
    check: TOPIC_MASTER('physical'),
  },
  {
    id: 'master-earth', subject: 'science', emoji: '🌍',
    name_vi: 'Bậc thầy Trái đất', name_en: 'Earth & Space Master',
    desc_vi: 'Đúng từ 80% ở mảng Trái đất (ít nhất 5 câu)', desc_en: '80%+ correct in Earth & Space (5+ questions)',
    check: TOPIC_MASTER('earth'),
  },
  {
    id: 'master-inquiry', subject: 'science', emoji: '🔬',
    name_vi: 'Bậc thầy Thực nghiệm', name_en: 'Inquiry Master',
    desc_vi: 'Đúng từ 80% ở mảng Thực nghiệm (ít nhất 5 câu)', desc_en: '80%+ correct in Scientific Inquiry (5+ questions)',
    check: TOPIC_MASTER('inquiry'),
  },
  {
    id: 'english-mock-done', subject: 'english', emoji: '🇬🇧',
    name_vi: 'Thí sinh Cambridge', name_en: 'Cambridge Contestant',
    desc_vi: 'Hoàn thành bài thi thử Tiếng Anh', desc_en: 'Finish an English mock test',
    check: (p) => p.englishMockCompleted >= 1,
  },
  {
    id: 'master-present-simple', subject: 'english', emoji: '🔁',
    name_vi: 'Bậc thầy Hiện tại đơn', name_en: 'Present Simple Master',
    desc_vi: 'Đúng từ 80% ở Hiện tại đơn (ít nhất 5 câu)', desc_en: '80%+ correct in Present Simple (5+ questions)',
    check: TOPIC_MASTER('present-simple'),
  },
  {
    id: 'master-present-continuous', subject: 'english', emoji: '🏃',
    name_vi: 'Bậc thầy Hiện tại tiếp diễn', name_en: 'Present Continuous Master',
    desc_vi: 'Đúng từ 80% ở Hiện tại tiếp diễn (ít nhất 5 câu)', desc_en: '80%+ correct in Present Continuous (5+ questions)',
    check: TOPIC_MASTER('present-continuous'),
  },
  {
    id: 'master-past-simple', subject: 'english', emoji: '🕰️',
    name_vi: 'Bậc thầy Quá khứ đơn', name_en: 'Past Simple Master',
    desc_vi: 'Đúng từ 80% ở Quá khứ đơn (ít nhất 5 câu)', desc_en: '80%+ correct in Past Simple (5+ questions)',
    check: TOPIC_MASTER('past-simple'),
  },
]

/** Huy hiệu hiển thị cho một môn: các huy hiệu dùng chung và huy hiệu riêng của môn đó. */
export const badgesFor = (subject: Subject): BadgeDef[] => BADGES.filter((b) => !b.subject || b.subject === subject)
