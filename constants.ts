import type { NavLink, MediaItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { path: '/', label: 'Trang chủ' },
  { path: '/gioithieu', label: 'Giới thiệu' },
  { path: '/tulieu', label: 'Tư liệu' },
  { path: '/taichinh', label: 'Tài chính' },
  { path: '/donggop', label: 'Đóng góp' },
];

export const MOCK_MEDIA_ITEMS: MediaItem[] = [
  { 
    id: 1, 
    imageUrl: '/EN01.jpg', 
    originalImageUrl: '/EN01.jpg', 
    title: 'EN01', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 01',
      subheading: '❤️‍🩹Tìm Anh Chị nuôi❤️‍🩹',
      paragraphs: [
        'E Nguyễn Văn Huy Hoàng, 14 tuổi. Địa chỉ: Khu 1, Thủy Trạm xã Sơn Thủy, Thanh Thủy, Phú Thọ.',
        'Hoàng là con của bố Vũ, mẹ Liên. Bố Vũ sức khoẻ yếu, tinh thần ngờ nghệch. Mẹ đã bỏ đi không rõ tung tích 7 năm nay. Hiện Hoàng sống với bố và bà (bà đã lớn tuổi). Gia đình không có lao động chính, không có thu nhập. Thường xuyên phải đi ăn nhờ.',
        '😑 Cứ tới đầu năm học Hoàng rất sợ không có tiền đóng học, mua sách vở phải nghỉ học. Năm nay Hoàng học lớp 9 tại trường THCS Sơn Thủy và con rất hiếu học muốn tiếp tục học lên cấp 3.',
        'Có nhân duyên với Hoàng, nên con muốn tìm AC nuôi, hỗ trợ em Hoàng 200.000/tháng để em tiếp tục được đến trường và có chi phí ăn uống sinh hoạt cho cả nhà cho tới khi em Hoàng có thể đi làm nuôi được bố và bà. Em sẽ gom lại mỗi tháng trao gia đình 500.000.',
        '- Nếu AC ở xa muốn nuôi em:',
        '+ Vui lòng chuyển tiền hỗ trợ vào TK: 103005717636. Vietinbank Lê Thị Lan.',
        '+ Nội dung chuyển khoản: Tên + Nuôi em Hoàng. Quỹ này sẽ được nhóm đại diện AC nuôi trao hàng tháng cho gia đình.',
        '- AC ở gần có thể trực tiếp hàng tháng trao cho Hoàng: vui lòng báo cho em thời gian hỗ trợ, số tiền hỗ trợ.',
        'Mọi sự hỗ trợ, đỡ đầu xin thông báo cho em. Vì em là người duy nhất phụ trách dự án này, em sẽ phân bổ hợp lý để tránh sự trùng lặp nhiều AC đỡ đầu cùng một lúc.',
        'Xin cảm ơn quý AC, cha mẹ đã thương Hoàng. Xin tri ân công đức quý cha mẹ AC ạ.'
      ],
    },
  },
  { 
    id: 2, 
    imageUrl: '/EN02.jpg', 
    originalImageUrl: '/EN02.jpg', 
    title: 'EN02', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 02',
      subheading: '🙏 Mong gặp anh chị nuôi',
      paragraphs: [
        '👉 Em nuôi số 02: Ba em bé đang sống một mình. Địa chỉ: Xã Văn Miếu, Thanh Sơn, Phú Thọ.',
        '💁‍♀️ 1. Em Hà Thuỳ Trang, sinh 05/06/2012, học lớp 6 trường THCS Văn Miếu.',
        '👨‍⚕️ 2. Em Hà Quang Trung, sinh 24/09/2014, học lớp 4 trường TH Văn Miếu.',
        '👨‍⚕️ 3. Em Hà Quang Kiên, sinh 08/09/2016, học lớp 2 trường TH Văn Miếu (em mới bị ngã gãy chân và phải mổ ở đầu).',
        '👉 Hoàn cảnh: mẹ bỏ đi biệt tích, bố đi thợ xây. Năm 2023 bị ngã giàn giáo 2 lần, gãy 4 xương sườn và ảnh hưởng thần kinh, giờ thần kinh không bình thường, sức khoẻ kém nên ai thuê gì làm đó. Bố vẫn đi xách vữa thuê ở Hà Nội nhưng tiền công không nhiều, 3 tháng mới có thể về với con một lần hoặc khi các con ốm mới về.',
        '👉 Ba đứa trẻ ở một mình sống lay lắt bữa đói bữa no. Bé Trang 12 tuổi lo cho các em mọi việc từ ăn, học, giặt giũ.',
        '☘️ Buổi sáng bé Trang nấu cơm sẵn; bữa có ăn sáng, bữa phải nhịn đói đi học. Trưa 12h30 các bé mới về đến nhà, bé Trang lại nấu rau với nước, hai em ăn xong lập tức vượt dốc cao dài để quay lại trường. Trang đầu năm đã bỏ học 1 tháng nhưng cô giáo vận động nên trở lại lớp.',
        '👉 Các con cần thêm 2 chiếc xe đạp cho 2 em nhỏ vì phải đi bộ 5km; bé Trang đạp xe 7km leo dốc. Mong được kết nối mua cho Trang 1 xe đạp điện (cũ cũng được) và hỗ trợ 300.000đ/tháng cho 3 bé mua thêm đồ ăn.',
        '🤲 Ba bé mong được anh chị nuôi, cô chú đỡ đầu mỗi tháng 50k, 100k, hay 200k (nếu có thể xin đồng hành đến khi các bé học hết cấp 3). Tuy còn cha nhưng sức khoẻ kém, khi khoẻ mới đi làm nên miệng ăn còn chưa đủ.',
        '👉 Nhận hỗ trợ xin liên hệ đại diện Dự án Nuôi Em tỉnh Phú Thọ: 0914 677 566 (Lê Lan) hoặc chị Lê Thị Hồng Vân phụ trách dự án, SĐT 0963 686 601.',
        '🙏 Mọi ủng hộ xin gửi về STK: 198811399999 (MB Bank) Chủ tài khoản: Lê Thị Hồng Vân.'
      ],
    },
  },
  { 
    id: 3, 
    imageUrl: '/EN05.jpg', 
    originalImageUrl: '/EN05.jpg', 
    title: 'EN03', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 03',
      subheading: '❤️ Thông báo em nuôi mã số 03',
      paragraphs: [
        'Em Trần Quốc Hoà (23/01/2010), học sinh lớp 8B trường THCS Văn Lung.',
        'Địa chỉ: Khu Thống Nhất xã Văn Lung, thị xã Phú Thọ.',
        '👉 Hoàn cảnh: mồ côi cả cha lẫn mẹ, Hoà ở với bà 80 tuổi bị khớp đi lại khó khăn.',
        'Anh trai Hoà là Trần Văn Hưng 18 tuổi, khờ khạo, bị bệnh cao huyết áp nhưng là lao động chính. Hôm nào khoẻ anh đi xách vữa thuê kiếm tiền mua gạo nuôi cả 5 bà cháu (thêm 2 bé lớp 5 và mẫu giáo của dì út bệnh nặng gửi bà).',
        '👉 Mỗi tháng gia đình cần khoảng 60kg gạo; tháng nào anh Hưng bệnh không đi làm được thì bà phải vay tiền mua đồ ăn. Họ hàng cũng khó khăn. Hoà sớm phải gánh gia đình vì bà già yếu, anh bệnh, các em còn nhỏ.',
        '🍀 Hoà mong được học hết cấp 3 nhưng hoàn cảnh hiện tại không đủ tiền đóng học (học phí dân lập trên 10 triệu). Nếu được đi học Hoà sẽ có tương lai hơn, em ngoan ngoãn và biết việc.',
        '🍁 Rất may Hoà đã có các anh chị nhận nuôi dù nhóm chưa lên bài. Nhóm đã trích quỹ hỗ trợ 300k mua gạo, mắm, muối, đường… Từ tháng 5 mức chi tiền ăn sẽ là 400k/tháng (chị Thu Hoàn - nhóm Thiện nguyện thị xã Phú Thọ phụ trách trao). Phần còn lại lưu quỹ cho việc học sau này, thu chi sẽ được kê khai đầy đủ.',
        '🍀 Mã EN03 Trần Văn Hoà tạm ngừng nhận hỗ trợ để nhường cho mã 04, 05 sắp tới.',
        '🙏 Cảm ơn các anh chị đã làm việc tử tế với Hoà. Hy vọng mọi người sẽ đồng hành đến khi em học hết cấp 3.'
      ],
    },
  },
  { 
    id: 4, 
    imageUrl: '/EN07.jpg', 
    originalImageUrl: '/EN07.jpg', 
    title: 'EN07', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 07',
      subheading: 'Mất nửa đầu cha, mất cả cuộc đời của con',
      paragraphs: [
        'Bố Đinh Công Diện (1987) từng là trụ cột nhưng sau tai nạn kinh hoàng đã mất nửa hộp sọ và không còn tỉnh táo, thường bỏ nhà đi lang thang.',
        '👧 Đinh Thị Thu Phương (2015) – học lớp 4; 👧 Đinh Thị Thu Trâm (2018) – học lớp 1. Hai bé sống tại xã Văn Miếu, huyện Thanh Sơn, Phú Thọ.',
        'Mẹ đã bỏ đi từ ngày bố gặp nạn, để lại hai con nương nhờ vòng tay bà nội Lê Thị Dậu (1957) – người đã già yếu, lưng còng vì cơ cực. Miếng ăn thiếu thốn, chuyện học hành như giấc mơ xa.',
        'Ban Tổ chức Dự án Nuôi Em Phú Thọ tha thiết kêu gọi sự chung tay để hai bé tiếp tục đến trường và có tương lai.',
        'Chúng con không xin nhiều – chỉ mong một phép màu nhỏ từ những tấm lòng nhân ái.',
        'Mọi sự giúp đỡ xin gửi về STK 7863 MB – chủ tài khoản Tạ Công Đông, hoặc gửi tới tài khoản của dự án dưới video.',
        'Xin tri ân tấm lòng của quý vị – những người vẫn tin vào sự tử tế và sức mạnh của lòng trắc ẩn.',
        'Một bàn tay đưa ra lúc này có thể nâng đỡ cả một cuộc đời đang chực ngã. Xin hãy chia sẻ, lắng nghe và yêu thương.'
      ],
    },
  },
  { 
    id: 5, 
    imageUrl: '/EN09.jpg', 
    originalImageUrl: '/EN09.jpg', 
    title: 'EN09', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 09',
      subheading: '💔 Ba đứa trẻ mồ côi mẹ',
      paragraphs: [
        'Ba đứa trẻ đã mồ côi mẹ từ rất nhỏ, bố vướng vòng lao lý, cả tuổi thơ chỉ còn ông bà nội già yếu, đau bệnh từng ngày.',
        'Người ông – chỗ dựa cuối cùng – đang nằm viện vì xẹp phổi, không đủ tiền điều trị. Người bà gầy còm gắng gượng nuôi ba cháu dù sức lực và tinh thần kiệt quệ.',
        '📍 Gia đình ông Lê Văn Lợi (1964) và bà Trần Thị Thắng (1970) sống tại Khu An Ninh Trung, xã Văn Lung, thị xã Phú Thọ cùng ba cháu nội:',
        '1. Lê Chấn Phong (01/04/2014)',
        '2. Lê Chấn Khang (13/06/2016)',
        '3. Lê Chấn Thành (21/07/2019)',
        '⚠️ Tuổi thơ các em dần mất đi vì lo miếng ăn và bệnh tật của ông bà. Bữa cơm hôm nay chưa biết có kịp chín, ngày mai liệu còn tiếng cười hay chỉ là giọt nước mắt.',
        '🌟 Chúng ta có thể không làm điều phi thường, nhưng chỉ một chút yêu thương sẻ chia cũng đủ sưởi ấm đời các em.',
        '🙏 Hãy dang tay đón lấy các em – những mầm non cần che chở – đừng để các em lớn lên trong đói khổ và tuyệt vọng.',
        '---',
        'Chung tay hôm nay là gieo hy vọng ngày mai. Xin đừng quay lưng khi trái tim còn rung động trước nỗi đau.',
        '📞 Liên hệ: Ông Lê Văn Lợi 0964 803 921 / Trưởng nhóm Lê Lan 0914 677 566 / Phụ trách dự án Lê Vân 0963 686 601.',
        '💳 Đóng góp gửi về: STK chữ QUYTHIENNGUYEN – VietinBank, chủ tài khoản Lê Thị Lan, nội dung: [Tên bạn] + EN09.'
      ],
    },
  },
  { 
    id: 6, 
    imageUrl: '/EN10.jpg', 
    originalImageUrl: '/EN10.jpg', 
    title: 'EN10', 
    category: 'Hoạt động',
    detail: {
      heading: 'Em nuôi 10',
      subheading: 'Hai đứa trẻ đáng thương khi ông bị ung thư giai đoạn cuối',
      paragraphs: [
        '🌱 Mã EN10 (Khu 1, xã Xuân Áng, Hạ Hòa, Phú Thọ) thuộc Dự án Nuôi Em Phú Thọ có hoàn cảnh đặc biệt khó khăn.',
        '👉 Link hoàn cảnh: https://www.facebook.com/permalink.php?story_fbid=122143169636272183&id=61558165517893',
        '🙏 Hai con đang sống cùng ông bà. Bà đi làm osin, nhưng ông nội vừa phát hiện ung thư phổi giai đoạn cuối, nên bà phải bỏ việc về chăm ông dù bản thân cũng gầy yếu (chỉ hơn 30kg).',
        '🌱 Mã EN10 nhận hỗ trợ từ tháng 09/2024. Đến nay các anh chị nuôi đã hết thời gian hỗ trợ, hiện mã 10 không còn AC nuôi nào. Hai bé phải lên ăn nhờ nhà bác dù nhà bác cũng nghèo và đông con.',
        '🌷 Ban tổ chức mong kết nối thêm anh chị nuôi để hỗ trợ hai bé và ông bà vượt qua giai đoạn này.',
        '🙏 Xin hãy giúp đỡ em, nhận nuôi để em được ăn no, đi học và lớn lên như bao đứa trẻ khác.',
        '💌 Liên hệ trưởng nhóm Lê Lan: 0914 677 566.',
        '💌 TK công khai kế toán Dự án: Chủ TK Lê Thị Hồng Vân – 8.6.6.0 MB; nội dung: MTQ ghi rõ tên + "EN10".',
        '👉 Link đăng ký nuôi em: https://forms.gle/yTPyh3FeknNiFjU57',
        '👉 Trang page chính thức: https://www.facebook.com/profile.php?id=61558165517893',
        '🌱🌱🌱'
      ],
    },
  },
  { 
    id: 7, 
    imageUrl: '/Trung thu 2025.jpg', 
    originalImageUrl: '/Trung thu 2025.jpg', 
    title: 'Trung Thu 2025', 
    category: 'Hoạt động',
    detail: {
      heading: 'Trung Thu 2025',
      subheading: '🧧 Niềm vui tràn đầy cho 25 cháu dự án',
      paragraphs: [
        'Năm nay Trung Thu tròn mà lòng người thêm đầy. 25 cháu của Dự án Nuôi Em gửi lời cảm ơn tới các chị, các mẹ đã gửi rất nhiều quà.',
        'Quà đang được chuyển đi rồi, các con sẵn sàng phá cỗ thôi! 😘😘😘',
        '🌱🌱🌱🌱'
      ],
    },
  },
];


export const GOOGLE_SHEETS_LINK = "https://docs.google.com/spreadsheets/d/1zdawBZOXsaYasL1B1XavpW1DtCHdALo9/edit?usp=sharing&gid=1502235076";

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

export const QR_CODE_URL = "https://api.vietqr.io/image/970422-8660-compact2.png?accountName=Le Thi Hong Van&addInfo=Ten%20ban%20-%20SDT%20-%20Nuoi%20em";
