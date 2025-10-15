import React from 'react';
import { Link } from 'react-router-dom';
import { Users, HandHeart, Baby, ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react';
import type { Statistic } from '../types';

const StatisticCard: React.FC<{ stat: Statistic }> = ({ stat }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="bg-emerald-100 p-5 rounded-full mb-4">
        <stat.icon className="w-10 h-10 text-emerald-600" />
      </div>
      <p className="text-5xl font-extrabold text-emerald-700">{stat.value}</p>
      <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
    </div>
);

const ValueCard: React.FC<{ icon: React.ElementType, title: string, children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
        <div className="inline-block bg-emerald-100 p-4 rounded-full mb-4">
            <Icon className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-emerald-800 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
);


const Home: React.FC = () => {
    const statistics: Statistic[] = [
        { icon: Baby, value: '1,200+', label: 'Em nhỏ được hỗ trợ' },
        { icon: Users, value: '850+', label: 'Nhà hảo tâm' },
        { icon: HandHeart, value: '2.5 tỷ+', label: 'Tổng tiền quyên góp' },
    ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[70vh] md:h-[90vh] animate-fadeIn" style={{ backgroundImage: "url('/background.jpg')" }}>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-lg">Mỗi tháng – Một bữa ăn – Một tương lai</h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-100 drop-shadow-md">
            Cùng "Nuôi Em Phú Thọ" thắp lên hy vọng cho trẻ em vùng cao, mang đến những bữa ăn đủ đầy và một tương lai tươi sáng hơn.
          </p>
          <Link
            to="/donggop"
            className="mt-10 px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Tham gia đóng góp ngay
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-emerald-50/70 animate-on-scroll">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {statistics.map(stat => <StatisticCard key={stat.label} stat={stat} />)}
              </div>
          </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
                <img src="tieude.jpg" alt="Giới thiệu dự án" className="rounded-2xl shadow-2xl w-full h-auto object-cover"/>
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 leading-tight">Về dự án "Nuôi Em Phú Thọ"</h2>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                    "Nuôi Em Phú Thọ" là một phần của hệ sinh thái "Nuôi Em" trên toàn quốc, với sứ mệnh cải thiện bữa ăn và điều kiện học tập cho trẻ em mầm non, tiểu học tại các xã đặc biệt khó khăn của Phú Thọ.
                </p>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Chúng tôi tin rằng mỗi sự đóng góp, dù nhỏ bé, đều tạo nên sự thay đổi lớn lao, giúp các em có một khởi đầu tốt đẹp hơn.
                </p>
                <Link to="/gioithieu" className="inline-block mt-8 text-emerald-600 font-bold hover:text-emerald-800 transition-colors text-lg group">
                    Tìm hiểu thêm <span className="inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
                </Link>
            </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-emerald-700">Sứ mệnh & Giá trị cốt lõi</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Những nguyên tắc dẫn lối cho mọi hoạt động của chúng tôi.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ValueCard icon={ShieldCheck} title="Minh bạch">
                    Mọi khoản đóng góp và chi tiêu đều được công khai, cập nhật thường xuyên để đảm bảo sự tin tưởng tuyệt đối từ cộng đồng.
                </ValueCard>
                <ValueCard icon={HeartHandshake} title="Yêu thương & Sẻ chia">
                    Chúng tôi hành động từ trái tim, kết nối những tấm lòng hảo tâm để lan toả tình yêu thương đến với các em nhỏ.
                </ValueCard>
                <ValueCard icon={TrendingUp} title="Hiệu quả & Bền vững">
                    Tối ưu hóa nguồn lực để tạo ra tác động lớn nhất, hướng tới việc xây dựng một tương lai tự lập, bền vững cho các em.
                </ValueCard>
            </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="py-20 bg-white animate-on-scroll">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-emerald-700">Hoạt động nổi bật</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Cập nhật những hình ảnh và câu chuyện mới nhất từ dự án.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Link to="/tulieu" className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <img src="xuatannong.jpg" alt="Hoạt động 1" className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"/>
                      <div className="p-6">
                          <span className="text-sm text-emerald-600 font-semibold">Bữa ăn đủ đầy</span>
                          <h3 className="font-bold text-xl mt-2 mb-2 text-gray-800">Trao những suất ăn nóng</h3>
                          <p className="text-gray-600">Những bữa trưa có thịt không chỉ là niềm vui mà còn là động lực để các em tới trường.</p>
                      </div>
                  </Link>
                  <Link to="/tulieu" className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <img src="nucuoihonnhien.jpg" alt="Hoạt động 2" className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"/>
                       <div className="p-6">
                          <span className="text-sm text-emerald-600 font-semibold">Giờ phút vui chơi</span>
                          <h3 className="font-bold text-xl mt-2 mb-2 text-gray-800">Nụ cười hồn nhiên</h3>
                          <p className="text-gray-600">Khoảnh khắc vui đùa quý giá của các em nhỏ sau giờ học căng thẳng.</p>
                      </div>
                  </Link>
                   <Link to="/taichinh" className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                      <img src="hotrothang10.jpg" alt="Hoạt động 3" className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"/>
                       <div className="p-6">
                          <span className="text-sm text-emerald-600 font-semibold">Tài chính</span>
                          <h3 className="font-bold text-xl mt-2 mb-2 text-gray-800">Báo cáo tài chính tháng 10</h3>
                          <p className="text-gray-600">Minh bạch tài chính là ưu tiên hàng đầu của dự án. Xem chi tiết tại đây.</p>
                      </div>
                  </Link>
              </div>
              <div className="text-center mt-16">
                  <Link to="/tulieu" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Xem tất cả hoạt động
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;