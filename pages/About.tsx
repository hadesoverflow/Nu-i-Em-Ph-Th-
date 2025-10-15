
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Target, Heart, Users, Map, Mail } from 'lucide-react';

const InfoCard: React.FC<{ icon: React.ElementType; title: string; children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
            <div className="bg-emerald-100 p-3 rounded-full">
                <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="ml-4 text-2xl font-bold text-emerald-700">{title}</h3>
        </div>
        <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
);

const TeamMemberCard: React.FC<{ avatarUrl: string; name: string; role: string; }> = ({ avatarUrl, name, role }) => (
    <div className="flex flex-col items-center text-center">
        <img
            src={avatarUrl}
            alt={name}
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg border-4 border-emerald-100/80"
        />
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <p className="text-emerald-600 font-semibold">{role}</p>
    </div>
);


const About: React.FC = () => {
    return (
        <PageWrapper title="Về chúng tôi" subtitle="Tìm hiểu về sứ mệnh, nguồn gốc và các hoạt động của dự án 'Nuôi Em Phú Thọ'.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                    <InfoCard icon={Heart} title="Sứ mệnh của chúng tôi">
                        <p>Dự án "Nuôi Em" ra đời với sứ mệnh xóa đói, cải thiện dinh dưỡng và thể chất cho trẻ em vùng cao. Tại Phú Thọ, chúng tôi tập trung vào các xã đặc biệt khó khăn, nơi các em nhỏ đến trường với những chiếc bụng đói, ảnh hưởng đến sự phát triển toàn diện. Mỗi bữa ăn không chỉ giúp các em no lòng mà còn là động lực để các em đến trường đều đặn, tiếp thu kiến thức và có một tương lai tươi sáng hơn.</p>
                    </InfoCard>
                </div>
                
                <InfoCard icon={Target} title="Mục tiêu chương trình">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Đảm bảo 100% trẻ em tại các điểm trường dự án tham gia được ăn trưa đủ dinh dưỡng.</li>
                        <li>Kêu gọi 1.500 nhà hảo tâm đồng hành cùng dự án trong năm nay.</li>
                        <li>Xây dựng và sửa chữa ít nhất 2 điểm trường xuống cấp.</li>
                        <li>Tổ chức các chương trình trao quà, quần áo ấm vào các dịp lễ, Tết.</li>
                    </ul>
                </InfoCard>

                <InfoCard icon={Map} title="Các địa bàn hoạt động">
                    <p>Chương trình "Nuôi Em Phú Thọ" hiện đang được triển khai tại các xã khó khăn thuộc tỉnh Phú Thọ.</p>
                     <p className="mt-2">Dự án tập trung vào các điểm trường tại các xã vùng cao, vùng đặc biệt khó khăn của tỉnh.</p>
                    <p className="mt-2">Chúng tôi đang nỗ lực mở rộng địa bàn để giúp đỡ được nhiều em nhỏ hơn nữa.</p>
                </InfoCard>
                
                <div className="md:col-span-2">
                     <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="bg-emerald-100 p-3 rounded-full">
                                <Users className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="ml-4 text-2xl font-bold text-emerald-700">Thành viên</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center pt-2">
                           <TeamMemberCard 
                                avatarUrl="Lê Thị Lan.jpg"
                                name="Lê Thị Lan"
                                role="Trưởng dự án"
                           />
                           <TeamMemberCard 
                                avatarUrl="https://i.ibb.co/7bJd7g2/avatar-female-1.png"
                                name="Lê Thị Hồng Vân"
                                role="Phụ trách dự án"
                           />
                        </div>
                    </div>
                </div>

                 <div className="md:col-span-2">
                    <InfoCard icon={Mail} title="Thông tin liên hệ">
                         <p>Mọi thắc mắc và mong muốn hợp tác, xin vui lòng liên hệ với chúng tôi qua:</p>
                        <ul className="space-y-2 mt-4">
                            <li><strong>Email:</strong> <a href="mailto:lehongvan8@gmail.com" className="text-emerald-600 hover:underline">lehongvan8@gmail.com</a></li>
                            <li><strong>Fanpage:</strong> <a href="https://www.facebook.com/profile.php?id=61575146447480" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">fb.com/nuoiemphutho</a></li>
                            <li><strong>Hotline:</strong> <a href="tel:0963686601" className="text-emerald-600 hover:underline">0963.686.601 - 0914.677.566</a></li>
                            <li><strong>Địa chỉ:</strong> Thị xã Phú Thọ, tỉnh Phú Thọ, Việt Nam.</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </PageWrapper>
    );
};

export default About;