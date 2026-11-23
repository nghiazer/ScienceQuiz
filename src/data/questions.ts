import type { Question, Topic, TopicMeta } from '../types/quiz'

export const TOPICS: Record<Topic, TopicMeta> = {
  living: {
    id: 'living',
    name_vi: 'Sinh học',
    name_en: 'Living Things',
    desc_vi: 'Cây cối, con vật và thức ăn của chúng',
    desc_en: 'Plants, animals and what they eat',
    emoji: '🌱',
    gradient: 'from-green-400 to-emerald-500',
    soft: 'bg-green-100',
    text: 'text-green-800',
    ring: 'ring-green-400',
    hex: '#22c55e',
  },
  physical: {
    id: 'physical',
    name_vi: 'Vật lý & Năng lượng',
    name_en: 'Physical Science',
    desc_vi: 'Nam châm, điện, âm thanh và ánh sáng',
    desc_en: 'Magnets, electricity, sound and light',
    emoji: '🧲',
    gradient: 'from-orange-400 to-amber-500',
    soft: 'bg-amber-100',
    text: 'text-amber-800',
    ring: 'ring-amber-400',
    hex: '#f59e0b',
  },
  earth: {
    id: 'earth',
    name_vi: 'Trái đất & Vũ trụ',
    name_en: 'Earth & Space',
    desc_vi: 'Mặt Trời, Mặt Trăng và Trái Đất của chúng ta',
    desc_en: 'The Sun, the Moon and our Earth',
    emoji: '🌍',
    gradient: 'from-sky-400 to-blue-500',
    soft: 'bg-sky-100',
    text: 'text-sky-800',
    ring: 'ring-sky-400',
    hex: '#0ea5e9',
  },
  inquiry: {
    id: 'inquiry',
    name_vi: 'Tư duy thực nghiệm',
    name_en: 'Scientific Inquiry',
    desc_vi: 'Quan sát, đo đạc và làm thí nghiệm',
    desc_en: 'Observing, measuring and experimenting',
    emoji: '🔬',
    gradient: 'from-violet-400 to-purple-500',
    soft: 'bg-violet-100',
    text: 'text-violet-800',
    ring: 'ring-violet-400',
    hex: '#8b5cf6',
  },
}

export const TOPIC_ORDER: Topic[] = ['living', 'physical', 'earth', 'inquiry']

export const QUESTIONS: Question[] = [
  // ───────────────────────── SINH HỌC / LIVING THINGS ─────────────────────────
  {
    id: 'liv-01',
    topic: 'living',
    difficulty: 'easy',
    question_vi: 'Nhìn hình vòng đời của bướm. Sau giai đoạn sâu bướm (số 2) là giai đoạn nào?',
    question_en: 'Look at the butterfly life cycle. Which stage comes after the caterpillar (number 2)?',
    options_vi: ['Trứng', 'Bướm trưởng thành', 'Nhộng', 'Lại là sâu bướm'],
    options_en: ['Egg', 'Adult butterfly', 'Pupa (chrysalis)', 'Caterpillar again'],
    correctIndex: 2,
    explanation_vi:
      'Sâu bướm ăn lá và lớn lên rất nhanh. Sau đó nó làm kén thành nhộng (số 3). Bên trong nhộng, cơ thể thay đổi dần để trở thành bướm.',
    explanation_en:
      'A caterpillar eats leaves and grows fast. Then it becomes a pupa (number 3). Inside the pupa its body slowly changes into a butterfly.',
    illustrationId: 'butterfly-life-cycle',
  },
  {
    id: 'liv-02',
    topic: 'living',
    difficulty: 'medium',
    question_vi: 'Trong chuỗi thức ăn trên đồng cỏ, mũi tên chỉ về phía con vật ăn. Con ếch ăn con gì?',
    question_en: 'In this grassland food chain, each arrow points to the animal that eats. What does the frog eat?',
    options_vi: ['Cỏ', 'Rắn', 'Đại bàng', 'Châu chấu'],
    options_en: ['Grass', 'Snake', 'Eagle', 'Grasshopper'],
    correctIndex: 3,
    explanation_vi:
      'Mũi tên đi từ châu chấu đến ếch, nghĩa là ếch ăn châu chấu. Rắn lại ăn ếch, còn đại bàng ăn rắn. Cỏ là nơi bắt đầu chuỗi thức ăn.',
    explanation_en:
      'The arrow goes from the grasshopper to the frog, so the frog eats grasshoppers. The snake eats the frog and the eagle eats the snake. Grass is where the chain begins.',
    illustrationId: 'food-chain',
  },
  {
    id: 'liv-03',
    topic: 'living',
    difficulty: 'easy',
    question_vi: 'Vật nào dưới đây KHÔNG phải là sinh vật sống?',
    question_en: 'Which of these is NOT a living thing?',
    options_vi: ['Con mèo', 'Cây xương rồng', 'Hòn đá', 'Con cá'],
    options_en: ['A cat', 'A cactus', 'A rock', 'A fish'],
    correctIndex: 2,
    explanation_vi:
      'Sinh vật sống cần ăn uống, lớn lên và sinh sản. Hòn đá không ăn, không lớn lên và không sinh con, nên nó không phải sinh vật sống.',
    explanation_en:
      'Living things need food, grow and can have babies. A rock does not eat, grow or have babies, so it is not alive.',
  },
  {
    id: 'liv-04',
    topic: 'living',
    difficulty: 'easy',
    question_vi: 'Bộ phận nào của cây hút nước từ trong đất?',
    question_en: 'Which part of a plant takes in water from the soil?',
    options_vi: ['Lá', 'Hoa', 'Quả', 'Rễ'],
    options_en: ['Leaves', 'Flower', 'Fruit', 'Roots'],
    correctIndex: 3,
    explanation_vi:
      'Rễ cắm sâu trong đất và hút nước cùng chất dinh dưỡng cho cây. Rễ còn giữ cho cây đứng vững khi có gió.',
    explanation_en:
      'Roots grow deep in the soil and take in water and nutrients for the plant. Roots also hold the plant firmly when the wind blows.',
  },
  {
    id: 'liv-05',
    topic: 'living',
    difficulty: 'medium',
    question_vi: 'Con vật nào dưới đây là động vật có vú (nuôi con bằng sữa mẹ)?',
    question_en: 'Which of these animals is a mammal (feeds its babies milk)?',
    options_vi: ['Cá mập', 'Cá heo', 'Cá ngựa', 'Ếch'],
    options_en: ['Shark', 'Dolphin', 'Seahorse', 'Frog'],
    correctIndex: 1,
    explanation_vi:
      'Cá heo sống dưới nước nhưng không phải là cá. Nó thở bằng phổi và cho con bú sữa mẹ, nên là động vật có vú.',
    explanation_en:
      'A dolphin lives in water but it is not a fish. It breathes air with lungs and feeds its baby milk, so it is a mammal.',
  },
  {
    id: 'liv-06',
    topic: 'living',
    difficulty: 'easy',
    question_vi: 'Con vật nào dưới đây có 6 chân và là côn trùng?',
    question_en: 'Which of these animals has 6 legs and is an insect?',
    options_vi: ['Con kiến', 'Con nhện', 'Con ốc sên', 'Con giun đất'],
    options_en: ['Ant', 'Spider', 'Snail', 'Earthworm'],
    correctIndex: 0,
    explanation_vi:
      'Côn trùng luôn có 6 chân. Con kiến có 6 chân. Con nhện có 8 chân nên không phải côn trùng, còn ốc sên và giun đất không có chân.',
    explanation_en:
      'All insects have 6 legs. An ant has 6 legs. A spider has 8 legs so it is not an insect, and snails and earthworms have no legs.',
  },
  {
    id: 'liv-07',
    topic: 'living',
    difficulty: 'medium',
    question_vi: 'Gấu Bắc Cực có lớp lông dày và nhiều mỡ. Điều đó giúp gấu làm gì?',
    question_en: 'A polar bear has thick fur and a layer of fat. What does this help the bear do?',
    options_vi: ['Giữ ấm trong nơi rất lạnh', 'Chạy nhanh hơn', 'Bơi xuống đáy biển', 'Trốn trong sa mạc'],
    options_en: ['Stay warm in the freezing cold', 'Run faster', 'Swim to the bottom of the sea', 'Hide in the desert'],
    correctIndex: 0,
    explanation_vi:
      'Gấu Bắc Cực sống ở vùng băng giá. Lông dày và lớp mỡ giữ nhiệt cho cơ thể, nên gấu không bị lạnh. Đây là một cách thích nghi với môi trường sống.',
    explanation_en:
      'Polar bears live where it is icy. Thick fur and fat keep body heat in, so the bear does not get cold. This is called an adaptation to its home.',
  },
  {
    id: 'liv-08',
    topic: 'living',
    difficulty: 'easy',
    question_vi: 'Tất cả sinh vật sống đều cần gì để sống?',
    question_en: 'What do all living things need to stay alive?',
    options_vi: ['Chỉ cần đồ chơi', 'Chỉ cần bóng tối', 'Thức ăn, nước và không khí', 'Chỉ cần kẹo ngọt'],
    options_en: ['Only toys', 'Only darkness', 'Food, water and air', 'Only sweets'],
    correctIndex: 2,
    explanation_vi:
      'Động vật, thực vật và con người đều cần thức ăn, nước và không khí. Cây xanh tự làm thức ăn nhờ ánh sáng mặt trời, còn động vật phải đi tìm thức ăn.',
    explanation_en:
      'Animals, plants and people all need food, water and air. Green plants make their own food using sunlight, while animals must find food.',
  },

  // ───────────────────────── VẬT LÝ & NĂNG LƯỢNG / PHYSICAL SCIENCE ─────────────────────────
  {
    id: 'phy-01',
    topic: 'physical',
    difficulty: 'easy',
    question_vi: 'Hai thanh nam châm đặt gần nhau, hai cực N quay vào nhau. Điều gì sẽ xảy ra?',
    question_en: 'Two bar magnets are placed close together with their N poles facing each other. What will happen?',
    options_vi: ['Chúng hút nhau', 'Chúng đẩy nhau ra', 'Không có gì xảy ra', 'Chúng tự quay tròn'],
    options_en: ['They pull together', 'They push apart', 'Nothing happens', 'They spin around'],
    correctIndex: 1,
    explanation_vi:
      'Hai cực cùng tên (N với N, hoặc S với S) thì đẩy nhau. Hai cực khác tên (N với S) thì hút nhau.',
    explanation_en:
      'Two poles that are the same (N with N, or S with S) push each other away. Two different poles (N with S) pull together.',
    illustrationId: 'magnets',
  },
  {
    id: 'phy-02',
    topic: 'physical',
    difficulty: 'easy',
    question_vi: 'Bóng đèn trong hình không sáng. Vì sao?',
    question_en: 'The bulb in the picture does not light up. Why?',
    options_vi: [
      'Công tắc đang mở nên mạch điện bị hở',
      'Pin quá to',
      'Bóng đèn quá nhỏ',
      'Dây điện quá dài',
    ],
    options_en: [
      'The switch is open so the circuit has a gap',
      'The battery is too big',
      'The bulb is too small',
      'The wires are too long',
    ],
    correctIndex: 0,
    explanation_vi:
      'Điện chỉ chạy được khi mạch nối kín thành một vòng tròn. Công tắc mở tạo ra một chỗ hở, nên điện không đến được bóng đèn.',
    explanation_en:
      'Electricity can only flow when the circuit is a closed loop. An open switch makes a gap, so electricity cannot reach the bulb.',
    illustrationId: 'circuit-open',
  },
  {
    id: 'phy-03',
    topic: 'physical',
    difficulty: 'medium',
    question_vi: 'Bóng đèn trong hình đang sáng. Điều đó cho ta biết gì về mạch điện?',
    question_en: 'The bulb in the picture is lit. What does this tell us about the circuit?',
    options_vi: [
      'Mạch điện bị đứt',
      'Công tắc đang mở',
      'Pin đã hết điện',
      'Mạch điện nối kín thành một vòng',
    ],
    options_en: [
      'The circuit is broken',
      'The switch is open',
      'The battery is empty',
      'The circuit is a complete, closed loop',
    ],
    correctIndex: 3,
    explanation_vi:
      'Đèn sáng nghĩa là điện đang chạy từ pin qua công tắc đến bóng đèn rồi quay về pin. Muốn vậy, mạch phải kín và công tắc phải đóng.',
    explanation_en:
      'A lit bulb means electricity is flowing from the battery, through the switch and the bulb, and back to the battery. For this the circuit must be closed and the switch must be on.',
    illustrationId: 'circuit-closed',
  },
  {
    id: 'phy-04',
    topic: 'physical',
    difficulty: 'easy',
    question_vi: 'Nam châm sẽ hút vật nào dưới đây?',
    question_en: 'Which of these will a magnet pull towards it?',
    options_vi: ['Thìa nhựa', 'Bút chì gỗ', 'Kẹp giấy bằng sắt', 'Cục tẩy'],
    options_en: ['Plastic spoon', 'Wooden pencil', 'Iron paper clip', 'Eraser'],
    correctIndex: 2,
    explanation_vi:
      'Nam châm hút các vật làm bằng sắt. Nhựa, gỗ và cao su không bị nam châm hút.',
    explanation_en:
      'Magnets pull on things made of iron. Plastic, wood and rubber are not attracted to magnets.',
  },
  {
    id: 'phy-05',
    topic: 'physical',
    difficulty: 'medium',
    question_vi: 'Vật liệu nào cho điện chạy qua dễ dàng nhất?',
    question_en: 'Which material lets electricity pass through most easily?',
    options_vi: ['Dây đồng', 'Cao su', 'Gỗ khô', 'Nhựa'],
    options_en: ['Copper wire', 'Rubber', 'Dry wood', 'Plastic'],
    correctIndex: 0,
    explanation_vi:
      'Kim loại như đồng cho điện đi qua dễ dàng, nên người ta dùng làm lõi dây điện. Cao su và nhựa không cho điện đi qua, nên dùng bọc ngoài dây để an toàn.',
    explanation_en:
      'Metals like copper let electricity flow easily, so they are used inside wires. Rubber and plastic do not let electricity through, so they cover wires to keep us safe.',
  },
  {
    id: 'phy-06',
    topic: 'physical',
    difficulty: 'medium',
    question_vi: 'Âm thanh được tạo ra như thế nào?',
    question_en: 'How is sound made?',
    options_vi: ['Do vật bị đóng băng', 'Do vật rung động', 'Do vật đứng yên', 'Do vật có màu sáng'],
    options_en: ['When something freezes', 'When something vibrates', 'When something stays still', 'When something is bright'],
    correctIndex: 1,
    explanation_vi:
      'Khi gảy dây đàn, dây rung qua rung lại rất nhanh và tạo ra âm thanh. Bạn đặt tay lên cổ khi nói sẽ cảm thấy cổ rung nhẹ.',
    explanation_en:
      'When you pluck a guitar string it moves back and forth very fast and makes sound. Put your hand on your throat when you talk and you will feel it vibrate.',
  },
  {
    id: 'phy-07',
    topic: 'physical',
    difficulty: 'easy',
    question_vi: 'Vật nào dưới đây nhiều khả năng nổi trên mặt nước nhất?',
    question_en: 'Which of these is most likely to float on water?',
    options_vi: ['Hòn đá', 'Chiếc chìa khóa sắt', 'Đồng xu', 'Mẩu gỗ nhẹ'],
    options_en: ['A stone', 'An iron key', 'A coin', 'A light piece of wood'],
    correctIndex: 3,
    explanation_vi:
      'Gỗ nhẹ nổi trên nước. Đá, chìa khóa sắt và đồng xu nặng hơn so với kích thước của chúng nên chìm xuống đáy.',
    explanation_en:
      'Light wood floats on water. A stone, an iron key and a coin are heavy for their size, so they sink to the bottom.',
  },
  {
    id: 'phy-08',
    topic: 'physical',
    difficulty: 'medium',
    question_vi: 'Bóng của một vật được tạo ra khi nào?',
    question_en: 'When is a shadow made?',
    options_vi: [
      'Khi vật chắn ánh sáng lại',
      'Khi trời mưa',
      'Khi không có vật nào cả',
      'Khi có tiếng động lớn',
    ],
    options_en: [
      'When an object blocks light',
      'When it rains',
      'When there is no object at all',
      'When there is a loud noise',
    ],
    correctIndex: 0,
    explanation_vi:
      'Ánh sáng đi theo đường thẳng. Khi một vật chắn đường đi của ánh sáng, phía sau vật sẽ tối hơn và tạo thành bóng.',
    explanation_en:
      'Light travels in straight lines. When an object blocks the light, the space behind it is darker. That dark shape is the shadow.',
  },

  // ───────────────────────── TRÁI ĐẤT & VŨ TRỤ / EARTH & SPACE ─────────────────────────
  {
    id: 'ear-01',
    topic: 'earth',
    difficulty: 'easy',
    question_vi: 'Trong hình, Mặt Trời ở bên phải cái cây. Bóng của cây nằm ở phía nào?',
    question_en: 'In the picture, the Sun is on the right of the tree. Which side is the tree’s shadow on?',
    options_vi: ['Bên phải, gần Mặt Trời', 'Bên trái, xa Mặt Trời', 'Ngay trên ngọn cây', 'Không có bóng'],
    options_en: ['On the right, near the Sun', 'On the left, away from the Sun', 'On top of the tree', 'There is no shadow'],
    correctIndex: 1,
    explanation_vi:
      'Bóng luôn nằm ở phía đối diện với nguồn sáng. Mặt Trời ở bên phải thì bóng đổ về bên trái.',
    explanation_en:
      'A shadow always falls on the side opposite the light. If the Sun is on the right, the shadow falls to the left.',
    illustrationId: 'sun-shadow',
  },
  {
    id: 'ear-02',
    topic: 'earth',
    difficulty: 'medium',
    question_vi: 'Vào lúc nào trong ngày, bóng của một cái cây ngắn nhất?',
    question_en: 'At what time of day is a tree’s shadow the shortest?',
    options_vi: ['Sáng sớm', 'Giữa trưa', 'Chiều tối', 'Ban đêm'],
    options_en: ['Early morning', 'Midday (noon)', 'Late afternoon', 'Night'],
    correctIndex: 1,
    explanation_vi:
      'Giữa trưa Mặt Trời ở cao nhất trên bầu trời nên bóng ngắn nhất. Sáng sớm và chiều tối Mặt Trời thấp nên bóng dài ra.',
    explanation_en:
      'At midday the Sun is highest in the sky, so shadows are shortest. In the early morning and late afternoon the Sun is low, so shadows are long.',
  },
  {
    id: 'ear-03',
    topic: 'earth',
    difficulty: 'easy',
    question_vi: 'Hình nào cho thấy Mặt Trăng tròn đầy?',
    question_en: 'Which picture shows a full Moon?',
    options_vi: ['Hình A', 'Hình B', 'Hình C', 'Hình D'],
    options_en: ['Picture A', 'Picture B', 'Picture C', 'Picture D'],
    correctIndex: 2,
    explanation_vi:
      'Ở hình C, cả mặt Trăng hướng về phía chúng ta đều được Mặt Trời chiếu sáng nên ta thấy trăng tròn. Các hình khác chỉ sáng một phần hoặc gần như tối.',
    explanation_en:
      'In picture C the whole side of the Moon facing us is lit by the Sun, so we see a full Moon. The other pictures are only partly lit or almost dark.',
    illustrationId: 'moon-phases',
  },
  {
    id: 'ear-04',
    topic: 'earth',
    difficulty: 'medium',
    question_vi: 'Vì sao trên Trái Đất có ngày và đêm?',
    question_en: 'Why does Earth have day and night?',
    options_vi: [
      'Trái Đất tự quay quanh mình',
      'Mặt Trời đi vòng quanh Trái Đất',
      'Mặt Trăng che mất Mặt Trời',
      'Mây che kín bầu trời',
    ],
    options_en: [
      'Earth spins around',
      'The Sun goes around Earth',
      'The Moon covers the Sun',
      'Clouds cover the sky',
    ],
    correctIndex: 0,
    explanation_vi:
      'Trái Đất tự quay một vòng hết khoảng 24 giờ. Nơi nào quay về phía Mặt Trời thì là ban ngày, nơi quay ra xa thì là ban đêm.',
    explanation_en:
      'Earth spins around once in about 24 hours. The side facing the Sun has day, and the side facing away has night.',
  },
  {
    id: 'ear-05',
    topic: 'earth',
    difficulty: 'easy',
    question_vi: 'Mặt Trời là gì?',
    question_en: 'What is the Sun?',
    options_vi: ['Một hành tinh', 'Một vệ tinh', 'Một ngôi sao', 'Một đám mây'],
    options_en: ['A planet', 'A moon', 'A star', 'A cloud'],
    correctIndex: 2,
    explanation_vi:
      'Mặt Trời là một ngôi sao rất nóng, tự phát ra ánh sáng và nhiệt. Nó trông to và sáng vì nó ở gần chúng ta nhất so với các ngôi sao khác.',
    explanation_en:
      'The Sun is a very hot star that makes its own light and heat. It looks big and bright because it is the closest star to us.',
  },
  {
    id: 'ear-06',
    topic: 'earth',
    difficulty: 'medium',
    question_vi: 'Khi Mặt Trời làm nóng nước biển, điều gì xảy ra với nước?',
    question_en: 'When the Sun warms the sea, what happens to the water?',
    options_vi: [
      'Nước biến mất mãi mãi',
      'Nước biến thành đá',
      'Nước đóng băng ngay lập tức',
      'Nước bốc hơi bay lên cao',
    ],
    options_en: [
      'The water disappears forever',
      'The water turns into rock',
      'The water freezes at once',
      'The water evaporates and rises',
    ],
    correctIndex: 3,
    explanation_vi:
      'Nước nóng lên sẽ bốc hơi thành hơi nước bay lên cao. Lên cao gặp lạnh, hơi nước tụ lại thành mây, rồi rơi xuống thành mưa.',
    explanation_en:
      'Warm water evaporates into water vapour and rises. High up it cools and forms clouds, and later falls as rain.',
    illustrationId: 'water-cycle',
  },
  {
    id: 'ear-07',
    topic: 'earth',
    difficulty: 'easy',
    question_vi: 'Trái Đất có hình dạng giống vật nào nhất?',
    question_en: 'What shape is Earth most like?',
    options_vi: ['Quả bóng tròn', 'Cái đĩa phẳng', 'Hình hộp vuông', 'Hình nón'],
    options_en: ['A round ball', 'A flat plate', 'A square box', 'A cone'],
    correctIndex: 0,
    explanation_vi:
      'Trái Đất có hình cầu như một quả bóng khổng lồ. Các nhà du hành vũ trụ nhìn từ trên cao đã thấy được điều đó.',
    explanation_en:
      'Earth is shaped like a giant ball, called a sphere. Astronauts looking from space can see this for themselves.',
  },
  {
    id: 'ear-08',
    topic: 'earth',
    difficulty: 'medium',
    question_vi: 'Vì sao ban đêm chúng ta nhìn thấy Mặt Trăng?',
    question_en: 'Why can we see the Moon at night?',
    options_vi: [
      'Mặt Trăng tự phát sáng như bóng đèn',
      'Mặt Trăng phản chiếu ánh sáng từ Mặt Trời',
      'Mặt Trăng được đèn đường chiếu sáng',
      'Mặt Trăng là một ngôi sao nóng',
    ],
    options_en: [
      'The Moon makes its own light like a bulb',
      'The Moon reflects light from the Sun',
      'Street lights shine on the Moon',
      'The Moon is a hot star',
    ],
    correctIndex: 1,
    explanation_vi:
      'Mặt Trăng không tự phát sáng. Ánh sáng Mặt Trời chiếu vào Mặt Trăng rồi phản chiếu đến mắt chúng ta, giống như đèn pin chiếu vào gương.',
    explanation_en:
      'The Moon does not make its own light. Sunlight hits the Moon and bounces to our eyes, like a torch light bouncing off a mirror.',
  },

  // ───────────────────────── TƯ DUY THỰC NGHIỆM / SCIENTIFIC INQUIRY ─────────────────────────
  {
    id: 'inq-01',
    topic: 'inquiry',
    difficulty: 'easy',
    question_vi: 'Hai cốc đá lạnh giống hệt nhau: cốc A đặt ngoài nắng, cốc B đặt trong bóng râm. Đá ở cốc nào tan nhanh hơn?',
    question_en: 'Two identical cups of ice: cup A is in the sun and cup B is in the shade. In which cup does the ice melt faster?',
    options_vi: ['Cốc A', 'Cốc B', 'Cả hai tan cùng lúc', 'Cả hai không tan'],
    options_en: ['Cup A', 'Cup B', 'Both melt at the same time', 'Neither melts'],
    correctIndex: 0,
    explanation_vi:
      'Ngoài nắng nóng hơn nên đá nhận nhiều nhiệt hơn và tan nhanh hơn. Trong bóng râm mát hơn nên đá tan chậm.',
    explanation_en:
      'It is hotter in the sun, so the ice gets more heat and melts faster. It is cooler in the shade, so the ice melts slowly.',
    illustrationId: 'melting-ice',
  },
  {
    id: 'inq-02',
    topic: 'inquiry',
    difficulty: 'easy',
    question_vi: 'Nhiệt kế trong hình đang chỉ bao nhiêu độ C?',
    question_en: 'What temperature does the thermometer in the picture show?',
    options_vi: ['20 °C', '30 °C', '40 °C', '50 °C'],
    options_en: ['20 °C', '30 °C', '40 °C', '50 °C'],
    correctIndex: 1,
    explanation_vi:
      'Ta nhìn xem đỉnh cột đỏ ngang với vạch số nào. Cột đỏ dừng ở vạch 30, nên nhiệt độ là 30 °C.',
    explanation_en:
      'Look at where the top of the red line meets the numbers. It stops at the 30 mark, so the temperature is 30 °C.',
    illustrationId: 'thermometer',
  },
  {
    id: 'inq-03',
    topic: 'inquiry',
    difficulty: 'medium',
    question_vi: 'Hai chậu cây giống nhau, cùng được tưới nước. Chậu A để chỗ có nắng, chậu B để trong hộp tối. Sau 2 tuần chậu A xanh tốt, chậu B vàng úa. Ta rút ra điều gì?',
    question_en: 'Two same plants get the same water. Pot A sits in the sun and pot B sits in a dark box. After 2 weeks A is green and healthy and B is yellow and weak. What do we learn?',
    options_vi: [
      'Cây không cần nước',
      'Cây cần ánh sáng để khỏe mạnh',
      'Cây thích bóng tối hơn',
      'Chậu B bị tưới quá nhiều nước',
    ],
    options_en: [
      'Plants do not need water',
      'Plants need light to stay healthy',
      'Plants like the dark better',
      'Pot B got too much water',
    ],
    correctIndex: 1,
    explanation_vi:
      'Hai chậu chỉ khác nhau ở ánh sáng, nên khác biệt giữa chúng là do ánh sáng. Vậy cây cần ánh sáng để lớn lên khỏe mạnh.',
    explanation_en:
      'The pots only differ in light, so the difference comes from the light. This shows plants need light to grow well.',
    illustrationId: 'plant-experiment',
  },
  {
    id: 'inq-04',
    topic: 'inquiry',
    difficulty: 'easy',
    question_vi: 'Biểu đồ cột cho thấy số bạn thích mỗi loại quả. Quả nào được nhiều bạn thích nhất?',
    question_en: 'The bar chart shows how many children like each fruit. Which fruit is liked by the most children?',
    options_vi: ['Táo', 'Chuối', 'Cam', 'Nho'],
    options_en: ['Apple', 'Banana', 'Orange', 'Grapes'],
    correctIndex: 3,
    explanation_vi:
      'Cột cao nhất là cột của nho, ứng với 7 bạn. Cột càng cao thì càng có nhiều bạn chọn.',
    explanation_en:
      'The tallest bar is for grapes, which means 7 children. The taller the bar, the more children chose it.',
    illustrationId: 'bar-chart',
  },
  {
    id: 'inq-05',
    topic: 'inquiry',
    difficulty: 'easy',
    question_vi: 'Em muốn đo chiều dài của cây bút chì. Nên dùng dụng cụ nào?',
    question_en: 'You want to measure the length of a pencil. Which tool should you use?',
    options_vi: ['Cái cân', 'Cái thước kẻ', 'Cái nhiệt kế', 'Đồng hồ bấm giờ'],
    options_en: ['A weighing scale', 'A ruler', 'A thermometer', 'A stopwatch'],
    correctIndex: 1,
    explanation_vi:
      'Thước kẻ dùng để đo chiều dài. Cân đo khối lượng, nhiệt kế đo nhiệt độ và đồng hồ bấm giờ đo thời gian.',
    explanation_en:
      'A ruler measures length. A scale measures mass, a thermometer measures temperature and a stopwatch measures time.',
  },
  {
    id: 'inq-06',
    topic: 'inquiry',
    difficulty: 'medium',
    question_vi: 'Em muốn nhìn thật kỹ những chi tiết rất nhỏ trên cánh của con kiến. Em nên dùng gì?',
    question_en: 'You want to look closely at the tiny details on an ant’s body. What should you use?',
    options_vi: ['Kính lúp', 'Thước dây', 'Cái cân', 'Ống nghe'],
    options_en: ['A magnifying glass', 'A tape measure', 'A weighing scale', 'A stethoscope'],
    correctIndex: 0,
    explanation_vi:
      'Kính lúp làm vật nhỏ trông to hơn nên ta nhìn rõ các chi tiết. Nhà khoa học dùng kính lúp để quan sát côn trùng, lá cây và đá.',
    explanation_en:
      'A magnifying glass makes small things look bigger so we can see their details. Scientists use it to study insects, leaves and rocks.',
  },
  {
    id: 'inq-07',
    topic: 'inquiry',
    difficulty: 'medium',
    question_vi: 'Bạn An muốn biết đường tan trong nước nóng hay nước lạnh nhanh hơn. Để thí nghiệm công bằng, bạn cần giữ nguyên điều gì?',
    question_en: 'An wants to find out whether sugar dissolves faster in hot or cold water. To make it a fair test, what must stay the same?',
    options_vi: [
      'Nhiệt độ của nước',
      'Lượng nước và lượng đường',
      'Chỉ cần đổi cả hai cốc',
      'Không cần giữ gì cả',
    ],
    options_en: [
      'The temperature of the water',
      'The amount of water and the amount of sugar',
      'Change both cups completely',
      'Nothing needs to stay the same',
    ],
    correctIndex: 1,
    explanation_vi:
      'Trong thí nghiệm công bằng, ta chỉ thay đổi một điều (nhiệt độ nước) và giữ nguyên mọi thứ khác như lượng nước và lượng đường. Như vậy kết quả mới đáng tin.',
    explanation_en:
      'In a fair test we change only one thing (the water temperature) and keep everything else the same, like the amount of water and sugar. Then we can trust the result.',
  },
  {
    id: 'inq-08',
    topic: 'inquiry',
    difficulty: 'medium',
    question_vi: 'Câu nào dưới đây là một quan sát (điều em thấy, nghe hoặc sờ được)?',
    question_en: 'Which sentence is an observation (something you see, hear or touch)?',
    options_vi: [
      'Chiếc lá này đẹp nhất thế giới',
      'Chiếc lá này chắc rất ngon',
      'Chiếc lá màu xanh và có mép răng cưa',
      'Chiếc lá này thật chán',
    ],
    options_en: [
      'This leaf is the prettiest in the world',
      'This leaf must taste delicious',
      'The leaf is green and has a jagged edge',
      'This leaf is boring',
    ],
    correctIndex: 2,
    explanation_vi:
      'Quan sát là điều ta dùng giác quan để biết, như màu sắc và hình dạng. “Đẹp nhất”, “ngon”, “chán” chỉ là ý kiến của mỗi người.',
    explanation_en:
      'An observation is what we find out with our senses, like colour and shape. “Prettiest”, “delicious” and “boring” are just opinions.',
  },
]
