import type { MathQuestionInput } from '../../../types/quiz'
import { mathSection, type Opt } from '../helpers'

// Chủ điểm geo-area-grid: diện tích đếm ô vuông, hàng × cột, cm², ghép/cắt hình. 40 câu: 16 dễ, 16 vừa, 8 khó.
const q = mathSection('geometry', 'geo-area-grid')

/** Đáp án dạng "n ô vuông" / "n squares". */
const sq = (n: number): Opt => [`${n} ô vuông`, `${n} squares`]
/** Đáp án dạng "n cm²" (giống nhau ở hai ngôn ngữ). */
const cm2 = (n: number): Opt => `${n} cm²`
/** Đáp án dạng "n cm". */
const cm = (n: number): Opt => `${n} cm`

export const AREA_GRID: MathQuestionInput[] = [
  // 01
  q('easy',
    ['Nhìn hình. Diện tích hình B (màu xanh dương) là bao nhiêu ô vuông?', 'Look at the picture. What is the area of shape B (blue) in squares?'],
    [sq(6), sq(5), sq(10), sq(4)],
    ['Diện tích là số ô vuông nằm bên trong hình, không phải số cạnh bao quanh.', 'B có 2 hàng, mỗi hàng 3 ô: 2 × 3 = 6 ô vuông.'],
    ['Area is the number of squares inside the shape, not the edges around it.', 'B has 2 rows of 3 squares: 2 × 3 = 6 squares.'],
    { ill: 'ma-grid-area' }),
  // 02
  q('easy',
    ['Trên giấy kẻ ô, Nam tô chữ T: hàng trên cùng 5 ô liền nhau, bên dưới ô chính giữa có thêm 3 ô xếp thành một cột. Chữ T có diện tích bao nhiêu ô vuông?', 'On grid paper, Nam colours a letter T: 5 squares in a row on top, and 3 more squares in a column under the middle one. What is the area of the T in squares?'],
    [sq(8), sq(15), sq(5), sq(3)],
    ['Chữ T không phải hình chữ nhật nên không nhân 5 × 3 — đếm từng phần rồi cộng.', 'Nét ngang 5 ô + nét dọc 3 ô: 5 + 3 = 8 ô vuông. (5 × 3 = 15 là nhân nhầm.)'],
    ['The T is not a rectangle, so do not do 5 × 3 — count each part and add.', 'Top bar 5 squares + stem 3 squares: 5 + 3 = 8 squares. (5 × 3 = 15 is the wrong multiplication.)']),
  // 03
  q('medium',
    ['Nhìn hình. Cả ba hình A, B, C có tổng cộng bao nhiêu ô được tô màu?', 'Look at the picture. How many squares are coloured in shapes A, B and C altogether?'],
    [sq(15), sq(25), sq(40), sq(14)],
    ['Đếm ô của từng hình rồi cộng lại.', 'A có 5 ô, B có 6 ô, C có 4 ô: 5 + 6 + 4 = 15 ô vuông.'],
    ['Count the squares in each shape, then add.', 'A has 5, B has 6, C has 4: 5 + 6 + 4 = 15 squares.'],
    { ill: 'ma-grid-area' }),
  // 04
  q('easy',
    ['Hình chữ nhật dài 5 cm, rộng 3 cm. Diện tích của nó là bao nhiêu?', 'A rectangle is 5 cm long and 3 cm wide. What is its area?'],
    [cm2(15), cm2(8), cm2(16), cm2(18)],
    ['Chia hình thành các ô 1 cm × 1 cm: có 3 hàng, mỗi hàng 5 ô.', '5 × 3 = 15 cm². (16 là chu vi, 8 là 5 + 3.)'],
    ['Split it into 1 cm × 1 cm squares: 3 rows of 5 squares.', '5 × 3 = 15 cm². (16 is the perimeter, 8 is 5 + 3.)']),
  // 05
  q('medium',
    ['Nền nhà hình chữ nhật dài 6 ô, rộng 4 ô (mỗi ô 1 × 1). Lát bằng viên gạch to cỡ 2 × 2 ô thì cần bao nhiêu viên?', 'A floor is 6 squares long and 4 squares wide (each square is 1 × 1). How many big 2 × 2 tiles cover it?'],
    [['6 viên', '6 tiles'], ['12 viên', '12 tiles'], ['24 viên', '24 tiles'], ['10 viên', '10 tiles']],
    ['Mỗi viên to phủ 2 × 2 = 4 ô nhỏ.', 'Nền có 6 × 4 = 24 ô; 24 : 4 = 6 viên (3 viên mỗi hàng × 2 hàng).'],
    ['Each big tile covers 2 × 2 = 4 small squares.', 'The floor has 6 × 4 = 24 squares; 24 ÷ 4 = 6 tiles (3 per row × 2 rows).']),
  // 06
  q('hard',
    ['Thanh sô-cô-la có 3 hàng, mỗi hàng 8 miếng. Mỗi lần bẻ, An bẻ 1 mẩu thành 2 mẩu theo đường kẻ. Cần ít nhất bao nhiêu lần bẻ để được các miếng rời?', 'A chocolate bar has 3 rows of 8 pieces. Each time, An breaks 1 chunk into 2 along a line. How many breaks are needed to get all single pieces?'],
    [['23 lần', '23 breaks'], ['24 lần', '24 breaks'], ['9 lần', '9 breaks'], ['11 lần', '11 breaks']],
    ['Mỗi lần bẻ, số mẩu tăng đúng 1.', 'Có 3 × 8 = 24 miếng. Từ 1 mẩu lên 24 mẩu cần 24 − 1 = 23 lần bẻ.'],
    ['Each break makes exactly 1 more chunk.', 'There are 3 × 8 = 24 pieces. Going from 1 chunk to 24 needs 24 − 1 = 23 breaks.']),
  // 07
  q('easy',
    ['Hình vuông có cạnh 3 cm. Diện tích hình vuông là bao nhiêu?', 'A square has sides of 3 cm. What is its area?'],
    [cm2(9), cm2(6), cm2(12), cm2(3)],
    ['Hình vuông cạnh 3 cm gồm 3 hàng, mỗi hàng 3 ô 1 cm².', '3 × 3 = 9 cm². (12 là chu vi, 6 là 3 + 3.)'],
    ['A 3 cm square is 3 rows of 3 squares of 1 cm².', '3 × 3 = 9 cm². (12 is the perimeter, 6 is 3 + 3.)']),
  // 08
  q('medium',
    ['Hình chữ L gồm 2 hình chữ nhật ghép lại: một hình 6 cm × 2 cm và một hình 3 cm × 2 cm. Diện tích hình chữ L là bao nhiêu?', 'An L-shape is made of 2 rectangles joined together: one is 6 cm × 2 cm and one is 3 cm × 2 cm. What is the area of the L-shape?'],
    [cm2(18), cm2(13), cm2(12), cm2(6)],
    ['Tách hình chữ L thành 2 hình chữ nhật, tính từng phần rồi cộng.', '6 × 2 = 12 cm², 3 × 2 = 6 cm². Tổng: 12 + 6 = 18 cm².'],
    ['Split the L into 2 rectangles, find each area, then add.', '6 × 2 = 12 cm², 3 × 2 = 6 cm². Total: 12 + 6 = 18 cm².']),
  // 09
  q('easy',
    ['Trên giấy kẻ ô, Hà tô chữ U rộng 4 ô, cao 4 ô. 3 hàng trên, mỗi hàng chỉ tô 2 ô (ô ngoài cùng bên trái và ô ngoài cùng bên phải), hàng dưới cùng tô đủ 4 ô. Chữ U có diện tích bao nhiêu ô vuông?', 'On grid paper, Hà colours a letter U 4 squares wide and 4 squares tall. Each of the top 3 rows has only 2 squares coloured (the far left and the far right), and the bottom row has all 4. What is the area of the U in squares?'],
    [sq(10), sq(16), sq(8), sq(4)],
    ['Đếm từng hàng rồi cộng; phần trống giữa chữ U không tính.', '2 + 2 + 2 + 4 = 10 ô vuông. (16 là cả hình vuông 4 × 4, tính nhầm phần trống.)'],
    ['Count row by row and add; the empty middle of the U does not count.', '2 + 2 + 2 + 4 = 10 squares. (16 is the whole 4 × 4 square, counting the gap too.)']),
  // 10
  q('medium',
    ['Nhìn hình. Lưới có 8 cột và 5 hàng. Có bao nhiêu ô vuông KHÔNG được tô màu?', 'Look at the picture. The grid has 8 columns and 5 rows. How many squares are NOT coloured?'],
    [sq(25), sq(15), sq(13), sq(35)],
    ['Lấy số ô của cả lưới trừ đi số ô đã tô.', 'Cả lưới: 8 × 5 = 40 ô. Đã tô: 5 + 6 + 4 = 15 ô. Còn trắng: 40 − 15 = 25 ô vuông.'],
    ['Take all the squares in the grid and subtract the coloured ones.', 'Grid: 8 × 5 = 40. Coloured: 5 + 6 + 4 = 15. White: 40 − 15 = 25 squares.'],
    { ill: 'ma-grid-area' }),
  // 11
  q('easy',
    ['Sân nhà Khoa hình vuông, lát 5 hàng gạch, mỗi hàng 5 viên. Ở giữa sân có một bồn cây chiếm chỗ 2 × 2 viên nên không lát gạch. Sân có bao nhiêu viên gạch?', 'Khoa\'s yard is a square paved with 5 rows of 5 tiles. In the middle there is a flower bed taking the place of 2 × 2 tiles, so it has no tiles. How many tiles are in the yard?'],
    [['21 viên', '21 tiles'], ['25 viên', '25 tiles'], ['23 viên', '23 tiles'], ['4 viên', '4 tiles']],
    ['Tính cả hình vuông như lát kín, rồi trừ phần bồn cây.', 'Lát kín: 5 × 5 = 25 viên. Bồn cây: 2 × 2 = 4 viên. Còn: 25 − 4 = 21 viên. (23 là chỉ trừ 2.)'],
    ['Count the whole square as if fully paved, then take away the flower bed.', 'Fully paved: 5 × 5 = 25 tiles. Flower bed: 2 × 2 = 4. Left: 25 − 4 = 21 tiles. (23 takes away only 2.)']),
  // 12
  q('medium',
    ['Hình vuông có diện tích 36 cm². Cạnh của hình vuông dài bao nhiêu?', 'A square has an area of 36 cm². How long is each side?'],
    [cm(6), cm(9), cm(18), cm(12)],
    ['Diện tích hình vuông = cạnh × cạnh. Tìm số nhân với chính nó bằng 36.', '6 × 6 = 36, nên cạnh dài 6 cm. (36 : 4 = 9 là nhầm với chu vi.)'],
    ['Area of a square = side × side. Find the number that times itself makes 36.', '6 × 6 = 36, so each side is 6 cm. (36 ÷ 4 = 9 mixes it up with perimeter.)']),
  // 13
  q('easy',
    ['Hình P là hình chữ nhật 4 ô × 2 ô. Hình Q là hình vuông 3 ô × 3 ô. Hình nào có diện tích lớn hơn?', 'Shape P is a rectangle 4 squares × 2 squares. Shape Q is a square 3 squares × 3 squares. Which has the bigger area?'],
    [['Hình Q', 'Shape Q'], ['Hình P', 'Shape P'], ['Hai hình bằng nhau', 'They are equal'], ['Không so sánh được', 'We cannot tell']],
    ['Hai hình có cùng chu vi (12 cạnh ô) nhưng diện tích có thể khác nhau.', 'P: 4 × 2 = 8 ô. Q: 3 × 3 = 9 ô. Hình Q lớn hơn.'],
    ['Both shapes have the same perimeter (12 edges), but area can still differ.', 'P: 4 × 2 = 8 squares. Q: 3 × 3 = 9 squares. Shape Q is bigger.']),
  // 14
  q('medium',
    ['Hình chữ nhật 6 cm × 2 cm và hình vuông cạnh 4 cm có chu vi bằng nhau. Diện tích hình vuông hơn diện tích hình chữ nhật bao nhiêu?', 'A 6 cm × 2 cm rectangle and a square with 4 cm sides have the same perimeter. How much bigger is the area of the square?'],
    [cm2(4), cm2(0), cm2(2), cm2(8)],
    ['Chu vi bằng nhau chưa chắc diện tích bằng nhau — tính từng diện tích.', 'Hình chữ nhật: 6 × 2 = 12 cm². Hình vuông: 4 × 4 = 16 cm². Hơn: 16 − 12 = 4 cm².'],
    ['Same perimeter does not mean same area — work out each area.', 'Rectangle: 6 × 2 = 12 cm². Square: 4 × 4 = 16 cm². Difference: 16 − 12 = 4 cm².']),
  // 15
  q('hard',
    ['Nhìn hình. Mai muốn tô thêm ô vào cạnh hình A và hình C để cả ba hình A, B, C có diện tích bằng nhau và bằng diện tích hình B. Mai phải tô thêm tất cả bao nhiêu ô?', 'Look at the picture. Mai wants to colour extra squares next to shapes A and C so that A, B and C all have the same area as B. How many extra squares must she colour in total?'],
    [sq(3), sq(1), sq(2), sq(18)],
    ['Đếm diện tích từng hình, so với hình B.', 'B = 6 ô, A = 5 ô (thêm 1), C = 4 ô (thêm 2). Tổng tô thêm: 1 + 2 = 3 ô vuông.'],
    ['Count each area and compare it with B.', 'B = 6, A = 5 (needs 1), C = 4 (needs 2). Extra squares: 1 + 2 = 3 squares.'],
    { ill: 'ma-grid-area' }),
  // 16
  q('easy',
    ['Mỗi ô vuông nhỏ có diện tích 1 cm². Một hình gồm 2 hàng ô: hàng trên 5 ô, hàng dưới 3 ô. Diện tích hình là bao nhiêu?', 'Each small square has an area of 1 cm². A shape has 2 rows: 5 squares on top and 3 squares below. What is its area?'],
    [cm2(8), cm2(15), cm2(14), cm2(2)],
    ['Hai hàng không bằng nhau nên không nhân được — hãy cộng số ô.', '5 + 3 = 8 ô, mỗi ô 1 cm², nên diện tích là 8 cm². (5 × 3 = 15 là nhân nhầm.)'],
    ['The rows are not equal, so do not multiply — add the squares.', '5 + 3 = 8 squares of 1 cm², so the area is 8 cm². (5 × 3 = 15 is the wrong multiplication.)']),
  // 17
  q('medium',
    ['Trên giấy kẻ ô, Bình vẽ hình chữ nhật 6 ô × 4 ô rồi cắt theo đường chéo thành 2 hình tam giác. Mỗi hình tam giác có diện tích bao nhiêu ô vuông?', 'On grid paper, Bình draws a 6 × 4 rectangle and cuts it along a diagonal into 2 triangles. What is the area of each triangle in squares?'],
    [sq(12), sq(24), sq(10), sq(5)],
    ['Đường chéo chia hình chữ nhật thành 2 nửa bằng nhau.', 'Hình chữ nhật có 6 × 4 = 24 ô. Mỗi tam giác: 24 : 2 = 12 ô vuông.'],
    ['A diagonal cuts a rectangle into 2 equal halves.', 'The rectangle has 6 × 4 = 24 squares. Each triangle: 24 ÷ 2 = 12 squares.']),
  // 18
  q('hard',
    ['Từ một tấm bìa hình vuông cạnh 6 cm, Khoa cắt bỏ 2 hình vuông nhỏ cạnh 2 cm ở 2 góc. Phần bìa còn lại có diện tích bao nhiêu?', 'Khoa has a square card with 6 cm sides. He cuts away 2 small squares with 2 cm sides from 2 corners. What is the area of the card that is left?'],
    [cm2(28), cm2(24), cm2(32), cm2(36)],
    ['Diện tích còn lại = hình lớn − các phần cắt đi. Chu vi không đổi nhưng diện tích thì giảm.', '6 × 6 = 36 cm². Mỗi góc cắt 2 × 2 = 4 cm², 2 góc là 8 cm². Còn: 36 − 8 = 28 cm².'],
    ['Area left = big square − cut parts. The perimeter stays the same but the area shrinks.', '6 × 6 = 36 cm². Each corner is 2 × 2 = 4 cm², 2 corners are 8 cm². Left: 36 − 8 = 28 cm².']),
  // 19
  q('easy',
    ['Thẻ đánh dấu sách hình chữ nhật dài 8 cm, rộng 2 cm. Diện tích thẻ là bao nhiêu?', 'A bookmark is a rectangle 8 cm long and 2 cm wide. What is its area?'],
    [cm2(16), cm2(10), cm2(20), cm2(18)],
    ['Diện tích hình chữ nhật = dài × rộng.', '8 × 2 = 16 cm². (20 là chu vi, 10 là 8 + 2.)'],
    ['Area of a rectangle = length × width.', '8 × 2 = 16 cm². (20 is the perimeter, 10 is 8 + 2.)']),
  // 20
  q('medium',
    ['Trên giấy kẻ ô, một hình phủ 6 ô nguyên và 4 nửa ô (mỗi nửa ô là một nửa ô vuông cắt chéo). Diện tích hình là bao nhiêu ô vuông?', 'On grid paper, a shape covers 6 whole squares and 4 half squares (each cut on the diagonal). What is its area in squares?'],
    [sq(8), sq(10), sq(6), sq(14)],
    ['Hai nửa ô ghép lại được 1 ô nguyên.', '4 nửa ô = 2 ô nguyên. Diện tích: 6 + 2 = 8 ô vuông.'],
    ['Two half squares make 1 whole square.', '4 half squares = 2 whole squares. Area: 6 + 2 = 8 squares.']),
  // 21
  q('easy',
    ['Hình nào sau đây (đo bằng ô vuông) có diện tích đúng bằng 12 ô vuông?', 'Which rectangle below (measured in squares) has an area of exactly 12 squares?'],
    ['3 × 4', '5 × 7', '2 × 4', '6 × 6'],
    ['Diện tích = số hàng × số cột, không phải số hàng + số cột.', '3 × 4 = 12 ô. Còn 5 × 7 = 35, 2 × 4 = 8, 6 × 6 = 36 (5 + 7 và 6 + 6 mới bằng 12).'],
    ['Area = rows × columns, not rows + columns.', '3 × 4 = 12 squares. But 5 × 7 = 35, 2 × 4 = 8, 6 × 6 = 36 (only 5 + 7 and 6 + 6 make 12).']),
  // 22
  q('hard',
    ['Có bao nhiêu hình chữ nhật khác nhau có diện tích 24 ô vuông, với cạnh là số ô nguyên? (Xoay hình không tính là hình mới.)', 'How many different rectangles have an area of 24 squares, with whole-square sides? (Turning a rectangle does not count as new.)'],
    [['4 hình', '4 rectangles'], ['8 hình', '8 rectangles'], ['3 hình', '3 rectangles'], ['2 hình', '2 rectangles']],
    ['Liệt kê các cặp số nhân với nhau bằng 24, bắt đầu từ 1.', '1 × 24, 2 × 12, 3 × 8, 4 × 6. Có 4 hình (6 × 4 chỉ là 4 × 6 xoay lại).'],
    ['List pairs of numbers that multiply to 24, starting from 1.', '1 × 24, 2 × 12, 3 × 8, 4 × 6. That is 4 rectangles (6 × 4 is just 4 × 6 turned).']),
  // 23
  q('easy',
    ['Bức tường bếp được ốp gạch: 9 viên theo chiều ngang và 6 viên theo chiều cao. Bức tường có bao nhiêu viên gạch?', 'A kitchen wall is tiled 9 tiles across and 6 tiles high. How many tiles are on the wall?'],
    [['54 viên', '54 tiles'], ['15 viên', '15 tiles'], ['30 viên', '30 tiles'], ['45 viên', '45 tiles']],
    ['Có 6 hàng gạch, mỗi hàng 9 viên.', '6 × 9 = 54 viên. (9 + 6 = 15 là cộng nhầm, 30 là chu vi.)'],
    ['There are 6 rows with 9 tiles in each row.', '6 × 9 = 54 tiles. (9 + 6 = 15 is the adding mistake, 30 is the perimeter.)']),
  // 24
  q('medium',
    ['Thanh sô-cô-la có 4 hàng, mỗi hàng 7 miếng. Lan bẻ ra 2 cột (mỗi cột 4 miếng) để chia cho bạn. Thanh sô-cô-la còn lại bao nhiêu miếng?', 'A chocolate bar has 4 rows of 7 pieces. Lan breaks off 2 columns (4 pieces each) to share. How many pieces are left in the bar?'],
    [['20 miếng', '20 pieces'], ['26 miếng', '26 pieces'], ['24 miếng', '24 pieces'], ['21 miếng', '21 pieces']],
    ['Tính số miếng cả thanh, trừ số miếng đã bẻ.', 'Cả thanh: 4 × 7 = 28. Bẻ 2 cột: 2 × 4 = 8. Còn: 28 − 8 = 20 miếng (hay 4 hàng × 5 cột). (26 là chỉ trừ 2 miếng.)'],
    ['Find all the pieces, then subtract the ones broken off.', 'Whole bar: 4 × 7 = 28. 2 columns: 2 × 4 = 8. Left: 28 − 8 = 20 pieces (or 4 rows × 5 columns). (26 takes away only 2 pieces.)']),
  // 25
  q('easy',
    ['Một hình chữ nhật trên giấy kẻ ô có diện tích 20 ô vuông và có 4 hàng. Mỗi hàng có bao nhiêu ô?', 'A rectangle on grid paper has an area of 20 squares and 4 rows. How many squares are in each row?'],
    [sq(5), sq(16), sq(24), sq(10)],
    ['Diện tích = số hàng × số ô mỗi hàng, nên chia để tìm số ô mỗi hàng.', '4 × □ = 20, nên □ = 20 : 4 = 5 ô vuông.'],
    ['Area = rows × squares per row, so divide to find each row.', '4 × □ = 20, so □ = 20 ÷ 4 = 5 squares.']),
  // 26
  q('medium',
    ['Nhìn hình. Diện tích hình B hơn diện tích hình C bao nhiêu ô vuông?', 'Look at the picture. How many more squares does shape B cover than shape C?'],
    [sq(2), sq(0), sq(1), sq(10)],
    ['So sánh số ô bên trong, không so sánh chu vi (B và C cùng chu vi 10).', 'B có 6 ô, C có 4 ô: 6 − 4 = 2 ô vuông.'],
    ['Compare the squares inside, not the perimeters (B and C both have perimeter 10).', 'B has 6 squares, C has 4: 6 − 4 = 2 squares.'],
    { ill: 'ma-grid-area' }),
  // 27
  q('easy',
    ['Bàn cờ vua có 8 hàng, mỗi hàng 8 ô. Bàn cờ có tất cả bao nhiêu ô?', 'A chessboard has 8 rows with 8 squares in each row. How many squares does it have?'],
    [sq(64), sq(16), sq(32), sq(56)],
    ['8 hàng bằng nhau, mỗi hàng 8 ô → nhân.', '8 × 8 = 64 ô vuông. (8 + 8 = 16 là cộng nhầm, 32 là chu vi.)'],
    ['8 equal rows of 8 → multiply.', '8 × 8 = 64 squares. (8 + 8 = 16 is the adding mistake, 32 is the perimeter.)']),
  // 28
  q('medium',
    ['Hình chữ nhật có diện tích 24 cm² và chiều dài 8 cm. Chiều rộng của nó là bao nhiêu?', 'A rectangle has an area of 24 cm² and a length of 8 cm. What is its width?'],
    [cm(3), cm(16), cm(4), cm(6)],
    ['Dài × rộng = diện tích, nên rộng = diện tích : dài.', '8 × □ = 24, nên rộng = 24 : 8 = 3 cm. (24 − 8 = 16 là trừ nhầm.)'],
    ['Length × width = area, so width = area ÷ length.', '8 × □ = 24, so width = 24 ÷ 8 = 3 cm. (24 − 8 = 16 is the subtracting mistake.)']),
  // 29
  q('hard',
    ['Các hình chữ nhật có chu vi 16 cm và cạnh là số cm nguyên. Hình có diện tích lớn nhất là bao nhiêu?', 'Some rectangles have a perimeter of 16 cm and whole-cm sides. What is the biggest area one of them can have?'],
    [cm2(16), cm2(15), cm2(12), cm2(7)],
    ['Chu vi 16 → dài + rộng = 8. Thử mọi cặp.', '1 + 7: 7 cm²; 2 + 6: 12 cm²; 3 + 5: 15 cm²; 4 + 4: 16 cm². Lớn nhất là hình vuông 4 × 4 = 16 cm².'],
    ['Perimeter 16 → length + width = 8. Try every pair.', '1 + 7: 7 cm²; 2 + 6: 12 cm²; 3 + 5: 15 cm²; 4 + 4: 16 cm². The biggest is the 4 × 4 square, 16 cm².']),
  // 30
  q('easy',
    ['Tấm thiệp hình chữ nhật dài 10 cm, rộng 4 cm. Diện tích tấm thiệp là bao nhiêu?', 'A greeting card is a rectangle 10 cm long and 4 cm wide. What is its area?'],
    [cm2(40), cm2(14), cm2(28), cm2(36)],
    ['Diện tích = dài × rộng.', '10 × 4 = 40 cm². (28 là chu vi, 14 là 10 + 4.)'],
    ['Area = length × width.', '10 × 4 = 40 cm². (28 is the perimeter, 14 is 10 + 4.)']),
  // 31
  q('medium',
    ['Nền phòng lát 7 hàng gạch, mỗi hàng 5 viên. Một tấm thảm che kín 3 hàng, mỗi hàng 4 viên. Còn bao nhiêu viên gạch nhìn thấy được?', 'A room floor has 7 rows of 5 tiles. A rug covers 3 rows of 4 tiles. How many tiles can still be seen?'],
    [['23 viên', '23 tiles'], ['28 viên', '28 tiles'], ['12 viên', '12 tiles'], ['35 viên', '35 tiles']],
    ['Số gạch nhìn thấy = cả nền − phần thảm che.', 'Nền: 7 × 5 = 35 viên. Thảm: 3 × 4 = 12 viên. Còn: 35 − 12 = 23 viên.'],
    ['Tiles seen = whole floor − tiles under the rug.', 'Floor: 7 × 5 = 35. Rug: 3 × 4 = 12. Seen: 35 − 12 = 23 tiles.']),
  // 32
  q('easy',
    ['Hình 1 là hình vuông 2 ô × 2 ô. Hình 2 là dải 1 hàng gồm 4 ô. Hình nào có diện tích lớn hơn?', 'Shape 1 is a square of 2 × 2 squares. Shape 2 is a strip of 1 row of 4 squares. Which has the bigger area?'],
    [['Bằng nhau', 'They are equal'], ['Hình 1 lớn hơn', 'Shape 1 is bigger'], ['Hình 2 lớn hơn', 'Shape 2 is bigger'], ['Không so sánh được', 'We cannot tell']],
    ['Dải ô dài hơn và có chu vi lớn hơn, nhưng diện tích là số ô bên trong.', 'Hình 1: 2 × 2 = 4 ô. Hình 2: 4 ô. Diện tích bằng nhau.'],
    ['The strip is longer and has a bigger perimeter, but area is the squares inside.', 'Shape 1: 2 × 2 = 4 squares. Shape 2: 4 squares. The areas are equal.']),
  // 33
  q('hard',
    ['Một hình vuông lớn có diện tích 36 cm² được ghép từ 4 hình vuông nhỏ bằng nhau (2 hàng, 2 cột). Cạnh mỗi hình vuông nhỏ dài bao nhiêu?', 'A big square with an area of 36 cm² is made of 4 equal small squares (2 rows, 2 columns). How long is a side of each small square?'],
    [cm(3), cm(9), cm(6), cm(18)],
    ['Tìm cạnh hình lớn trước, rồi chia đôi.', 'Cạnh hình lớn: 6 × 6 = 36 → 6 cm. Mỗi cạnh có 2 hình nhỏ: 6 : 2 = 3 cm. (9 cm² là diện tích hình nhỏ, không phải cạnh.)'],
    ['Find the side of the big square first, then halve it.', 'Big side: 6 × 6 = 36 → 6 cm. Each side holds 2 small squares: 6 ÷ 2 = 3 cm. (9 cm² is a small square\'s area, not its side.)']),
  // 34
  q('medium',
    ['Hình vuông có chu vi 20 cm. Diện tích hình vuông là bao nhiêu?', 'A square has a perimeter of 20 cm. What is its area?'],
    [cm2(25), cm2(20), cm2(5), cm2(10)],
    ['Từ chu vi tìm cạnh, rồi từ cạnh tìm diện tích.', 'Cạnh: 20 : 4 = 5 cm. Diện tích: 5 × 5 = 25 cm².'],
    ['Use the perimeter to find the side, then the side to find the area.', 'Side: 20 ÷ 4 = 5 cm. Area: 5 × 5 = 25 cm².']),
  // 35
  q('easy',
    ['Nhìn hình. Hình nào có diện tích lớn nhất?', 'Look at the picture. Which shape has the biggest area?'],
    [['Hình B', 'Shape B'], ['Hình A', 'Shape A'], ['Hình C', 'Shape C'], ['Ba hình bằng nhau', 'All three are equal']],
    ['Đếm số ô bên trong mỗi hình (hình A dài nhất nhưng chưa chắc nhiều ô nhất).', 'A có 5 ô, B có 6 ô, C có 4 ô. Hình B lớn nhất.'],
    ['Count the squares inside each shape (A is the tallest but may not have the most).', 'A has 5, B has 6, C has 4 squares. Shape B is the biggest.'],
    { ill: 'ma-grid-area' }),
  // 36
  q('medium',
    ['Có bao nhiêu thẻ domino cỡ 1 × 2 ô để phủ kín bảng 4 × 5 ô, không chồng lên nhau?', 'How many 1 × 2 dominoes cover a 4 × 5 board exactly, with no overlaps?'],
    [['10 thẻ', '10 dominoes'], ['20 thẻ', '20 dominoes'], ['9 thẻ', '9 dominoes'], ['5 thẻ', '5 dominoes']],
    ['Mỗi thẻ domino phủ đúng 2 ô.', 'Bảng có 4 × 5 = 20 ô. Cần 20 : 2 = 10 thẻ.'],
    ['Each domino covers exactly 2 squares.', 'The board has 4 × 5 = 20 squares. It needs 20 ÷ 2 = 10 dominoes.']),
  // 37
  q('hard',
    ['Trên giấy kẻ ô, Minh vẽ hình vuông 4 × 4 ô, rồi nối 4 trung điểm của 4 cạnh thành một hình vuông nghiêng. Hình vuông nghiêng có diện tích bao nhiêu ô vuông?', 'On grid paper, Minh draws a 4 × 4 square, then joins the 4 midpoints of its 4 sides to make a tilted square. What is the area of the tilted square in squares?'],
    [sq(8), sq(4), sq(12), sq(16)],
    ['Lấy hình vuông lớn trừ 4 tam giác ở góc; mỗi tam giác là nửa hình vuông 2 × 2.', 'Hình lớn: 4 × 4 = 16 ô. Mỗi tam giác góc: 4 : 2 = 2 ô, 4 tam giác là 8 ô. Còn: 16 − 8 = 8 ô vuông.'],
    ['Take the big square minus 4 corner triangles; each is half of a 2 × 2 square.', 'Big square: 4 × 4 = 16. Each corner triangle: 4 ÷ 2 = 2, so 4 of them make 8. Tilted square: 16 − 8 = 8 squares.']),
  // 38
  q('medium',
    ['Luống rau hình chữ nhật dài 5 ô, rộng 3 ô. Bố nới dài thêm 2 ô (rộng vẫn 3 ô). Diện tích luống rau tăng thêm bao nhiêu ô vuông?', 'A vegetable bed is 5 squares long and 3 squares wide. Dad makes it 2 squares longer (still 3 wide). By how many squares does the area grow?'],
    [sq(6), sq(2), sq(4), sq(21)],
    ['Phần thêm là một hình chữ nhật 2 × 3.', 'Thêm 2 × 3 = 6 ô vuông. (Trước 5 × 3 = 15, sau 7 × 3 = 21; 21 − 15 = 6. Chu vi mới tăng 4.)'],
    ['The added part is a 2 × 3 rectangle.', 'Added: 2 × 3 = 6 squares. (Before 5 × 3 = 15, after 7 × 3 = 21; 21 − 15 = 6. The perimeter grows by 4.)']),
  // 39
  q('hard',
    ['Hà xếp các ô vuông thành hình bậc thang 6 bậc: cột 1 có 1 ô, cột 2 có 2 ô, …, cột 6 có 6 ô. Hình bậc thang có diện tích bao nhiêu ô vuông?', 'Hà builds a staircase of 6 steps from squares: column 1 has 1 square, column 2 has 2, …, column 6 has 6. What is the area of the staircase in squares?'],
    [sq(21), sq(24), sq(36), sq(15)],
    ['Ghép cặp đầu–cuối: 1 + 6, 2 + 5, 3 + 4 đều bằng 7.', '1 + 2 + 3 + 4 + 5 + 6 = 3 × 7 = 21 ô vuông. (24 là chu vi, 36 là cả hình vuông 6 × 6.)'],
    ['Pair first and last: 1 + 6, 2 + 5, 3 + 4 each make 7.', '1 + 2 + 3 + 4 + 5 + 6 = 3 × 7 = 21 squares. (24 is the perimeter, 36 is the whole 6 × 6 square.)']),
  // 40
  q('medium',
    ['Hình P là hình chữ nhật 9 ô × 2 ô. Hình Q là hình chữ nhật 5 ô × 4 ô. Hình nào có diện tích lớn hơn và lớn hơn bao nhiêu ô?', 'Shape P is a rectangle 9 squares × 2 squares. Shape Q is a rectangle 5 squares × 4 squares. Which has the bigger area, and by how many squares?'],
    [['Hình Q, hơn 2 ô', 'Shape Q, by 2 squares'], ['Hình P, hơn 4 ô', 'Shape P, by 4 squares'], ['Hình P, hơn 2 ô', 'Shape P, by 2 squares'], ['Hình Q, hơn 4 ô', 'Shape Q, by 4 squares']],
    ['Hình dài hơn chưa chắc rộng hơn — tính diện tích từng hình.', 'P: 9 × 2 = 18 ô. Q: 5 × 4 = 20 ô. Hình Q hơn 20 − 18 = 2 ô. (Chu vi P là 22, Q là 18, nên chu vi P hơn 4.)'],
    ['A longer shape is not always bigger — find each area.', 'P: 9 × 2 = 18. Q: 5 × 4 = 20. Shape Q is bigger by 20 − 18 = 2 squares. (P has perimeter 22, Q has 18, so P wins on perimeter by 4.)']),
]
