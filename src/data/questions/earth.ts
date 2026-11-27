import type { ScienceQuestionInput } from '../../types/quiz'

export const EARTH_QUESTIONS: ScienceQuestionInput[] = [
  {
    id: 'ear-01', topic: 'earth', subtopic: 'shadows-time', difficulty: 'easy', illustrationId: 'sun-shadow',
    question_vi: 'Trong hình, Mặt Trời ở bên phải cái cây. Bóng của cây nằm ở phía nào?',
    question_en: 'In the picture, the Sun is on the right of the tree. Which side is the tree’s shadow on?',
    options_vi: ['Bên phải, gần Mặt Trời', 'Bên trái, xa Mặt Trời', 'Bên phải, xa Mặt Trời', 'Ngay trên ngọn cây'],
    options_en: ['On the right, near the Sun', 'On the left, away from the Sun', 'On the right, far from the Sun', 'Right on top of the tree'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Ánh sáng đi thẳng và bị cây chắn lại, nên phía sau cây không có nắng và tạo ra bóng.\n📘 Ghi nhớ: Bóng luôn nằm phía đối diện Mặt Trời, nên Mặt Trời bên phải thì bóng bên trái.',
    explanation_en:
      '💡 Why: Light travels in straight lines and the tree blocks it, so the area behind the tree gets no sunlight and forms a shadow.\n📘 Remember: A shadow falls opposite the Sun, so with the Sun on the right the shadow is on the left.',
  },
  {
    id: 'ear-02', topic: 'earth', subtopic: 'shadows-time', difficulty: 'medium',
    question_vi: 'Vào lúc nào trong ngày, bóng của một cái cây ngắn nhất?',
    question_en: 'At what time of day is a tree’s shadow the shortest?',
    options_vi: ['Ban đêm', 'Sáng sớm', 'Giữa trưa', 'Chiều muộn'],
    options_en: ['Night', 'Early morning', 'Midday (noon)', 'Late afternoon'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Giữa trưa Mặt Trời ở cao nhất, tia nắng chiếu gần như thẳng xuống nên bóng cây rất ngắn. Sáng sớm và chiều muộn Mặt Trời thấp nên bóng dài ra.\n📘 Ghi nhớ: Mặt Trời càng cao thì bóng càng ngắn.',
    explanation_en:
      '💡 Why: At midday the Sun is highest and its rays fall almost straight down, so the shadow is very short. In the early morning and late afternoon the Sun is low, so shadows are long.\n📘 Remember: The higher the Sun, the shorter the shadow.',
  },
  {
    id: 'ear-03', topic: 'earth', subtopic: 'moon', difficulty: 'easy', illustrationId: 'moon-phases',
    question_vi: 'Hình nào cho thấy Mặt Trăng tròn đầy?',
    question_en: 'Which picture shows a full Moon?',
    options_vi: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    options_en: ['Picture A', 'Picture B', 'Picture C', 'Picture D'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Ở hình C, cả mặt Trăng hướng về Trái Đất đều được Mặt Trời chiếu sáng nên ta thấy một vòng tròn sáng. Các hình khác chỉ sáng một phần hoặc gần như tối.\n📘 Ghi nhớ: Trăng tròn là lúc ta thấy trọn phần sáng.',
    explanation_en:
      '💡 Why: In picture C the whole side of the Moon facing Earth is lit by the Sun, so we see a bright full circle. The other pictures are only partly lit or almost dark.\n📘 Remember: A full Moon is when we see the whole lit side.',
  },
  {
    id: 'ear-04', topic: 'earth', subtopic: 'day-night', difficulty: 'medium',
    question_vi: 'Vì sao trên Trái Đất có ngày và đêm?',
    question_en: 'Why does Earth have day and night?',
    options_vi: [
      'Trái Đất tự quay quanh mình',
      'Mặt Trời đi vòng quanh Trái Đất',
      'Mặt Trăng che mất Mặt Trời',
      'Mây che kín bầu trời',
    ],
    options_en: [
      'Earth spins on its axis',
      'The Sun goes around Earth',
      'The Moon covers the Sun',
      'Clouds cover the sky',
    ],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất tự quay một vòng hết khoảng 24 giờ. Nơi quay về phía Mặt Trời có ban ngày, nơi quay ra xa có ban đêm.\n📘 Ghi nhớ: Ngày và đêm do Trái Đất tự quay, không phải do mây hay Mặt Trăng che.',
    explanation_en:
      '💡 Why: Earth spins once in about 24 hours. The side turned towards the Sun has day, and the side turned away has night.\n📘 Remember: Day and night come from Earth’s spin, not from clouds or the Moon.',
  },
  {
    id: 'ear-05', topic: 'earth', subtopic: 'sun', difficulty: 'easy',
    question_vi: 'Mặt Trời là gì?',
    question_en: 'What is the Sun?',
    options_vi: ['Một ngôi sao', 'Một đám mây', 'Một hành tinh', 'Một vệ tinh'],
    options_en: ['A star', 'A cloud', 'A planet', 'A moon'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trời tự phát ra ánh sáng và nhiệt như mọi ngôi sao. Nó trông to và sáng vì ở gần chúng ta nhất.\n📘 Ghi nhớ: Mặt Trời là ngôi sao gần Trái Đất nhất; hành tinh và vệ tinh không tự phát sáng.',
    explanation_en:
      '💡 Why: The Sun makes its own light and heat like every star. It looks big and bright because it is the closest star to us.\n📘 Remember: The Sun is the star nearest to Earth; planets and moons do not make their own light.',
  },
  {
    id: 'ear-06', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium',
    question_vi: 'Tuyết trên đỉnh núi gặp nắng ấm và tan thành nước. Quá trình đó gọi là gì?',
    question_en: 'Snow on a mountain top meets warm sunshine and turns into water. What is this process called?',
    options_vi: ['Đóng băng', 'Bốc hơi', 'Ngưng tụ', 'Nóng chảy'],
    options_en: ['Freezing', 'Evaporation', 'Condensation', 'Melting'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Băng và tuyết nhận nhiệt từ Mặt Trời nên chuyển từ thể rắn sang thể lỏng. Nước đó chảy xuống suối, sông rồi ra biển.\n📘 Ghi nhớ: Rắn thành lỏng là nóng chảy; lỏng thành rắn là đóng băng.',
    explanation_en:
      '💡 Why: Snow and ice take in heat from the Sun, so they change from solid to liquid. The water then runs down into streams and rivers and on to the sea.\n📘 Remember: Solid to liquid is melting; liquid to solid is freezing.',
  },
  {
    id: 'ear-07', topic: 'earth', subtopic: 'earth-shape', difficulty: 'easy',
    question_vi: 'Trái Đất có hình dạng giống vật nào nhất?',
    question_en: 'What shape is Earth most like?',
    options_vi: ['Hình hộp vuông', 'Hình nón', 'Quả bóng tròn', 'Cái đĩa phẳng'],
    options_en: ['A square box', 'A cone', 'A round ball', 'A flat plate'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Các nhà du hành nhìn từ vũ trụ thấy Trái Đất tròn như một quả bóng khổng lồ, không vuông cũng không phẳng.\n📘 Ghi nhớ: Trái Đất có hình cầu.',
    explanation_en:
      '💡 Why: Astronauts looking from space see Earth as a round ball, not a box and not a flat plate.\n📘 Remember: Earth is shaped like a sphere.',
  },
  {
    id: 'ear-08', topic: 'earth', subtopic: 'moon', difficulty: 'medium',
    question_vi: 'Vì sao ban đêm chúng ta nhìn thấy Mặt Trăng?',
    question_en: 'Why can we see the Moon at night?',
    options_vi: [
      'Mặt Trăng tự phát sáng như bóng đèn',
      'Mặt Trăng phản chiếu ánh Mặt Trời',
      'Mặt Trăng được đèn đường chiếu sáng',
      'Mặt Trăng là một ngôi sao nóng',
    ],
    options_en: [
      'The Moon makes its own light',
      'The Moon reflects sunlight',
      'Street lights shine on the Moon',
      'The Moon is a hot star',
    ],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng không tự phát sáng. Ánh sáng Mặt Trời chiếu vào Mặt Trăng rồi phản chiếu đến mắt ta, như đèn pin chiếu vào gương.\n📘 Ghi nhớ: Mặt Trăng chỉ phản chiếu ánh Mặt Trời; chỉ ngôi sao mới tự phát sáng.',
    explanation_en:
      '💡 Why: The Moon makes no light of its own. Sunlight hits the Moon and bounces to our eyes, like a torch beam bouncing off a mirror.\n📘 Remember: The Moon only reflects sunlight; only stars make their own light.',
  },
  {
    id: 'ear-10', topic: 'earth', subtopic: 'sun', difficulty: 'easy',
    question_vi: 'Vì sao ban ngày trời sáng?',
    question_en: 'Why is it bright during the day?',
    options_vi: ['Mặt Trời chiếu sáng Trái Đất', 'Mây tự phát ra ánh sáng', 'Đèn đường sáng khắp nơi', 'Mặt Trăng tự phát sáng'],
    options_en: ['The Sun shines on Earth', 'Clouds make their own light', 'Street lamps shine everywhere', 'The Moon makes its own light'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trời là nguồn sáng chính của Trái Đất. Khi nơi em đứng quay về phía Mặt Trời, ánh nắng chiếu tới nên trời sáng.\n📘 Ghi nhớ: Ban ngày sáng là nhờ Mặt Trời.',
    explanation_en:
      '💡 Why: The Sun is Earth’s main source of light. When your part of Earth faces the Sun, sunlight reaches you and it is bright.\n📘 Remember: Daylight comes from the Sun.',
  },
  {
    id: 'ear-11', topic: 'earth', subtopic: 'sun', difficulty: 'medium',
    question_vi: 'Vì sao không nên nhìn thẳng vào Mặt Trời?',
    question_en: 'Why should you never stare directly at the Sun?',
    options_vi: ['Mặt Trời không có ánh sáng', 'Ánh sáng quá mạnh làm hại mắt', 'Mặt Trời sẽ bay về phía em', 'Nhìn Mặt Trời làm em thấp đi'],
    options_en: ['The Sun has no light', 'Its strong light can hurt your eyes', 'The Sun will fly towards you', 'Looking at it makes you shorter'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Ánh sáng Mặt Trời rất mạnh, nhìn thẳng sẽ làm tổn thương mắt, kể cả khi lúc đó mắt chưa thấy đau.\n📘 Ghi nhớ: Không nhìn thẳng vào Mặt Trời; muốn quan sát phải dùng kính chuyên dụng.',
    explanation_en:
      '💡 Why: Sunlight is so strong that staring at it can damage your eyes, even if it does not hurt at the time.\n📘 Remember: Never stare at the Sun; use special protective glasses to watch it.',
  },
  {
    id: 'ear-12', topic: 'earth', subtopic: 'sun', difficulty: 'medium',
    question_vi: 'Mặt Trời mang lại điều gì cho cây xanh và cho chúng ta?',
    question_en: 'What does the Sun give to plants and to us?',
    options_vi: ['Đá và đất', 'Âm thanh', 'Ánh sáng và nhiệt', 'Mưa và gió mạnh'],
    options_en: ['Rocks and soil', 'Sound', 'Light and heat', 'Rain and strong wind'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Cây cần ánh sáng để làm ra thức ăn, còn nhiệt từ Mặt Trời giữ cho Trái Đất đủ ấm để sinh vật sống được.\n📘 Ghi nhớ: Mặt Trời cho Trái Đất ánh sáng và nhiệt.',
    explanation_en:
      '💡 Why: Plants need light to make their food, and heat from the Sun keeps Earth warm enough for living things.\n📘 Remember: The Sun gives Earth light and heat.',
  },
  {
    id: 'ear-13', topic: 'earth', subtopic: 'sun', difficulty: 'hard',
    question_vi: 'Ánh sáng từ Mặt Trời đến Trái Đất mất khoảng bao lâu?',
    question_en: 'About how long does sunlight take to reach Earth?',
    options_vi: ['Khoảng 1 giây', 'Khoảng 1 ngày', 'Khoảng 1 năm', 'Khoảng 8 phút'],
    options_en: ['About 1 second', 'About 1 day', 'About 1 year', 'About 8 minutes'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Ánh sáng đi rất nhanh nhưng Mặt Trời ở rất xa, nên ánh sáng vẫn mất khoảng 8 phút mới tới Trái Đất.\n📘 Ghi nhớ: Ánh nắng ta thấy lúc này đã rời Mặt Trời cách đây khoảng 8 phút.',
    explanation_en:
      '💡 Why: Light is very fast, but the Sun is very far away, so sunlight still needs about 8 minutes to reach Earth.\n📘 Remember: The sunshine you see now left the Sun about 8 minutes ago.',
  },
  {
    id: 'ear-14', topic: 'earth', subtopic: 'moon', difficulty: 'easy',
    question_vi: 'Trên Mặt Trăng có không khí để con người hít thở không?',
    question_en: 'Is there air on the Moon for people to breathe?',
    options_vi: ['Không, hầu như không có không khí', 'Có, không khí giống như trên Trái Đất', 'Có, nhưng chỉ vào ban đêm', 'Có, nhưng chỉ ở các miệng núi lửa'],
    options_en: ['No, there is almost no air', 'Yes, the air is just like on Earth', 'Yes, but only at night', 'Yes, but only inside craters'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng nhỏ nên lực hút yếu, không giữ được lớp không khí quanh mình. Vì vậy phi hành gia phải mang theo khí để thở.\n📘 Ghi nhớ: Trên Mặt Trăng hầu như không có không khí.',
    explanation_en:
      '💡 Why: The Moon is small, so its pull is weak and cannot hold a layer of air around it. That is why astronauts must carry air to breathe.\n📘 Remember: The Moon has almost no air.',
  },
  {
    id: 'ear-15', topic: 'earth', subtopic: 'moon', difficulty: 'medium', illustrationId: 'moon-phases',
    question_vi: 'Hình nào cho thấy lúc không nhìn thấy Mặt Trăng (trăng mới)?',
    question_en: 'Which picture shows the time when we cannot see the Moon (a new Moon)?',
    options_vi: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    options_en: ['Picture A', 'Picture B', 'Picture C', 'Picture D'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Lúc trăng mới, phần Mặt Trăng hướng về Trái Đất nằm trong bóng tối, nên ta gần như không thấy. Hình A là hình tối nhất.\n📘 Ghi nhớ: Trăng mới là khi ta không thấy phần sáng; lưỡi liềm thì đã có một chút sáng.',
    explanation_en:
      '💡 Why: At new Moon the side facing Earth is in darkness, so we can hardly see it. Picture A is the darkest one.\n📘 Remember: New Moon means no lit part is visible; a crescent already shows a little light.',
  },
  {
    id: 'ear-16', topic: 'earth', subtopic: 'moon', difficulty: 'medium',
    question_vi: 'Mặt Trăng mất khoảng bao lâu để quay một vòng quanh Trái Đất?',
    question_en: 'About how long does the Moon take to orbit Earth once?',
    options_vi: ['Khoảng 1 giờ', 'Khoảng 1 tháng', 'Khoảng 1 ngày', 'Khoảng 1 năm'],
    options_en: ['About 1 hour', 'About 1 month', 'About 1 day', 'About 1 year'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng đi hết một vòng quanh Trái Đất trong khoảng một tháng (gần 27 ngày). Các pha trăng lặp lại sau 29 đến 30 ngày.\n📘 Ghi nhớ: Một vòng của Mặt Trăng xấp xỉ một tháng.',
    explanation_en:
      '💡 Why: The Moon goes once round Earth in about a month (nearly 27 days). Its phases repeat after 29 to 30 days.\n📘 Remember: One trip of the Moon around Earth takes about a month.',
  },
  {
    id: 'ear-17', topic: 'earth', subtopic: 'moon', difficulty: 'hard', illustrationId: 'moon-phases',
    question_vi: 'Vì sao các pha của Mặt Trăng thay đổi theo thời gian?',
    question_en: 'Why do the Moon’s phases change over time?',
    options_vi: [
      'Vì bóng của Trái Đất che Mặt Trăng mỗi ngày',
      'Vì mây che một phần Mặt Trăng mỗi đêm',
      'Vì ta nhìn phần được chiếu sáng từ các góc khác nhau',
      'Vì Mặt Trăng tự đổi hình dạng mỗi đêm',
    ],
    options_en: [
      'Because Earth’s shadow covers the Moon every day',
      'Because clouds cover part of the Moon each night',
      'Because we see the lit part from different angles',
      'Because the Moon changes shape by itself each night',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng luôn có một nửa được Mặt Trời chiếu sáng. Khi nó đi quanh Trái Đất, ta nhìn phần sáng đó từ những góc khác nhau.\n📘 Ghi nhớ: Pha trăng đổi vì góc nhìn đổi, không phải vì mây hay bóng Trái Đất.',
    explanation_en:
      '💡 Why: Half of the Moon is always lit by the Sun. As the Moon travels round Earth, we look at that lit half from different angles.\n📘 Remember: Phases change because our viewing angle changes, not because of clouds or Earth’s shadow.',
  },
  {
    id: 'ear-18', topic: 'earth', subtopic: 'moon', difficulty: 'medium',
    question_vi: 'Mặt Trăng có thể nhìn thấy vào ban ngày không?',
    question_en: 'Can the Moon sometimes be seen during the day?',
    options_vi: ['Không bao giờ thấy được', 'Chỉ khi có nhật thực xảy ra', 'Chỉ khi trời đang có mưa', 'Có, đôi khi vẫn thấy được'],
    options_en: ['No, never at all', 'Only during a solar eclipse', 'Only when it is raining', 'Yes, sometimes it can be seen'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng vẫn ở trên trời ban ngày nhưng ánh nắng quá chói nên khó thấy. Sáng sớm hoặc chiều muộn trời dịu hơn nên dễ thấy.\n📘 Ghi nhớ: Có thể thấy Mặt Trăng cả ban ngày, không cần nhật thực.',
    explanation_en:
      '💡 Why: The Moon is still in the sky by day, but bright sunlight makes it hard to see. In the early morning or late afternoon the sky is softer, so it is easier to spot.\n📘 Remember: The Moon can be seen in daytime, no eclipse needed.',
  },
  {
    id: 'ear-19', topic: 'earth', subtopic: 'moon', difficulty: 'hard',
    question_vi: 'Vì sao ta luôn thấy cùng một mặt của Mặt Trăng từ Trái Đất?',
    question_en: 'Why do we always see the same side of the Moon from Earth?',
    options_vi: [
      'Vì nó tự quay một vòng mỗi lần đi quanh Trái Đất',
      'Vì Mặt Trăng chưa bao giờ tự quay quanh mình',
      'Vì Trái Đất giữ Mặt Trăng bằng một sợi dây',
      'Vì mặt kia của Mặt Trăng luôn bị mây che',
    ],
    options_en: [
      'Because it spins once each time it orbits Earth',
      'Because it has never spun on its own axis',
      'Because Earth holds it with a long rope',
      'Because clouds always cover the far side',
    ],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng tự quay một vòng trong đúng thời gian nó đi một vòng quanh Trái Đất, nên một mặt luôn hướng về phía ta.\n📘 Ghi nhớ: Ta không bao giờ thấy mặt xa của Mặt Trăng từ Trái Đất.',
    explanation_en:
      '💡 Why: The Moon spins once in exactly the time it takes to go once round Earth, so the same face always points towards us.\n📘 Remember: From Earth we never see the far side of the Moon.',
  },
  {
    id: 'ear-20', topic: 'earth', subtopic: 'moon', difficulty: 'hard',
    question_vi: 'Khi Mặt Trăng đi vào giữa Mặt Trời và Trái Đất, đôi khi ta có thể gặp hiện tượng gì?',
    question_en: 'When the Moon passes between the Sun and Earth, what can sometimes happen?',
    options_vi: ['Bình minh', 'Nhật thực', 'Mưa sao băng', 'Nguyệt thực'],
    options_en: ['Sunrise', 'A solar eclipse', 'A meteor shower', 'A lunar eclipse'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng chắn ánh Mặt Trời chiếu tới Trái Đất nên ta thấy nhật thực. Không phải lần nào cũng có vì Mặt Trăng thường lệch khỏi đường thẳng.\n📘 Ghi nhớ: Mặt Trăng ở giữa là nhật thực; Trái Đất ở giữa là nguyệt thực.',
    explanation_en:
      '💡 Why: The Moon blocks sunlight from reaching Earth, so we see a solar eclipse. It does not happen every time because the Moon is usually slightly off the line.\n📘 Remember: Moon in the middle is a solar eclipse; Earth in the middle is a lunar eclipse.',
  },
  {
    id: 'ear-21', topic: 'earth', subtopic: 'day-night', difficulty: 'easy', illustrationId: 'earth-rotation',
    question_vi: 'Khi bên em đang là giữa trưa, phía bên kia Trái Đất đang là lúc nào?',
    question_en: 'When it is midday where you are, what time is it on the opposite side of Earth?',
    options_vi: ['Nửa đêm', 'Giữa trưa', 'Buổi chiều', 'Buổi sáng'],
    options_en: ['Midnight', 'Midday', 'Afternoon', 'Morning'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất hình cầu nên Mặt Trời chỉ chiếu sáng một nửa. Khi bên em là giữa trưa thì nửa đối diện chìm trong bóng tối, đúng là nửa đêm.\n📘 Ghi nhớ: Hai phía đối nhau của Trái Đất có ngày và đêm ngược nhau.',
    explanation_en:
      '💡 Why: Earth is a sphere, so the Sun lights only half of it. When it is midday for you, the opposite half is in darkness, which is midnight.\n📘 Remember: Opposite sides of Earth have opposite day and night.',
  },
  {
    id: 'ear-22', topic: 'earth', subtopic: 'day-night', difficulty: 'easy',
    question_vi: 'Vì sao ta thấy Mặt Trời dường như mọc ở phía đông?',
    question_en: 'Why does the Sun seem to rise in the east?',
    options_vi: ['Vì Mặt Trời thật sự đi từ đông sang tây', 'Vì gió đẩy Mặt Trời', 'Vì mây kéo Mặt Trời', 'Vì Trái Đất tự quay từ tây sang đông'],
    options_en: ['Because the Sun really moves from east to west', 'Because wind pushes the Sun', 'Because clouds pull the Sun', 'Because Earth spins from west to east'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Trái Đất tự quay từ tây sang đông nên bầu trời có vẻ chuyển động ngược lại, Mặt Trời như mọc ở phía đông và lặn ở phía tây.\n📘 Ghi nhớ: Mặt Trời không thật sự đi quanh Trái Đất; đó là do Trái Đất quay.',
    explanation_en:
      '💡 Why: Earth spins from west to east, so the sky seems to move the other way and the Sun appears to rise in the east and set in the west.\n📘 Remember: The Sun does not really circle Earth; it is Earth that spins.',
  },
  {
    id: 'ear-23', topic: 'earth', subtopic: 'day-night', difficulty: 'easy',
    question_vi: 'Lúc Mặt Trời lặn ở phía tây vào cuối ngày được gọi là gì?',
    question_en: 'What do we call the end of the day when the Sun sets in the west?',
    options_vi: ['Hoàng hôn', 'Bình minh', 'Giữa trưa', 'Nửa đêm'],
    options_en: ['Sunset', 'Sunrise', 'Midday', 'Midnight'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất quay khiến nơi em đứng dần xa Mặt Trời, Mặt Trời thấp dần ở phía tây rồi lặn, trời tối dần.\n📘 Ghi nhớ: Hoàng hôn là lúc Mặt Trời lặn; bình minh là lúc Mặt Trời mọc.',
    explanation_en:
      '💡 Why: Earth’s spin carries your place away from the Sun, so the Sun sinks lower in the west and sets, and the sky grows dark.\n📘 Remember: Sunset is when the Sun goes down; sunrise is when it comes up.',
  },
  {
    id: 'ear-24', topic: 'earth', subtopic: 'day-night', difficulty: 'hard',
    question_vi: 'Nếu Trái Đất quay chậm đi rất nhiều, ngày và đêm sẽ thế nào?',
    question_en: 'If Earth spun much more slowly, what would happen to day and night?',
    options_vi: ['Ngày và đêm vẫn dài như bây giờ', 'Mỗi ngày và mỗi đêm dài hơn rất nhiều', 'Ngày và đêm ngắn đi còn vài phút', 'Chỉ còn ban ngày, không còn đêm'],
    options_en: ['Day and night stay as long as now', 'Each day and night lasts much longer', 'Day and night shrink to a few minutes', 'There is only day and no night'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Một ngày đêm là thời gian Trái Đất quay một vòng. Quay chậm đi thì một vòng lâu hơn nhiều, nên cả ngày lẫn đêm đều kéo dài hơn.\n📘 Ghi nhớ: Ngày đêm dài hay ngắn tùy Trái Đất quay nhanh hay chậm.',
    explanation_en:
      '💡 Why: One day and night is the time Earth takes to spin once. If it spun more slowly, one turn would take far longer, so both day and night would last longer.\n📘 Remember: The length of day and night depends on how fast Earth spins.',
  },
  {
    id: 'ear-25', topic: 'earth', subtopic: 'day-night', difficulty: 'medium', illustrationId: 'earth-rotation',
    question_vi: 'Khi em đang ngủ ban đêm, có người ở nơi khác trên Trái Đất đang ăn sáng. Vì sao?',
    question_en: 'While you sleep at night, someone elsewhere on Earth is eating breakfast. Why?',
    options_vi: [
      'Vì Trái Đất đứng yên không quay chút nào',
      'Vì họ sống ở ngay trên bề mặt Mặt Trời',
      'Vì Trái Đất tròn và quay nên mỗi nơi có giờ khác',
      'Vì những người đó thức dậy rất sớm hơn em',
    ],
    options_en: [
      'Because Earth stands still and does not spin',
      'Because they live on the surface of the Sun',
      'Because Earth is round and spins, so time differs',
      'Because those people wake up much earlier',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Trái Đất tròn và tự quay nên Mặt Trời chỉ chiếu sáng một nửa. Khi nơi em có đêm thì nơi khác đang là buổi sáng.\n📘 Ghi nhớ: Mỗi nơi trên Trái Đất có giờ khác nhau.',
    explanation_en:
      '💡 Why: Earth is round and spins, so the Sun lights only one half at a time. When it is night where you are, another place is having morning.\n📘 Remember: Different places on Earth have different times of day.',
  },
  {
    id: 'ear-26', topic: 'earth', subtopic: 'shadows-time', difficulty: 'easy', illustrationId: 'sun-shadow',
    question_vi: 'Buổi sáng, bóng của em nằm ở hướng nào so với Mặt Trời?',
    question_en: 'In the morning, which way does your shadow point compared with the Sun?',
    options_vi: ['Cùng phía với Mặt Trời', 'Ngay dưới chân em', 'Bóng nằm trên đầu em', 'Phía đối diện Mặt Trời'],
    options_en: ['On the same side as the Sun', 'Right under your feet', 'Above your head', 'On the side opposite the Sun'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Buổi sáng Mặt Trời ở phía đông, cơ thể em chắn ánh sáng nên bóng đổ ra phía đối diện, tức phía tây.\n📘 Ghi nhớ: Bóng luôn nằm phía đối diện Mặt Trời.',
    explanation_en:
      '💡 Why: In the morning the Sun is in the east and your body blocks its light, so the shadow falls on the opposite side, to the west.\n📘 Remember: A shadow always falls opposite the Sun.',
  },
  {
    id: 'ear-27', topic: 'earth', subtopic: 'shadows-time', difficulty: 'medium', illustrationId: 'sun-shadow',
    question_vi: 'Vào chiều muộn, bóng của cây dài hơn hay ngắn hơn so với lúc giữa trưa?',
    question_en: 'In the late afternoon, is a tree’s shadow longer or shorter than at midday?',
    options_vi: ['Dài hơn', 'Ngắn hơn', 'Bằng nhau', 'Biến mất'],
    options_en: ['Longer', 'Shorter', 'The same', 'Disappears'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Chiều muộn Mặt Trời xuống thấp, tia nắng chiếu xiên nên bóng kéo dài. Giữa trưa Mặt Trời cao nhất nên bóng ngắn nhất.\n📘 Ghi nhớ: Mặt Trời càng thấp, bóng càng dài.',
    explanation_en:
      '💡 Why: In the late afternoon the Sun is low and its rays slant, so shadows stretch out. At midday the Sun is highest and shadows are shortest.\n📘 Remember: The lower the Sun, the longer the shadow.',
  },
  {
    id: 'ear-28', topic: 'earth', subtopic: 'shadows-time', difficulty: 'medium',
    question_vi: 'Vì sao bóng của cây thay đổi độ dài và hướng trong ngày?',
    question_en: 'Why does a tree’s shadow change length and direction during the day?',
    options_vi: ['Vì gió thổi bóng đi chỗ khác', 'Vì Mặt Trời đổi vị trí trên trời', 'Vì cây lớn lên rất nhanh trong ngày', 'Vì mây di chuyển trên bầu trời'],
    options_en: ['Because wind blows the shadow around', 'Because the Sun changes position in the sky', 'Because the tree grows fast during the day', 'Because clouds move across the sky'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Cây đứng yên nhưng Mặt Trời di chuyển trên bầu trời, nên hướng và độ nghiêng của tia nắng thay đổi, kéo theo bóng.\n📘 Ghi nhớ: Bóng đổi theo vị trí của Mặt Trời.',
    explanation_en:
      '💡 Why: The tree stays still but the Sun moves across the sky, so the direction and slant of the sunlight change, and the shadow changes with them.\n📘 Remember: Shadows change as the Sun’s position changes.',
  },
  {
    id: 'ear-29', topic: 'earth', subtopic: 'shadows-time', difficulty: 'hard',
    question_vi: 'Một bạn đo bóng cây lúc 8 giờ sáng và lúc 12 giờ trưa. Bóng nào dài hơn và vì sao?',
    question_en: 'A child measures a tree’s shadow at 8 a.m. and at 12 noon. Which is longer, and why?',
    options_vi: [
      'Hai bóng dài bằng nhau',
      'Bóng lúc trưa dài hơn vì Mặt Trời cao',
      'Bóng lúc 8 giờ dài hơn vì Mặt Trời thấp',
      'Bóng lúc trưa dài hơn vì trời nóng',
    ],
    options_en: [
      'Both shadows are the same length',
      'The noon shadow is longer as the Sun is high',
      'The 8 a.m. shadow is longer as the Sun is low',
      'The noon shadow is longer as it is hot',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Lúc 8 giờ Mặt Trời còn thấp, tia nắng chiếu xiên nên bóng kéo dài. Lúc trưa Mặt Trời ở cao nên bóng ngắn lại.\n📘 Ghi nhớ: Mặt Trời thấp thì bóng dài, Mặt Trời cao thì bóng ngắn.',
    explanation_en:
      '💡 Why: At 8 a.m. the Sun is still low and its rays slant, so the shadow stretches out. At noon the Sun is high and the shadow shrinks.\n📘 Remember: A low Sun makes a long shadow; a high Sun makes a short one.',
  },
  {
    id: 'ear-30', topic: 'earth', subtopic: 'shadows-time', difficulty: 'medium',
    question_vi: 'Khi có mây che Mặt Trời, bóng của em sẽ thế nào?',
    question_en: 'When clouds cover the Sun, what happens to your shadow?',
    options_vi: ['Bóng to hơn nhiều', 'Bóng đổi sang màu khác', 'Bóng nhảy sang bên kia', 'Bóng mờ đi hoặc biến mất'],
    options_en: ['It becomes much bigger', 'It changes colour', 'It jumps to the other side', 'It becomes faint or disappears'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Mây chắn bớt ánh nắng trực tiếp và làm ánh sáng tỏa ra nhiều hướng, nên phía sau em không còn tối rõ rệt như khi nắng gắt.\n📘 Ghi nhớ: Bóng rõ khi nắng mạnh; có mây thì bóng nhạt hoặc mất.',
    explanation_en:
      '💡 Why: Clouds block direct sunlight and spread the light in many directions, so the area behind you is no longer sharply dark as it is in strong sun.\n📘 Remember: Shadows are clear in strong sun and faint or gone when it is cloudy.',
  },
  {
    id: 'ear-31', topic: 'earth', subtopic: 'water-cycle', difficulty: 'easy', illustrationId: 'water-cycle',
    question_vi: 'Khi Mặt Trời làm nóng nước ao hồ, nước bay lên trời dưới dạng gì?',
    question_en: 'When the Sun heats a pond, what form does the water take as it goes up into the sky?',
    options_vi: ['Hơi nước', 'Nước đá', 'Khói', 'Bụi'],
    options_en: ['Water vapour', 'Ice', 'Smoke', 'Dust'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Nắng làm nước ao hồ nóng lên và biến thành hơi nước vô hình. Hơi nước nhẹ nên bay lên cao.\n📘 Ghi nhớ: Nước ở thể khí gọi là hơi nước, mắt ta không nhìn thấy được.',
    explanation_en:
      '💡 Why: Sunshine warms the pond water and turns it into invisible water vapour. Vapour is light, so it rises high.\n📘 Remember: Water as a gas is called water vapour, and our eyes cannot see it.',
  },
  {
    id: 'ear-32', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium', illustrationId: 'water-cycle',
    question_vi: 'Mây được tạo thành như thế nào?',
    question_en: 'How are clouds formed?',
    options_vi: ['Những tảng đá nhẹ bay lên trời', 'Hơi nước nguội đi thành giọt nhỏ', 'Khói từ nhà máy bay lên trời', 'Gió thổi bụi đất lên trời cao'],
    options_en: ['Light rocks float up into the sky', 'Water vapour cools into tiny droplets', 'Smoke from factories rises up', 'Wind blows soil up into the sky'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Hơi nước bay lên cao gặp không khí lạnh thì nguội đi và tụ lại thành vô số giọt nước li ti. Những giọt đó họp lại thành mây.\n📘 Ghi nhớ: Mây là các giọt nước nhỏ, không phải khói hay bụi.',
    explanation_en:
      '💡 Why: Water vapour rising high meets cold air, cools down and gathers into countless tiny droplets. Those droplets together make a cloud.\n📘 Remember: A cloud is made of tiny water droplets, not smoke or dust.',
  },
  {
    id: 'ear-33', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium', illustrationId: 'water-cycle',
    question_vi: 'Nước mưa cuối cùng đi đâu?',
    question_en: 'Where does rainwater finally go?',
    options_vi: ['Chỉ nằm yên trên các mái nhà mãi mãi', 'Bay thẳng lên tận chỗ Mặt Trời', 'Chảy ra sông, biển hoặc thấm vào đất', 'Biến mất hoàn toàn và không quay lại'],
    options_en: ['It stays on the roofs for ever', 'It flies straight up to the Sun', 'It runs into rivers, seas or the ground', 'It disappears and never comes back'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước mưa rơi xuống sẽ chảy theo chỗ thấp ra sông, hồ, biển hoặc thấm vào đất. Sau đó nước lại bốc hơi và tiếp tục vòng tuần hoàn.\n📘 Ghi nhớ: Nước không mất đi, nó chỉ đổi chỗ và đổi dạng.',
    explanation_en:
      '💡 Why: Rain flows downhill into rivers, lakes and seas, or soaks into the ground. Later the water evaporates again and the cycle continues.\n📘 Remember: Water is never lost; it only changes place and form.',
  },
  {
    id: 'ear-34', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium', illustrationId: 'water-cycle',
    question_vi: 'Trong hình, mũi tên màu cam chỉ quá trình nào?',
    question_en: 'In the picture, what does the orange arrow show?',
    options_vi: ['Đóng băng', 'Mưa xuống', 'Nóng chảy', 'Bốc hơi'],
    options_en: ['Freezing', 'Rain falling', 'Melting', 'Evaporation'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Mũi tên cam đi từ biển lên mây, nghĩa là nước nóng lên và biến thành hơi bay lên cao. Những giọt xanh rơi xuống mới là mưa.\n📘 Ghi nhớ: Mũi tên đi lên là bốc hơi; giọt rơi xuống là mưa.',
    explanation_en:
      '💡 Why: The orange arrow goes up from the sea towards the clouds, so water is warming and turning into vapour that rises. The blue drops falling down are the rain.\n📘 Remember: Arrows going up show evaporation; drops falling show rain.',
  },
  {
    id: 'ear-35', topic: 'earth', subtopic: 'water-cycle', difficulty: 'hard',
    question_vi: 'Vì sao nước biển không bị cạn đi mãi khi liên tục bốc hơi?',
    question_en: 'Why does the sea not dry up even though water keeps evaporating from it?',
    options_vi: ['Vì mưa rơi xuống rồi chảy trở lại biển', 'Vì nước biển tự sinh ra thêm mãi', 'Vì có máy bơm đổ nước mới vào biển', 'Vì nước biển không hề bốc hơi'],
    options_en: ['Because rain falls and flows back into the sea', 'Because sea water keeps making itself', 'Because pumps pour new water into the sea', 'Because sea water never evaporates at all'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Nước biển bốc hơi thành mây, mây gặp lạnh rơi thành mưa, mưa chảy về sông rồi ra biển lại. Lượng nước được dùng lại liên tục.\n📘 Ghi nhớ: Vòng tuần hoàn nước giữ cho biển không cạn.',
    explanation_en:
      '💡 Why: Sea water evaporates into clouds, the clouds drop rain, and the rain runs through rivers back to the sea. The same water is used again and again.\n📘 Remember: The water cycle keeps the sea from drying up.',
  },
  {
    id: 'ear-36', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium',
    question_vi: 'Vì sao buổi sáng sớm đôi khi có sương trên cỏ?',
    question_en: 'Why is there sometimes dew on the grass early in the morning?',
    options_vi: [
      'Gió thổi những giọt sương từ biển vào',
      'Hơi nước gặp lạnh đọng thành giọt',
      'Đất phun các giọt nước lên mặt cỏ',
      'Mặt Trời tạo ra các giọt nước ở đó',
    ],
    options_en: [
      'Wind blows drops of mist in from the sea',
      'Water vapour meets cold and condenses',
      'Soil sprays drops of water onto the grass',
      'The Sun makes water drops appear there',
    ],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Ban đêm không khí lạnh đi, hơi nước trong không khí gặp cỏ lạnh nên đọng lại thành giọt nhỏ gọi là sương.\n📘 Ghi nhớ: Hơi nước gặp lạnh thì đọng thành giọt nước.',
    explanation_en:
      '💡 Why: At night the air cools, and water vapour in the air meets the cold grass and condenses into tiny drops called dew.\n📘 Remember: Water vapour that meets cold turns into drops of water.',
  },
  {
    id: 'ear-37', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium',
    question_vi: 'Khi phơi quần áo ướt, nước trên áo mất dần. Điều gì đã xảy ra với nước?',
    question_en: 'Wet clothes dry on a line and the water gradually disappears. What happened to the water?',
    options_vi: [
      'Nước chảy xuống đất rồi thấm vào đó',
      'Nước đóng băng rồi rơi khỏi quần áo',
      'Nước biến thành hơi bay vào không khí',
      'Nước bị quần áo hút vào sâu bên trong',
    ],
    options_en: [
      'The water runs onto the ground and soaks in',
      'The water freezes and drops off the clothes',
      'The water turns to vapour in the air',
      'The water is soaked deep into the cloth',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước trên áo ướt nhận nhiệt từ nắng và gió rồi biến thành hơi bay đi, nên áo khô dần.\n📘 Ghi nhớ: Nước ướt biến mất vào không khí là bốc hơi.',
    explanation_en:
      '💡 Why: Water on wet clothes takes heat from the sun and wind and turns into vapour that drifts away, so the clothes slowly dry.\n📘 Remember: Wet water vanishing into the air is evaporation.',
  },
  {
    id: 'ear-38', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy',
    question_vi: 'Nắng, mưa, gió hôm nay là gì?',
    question_en: 'Sunshine, rain and wind today are examples of what?',
    options_vi: ['Mùa', 'Ngày', 'Trái Đất', 'Thời tiết'],
    options_en: ['Seasons', 'Days', 'Earth', 'Weather'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Nắng, mưa, gió là những gì ta thấy ngoài trời trong một ngày và thay đổi từng ngày, nên đó là thời tiết.\n📘 Ghi nhớ: Thời tiết đổi theo ngày; mùa kéo dài vài tháng.',
    explanation_en:
      '💡 Why: Sunshine, rain and wind are what we notice outdoors on one day and they change day by day, so they are weather.\n📘 Remember: Weather changes day to day; a season lasts for months.',
  },
  {
    id: 'ear-39', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy', illustrationId: 'weather-icons',
    question_vi: 'Trong hình, hình nào chỉ ngày nắng ấm?',
    question_en: 'In the picture, which symbol shows a sunny, warm day?',
    options_vi: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    options_en: ['Picture A', 'Picture B', 'Picture C', 'Picture D'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Hình A là Mặt Trời, biểu tượng của ngày nắng ấm. Mây mưa là trời mưa, bông tuyết là trời lạnh, gió là trời có gió.\n📘 Ghi nhớ: Mỗi biểu tượng thời tiết là một dấu hiệu quen thuộc.',
    explanation_en:
      '💡 Why: Picture A is the Sun, the symbol of a sunny, warm day. A rain cloud means rain, a snowflake means cold and a wind symbol means a windy day.\n📘 Remember: Each weather symbol is a familiar sign.',
  },
  {
    id: 'ear-40', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'medium', illustrationId: 'weather-icons',
    question_vi: 'Trong hình, hình nào cho biết trời rất lạnh và có thể có tuyết?',
    question_en: 'In the picture, which symbol shows very cold weather when snow may fall?',
    options_vi: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    options_en: ['Picture A', 'Picture B', 'Picture C', 'Picture D'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Hình C là bông tuyết, biểu tượng của thời tiết lạnh, khi hơi nước đóng băng thành tinh thể rồi rơi xuống thành tuyết.\n📘 Ghi nhớ: Bông tuyết nghĩa là trời lạnh và có thể có tuyết.',
    explanation_en:
      '💡 Why: Picture C is a snowflake, the symbol of cold weather, when water vapour freezes into ice crystals that fall as snow.\n📘 Remember: A snowflake means cold weather and possible snow.',
  },
  {
    id: 'ear-41', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy',
    question_vi: 'Ở miền Bắc Việt Nam, mùa nào thường nóng nhất trong năm?',
    question_en: 'In northern Vietnam, which season is usually the hottest?',
    options_vi: ['Mùa thu', 'Mùa hè', 'Mùa đông', 'Mùa xuân'],
    options_en: ['Autumn', 'Summer', 'Winter', 'Spring'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Mùa hè ở miền Bắc có nắng gắt và ngày dài, nên mặt đất được sưởi nóng lâu và trời nóng nhất năm.\n📘 Ghi nhớ: Mùa hè nóng nhất, mùa đông lạnh nhất.',
    explanation_en:
      '💡 Why: Summer in the north brings strong sunshine and long days, so the ground is warmed for many hours and it is the hottest time of year.\n📘 Remember: Summer is the hottest season and winter the coldest.',
  },
  {
    id: 'ear-42', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'medium',
    question_vi: 'Cầu vồng thường xuất hiện khi nào?',
    question_en: 'When does a rainbow usually appear?',
    options_vi: [
      'Khi trời đang mưa to và tối',
      'Khi trời tối hẳn vào ban đêm',
      'Khi mưa vừa tạnh và có nắng',
      'Khi tuyết rơi dày đặc ngoài trời',
    ],
    options_en: [
      'When it is raining hard and dark',
      'When it is completely dark at night',
      'When rain has just stopped and the Sun shines',
      'When thick snow falls outdoors',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Cầu vồng hiện ra khi ánh nắng đi qua những giọt nước mưa còn lơ lửng, ánh sáng bị tách thành nhiều màu.\n📘 Ghi nhớ: Cần có cả nắng lẫn giọt nước, thường là lúc mưa vừa tạnh.',
    explanation_en:
      '💡 Why: A rainbow forms when sunlight passes through raindrops still floating in the air, and the light splits into many colours.\n📘 Remember: It needs both sunshine and water drops, usually just after rain.',
  },
  {
    id: 'ear-43', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'hard',
    question_vi: 'Vào mùa đông ở miền Bắc Việt Nam, ngày thường thế nào so với đêm?',
    question_en: 'In northern Vietnam in winter, how are days compared with nights?',
    options_vi: ['Ngày dài hơn và đêm ngắn hơn', 'Ngày và đêm dài bằng nhau', 'Ngày dài hơn đêm rất nhiều', 'Ngày ngắn hơn và đêm dài hơn'],
    options_en: ['Days are longer and nights are shorter', 'Day and night are equally long', 'Days are much longer than nights', 'Days are shorter and nights are longer'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Mùa đông ở miền Bắc, Mặt Trời mọc muộn, lặn sớm và đi thấp trên trời nên ban ngày ngắn, ban đêm dài.\n📘 Ghi nhớ: Mùa đông ngày ngắn đêm dài; mùa hè thì ngược lại.',
    explanation_en:
      '💡 Why: In northern Vietnam in winter the Sun rises late, sets early and travels low in the sky, so the day is short and the night is long.\n📘 Remember: Winter has short days and long nights; summer is the opposite.',
  },
  {
    id: 'ear-44', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy',
    question_vi: 'Khi bầu trời kéo đầy mây đen, em nên mang theo gì khi ra ngoài?',
    question_en: 'When the sky is full of dark clouds, what should you take with you when you go out?',
    options_vi: ['Áo mưa hoặc ô', 'Kính râm và mũ rộng vành', 'Quạt giấy để quạt mát', 'Kem chống nắng'],
    options_en: ['A raincoat or an umbrella', 'Sunglasses and a wide hat', 'A paper fan to keep cool', 'Sunscreen'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mây đen chứa nhiều nước và thường báo hiệu sắp mưa, nên áo mưa hoặc ô giúp em không bị ướt.\n📘 Ghi nhớ: Nhìn mây trên trời để đoán thời tiết và chuẩn bị đồ phù hợp.',
    explanation_en:
      '💡 Why: Dark clouds hold a lot of water and usually warn that rain is coming, so a raincoat or umbrella keeps you dry.\n📘 Remember: Look at the clouds to guess the weather and prepare the right things.',
  },
  {
    id: 'ear-45', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'medium',
    question_vi: 'Tiếng sấm đến sau tia chớp vì sao?',
    question_en: 'Why does the sound of thunder reach us after the flash of lightning?',
    options_vi: [
      'Vì ánh sáng đi nhanh hơn âm thanh',
      'Vì âm thanh đi nhanh hơn ánh sáng',
      'Vì sấm xảy ra muộn hơn chớp',
      'Vì tai nghe chậm hơn mắt nhìn',
    ],
    options_en: [
      'Because light travels faster than sound',
      'Because sound travels faster than light',
      'Because thunder happens later than lightning',
      'Because ears hear more slowly than eyes see',
    ],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Chớp và sấm xảy ra cùng lúc, nhưng ánh sáng đi nhanh hơn âm thanh rất nhiều nên ta thấy chớp trước rồi mới nghe sấm.\n📘 Ghi nhớ: Ánh sáng nhanh hơn âm thanh.',
    explanation_en:
      '💡 Why: Lightning and thunder happen at the same moment, but light travels far faster than sound, so we see the flash first and hear the thunder later.\n📘 Remember: Light is faster than sound.',
  },
  {
    id: 'ear-46', topic: 'earth', subtopic: 'earth-shape', difficulty: 'easy',
    question_vi: 'Hệ Mặt Trời gồm những gì?',
    question_en: 'What does the Solar System consist of?',
    options_vi: ['Chỉ Mặt Trăng và các vì sao', 'Chỉ riêng Trái Đất và Mặt Trăng', 'Mặt Trời và các hành tinh quanh nó', 'Các ngôi sao ở rất xa Trái Đất'],
    options_en: ['Only the Moon and the stars', 'Only Earth and the Moon', 'The Sun and planets going around it', 'Stars that are very far from Earth'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Mặt Trời là ngôi sao ở trung tâm, còn Trái Đất, Sao Hỏa và các hành tinh khác đi vòng quanh nó. Tất cả cùng tạo thành Hệ Mặt Trời.\n📘 Ghi nhớ: Hệ Mặt Trời gồm Mặt Trời và các hành tinh quay quanh nó.',
    explanation_en:
      '💡 Why: The Sun is the star at the centre, and Earth, Mars and the other planets travel around it. Together they make up the Solar System.\n📘 Remember: The Solar System is the Sun and the planets that orbit it.',
  },
  {
    id: 'ear-47', topic: 'earth', subtopic: 'earth-shape', difficulty: 'easy',
    question_vi: 'Chúng ta đang sống trên hành tinh nào?',
    question_en: 'Which planet do we live on?',
    options_vi: ['Sao Hỏa', 'Sao Kim', 'Sao Mộc', 'Trái Đất'],
    options_en: ['Mars', 'Venus', 'Jupiter', 'Earth'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Trái Đất có nước, không khí và nhiệt độ vừa phải nên cây cối, động vật và con người sống được.\n📘 Ghi nhớ: Chúng ta sống trên Trái Đất, hành tinh duy nhất được biết là có sự sống.',
    explanation_en:
      '💡 Why: Earth has water, air and a mild temperature, so plants, animals and people can live here.\n📘 Remember: We live on Earth, the only planet known to have life.',
  },
  {
    id: 'ear-48', topic: 'earth', subtopic: 'earth-shape', difficulty: 'medium',
    question_vi: 'Vì sao Trái Đất được gọi là “hành tinh xanh”?',
    question_en: 'Why is Earth called the “blue planet”?',
    options_vi: ['Vì phần lớn bề mặt là đại dương', 'Vì sa mạc đầy những cây xanh', 'Vì khắp nơi đều phủ lá xanh', 'Vì trên trời nhiều mây đen'],
    options_en: ['Because oceans cover most of its surface', 'Because deserts are full of green trees', 'Because green leaves cover everywhere', 'Because dark clouds fill the sky'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Đại dương phủ phần lớn bề mặt Trái Đất, nên từ vũ trụ nhìn xuống ta thấy màu xanh của nước là chính.\n📘 Ghi nhớ: Hành tinh xanh vì có rất nhiều nước.',
    explanation_en:
      '💡 Why: Oceans cover most of Earth’s surface, so from space the blue of the water is the main colour we see.\n📘 Remember: It is the blue planet because it has so much water.',
  },
  {
    id: 'ear-49', topic: 'earth', subtopic: 'earth-shape', difficulty: 'medium',
    question_vi: 'Hành tinh nào được gọi là “hành tinh đỏ”?',
    question_en: 'Which planet is called the “red planet”?',
    options_vi: ['Trái Đất', 'Sao Hỏa', 'Sao Kim', 'Sao Thổ'],
    options_en: ['Earth', 'Mars', 'Venus', 'Saturn'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Bụi và đá trên Sao Hỏa chứa sắt bị gỉ, nên bề mặt có màu đỏ cam khi nhìn từ xa.\n📘 Ghi nhớ: Sao Hỏa là hành tinh đỏ vì sắt gỉ trên mặt đất.',
    explanation_en:
      '💡 Why: Dust and rocks on Mars contain iron that has rusted, so its surface looks reddish-orange from far away.\n📘 Remember: Mars is the red planet because of rusty iron on its ground.',
  },
  {
    id: 'ear-50', topic: 'earth', subtopic: 'stars-sky', difficulty: 'hard',
    question_vi: 'Vì sao nhiều ngôi sao trông nhỏ hơn Mặt Trời, dù nhiều ngôi sao thật ra lớn hơn?',
    question_en: 'Why do many stars look smaller than the Sun, even though many are actually larger?',
    options_vi: ['Vì chúng thường bị mây che', 'Vì chúng chỉ có rất ít ánh sáng', 'Vì chúng ở xa hơn rất nhiều', 'Vì chúng hoàn toàn không nóng'],
    options_en: ['Because clouds often cover them', 'Because they have very little light', 'Because they are much farther away', 'Because they are not hot at all'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Khoảng cách làm vật trông nhỏ đi. Mặt Trời ở gần nên trông to, còn các ngôi sao ở rất xa nên chỉ như chấm sáng.\n📘 Ghi nhớ: Vật càng xa thì trông càng nhỏ.',
    explanation_en:
      '💡 Why: Distance makes things look smaller. The Sun is close so it looks big, while other stars are so far away they look like tiny points of light.\n📘 Remember: The farther away something is, the smaller it looks.',
  },
  {
    id: 'ear-51', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'easy', illustrationId: 'soil-layers',
    question_vi: 'Trong hình mặt cắt đất, lớp số 1 là lớp gì?',
    question_en: 'In the soil cross-section, what is layer number 1?',
    options_vi: ['Đá cứng nằm sâu dưới đất', 'Cát vàng khô ở dưới cùng', 'Nước ngầm chảy dưới lòng đất', 'Đất mặt sẫm màu, nhiều lá mục'],
    options_en: ['Hard rock deep underground', 'Dry yellow sand at the bottom', 'Groundwater flowing below', 'Dark topsoil full of rotted leaves'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Lớp trên cùng là đất mặt, sẫm màu vì có nhiều lá mục và xác sinh vật phân hủy, nên cây dễ mọc ở đó nhất.\n📘 Ghi nhớ: Đất mặt nằm trên cùng, màu sẫm, giàu dinh dưỡng.',
    explanation_en:
      '💡 Why: The top layer is topsoil. It is dark because it holds lots of rotted leaves and remains of living things, so plants grow best there.\n📘 Remember: Topsoil is on top, dark and rich in nutrients.',
  },
  {
    id: 'ear-52', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Loại đất nào giữ nước tốt nhất?',
    question_en: 'Which kind of soil holds water best?',
    options_vi: ['Đất sét', 'Đất cát', 'Sỏi vụn', 'Đá dăm'],
    options_en: ['Clay soil', 'Sandy soil', 'Crushed gravel', 'Broken stones'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Hạt đất sét rất nhỏ và sít nhau nên nước khó thoát đi và được giữ lại. Cát và sỏi có khe hở lớn nên nước chảy qua hết.\n📘 Ghi nhớ: Đất sét giữ nước tốt; đất cát thoát nước nhanh.',
    explanation_en:
      '💡 Why: Clay grains are tiny and packed tightly, so water cannot drain away and is held. Sand and gravel have big gaps, so water runs straight through.\n📘 Remember: Clay holds water well; sand drains quickly.',
  },
  {
    id: 'ear-53', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Đá được hình thành như thế nào?',
    question_en: 'How are rocks formed?',
    options_vi: ['Từ nước biển chỉ sau một ngày', 'Từ khoáng chất kết lại qua rất lâu', 'Chỉ sau vài giây là thành đá', 'Do con người nặn ra từ bùn'],
    options_en: ['From sea water after just one day', 'From minerals pressed together over ages', 'In just a few seconds', 'People mould them from mud'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Đá hình thành từ khoáng chất và vật liệu bị ép chặt, kết dính dưới nhiệt và áp lực suốt hàng triệu năm, không thể xong trong vài giây.\n📘 Ghi nhớ: Đá hình thành rất chậm trong lòng Trái Đất.',
    explanation_en:
      '💡 Why: Rocks form from minerals and materials pressed and cemented together by heat and pressure over millions of years, never in a few seconds.\n📘 Remember: Rocks form very slowly inside Earth.',
  },
  {
    id: 'ear-54', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Vì sao rễ cây mọc trong khe đá có thể làm đá nứt ra?',
    question_en: 'Why can the roots of a tree growing in a rock crack make the rock split?',
    options_vi: ['Vì rễ cây hút hết nước trong đá', 'Vì rễ cây làm đá nóng chảy ra', 'Vì rễ cây lớn dần và đẩy vào khe đá', 'Vì rễ cây dán các mảnh đá lại'],
    options_en: ['Because roots drink all the water in rock', 'Because roots make the rock melt', 'Because roots grow and push into the cracks', 'Because roots glue the pieces of rock together'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Rễ cây to ra từng ngày và đẩy vào khe đá, làm khe rộng dần rồi nứt. Các mảnh vỡ nhỏ về sau trộn thành đất.\n📘 Ghi nhớ: Rễ cây cũng có thể làm vỡ đá, dù rất chậm.',
    explanation_en:
      '💡 Why: Roots get thicker every day and push into rock cracks, widening them until the rock splits. The small broken pieces later mix into soil.\n📘 Remember: Plant roots can break rock too, though very slowly.',
  },
  {
    id: 'ear-55', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Một hòn đá nằm ngoài trời nhiều năm, bị mưa gió bào mòn. Dấu hiệu nào dễ thấy nhất?',
    question_en: 'A rock has sat outdoors for many years and rain and wind have worn it down. What sign is easiest to see?',
    options_vi: ['Đá to lên theo từng năm', 'Đá dần đổi thành vàng óng', 'Đá nổi lên khi bỏ vào nước', 'Bề mặt sần sùi, có vết nứt nhỏ'],
    options_en: ['The rock grows bigger each year', 'The rock slowly turns to gold', 'The rock floats when put in water', 'The surface is rough with small cracks'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Mưa, gió và sự nóng lạnh thay đổi liên tục làm bề mặt đá bong, nứt và sần sùi dần qua nhiều năm.\n📘 Ghi nhớ: Đá không to lên hay đổi thành vàng; nó chỉ bị mòn và nứt.',
    explanation_en:
      '💡 Why: Rain, wind and constant changes between hot and cold make a rock’s surface flake, crack and roughen over many years.\n📘 Remember: Rocks do not grow or turn to gold; they only wear down and crack.',
  },
  {
    id: 'ear-56', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Khi nắm đất sét và đất cát đều ẩm trong tay, hai loại đất khác nhau thế nào?',
    question_en: 'When damp clay and damp sand are squeezed in your hand, how do they differ?',
    options_vi: ['Sét dẻo và dính, cát rời rạc', 'Cát dẻo và dính, sét rời rạc', 'Hai loại đều cứng như đá', 'Hai loại đều tan thành nước'],
    options_en: ['Clay is sticky and mouldable; sand is loose', 'Sand is sticky and mouldable; clay is loose', 'Both feel as hard as rock', 'Both dissolve into water'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Hạt sét rất mịn nên khi ẩm chúng dính vào nhau và nặn được. Hạt cát to hơn, không dính nên rời ra.\n📘 Ghi nhớ: Đất sét dẻo, đất cát rời.',
    explanation_en:
      '💡 Why: Clay grains are very fine, so when damp they stick together and can be moulded. Sand grains are bigger and do not stick, so they fall apart.\n📘 Remember: Clay is sticky; sand is loose.',
  },
  {
    id: 'ear-57', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'easy',
    question_vi: 'Vì sao đất lại quan trọng với cây?',
    question_en: 'Why is soil important for plants?',
    options_vi: ['Đất làm lá cây đổi màu mỗi ngày', 'Đất cho rễ nước và chất dinh dưỡng', 'Đất giúp cây nhìn thấy Mặt Trời', 'Đất giữ cho cây không bao giờ già'],
    options_en: ['Soil makes the leaves change colour daily', 'Soil gives roots water and nutrients', 'Soil helps plants to see the Sun', 'Soil keeps a plant from ever growing old'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Rễ cây bám vào đất để hút nước và chất dinh dưỡng, đất còn giữ cho cây đứng vững.\n📘 Ghi nhớ: Không có đất tốt thì cây khó lớn.',
    explanation_en:
      '💡 Why: Roots hold on in the soil to take in water and nutrients, and the soil also keeps the plant standing firm.\n📘 Remember: Without good soil, plants find it hard to grow.',
  },
  {
    id: 'ear-58', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Phát biểu nào đúng về nguồn gốc của đất?',
    question_en: 'Which statement about the origin of soil is correct?',
    options_vi: ['Cát là một loại kim loại', 'Đất là một loại chất lỏng', 'Đất là đá vụn trộn với lá mục', 'Đất không liên quan gì đến đá'],
    options_en: ['Sand is a kind of metal', 'Soil is a kind of liquid', 'Soil is crushed rock mixed with rotted leaves', 'Soil has nothing to do with rock'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Đá vỡ thành hạt nhỏ qua thời gian dài, rồi trộn với lá mục và xác sinh vật tạo thành đất, nên đất liên quan chặt chẽ với đá.\n📘 Ghi nhớ: Đất là đá vụn trộn với chất hữu cơ.',
    explanation_en:
      '💡 Why: Over a long time rock breaks into tiny pieces, which mix with rotted leaves and remains of living things to make soil, so soil is closely linked to rock.\n📘 Remember: Soil is crushed rock mixed with decayed living matter.',
  },
  {
    id: 'ear-59', topic: 'earth', subtopic: 'earth-shape', difficulty: 'easy',
    question_vi: 'Trái Đất có bao nhiêu vệ tinh tự nhiên?',
    question_en: 'How many natural satellites does Earth have?',
    options_vi: ['1', '0', '2', '5'],
    options_en: ['1', '0', '2', '5'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Chỉ có Mặt Trăng quay quanh Trái Đất một cách tự nhiên; các vệ tinh khác trên trời đều do con người phóng lên.\n📘 Ghi nhớ: Trái Đất có 1 vệ tinh tự nhiên là Mặt Trăng.',
    explanation_en:
      '💡 Why: Only the Moon circles Earth naturally; every other satellite in the sky was launched by people.\n📘 Remember: Earth has 1 natural satellite, the Moon.',
  },
  {
    id: 'ear-60', topic: 'earth', subtopic: 'day-night', difficulty: 'easy',
    question_vi: 'Một ngày trên Trái Đất dài khoảng bao nhiêu giờ?',
    question_en: 'About how many hours long is one day on Earth?',
    options_vi: ['24 giờ', '12 giờ', '48 giờ', '100 giờ'],
    options_en: ['24 hours', '12 hours', '48 hours', '100 hours'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất quay một vòng quanh trục hết khoảng 24 giờ, và một vòng đó gồm một ban ngày cùng một ban đêm.\n📘 Ghi nhớ: Một ngày đêm dài 24 giờ.',
    explanation_en:
      '💡 Why: Earth takes about 24 hours to spin once on its axis, and that one turn includes a daytime and a night-time.\n📘 Remember: One full day and night is 24 hours.',
  },
  {
    id: 'ear-64', topic: 'earth', subtopic: 'planets-order', difficulty: 'easy',
    question_vi: 'Hành tinh nào lớn nhất trong Hệ Mặt Trời?',
    question_en: 'Which planet is the biggest in the Solar System?',
    options_vi: ['Trái Đất', 'Sao Hỏa', 'Sao Thủy', 'Sao Mộc'],
    options_en: ['Earth', 'Mars', 'Mercury', 'Jupiter'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Sao Mộc to hơn mọi hành tinh khác, thể tích của nó lớn hơn Trái Đất hơn 1.000 lần. Sao Hỏa và Sao Thủy còn nhỏ hơn Trái Đất.\n📘 Ghi nhớ: Sao Mộc là hành tinh lớn nhất.',
    explanation_en:
      '💡 Why: Jupiter is bigger than every other planet, with a volume more than 1,000 times Earth’s. Mars and Mercury are even smaller than Earth.\n📘 Remember: Jupiter is the largest planet.',
  },
  {
    id: 'ear-065', topic: 'earth', subtopic: 'stars-sky', difficulty: 'easy',
    question_vi: 'Ban đêm, các ngôi sao trông lấp lánh. Thật ra ngôi sao là gì?',
    question_en: 'At night, stars twinkle in the sky. What are stars really?',
    options_vi: ['Những khối khí cực nóng tự phát sáng', 'Những tảng đá phản chiếu ánh Mặt Trời', 'Các đèn chiếu do con người làm', 'Những lỗ nhỏ trên bầu trời'],
    options_en: ['Extremely hot balls of gas that give off their own light', 'Rocks that reflect sunlight', 'Lamps made by people', 'Small holes in the sky'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Ngôi sao là khối khí cực nóng tự phát ra ánh sáng, giống Mặt Trời nhưng ở rất xa nên trông chỉ như chấm sáng.\n📘 Ghi nhớ: Sao tự phát sáng; Mặt Trăng và hành tinh chỉ phản chiếu ánh sáng.',
    explanation_en:
      '💡 Why: A star is an extremely hot ball of gas that makes its own light, like the Sun but so far away that it looks like a small dot.\n📘 Remember: Stars make their own light; the Moon and planets only reflect it.',
  },
  {
    id: 'ear-066', topic: 'earth', subtopic: 'stars-sky', difficulty: 'medium', illustrationId: 'constellation',
    question_vi: 'Một nhóm sao tạo thành hình dễ nhận ra trên bầu trời được gọi là gì?',
    question_en: 'What is a group of stars that forms an easy-to-recognise shape in the sky called?',
    options_vi: ['Thiên hà nhỏ', 'Chòm sao', 'Vệ tinh', 'Sao chổi'],
    options_en: ['A small galaxy', 'A constellation', 'A satellite', 'A comet'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Nhìn từ Trái Đất, các sao gần nhau trông như nối thành hình con vật hay đồ vật. Người xưa dùng chúng để tìm hướng.\n📘 Ghi nhớ: Nhóm sao tạo thành hình quen thuộc là chòm sao.',
    explanation_en:
      '💡 Why: Seen from Earth, nearby stars look joined into the shape of an animal or object. People long ago used them to find their way.\n📘 Remember: A group of stars forming a familiar shape is a constellation.',
  },
  {
    id: 'ear-067', topic: 'earth', subtopic: 'stars-sky', difficulty: 'medium',
    question_vi: 'Vì sao các ngôi sao ban đêm dường như di chuyển trên bầu trời?',
    question_en: 'Why do the stars seem to move across the night sky?',
    options_vi: ['Vì các ngôi sao tự bay quanh em', 'Vì gió đẩy các ngôi sao đi', 'Vì Trái Đất tự quay', 'Vì các ngôi sao đang nổ'],
    options_en: ['Because the stars fly around us', 'Because wind pushes the stars', 'Because Earth spins', 'Because stars are exploding'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Trái Đất tự quay nên bầu trời có vẻ quay quanh ta, các ngôi sao cũng như chuyển động theo từ đông sang tây.\n📘 Ghi nhớ: Sao trông như di chuyển vì Trái Đất quay.',
    explanation_en:
      '💡 Why: Earth spins, so the sky seems to turn around us and the stars appear to travel from east to west.\n📘 Remember: Stars look like they move because Earth spins.',
  },
  {
    id: 'ear-068', topic: 'earth', subtopic: 'stars-sky', difficulty: 'hard', illustrationId: 'constellation',
    question_vi: 'Vì sao sao Bắc Cực dường như đứng yên ở gần một hướng trên bầu trời?',
    question_en: 'Why does the North Star seem to stay in almost the same place in the sky?',
    options_vi: ['Vì nó là ngôi sao không hề chuyển động', 'Vì nó là một Mặt Trời nhỏ ở gần', 'Vì mây luôn che các sao khác', 'Vì nó nằm gần trục quay của Trái Đất'],
    options_en: ['Because it is a star that never moves', 'Because it is a small Sun nearby', 'Because clouds always hide other stars', 'Because it lies near Earth’s spin axis'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Sao Bắc Cực nằm gần đường kéo dài của trục quay Trái Đất, nên khi bầu trời quay nó gần như đứng yên.\n📘 Ghi nhớ: Người đi biển xưa nhìn Sao Bắc Cực để tìm hướng bắc.',
    explanation_en:
      '💡 Why: The North Star lies close to the line along Earth’s spin axis, so it barely moves while the rest of the sky turns.\n📘 Remember: Sailors long ago used the North Star to find north.',
  },
  {
    id: 'ear-069', topic: 'earth', subtopic: 'stars-sky', difficulty: 'easy',
    question_vi: 'Vì sao ban ngày ta không nhìn thấy các ngôi sao?',
    question_en: 'Why can’t we see stars during the day?',
    options_vi: ['Vì ánh sáng Mặt Trời quá chói', 'Vì ban ngày các sao đã tắt hết', 'Vì các sao ở quá gần Trái Đất', 'Vì ban ngày mây luôn che trời'],
    options_en: ['Because sunlight is too bright', 'Because stars switch off by day', 'Because stars are too close to Earth', 'Because clouds always cover the day sky'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Ban ngày các ngôi sao vẫn ở trên trời, nhưng ánh sáng Mặt Trời chói hơn rất nhiều nên che lấp ánh sáng yếu của chúng.\n📘 Ghi nhớ: Chỉ khi trời tối ta mới thấy sao.',
    explanation_en:
      '💡 Why: The stars are still in the sky by day, but sunlight is far brighter and hides their faint light.\n📘 Remember: We only see stars when the sky is dark.',
  },
  {
    id: 'ear-070', topic: 'earth', subtopic: 'air-wind', difficulty: 'easy',
    question_vi: 'Gió là gì?',
    question_en: 'What is wind?',
    options_vi: ['Nước chảy trên trời', 'Không khí đang chuyển động', 'Đám mây đang bay', 'Ánh sáng đang di chuyển'],
    options_en: ['Water flowing in the sky', 'Air that is moving', 'Clouds drifting along', 'Light that is moving'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Khi không khí di chuyển từ nơi này sang nơi khác, ta cảm nhận nó như gió thổi vào mặt. Chênh lệch nhiệt độ giữa các nơi là nguyên nhân chính.\n📘 Ghi nhớ: Gió là không khí đang chuyển động.',
    explanation_en:
      '💡 Why: When air moves from one place to another, we feel it as wind on our face. Differences in temperature between places are the main cause.\n📘 Remember: Wind is moving air.',
  },
  {
    id: 'ear-071', topic: 'earth', subtopic: 'air-wind', difficulty: 'medium', illustrationId: 'sea-breeze',
    question_vi: 'Vì sao ban ngày thường có gió thổi từ biển vào đất liền?',
    question_en: 'Why does the wind often blow from the sea towards the land during the day?',
    options_vi: [
      'Sóng biển tự tạo ra gió rồi thổi mạnh vào bờ',
      'Đất hút hết không khí của biển chạy vào bờ',
      'Đất nóng nhanh nên không khí mát từ biển tràn vào',
      'Những đàn chim đập cánh làm gió thổi vào bờ',
    ],
    options_en: [
      'Waves create wind that then blows ashore',
      'The land sucks all the sea air towards it',
      'The land heats fast so cool sea air flows in',
      'Flocks of birds flapping make wind blow ashore',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Ban ngày đất nóng nhanh hơn biển. Không khí nóng trên đất bốc lên, còn không khí mát từ biển tràn vào chỗ trống tạo thành gió biển.\n📘 Ghi nhớ: Gió thổi từ nơi mát sang nơi nóng.',
    explanation_en:
      '💡 Why: By day land heats faster than the sea. Warm air over the land rises, and cooler sea air flows in to fill the space, making a sea breeze.\n📘 Remember: Wind blows from the cooler place to the warmer place.',
  },
  {
    id: 'ear-072', topic: 'earth', subtopic: 'air-wind', difficulty: 'medium',
    question_vi: 'Một quả bóng bay được bơm đầy không khí so với quả bóng xẹp thì nặng hơn hay nhẹ hơn?',
    question_en: 'Compared with a flat balloon, is a balloon filled with air heavier or lighter?',
    options_vi: ['Nhẹ hơn hẳn vì có khí bên trong', 'Quả bóng xẹp nặng hơn', 'Hai quả nặng đúng bằng nhau', 'Nặng hơn một chút vì có không khí'],
    options_en: ['Much lighter because of the gas inside', 'The flat balloon is heavier', 'Both weigh exactly the same', 'Slightly heavier because it holds air'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Không khí có khối lượng dù rất nhẹ, nên bóng bơm đầy chứa thêm không khí và nặng hơn bóng xẹp một chút khi cân trên cân chính xác.\n📘 Ghi nhớ: Không khí cũng có khối lượng.',
    explanation_en:
      '💡 Why: Air has mass even though it is very light, so a balloon full of air holds extra air and is slightly heavier than a flat one on a precise scale.\n📘 Remember: Air has mass too.',
  },
  {
    id: 'ear-073', topic: 'earth', subtopic: 'air-wind', difficulty: 'hard',
    question_vi: 'Vì sao khi bơm xe đạp, không khí bị nén lại nóng lên?',
    question_en: 'Why does air get warm when a bicycle pump compresses it?',
    options_vi: ['Vì nén làm các hạt khí va chạm nhiều', 'Vì không khí tự bốc cháy khi bị nén', 'Vì thân ống bơm được sơn màu đen', 'Vì không khí lạnh đi khi bị nén'],
    options_en: ['Because squeezing makes air particles collide more', 'Because air catches fire when squeezed', 'Because the pump body is painted black', 'Because air gets colder when squeezed'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Khi nén, các hạt khí bị ép sát nhau và va chạm nhiều hơn. Năng lượng đó biến thành nhiệt nên không khí và ống bơm nóng lên.\n📘 Ghi nhớ: Nén khí thì khí nóng lên.',
    explanation_en:
      '💡 Why: When air is squeezed, its particles are pushed close together and collide more often. That energy turns into heat, so the air and the pump warm up.\n📘 Remember: Squeezing a gas makes it hotter.',
  },
  {
    id: 'ear-074', topic: 'earth', subtopic: 'air-wind', difficulty: 'medium',
    question_vi: 'Khí nào chiếm phần lớn nhất trong không khí chúng ta đang thở?',
    question_en: 'Which gas makes up most of the air we breathe?',
    options_vi: ['Oxi', 'Nitơ', 'Cacbonic (CO2)', 'Hơi nước'],
    options_en: ['Oxygen', 'Nitrogen', 'Carbon dioxide (CO2)', 'Water vapour'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Không khí gồm nhiều khí trộn lẫn, trong đó nitơ chiếm khoảng bốn phần năm còn oxi chỉ khoảng một phần năm.\n📘 Ghi nhớ: Nitơ nhiều nhất; oxi là khí cơ thể cần để thở.',
    explanation_en:
      '💡 Why: Air is a mix of gases, and nitrogen makes up about four-fifths of it while oxygen is only about one-fifth.\n📘 Remember: Nitrogen is the most common; oxygen is the gas our bodies need to breathe.',
  },
  {
    id: 'ear-075', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'easy',
    question_vi: 'Những thứ như nước, không khí, gỗ và khoáng sản được gọi là gì?',
    question_en: 'What do we call things like water, air, wood and minerals?',
    options_vi: ['Rác thải sinh hoạt', 'Đồ chơi của trẻ em', 'Tài nguyên thiên nhiên', 'Vật dụng nhân tạo'],
    options_en: ['Household waste', 'Children’s toys', 'Natural resources', 'Man-made objects'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước, không khí, gỗ và khoáng sản có sẵn trong tự nhiên và con người dùng hằng ngày, nên là tài nguyên thiên nhiên.\n📘 Ghi nhớ: Tài nguyên thiên nhiên cần được giữ gìn và dùng tiết kiệm.',
    explanation_en:
      '💡 Why: Water, air, wood and minerals are found in nature and people use them every day, so they are natural resources.\n📘 Remember: Natural resources must be protected and used wisely.',
  },
  {
    id: 'ear-076', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'medium',
    question_vi: 'Rác nhựa vứt xuống sông có thể gây hại gì?',
    question_en: 'What harm can plastic rubbish thrown into a river cause?',
    options_vi: ['Làm nước sông trở nên ngọt hơn', 'Làm những con cá lớn nhanh hơn', 'Không gây hại gì cho sông', 'Làm hại động vật và bẩn nước'],
    options_en: ['It makes the river water sweeter', 'It makes the fish grow faster', 'It does no harm to the river', 'It hurts animals and dirties the water'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Động vật có thể ăn nhầm nhựa hoặc bị mắc vào rác. Nhựa lại phân hủy rất chậm và làm bẩn nguồn nước.\n📘 Ghi nhớ: Không vứt rác xuống sông.',
    explanation_en:
      '💡 Why: Animals can swallow plastic or get tangled in it, and plastic breaks down very slowly and dirties the water.\n📘 Remember: Never throw rubbish into rivers.',
  },
  {
    id: 'ear-077', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'medium',
    question_vi: 'Vì sao nên tiết kiệm nước sạch?',
    question_en: 'Why should we save clean water?',
    options_vi: ['Vì nước sạch là tài nguyên có hạn', 'Vì nước sạch sẽ tự biến mất hết', 'Vì nước làm cây lùn lại', 'Vì nước sạch không cần thiết'],
    options_en: ['Because clean water is a limited resource', 'Because clean water will vanish by itself', 'Because water makes plants shorter', 'Because clean water is not needed'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Nước ngọt dùng được chỉ chiếm một phần rất nhỏ trên Trái Đất, dùng phí sẽ khó đủ cho mọi người và sinh vật.\n📘 Ghi nhớ: Nước sạch có hạn, hãy dùng tiết kiệm.',
    explanation_en:
      '💡 Why: Usable fresh water is only a tiny part of Earth’s water, so wasting it could leave too little for people and other living things.\n📘 Remember: Clean water is limited, so use it wisely.',
  },
  {
    id: 'ear-078', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'hard',
    question_vi: 'Khí nào sinh ra khi đốt than đá và dầu, góp phần làm Trái Đất nóng lên?',
    question_en: 'Which gas, released when coal and oil are burned, helps warm the planet?',
    options_vi: ['Khí oxi', 'Khí CO2', 'Khí nitơ', 'Khí heli'],
    options_en: ['Oxygen', 'Carbon dioxide (CO2)', 'Nitrogen', 'Helium'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Đốt than đá và dầu sinh ra khí CO2, khí này giữ nhiệt trong không khí như một tấm chăn nên Trái Đất ấm lên.\n📘 Ghi nhớ: Đốt nhiên liệu thải CO2, vì vậy cần tiết kiệm điện và nhiên liệu.',
    explanation_en:
      '💡 Why: Burning coal and oil releases CO2, which holds heat in the air like a blanket and warms the planet.\n📘 Remember: Burning fuel releases CO2, so we should save electricity and fuel.',
  },
  {
    id: 'ear-079', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'easy',
    question_vi: 'Vì sao nên tắt đèn khi ra khỏi phòng?',
    question_en: 'Why should you switch off lights when you leave a room?',
    options_vi: ['Để bóng đèn đỡ nóng', 'Để đèn khỏi mệt', 'Để tiết kiệm điện', 'Để căn phòng tối cho đẹp hơn'],
    options_en: ['So the bulb gets less hot', 'So the light does not get tired', 'To save electricity', 'To make the room darker and nicer'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Điện được tạo ra từ nhiên liệu và các tài nguyên khác, nên đèn sáng mà không ai dùng là lãng phí.\n📘 Ghi nhớ: Tắt đèn khi ra khỏi phòng để tiết kiệm điện.',
    explanation_en:
      '💡 Why: Electricity is made from fuels and other resources, so a light left on when nobody is using it is wasteful.\n📘 Remember: Switch off lights when you leave to save electricity.',
  },
  {
    id: 'ear-080', topic: 'earth', subtopic: 'landforms', difficulty: 'easy', illustrationId: 'landforms',
    question_vi: 'Vùng đất cao nhô lên rất cao khỏi mặt đất được gọi là gì?',
    question_en: 'What is a very high area of land rising above the ground called?',
    options_vi: ['Biển', 'Sông', 'Hồ', 'Núi'],
    options_en: ['A sea', 'A river', 'A lake', 'A mountain'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Núi là khối đất đá nhô lên rất cao so với vùng xung quanh, còn biển, sông, hồ là nơi chứa nước.\n📘 Ghi nhớ: Núi là vùng đất cao nhô lên.',
    explanation_en:
      '💡 Why: A mountain is a mass of land and rock that rises far above its surroundings, while seas, rivers and lakes hold water.\n📘 Remember: A mountain is high land that rises up.',
  },
  {
    id: 'ear-081', topic: 'earth', subtopic: 'landforms', difficulty: 'medium', illustrationId: 'landforms',
    question_vi: 'Sông thường chảy theo hướng nào?',
    question_en: 'Which way does a river usually flow?',
    options_vi: ['Từ núi cao xuống nơi thấp rồi ra biển', 'Từ biển chảy ngược lên đỉnh núi', 'Từ đồng bằng chảy lên đồi cao', 'Đứng yên một chỗ không chảy'],
    options_en: ['From high mountains down to low land and the sea', 'From the sea backwards up the mountain', 'From the plain flowing uphill to the hills', 'It stays in one place and never flows'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Nước luôn chảy từ chỗ cao xuống chỗ thấp. Nước mưa từ núi tụ lại thành sông rồi cuối cùng đổ ra biển hoặc hồ.\n📘 Ghi nhớ: Sông chảy từ cao xuống thấp.',
    explanation_en:
      '💡 Why: Water always runs from higher ground to lower ground. Rain from the mountains gathers into rivers and finally flows into the sea or a lake.\n📘 Remember: Rivers flow downhill.',
  },
  {
    id: 'ear-082', topic: 'earth', subtopic: 'landforms', difficulty: 'medium', illustrationId: 'volcano',
    question_vi: 'Núi lửa là gì?',
    question_en: 'What is a volcano?',
    options_vi: ['Ngọn đồi phủ đầy tuyết trắng', 'Chỗ vỏ Trái Đất phun ra dung nham', 'Hòn đảo nổi trôi trên biển', 'Cái hồ đầy nước rất nóng'],
    options_en: ['A tall hill covered in white snow', 'A vent where Earth’s crust spews lava', 'A small island drifting on the sea', 'A pool filled with very hot water'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Núi lửa là nơi magma nóng từ sâu trong lòng đất theo lỗ hở trồi lên và phun ra. Khi chảy ra mặt đất, nó gọi là dung nham.\n📘 Ghi nhớ: Núi lửa phun dung nham và khí.',
    explanation_en:
      '💡 Why: A volcano is where hot magma from deep inside Earth rises through an opening and erupts. Once it flows onto the ground it is called lava.\n📘 Remember: A volcano erupts lava and gas.',
  },
  {
    id: 'ear-083', topic: 'earth', subtopic: 'landforms', difficulty: 'hard',
    question_vi: 'Động đất thường xảy ra khi nào?',
    question_en: 'When do earthquakes usually happen?',
    options_vi: ['Khi có gió bão thổi rất mạnh', 'Khi mưa rơi rất nhiều ngày', 'Khi các mảng đá ngầm trượt đột ngột', 'Khi Mặt Trời mọc lên vào sáng sớm'],
    options_en: ['When a strong storm wind blows', 'When rain falls for many days', 'When rock plates underground suddenly slip', 'When the Sun comes up at dawn'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Vỏ Trái Đất gồm nhiều mảng đá lớn. Khi chúng trượt hoặc va nhau đột ngột, năng lượng bung ra làm mặt đất rung chuyển.\n📘 Ghi nhớ: Động đất do các mảng đá dịch chuyển, không do mưa hay gió.',
    explanation_en:
      '💡 Why: Earth’s crust is made of large rock plates. When they slip or bump suddenly, energy is released and the ground shakes.\n📘 Remember: Earthquakes come from moving rock plates, not from rain or wind.',
  },
  {
    id: 'ear-084', topic: 'earth', subtopic: 'landforms', difficulty: 'easy', illustrationId: 'landforms',
    question_vi: 'Vùng đất bằng phẳng, rộng lớn và ít đồi núi được gọi là gì?',
    question_en: 'What is a large, flat area of land with few hills or mountains called?',
    options_vi: ['Thác nước', 'Vực sâu', 'Hang động', 'Đồng bằng'],
    options_en: ['A waterfall', 'A deep canyon', 'A cave', 'A plain'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Đồng bằng thấp và phẳng, lại được sông bồi đắp đất phù sa màu mỡ nên thích hợp để trồng lúa và rau.\n📘 Ghi nhớ: Đồng bằng là vùng đất rộng, bằng phẳng.',
    explanation_en:
      '💡 Why: A plain is low and flat, and rivers build it up with rich soil, so it suits growing rice and vegetables.\n📘 Remember: A plain is a wide, flat area of land.',
  },
  {
    id: 'ear-085', topic: 'earth', subtopic: 'planets-order', difficulty: 'easy', illustrationId: 'planets-order',
    question_vi: 'Hành tinh nào gần Mặt Trời nhất?',
    question_en: 'Which planet is closest to the Sun?',
    options_vi: ['Sao Thủy', 'Sao Kim', 'Trái Đất', 'Sao Hỏa'],
    options_en: ['Mercury', 'Venus', 'Earth', 'Mars'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Sao Thủy đi quanh Mặt Trời trên quỹ đạo nhỏ nhất, nên nó là hành tinh gần Mặt Trời nhất.\n📘 Ghi nhớ: Thứ tự từ Mặt Trời: Sao Thủy, Sao Kim, Trái Đất, Sao Hỏa.',
    explanation_en:
      '💡 Why: Mercury travels round the Sun on the smallest orbit, so it is the planet closest to the Sun.\n📘 Remember: The order from the Sun is Mercury, Venus, Earth, Mars.',
  },
  {
    id: 'ear-086', topic: 'earth', subtopic: 'planets-order', difficulty: 'medium', illustrationId: 'planets-order',
    question_vi: 'Tính từ Mặt Trời, Trái Đất là hành tinh thứ mấy?',
    question_en: 'Counting from the Sun, which number is Earth?',
    options_vi: ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm'],
    options_en: ['Second', 'Third', 'Fourth', 'Fifth'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Đếm từ Mặt Trời: Sao Thủy là thứ nhất, Sao Kim là thứ hai, rồi đến Trái Đất là thứ ba.\n📘 Ghi nhớ: Trái Đất là hành tinh thứ ba tính từ Mặt Trời.',
    explanation_en:
      '💡 Why: Counting from the Sun, Mercury is first, Venus is second and then comes Earth as third.\n📘 Remember: Earth is the third planet from the Sun.',
  },
  {
    id: 'ear-087', topic: 'earth', subtopic: 'planets-order', difficulty: 'medium',
    question_vi: 'Hành tinh nào nổi tiếng với những vành đai sáng đẹp quanh mình?',
    question_en: 'Which planet is famous for its bright rings?',
    options_vi: ['Sao Hỏa', 'Sao Thủy', 'Sao Thổ', 'Sao Kim'],
    options_en: ['Mars', 'Mercury', 'Saturn', 'Venus'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Vành đai của Sao Thổ gồm vô số hạt băng và đá phản chiếu ánh Mặt Trời nên trông sáng và đẹp.\n📘 Ghi nhớ: Sao Thổ nổi tiếng với vành đai.',
    explanation_en:
      '💡 Why: Saturn’s rings are made of countless pieces of ice and rock that reflect sunlight, so they look bright and beautiful.\n📘 Remember: Saturn is famous for its rings.',
  },
  {
    id: 'ear-088', topic: 'earth', subtopic: 'planets-order', difficulty: 'hard',
    question_vi: 'Sao Kim thường được gọi là gì vì ta hay thấy nó sáng rực trước khi Mặt Trời mọc hoặc sau khi Mặt Trời lặn?',
    question_en: 'What is Venus often called, because we often see it shining brightly before sunrise or after sunset?',
    options_vi: ['Sao Băng hoặc sao Chổi', 'Sao Bắc Cực hoặc Bắc Đẩu', 'Sao Thổ hoặc sao Mộc', 'Sao Mai hoặc sao Hôm'],
    options_en: ['A shooting star or a comet', 'The North Star or the Big Dipper', 'Saturn or Jupiter', 'The morning or evening star'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Sao Kim phản chiếu ánh Mặt Trời rất mạnh và luôn ở gần Mặt Trời trên bầu trời, nên ta chỉ thấy nó ngay trước bình minh hoặc sau hoàng hôn.\n📘 Ghi nhớ: Sao Mai hay sao Hôm thật ra là Sao Kim.',
    explanation_en:
      '💡 Why: Venus reflects sunlight very strongly and stays close to the Sun in our sky, so we only see it just before sunrise or just after sunset.\n📘 Remember: The morning star or evening star is really Venus.',
  },
  {
    id: 'ear-089', topic: 'earth', subtopic: 'sun', difficulty: 'easy',
    question_vi: 'Mặt Trời mọc ở hướng nào?',
    question_en: 'Which direction does the Sun rise in?',
    options_vi: ['Hướng đông', 'Hướng tây', 'Hướng bắc', 'Hướng nam'],
    options_en: ['East', 'West', 'North', 'South'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất tự quay từ tây sang đông nên Mặt Trời có vẻ mọc ở phía đông rồi lặn ở phía tây.\n📘 Ghi nhớ: Mặt Trời mọc ở hướng đông.',
    explanation_en:
      '💡 Why: Earth spins from west to east, so the Sun seems to rise in the east and set in the west.\n📘 Remember: The Sun rises in the east.',
  },
  {
    id: 'ear-090', topic: 'earth', subtopic: 'sun', difficulty: 'medium',
    question_vi: 'So với Trái Đất, Mặt Trời như thế nào?',
    question_en: 'Compared with Earth, how big is the Sun?',
    options_vi: ['Nhỏ hơn Trái Đất', 'Lớn hơn rất nhiều', 'Bằng nhau', 'Lớn hơn một chút'],
    options_en: ['Smaller than Earth', 'Much bigger', 'The same size', 'A little bigger'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Thể tích Mặt Trời lớn hơn Trái Đất hơn một triệu lần, nên Mặt Trời lớn hơn rất nhiều.\n📘 Ghi nhớ: Mặt Trời có thể chứa hơn một triệu Trái Đất.',
    explanation_en:
      '💡 Why: The Sun’s volume is more than a million times Earth’s, so the Sun is far bigger.\n📘 Remember: The Sun could hold more than a million Earths.',
  },
  {
    id: 'ear-091', topic: 'earth', subtopic: 'sun', difficulty: 'hard',
    question_vi: 'Vì sao có thể nói Mặt Trời là một quả cầu khí?',
    question_en: 'Why can the Sun be described as a ball of gas?',
    options_vi: ['Vì trên bề mặt có rất nhiều nước', 'Vì trên bề mặt có cây cỏ mọc lên', 'Vì nó gồm khí nóng, không có đất đá rắn', 'Vì nó được làm hoàn toàn bằng sắt đặc'],
    options_en: ['Because it has a lot of water on top', 'Because grass grows on its surface', 'Because it is hot gas with no solid rocky ground', 'Because it is made entirely of solid iron'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Mặt Trời chủ yếu gồm hiđrô và heli ở thể khí, nóng dữ dội, nên không có mặt đất rắn để đứng lên như Trái Đất.\n📘 Ghi nhớ: Mặt Trời là quả cầu khí nóng, không phải khối đá.',
    explanation_en:
      '💡 Why: The Sun is mainly hydrogen and helium gas and is extremely hot, so it has no solid ground to stand on like Earth.\n📘 Remember: The Sun is a ball of hot gas, not a lump of rock.',
  },
  {
    id: 'ear-092', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'medium',
    question_vi: 'Ở miền Bắc Việt Nam, mùa xuân thường có đặc điểm gì?',
    question_en: 'In northern Vietnam, what is spring usually like?',
    options_vi: ['Lá rụng đầy và trời lạnh nhất năm', 'Tuyết rơi dày phủ khắp mọi nơi', 'Trời nóng gắt, nắng chói chang', 'Cây đâm chồi và trời ấm dần lên'],
    options_en: ['Leaves fall and it is the coldest time', 'Thick snow covers everything', 'The weather is scorching hot', 'Trees put out buds and it gets warmer'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Sau mùa đông lạnh, trời ấm dần nên cây có điều kiện đâm chồi nảy lộc.\n📘 Ghi nhớ: Mùa xuân cây cối hồi sinh và trời ấm lên.',
    explanation_en:
      '💡 Why: After the cold winter the weather slowly warms, which lets trees put out buds and new leaves.\n📘 Remember: In spring plants wake up and the weather warms.',
  },
  {
    id: 'ear-093', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'medium',
    question_vi: 'Vào mùa thu ở miền Bắc Việt Nam, nhiều lá cây đổi màu vàng. Vì sao?',
    question_en: 'In autumn in northern Vietnam, many leaves turn yellow. Why?',
    options_vi: ['Vì lá mất dần màu xanh khi trời lạnh', 'Vì mưa nhuộm lá thành màu vàng', 'Vì sâu ăn hết màu xanh của lá', 'Vì lá cây thích đổi sang áo mới'],
    options_en: ['Because leaves lose their green as it gets cooler', 'Because rain dyes the leaves yellow', 'Because insects eat the green from the leaves', 'Because the leaves like to wear a new coat'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Lá xanh nhờ một chất màu xanh. Khi trời lạnh và ngày ngắn, lá ngừng tạo chất này nên màu vàng vốn có sẵn lộ ra.\n📘 Ghi nhớ: Lá đổi màu vì trời lạnh, không phải vì mưa hay sâu.',
    explanation_en:
      '💡 Why: Leaves are green because of a green substance. When it turns cool and days shorten, leaves stop making it, so the yellow already inside shows.\n📘 Remember: Leaves change colour because of cooler weather, not rain or insects.',
  },
  {
    id: 'ear-094', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'hard',
    question_vi: 'Vì sao Trái Đất có các mùa trong năm?',
    question_en: 'Why does Earth have seasons?',
    options_vi: ['Vì Mặt Trời tự bật tắt theo mùa', 'Vì trục quay của Trái Đất bị nghiêng', 'Vì Mặt Trăng che Mặt Trời mỗi năm', 'Vì Trái Đất ngừng quay vào mùa đông'],
    options_en: ['Because the Sun switches on and off', 'Because Earth’s axis is tilted', 'Because the Moon blocks the Sun each year', 'Because Earth stops spinning in winter'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Trục Trái Đất nghiêng nên khi một nửa cầu ngả về phía Mặt Trời, nó nhận nắng trực tiếp hơn và ngày dài hơn, đó là mùa hè.\n📘 Ghi nhớ: Mùa do trục Trái Đất nghiêng, không phải do Mặt Trời đổi sáng.',
    explanation_en:
      '💡 Why: Earth’s axis is tilted, so when one half leans towards the Sun it gets more direct sunlight and longer days, which is summer.\n📘 Remember: Seasons come from Earth’s tilt, not from the Sun changing.',
  },
  {
    id: 'ear-095', topic: 'earth', subtopic: 'planets-order', difficulty: 'medium',
    question_vi: 'Trên hành tinh nào, nhiệt độ bề mặt cao nhất trong Hệ Mặt Trời?',
    question_en: 'On which planet is the surface hottest in the Solar System?',
    options_vi: ['Sao Kim', 'Sao Thủy', 'Sao Hỏa', 'Sao Thiên Vương'],
    options_en: ['Venus', 'Mercury', 'Mars', 'Uranus'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Sao Kim có lớp khí dày giữ nhiệt rất mạnh, nên nóng hơn cả Sao Thủy dù xa Mặt Trời hơn.\n📘 Ghi nhớ: Sao Kim nóng nhất vì khí dày giữ nhiệt.',
    explanation_en:
      '💡 Why: Venus has a thick blanket of gas that traps heat very strongly, so it is hotter than Mercury even though it is farther from the Sun.\n📘 Remember: Venus is hottest because its thick air traps heat.',
  },
  {
    id: 'ear-096', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium',
    question_vi: 'Cây đưa hơi nước vào không khí qua bộ phận nào?',
    question_en: 'Through which part of a plant does water vapour go into the air?',
    options_vi: ['Lá', 'Rễ', 'Thân', 'Quả'],
    options_en: ['Leaves', 'Roots', 'Stem', 'Fruit'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Rễ hút nước lên lá, rồi một phần nước bay hơi qua các lỗ rất nhỏ trên lá và đi vào không khí.\n📘 Ghi nhớ: Cây thải hơi nước chủ yếu qua lá.',
    explanation_en:
      '💡 Why: Roots draw water up to the leaves, and some of it evaporates through tiny pores in the leaves into the air.\n📘 Remember: Plants give off water vapour mainly through their leaves.',
  },
  {
    id: 'ear-097', topic: 'earth', subtopic: 'water-cycle', difficulty: 'easy',
    question_vi: 'Nước ngầm là gì?',
    question_en: 'What is groundwater?',
    options_vi: ['Nước mưa đang chảy trên mặt đất', 'Nước biển nằm sâu dưới đáy đại dương', 'Nước thấm xuống và tích trong đất đá', 'Nước đọng lại trong các đám mây'],
    options_en: ['Rainwater running over the surface', 'Sea water deep under the ocean', 'Water soaked into soil and rock layers', 'Water held inside the clouds'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước mưa thấm xuống qua đất và đá rồi tích lại bên dưới, nên gọi là nước ngầm. Người ta khoan giếng để lấy nước đó.\n📘 Ghi nhớ: Nước ngầm nằm dưới mặt đất.',
    explanation_en:
      '💡 Why: Rainwater soaks down through soil and rock and collects underneath, so it is called groundwater. People drill wells to reach it.\n📘 Remember: Groundwater lies below the ground.',
  },
  {
    id: 'ear-098', topic: 'earth', subtopic: 'water-cycle', difficulty: 'medium',
    question_vi: 'Khi hơi nước trên cao bị lạnh xuống dưới 0 độ C, nó có thể tạo thành gì?',
    question_en: 'When water vapour high in the air cools below 0 °C, what can it form?',
    options_vi: ['Khói', 'Khí nóng', 'Nước sôi', 'Tuyết'],
    options_en: ['Smoke', 'Hot air', 'Boiling water', 'Snow'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Dưới 0 độ C hơi nước trên cao đóng băng thành các tinh thể nhỏ rồi rơi xuống thành tuyết. Lạnh không thể tạo ra khí nóng, nước sôi hay khói.\n📘 Ghi nhớ: Hơi nước gặp lạnh dưới 0 độ C thành băng tuyết.',
    explanation_en:
      '💡 Why: Below 0 °C, water vapour high up freezes into tiny crystals that fall as snow. Cold cannot make hot air, boiling water or smoke.\n📘 Remember: Water vapour that gets colder than 0 °C becomes ice and snow.',
  },
  {
    id: 'ear-099', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Vì sao sỏi, cát và bụi có kích thước khác nhau?',
    question_en: 'Why do pebbles, sand and dust have different sizes?',
    options_vi: ['Vì đá bị mài mòn nhiều ít khác nhau', 'Vì cát được sinh ra từ cây cối', 'Vì sỏi bay lên rồi rơi xuống', 'Vì nước làm sỏi to dần lên mãi'],
    options_en: ['Because rock is worn down by different amounts', 'Because sand is made by trees', 'Because pebbles fly up and fall back', 'Because water makes pebbles grow bigger'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Đá bị vỡ và mài mòn qua thời gian dài. Mảnh lớn thành sỏi, mảnh nhỏ thành cát, mảnh rất nhỏ thành bụi.\n📘 Ghi nhớ: Đá mòn càng nhiều thì hạt càng nhỏ.',
    explanation_en:
      '💡 Why: Rock is broken and worn down over a long time. Big pieces become pebbles, smaller ones become sand and the tiniest become dust.\n📘 Remember: The more a rock is worn away, the smaller the grains.',
  },
  {
    id: 'ear-100', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Đất bị xói mòn khi nào?',
    question_en: 'When does soil get washed away?',
    options_vi: ['Khi trời nắng chang chang cả ngày', 'Khi mưa lớn cuốn đất mặt ở nơi trống', 'Khi đàn chim bay ngang qua đồng', 'Khi đất được phủ kín cây xanh'],
    options_en: ['When the Sun shines hard all day', 'When heavy rain washes bare topsoil away', 'When a flock of birds flies over', 'When the ground is covered with plants'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Rễ cây giữ đất và lá che mưa. Ở nơi đất trống, mưa lớn dễ cuốn trôi lớp đất mặt màu mỡ.\n📘 Ghi nhớ: Trồng cây giúp chống xói mòn.',
    explanation_en:
      '💡 Why: Roots hold soil together and leaves shield it from rain. On bare ground, heavy rain easily washes away the fertile topsoil.\n📘 Remember: Planting trees helps stop soil erosion.',
  },
  {
    id: 'ear-101', topic: 'earth', subtopic: 'rocks-soil', difficulty: 'medium',
    question_vi: 'Vì sao đá cuội ở sông thường tròn và nhẵn?',
    question_en: 'Why are pebbles in a river usually round and smooth?',
    options_vi: [
      'Vì người ta gọt chúng cho tròn',
      'Vì chúng mọc lên từ đáy sông',
      'Vì nước làm chúng cọ vào nhau, mòn dần',
      'Vì chúng bị đóng băng thành hình tròn',
    ],
    options_en: [
      'Because people carve them into round shapes',
      'Because they grow up from the bottom of the river',
      'Because water rubs them together until smooth',
      'Because the cold freezes them into round shapes',
    ],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước sông cuốn đá cuội đi, chúng cọ vào nhau và vào đáy sông qua nhiều năm nên các góc cạnh mòn dần thành nhẵn tròn.\n📘 Ghi nhớ: Nước chảy làm đá mòn nhẵn.',
    explanation_en:
      '💡 Why: River water rolls pebbles along, so they rub against each other and the river bed for years, wearing their sharp corners down smooth and round.\n📘 Remember: Flowing water wears stones smooth.',
  },
  {
    id: 'ear-102', topic: 'earth', subtopic: 'earth-shape', difficulty: 'easy',
    question_vi: 'Trái Đất quay một vòng quanh Mặt Trời mất khoảng bao lâu?',
    question_en: 'About how long does Earth take to go once around the Sun?',
    options_vi: ['Khoảng một ngày', 'Khoảng một giờ', 'Khoảng một tuần', 'Khoảng một năm'],
    options_en: ['About one day', 'About one hour', 'About one week', 'About one year'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Trái Đất đi hết một vòng quanh Mặt Trời trong khoảng 365 ngày, và khoảng thời gian đó chính là một năm.\n📘 Ghi nhớ: Một vòng quanh Mặt Trời bằng một năm.',
    explanation_en:
      '💡 Why: Earth takes about 365 days to go once round the Sun, and that length of time is exactly one year.\n📘 Remember: One trip around the Sun is one year.',
  },
  {
    id: 'ear-103', topic: 'earth', subtopic: 'earth-shape', difficulty: 'medium',
    question_vi: 'Lực nào giữ Trái Đất đi theo quỹ đạo quanh Mặt Trời?',
    question_en: 'Which force keeps Earth moving in an orbit around the Sun?',
    options_vi: ['Lực hút của Mặt Trời', 'Lực đẩy của gió mạnh', 'Lực từ của nam châm', 'Chẳng có lực nào cả'],
    options_en: ['The Sun’s gravity pull', 'A push from strong wind', 'A pull from a magnet', 'No force at all'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trời hút Trái Đất bằng lực hấp dẫn như một sợi dây vô hình, nên Trái Đất không bay đi mất mà đi vòng quanh nó.\n📘 Ghi nhớ: Lực hấp dẫn giữ các hành tinh trên quỹ đạo.',
    explanation_en:
      '💡 Why: The Sun pulls Earth with gravity like an invisible rope, so Earth does not fly away but travels around it.\n📘 Remember: Gravity keeps the planets in their orbits.',
  },
  {
    id: 'ear-104', topic: 'earth', subtopic: 'earth-shape', difficulty: 'hard',
    question_vi: 'Vì sao Trái Đất không rơi vào Mặt Trời?',
    question_en: 'Why does Earth not fall into the Sun?',
    options_vi: [
      'Vì Mặt Trời luôn đẩy Trái Đất ra xa khỏi nó',
      'Vì Trái Đất lao ngang nhanh, lướt vòng qua nó',
      'Vì Trái Đất có đôi cánh khổng lồ đang vỗ',
      'Vì những đám mây giữ Trái Đất đứng lại',
    ],
    options_en: [
      'Because the Sun keeps pushing Earth away from it',
      'Because Earth rushes sideways and keeps sweeping past',
      'Because Earth has giant wings that flap',
      'Because clouds hold Earth back in place',
    ],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Trái Đất bị Mặt Trời hút nhưng đồng thời lao ngang rất nhanh, nên cứ lướt vòng qua Mặt Trời mà không rơi vào.\n📘 Ghi nhớ: Quỹ đạo là sự kết hợp giữa lực hút và chuyển động ngang.',
    explanation_en:
      '💡 Why: The Sun pulls Earth, but Earth also rushes sideways very fast, so it keeps sweeping past the Sun instead of falling into it.\n📘 Remember: An orbit combines gravity’s pull with sideways motion.',
  },
  {
    id: 'ear-105', topic: 'earth', subtopic: 'moon', difficulty: 'medium',
    question_vi: 'Các vùng tối nhìn thấy trên Mặt Trăng thật ra là gì?',
    question_en: 'What are the dark areas we can see on the Moon really made of?',
    options_vi: ['Đại dương đầy nước', 'Những khu rừng rậm', 'Đá núi lửa cổ đã nguội', 'Những dòng sông băng'],
    options_en: ['Oceans full of water', 'Forests of thick trees', 'Cooled old volcanic rock', 'Rivers of solid ice'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Các vùng tối gọi là biển Mặt Trăng, thật ra là đá núi lửa cổ đã nguội. Trên đó không có nước hay cây.\n📘 Ghi nhớ: Tên gọi là biển nhưng Mặt Trăng không có nước lỏng.',
    explanation_en:
      '💡 Why: The dark areas are called lunar seas, but they are really ancient volcanic rock that has cooled. There is no water or trees there.\n📘 Remember: They are named seas, but the Moon has no liquid water.',
  },
  {
    id: 'ear-106', topic: 'earth', subtopic: 'moon', difficulty: 'medium',
    question_vi: 'Thủy triều lên xuống trên biển có liên quan đến điều gì?',
    question_en: 'Tides that rise and fall in the sea are linked to what?',
    options_vi: ['Gió thổi trên mặt biển cả ngày', 'Động đất ở dưới đáy biển sâu', 'Chim di cư bay dọc ven biển', 'Lực hút của Mặt Trăng, Mặt Trời'],
    options_en: ['Wind blowing over the sea all day', 'Earthquakes deep under the sea', 'Seabirds migrating along the coast', 'The pull of the Moon and the Sun'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Lực hút của Mặt Trăng và Mặt Trời kéo nước biển, làm mực nước dâng lên rồi hạ xuống theo chu kỳ.\n📘 Ghi nhớ: Thủy triều do lực hút, chủ yếu từ Mặt Trăng.',
    explanation_en:
      '💡 Why: The pull of the Moon and the Sun tugs on the sea, so the water level rises and falls in cycles.\n📘 Remember: Tides come from gravity, mostly the Moon’s.',
  },
  {
    id: 'ear-107', topic: 'earth', subtopic: 'moon', difficulty: 'hard',
    question_vi: 'Nếu không có Mặt Trăng, thủy triều sẽ thay đổi thế nào?',
    question_en: 'If the Moon did not exist, how would the tides change?',
    options_vi: ['Thủy triều sẽ yếu đi nhiều', 'Thủy triều sẽ mạnh hơn nhiều', 'Biển sẽ đóng băng hoàn toàn', 'Mọi thứ vẫn như cũ'],
    options_en: ['The tides would become much weaker', 'The tides would become much stronger', 'The sea would freeze completely', 'Everything would stay the same'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mặt Trăng ở gần nên là nguyên nhân chính gây thủy triều. Không có nó, lực kéo nước biển yếu đi nhiều, chỉ còn tác động của Mặt Trời.\n📘 Ghi nhớ: Mặt Trăng gây phần lớn thủy triều.',
    explanation_en:
      '💡 Why: The Moon is close, so it is the main cause of tides. Without it, the pull on the sea would be much weaker, leaving only the Sun’s smaller effect.\n📘 Remember: The Moon causes most of the tides.',
  },
  {
    id: 'ear-108', topic: 'earth', subtopic: 'day-night', difficulty: 'hard',
    question_vi: 'Vì sao có nơi gần cực Bắc có vài tháng liên tục là ban ngày?',
    question_en: 'Why do places near the North Pole have days of daylight lasting for months?',
    options_vi: ['Vì ở đó người ta bật đèn khắp nơi', 'Vì trục nghiêng nên Mặt Trời không lặn', 'Vì Trái Đất tạm ngừng quay vài tháng', 'Vì mây dày che mất cả ban đêm đó'],
    options_en: ['Because people switch lights on everywhere there', 'Because the tilt keeps the Sun from setting then', 'Because Earth pauses its spin for months', 'Because thick clouds hide the whole night'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Trục Trái Đất nghiêng nên vùng gần cực có những tháng mùa hè Mặt Trời không lặn, và mùa đông thì Mặt Trời không mọc.\n📘 Ghi nhớ: Gần cực có mùa hè ngày kéo dài, mùa đông đêm kéo dài.',
    explanation_en:
      '💡 Why: Earth’s axis is tilted, so near the poles there are summer months when the Sun does not set and winter months when it does not rise.\n📘 Remember: Near the poles summer has endless day and winter has endless night.',
  },
  {
    id: 'ear-109', topic: 'earth', subtopic: 'day-night', difficulty: 'medium',
    question_vi: 'Mặt Trời mọc ở thành phố phía đông sớm hơn hay muộn hơn ở thành phố phía tây?',
    question_en: 'Does the Sun rise earlier or later in a city in the east than in a city in the west?',
    options_vi: ['Sớm hơn', 'Muộn hơn', 'Cùng một lúc', 'Chỉ mọc vào buổi trưa'],
    options_en: ['Earlier', 'Later', 'At the same moment', 'Only at midday'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Trái Đất quay từ tây sang đông nên các nơi ở phía đông đón Mặt Trời trước, vì vậy Mặt Trời mọc ở đó sớm hơn.\n📘 Ghi nhớ: Càng về phía đông, ngày mới đến càng sớm.',
    explanation_en:
      '💡 Why: Earth spins from west to east, so places in the east turn towards the Sun first, and the Sun rises there earlier.\n📘 Remember: The farther east, the earlier the new day arrives.',
  },
  {
    id: 'ear-110', topic: 'earth', subtopic: 'day-night', difficulty: 'easy',
    question_vi: 'Vào buổi chiều tối, Mặt Trời lặn ở hướng nào?',
    question_en: 'In the evening, which direction does the Sun set in?',
    options_vi: ['Hướng bắc', 'Hướng nam', 'Hướng đông', 'Hướng tây'],
    options_en: ['North', 'South', 'East', 'West'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Trái Đất quay từ tây sang đông nên Mặt Trời có vẻ lặn ở phía tây, ngược hướng với nơi nó mọc.\n📘 Ghi nhớ: Mặt Trời mọc ở đông, lặn ở tây.',
    explanation_en:
      '💡 Why: Earth spins from west to east, so the Sun seems to set in the west, the opposite direction from where it rises.\n📘 Remember: The Sun rises in the east and sets in the west.',
  },
  {
    id: 'ear-111', topic: 'earth', subtopic: 'shadows-time', difficulty: 'easy',
    question_vi: 'Đồng hồ mặt trời dùng gì để báo giờ?',
    question_en: 'What does a sundial use to show the time?',
    options_vi: ['Bóng của một thanh dựng đứng', 'Âm thanh của tiếng chuông', 'Ánh sáng của một ngọn đèn', 'Màu sắc của cả bầu trời'],
    options_en: ['The shadow of an upright stick', 'The sound of a bell ringing', 'The light from a lamp', 'The colour of the whole sky'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Khi Mặt Trời di chuyển trên trời, bóng của thanh dựng đứng cũng đổi hướng và độ dài. Nhìn vị trí bóng ta biết giờ.\n📘 Ghi nhớ: Đồng hồ mặt trời đo giờ bằng bóng.',
    explanation_en:
      '💡 Why: As the Sun moves across the sky, the shadow of the upright stick changes direction and length. The shadow’s position tells the time.\n📘 Remember: A sundial tells time with a shadow.',
  },
  {
    id: 'ear-112', topic: 'earth', subtopic: 'shadows-time', difficulty: 'medium',
    question_vi: 'Chiếu đèn pin vào vật nào thì bóng đổ ra đậm và rõ nhất?',
    question_en: 'Shining a torch on which object makes the darkest, clearest shadow?',
    options_vi: ['Kính trong suốt', 'Tấm gỗ dày', 'Túi nilon trong', 'Cốc nước trong'],
    options_en: ['Clear glass', 'A thick wooden board', 'A clear plastic bag', 'A glass of clear water'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Gỗ không cho ánh sáng đi xuyên qua nên chặn hết ánh sáng và tạo bóng đậm. Vật trong suốt cho ánh sáng đi qua nên gần như không có bóng.\n📘 Ghi nhớ: Vật càng cản sáng thì bóng càng đậm.',
    explanation_en:
      '💡 Why: Wood lets no light pass through, so it blocks all the light and makes a dark shadow. Clear objects let light through, so they make almost no shadow.\n📘 Remember: The more an object blocks light, the darker its shadow.',
  },
  {
    id: 'ear-113', topic: 'earth', subtopic: 'shadows-time', difficulty: 'hard',
    question_vi: 'Vào buổi sáng sớm, bóng của một cái cây có thể dài hơn chiều cao của cây không?',
    question_en: 'Can a tree’s shadow be longer than the tree itself early in the morning?',
    options_vi: ['Không, bóng luôn ngắn hơn cây', 'Chỉ dài đúng bằng chiều cao cây', 'Có, vì lúc đó Mặt Trời còn rất thấp', 'Sáng sớm cây không hề có bóng'],
    options_en: ['No, a shadow is always shorter than the tree', 'Only exactly as long as the tree is tall', 'Yes, because the Sun is still very low then', 'A tree has no shadow in the early morning'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Lúc sáng sớm Mặt Trời còn rất thấp, tia nắng chiếu gần như ngang mặt đất nên bóng kéo rất dài, có thể dài hơn cả cái cây.\n📘 Ghi nhớ: Mặt Trời càng thấp thì bóng càng dài.',
    explanation_en:
      '💡 Why: Early in the morning the Sun is very low and its rays come in almost level with the ground, so the shadow stretches far and can be longer than the tree.\n📘 Remember: The lower the Sun, the longer the shadow.',
  },
  {
    id: 'ear-114', topic: 'earth', subtopic: 'stars-sky', difficulty: 'medium',
    question_vi: 'Sao băng là gì?',
    question_en: 'What is a shooting star?',
    options_vi: ['Một ngôi sao đang rơi xuống Trái Đất', 'Ánh đèn của một chiếc máy bay', 'Một phần của Mặt Trăng rơi ra', 'Đá vụn vũ trụ cháy sáng trên cao'],
    options_en: ['A star that is falling to Earth', 'The light of a passing aeroplane', 'A piece of the Moon breaking off', 'Space rock burning up in the air'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Sao băng là mảnh đá vụn nhỏ lao vào khí quyển rất nhanh. Ma sát với không khí làm nó nóng lên và cháy sáng thành một vệt ngắn.\n📘 Ghi nhớ: Sao băng không phải là ngôi sao thật.',
    explanation_en:
      '💡 Why: A shooting star is a small piece of space rock rushing into the atmosphere very fast. Friction with the air heats it until it glows and burns up in a short streak.\n📘 Remember: A shooting star is not a real star.',
  },
  {
    id: 'ear-115', topic: 'earth', subtopic: 'stars-sky', difficulty: 'hard',
    question_vi: 'Vì sao các ngôi sao có màu xanh, vàng hoặc đỏ khác nhau?',
    question_en: 'Why do stars appear blue, yellow or red?',
    options_vi: ['Vì nhiệt độ bề mặt mỗi sao khác nhau', 'Vì các ngôi sao được sơn màu khác nhau', 'Vì sao màu đỏ ở gần Trái Đất hơn', 'Vì mây tô màu lên các ngôi sao'],
    options_en: ['Because their surface temperatures differ', 'Because stars are painted in different colours', 'Because red stars are nearer to Earth', 'Because clouds colour the stars'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Màu của sao cho biết nhiệt độ bề mặt: sao xanh rất nóng, sao vàng vừa phải, sao đỏ mát hơn.\n📘 Ghi nhớ: Màu của sao do nhiệt độ, không do sơn hay khoảng cách.',
    explanation_en:
      '💡 Why: A star’s colour shows its surface temperature: blue stars are very hot, yellow ones are medium and red ones are cooler.\n📘 Remember: Star colour comes from temperature, not paint or distance.',
  },
  {
    id: 'ear-116', topic: 'earth', subtopic: 'air-wind', difficulty: 'medium',
    question_vi: 'Vì sao khi có gió thổi, ta cảm thấy mát hơn lúc đổ mồ hôi?',
    question_en: 'Why do we feel cooler when wind blows over sweat on our skin?',
    options_vi: ['Gió thổi làm da nóng lên thêm', 'Gió làm mồ hôi bay hơi nhanh hơn', 'Gió làm lớp mồ hôi dày thêm', 'Gió làm cơ thể nặng thêm đôi chút'],
    options_en: ['Wind warms up the skin even more', 'Wind makes sweat evaporate faster', 'Wind makes the layer of sweat thicker', 'Wind makes the body a bit heavier'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Khi mồ hôi bay hơi, nó lấy nhiệt từ da. Gió làm mồ hôi bay hơi nhanh hơn nên ta thấy mát hơn.\n📘 Ghi nhớ: Bay hơi làm mát cơ thể.',
    explanation_en:
      '💡 Why: When sweat evaporates, it takes heat from the skin. Wind makes the sweat evaporate faster, so we feel cooler.\n📘 Remember: Evaporation cools the body.',
  },
  {
    id: 'ear-117', topic: 'earth', subtopic: 'air-wind', difficulty: 'medium',
    question_vi: 'Dụng cụ dùng để đo tốc độ gió gọi là gì?',
    question_en: 'What is the tool that measures wind speed called?',
    options_vi: ['Nhiệt kế', 'Cân đồng hồ', 'Máy đo gió', 'Thước dây'],
    options_en: ['A thermometer', 'A kitchen scale', 'An anemometer', 'A tape measure'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Máy đo gió có các cốc hứng gió và quay tròn. Gió càng mạnh thì các cốc quay càng nhanh.\n📘 Ghi nhớ: Máy đo gió dùng để đo tốc độ gió; nhiệt kế đo nhiệt độ.',
    explanation_en:
      '💡 Why: An anemometer has cups that catch the wind and spin. The stronger the wind, the faster the cups turn.\n📘 Remember: An anemometer measures wind speed; a thermometer measures temperature.',
  },
  {
    id: 'ear-118', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'easy',
    question_vi: 'Vì sao nên phân loại rác trước khi bỏ đi?',
    question_en: 'Why should rubbish be sorted before it is thrown away?',
    options_vi: ['Để thùng rác có mùi thơm hơn', 'Để rác bay được xa hơn nữa', 'Để không cần dùng thùng rác nữa', 'Để tái chế được nhiều rác hơn'],
    options_en: ['To make the bin smell nicer', 'To let rubbish fly even further', 'So that no bins are needed any more', 'To recycle more of the rubbish'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Giấy, nhựa và kim loại chỉ tái chế được khi được tách riêng, nên phân loại giúp tiết kiệm tài nguyên và giảm ô nhiễm.\n📘 Ghi nhớ: Phân loại rác để tái chế.',
    explanation_en:
      '💡 Why: Paper, plastic and metal can only be recycled when they are kept apart, so sorting saves resources and reduces pollution.\n📘 Remember: Sort rubbish so it can be recycled.',
  },
  {
    id: 'ear-119', topic: 'earth', subtopic: 'resources-pollution', difficulty: 'medium',
    question_vi: 'Năng lượng mặt trời, gió và nước là loại nguồn gì?',
    question_en: 'What kind of sources are solar, wind and water energy?',
    options_vi: ['Năng lượng tái tạo', 'Năng lượng hóa thạch', 'Rác thải', 'Vật liệu xây dựng'],
    options_en: ['Renewable energy', 'Fossil energy', 'Waste', 'Building materials'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Nắng, gió và dòng nước luôn được tự nhiên bổ sung. Khác với than và dầu có hạn, chúng không cạn đi khi được sử dụng.\n📘 Ghi nhớ: Nguồn luôn được bổ sung gọi là năng lượng tái tạo.',
    explanation_en:
      '💡 Why: Sunshine, wind and flowing water are constantly renewed by nature. Unlike coal and oil, which are limited, they do not run out when used.\n📘 Remember: Energy that nature keeps renewing is renewable energy.',
  },
  {
    id: 'ear-120', topic: 'earth', subtopic: 'landforms', difficulty: 'easy',
    question_vi: 'Thung lũng là gì?',
    question_en: 'What is a valley?',
    options_vi: ['Đỉnh núi cao nhất trong vùng', 'Vùng trũng nằm giữa hai sườn núi', 'Hòn đảo nằm giữa dòng sông', 'Bờ biển chỉ có cát trắng mịn'],
    options_en: ['The highest peak in an area', 'A low area between two slopes', 'An island in the middle of a river', 'A coast made only of fine white sand'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Thung lũng nằm giữa hai sườn núi hoặc đồi nên thấp hơn xung quanh, nước mưa chảy xuống đó thành suối hoặc sông.\n📘 Ghi nhớ: Thung lũng là vùng trũng thấp giữa các sườn núi.',
    explanation_en:
      '💡 Why: A valley lies between two mountain or hill slopes, so it is lower than the land around, and rain runs down into it as streams or rivers.\n📘 Remember: A valley is a low area between slopes.',
  },
  {
    id: 'ear-121', topic: 'earth', subtopic: 'landforms', difficulty: 'hard',
    question_vi: 'Hang động trong núi đá vôi thường hình thành như thế nào?',
    question_en: 'How are caves in limestone mountains usually formed?',
    options_vi: ['Gió thổi đá thành hang trong vài ngày', 'Lửa đốt cho đá bị rỗng ruột đi', 'Nước mưa làm mòn đá qua rất nhiều năm', 'Người ta đào hang vào trong núi'],
    options_en: ['Wind blows the rock into caves in days', 'Fire burns the rock until it is hollow', 'Rainwater wears the rock away over many years', 'People dig caves into the mountain'],
    correctIndex: 2,
    explanation_vi:
      '💡 Vì sao: Nước mưa hơi có tính axit nên hòa tan chút ít đá vôi. Trải qua hàng nghìn năm, đá bị khoét rỗng thành hang.\n📘 Ghi nhớ: Hang động ở núi đá vôi do nước làm mòn đá rất chậm.',
    explanation_en:
      '💡 Why: Rainwater is slightly acidic, so it dissolves a little limestone. Over thousands of years the rock is hollowed out into a cave.\n📘 Remember: Caves in limestone are made by water wearing rock away very slowly.',
  },
  {
    id: 'ear-122', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy',
    question_vi: 'Em dùng nhiệt kế để đo điều gì ngoài trời?',
    question_en: 'What do you measure outdoors with a thermometer?',
    options_vi: ['Tốc độ gió', 'Lượng mưa', 'Độ dài của bóng', 'Nhiệt độ không khí'],
    options_en: ['Wind speed', 'Amount of rain', 'Length of a shadow', 'Air temperature'],
    correctIndex: 3,
    explanation_vi:
      '💡 Vì sao: Nhiệt kế cho biết không khí nóng hay lạnh bao nhiêu độ. Gió, mưa hay bóng cần những dụng cụ khác để đo.\n📘 Ghi nhớ: Nhiệt kế đo nhiệt độ.',
    explanation_en:
      '💡 Why: A thermometer shows how hot or cold the air is in degrees. Wind, rain and shadows need other tools to measure.\n📘 Remember: A thermometer measures temperature.',
  },
  {
    id: 'ear-123', topic: 'earth', subtopic: 'weather-seasons', difficulty: 'easy',
    question_vi: 'Người dự báo thời tiết xem những gì để đoán mưa hay nắng?',
    question_en: 'What do weather forecasters look at to predict rain or sun?',
    options_vi: ['Mây, gió và nhiệt độ', 'Màu của lá cây', 'Số lượng chim trên cây', 'Tiếng động trên đường phố'],
    options_en: ['Clouds, wind and temperature', 'The colour of leaves', 'The number of birds in trees', 'Noises in the street'],
    correctIndex: 0,
    explanation_vi:
      '💡 Vì sao: Mây, gió và nhiệt độ cho biết không khí sắp thay đổi thế nào, nên người dự báo xem chúng để đoán mưa hay nắng.\n📘 Ghi nhớ: Dự báo dựa vào dữ liệu thời tiết, không dựa vào lá hay chim.',
    explanation_en:
      '💡 Why: Clouds, wind and temperature show how the air is about to change, so forecasters study them to guess rain or sun.\n📘 Remember: Forecasts use weather data, not leaves or birds.',
  },
  {
    id: 'ear-124', topic: 'earth', subtopic: 'planets-order', difficulty: 'hard',
    question_vi: 'Hành tinh cuối cùng, nằm xa Mặt Trời nhất trong tám hành tinh, có tên là gì?',
    question_en: 'What is the name of the last of the eight planets, the one farthest from the Sun?',
    options_vi: ['Sao Thổ', 'Sao Hải Vương', 'Sao Thiên Vương', 'Sao Mộc'],
    options_en: ['Saturn', 'Neptune', 'Uranus', 'Jupiter'],
    correctIndex: 1,
    explanation_vi:
      '💡 Vì sao: Sao Hải Vương đi trên quỹ đạo lớn nhất quanh Mặt Trời, nên nó xa Mặt Trời nhất và rất lạnh.\n📘 Ghi nhớ: Sao Hải Vương là hành tinh xa Mặt Trời nhất.',
    explanation_en:
      '💡 Why: Neptune travels on the biggest orbit around the Sun, so it is the farthest planet and is very cold.\n📘 Remember: Neptune is the planet farthest from the Sun.',
  },
]
