
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { Banknote, QrCode, Clipboard, Check, Sparkles, HeartHandshake, BookOpen, Share2, Download } from 'lucide-react';
import { QR_CODE_URL } from '../constants';
import { Link } from 'react-router-dom';

const Donate: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const bankAccountNumber = '8660';

    const handleCopy = () => {
        navigator.clipboard.writeText(bankAccountNumber.replace(/\s/g, ''));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    
    const handleDownloadQR = async () => {
        try {
            const response = await fetch(QR_CODE_URL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'QR-NuoiEmPhuTho.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (error) {
            console.error('Failed to download QR code:', error);
            // Optionally, you can add user-facing error handling here.
        }
    };


    return (
        <PageWrapper title="Chung tay Đóng góp" subtitle="Mỗi đóng góp của bạn là một bữa ăn, một tương lai cho các em nhỏ.">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Column for Bank Info */}
                <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center"><Banknote className="w-8 h-8 mr-3 text-emerald-500" /> Thông tin chuyển khoản</h3>
                    
                    <div className="space-y-6 text-gray-700">
                        <div>
                            <p className="font-semibold text-gray-500">Ngân hàng:</p>
                            <p className="text-lg">MB Bank (Ngân hàng Quân đội)</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-500">Số tài khoản:</p>
                            <div className="flex items-center space-x-4 mt-1">
                                <p className="text-2xl font-mono tracking-wider text-emerald-800">{bankAccountNumber}</p>
                                <button onClick={handleCopy} className={`p-2 rounded-full transition-all duration-200 ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}>
                                    {copied ? <Check className="w-5 h-5" /> : <Clipboard className="w-5 h-5" />}
                                    <span className="sr-only">{copied ? 'Đã sao chép' : 'Sao chép'}</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-500">Chủ tài khoản:</p>
                            <p className="text-lg">Lê Thị Hồng Vân</p>
                        </div>
                         <div className="bg-emerald-50 p-4 rounded-lg">
                            <p className="font-semibold text-emerald-800">Nội dung chuyển khoản (gợi ý):</p>
                            <p className="italic text-emerald-700">Ten ban - SĐT - Nuoi em</p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                        <h4 className="font-semibold text-lg mb-4 text-gray-800 flex items-center justify-center"><QrCode className="w-6 h-6 mr-2 text-emerald-500" /> Hoặc quét mã VietQR</h4>
                        <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
                           <img src={QR_CODE_URL} alt="Mã QR ủng hộ" className="w-56 h-56 rounded-lg shadow-md" />
                            <button
                                onClick={handleDownloadQR}
                                className="mt-6 inline-flex items-center justify-center px-6 py-2 font-semibold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md"
                            >
                                <Download className="mr-2 h-5 w-5" />
                                Tải mã QR
                            </button>
                        </div>
                    </div>
                </div>

                {/* Column for helpful info */}
                <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-bold text-emerald-700 mb-6 flex items-center">
                        <Sparkles className="w-8 h-8 mr-3 text-emerald-500" />
                        Sự giúp đỡ của bạn mang ý nghĩa to lớn
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <HeartHandshake className="w-7 h-7 mr-4 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">Nuôi em chỉ với 150.000đ/tháng</h4>
                                <p className="text-gray-600 mt-1">Chỉ với 150.000 đồng, tương đương chi phí cho vài ly cà phê, bạn đã trao tặng một em nhỏ bữa ăn trưa có thịt trong suốt cả tháng đi học. Đây không chỉ là sự no đủ về vật chất, mà còn là nguồn động viên tinh thần to lớn, giúp các em chuyên tâm học tập và vững bước trên con đường tới trường.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BookOpen className="w-7 h-7 mr-4 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">Minh bạch tuyệt đối</h4>
                                <p className="text-gray-600 mt-1">Chúng tôi cam kết 100% minh bạch. Mọi đóng góp của bạn sẽ được cập nhật công khai và chi tiết trên trang sao kê trực tuyến. Bạn có thể dễ dàng theo dõi và biết chắc chắn rằng tấm lòng của mình đã được trao gửi đúng nơi, đúng người. Truy cập trang <Link to="/taichinh" className="text-emerald-600 hover:underline font-semibold">Tài chính</Link> để xem chi tiết.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Share2 className="w-7 h-7 mr-4 text-emerald-600 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg text-gray-800">Lan tỏa thông điệp</h4>
                                <p className="text-gray-600 mt-1">Không phải mọi sự giúp đỡ đều là vật chất. Một lượt chia sẻ thông tin về dự án trên Facebook, Zalo hay kể cho bạn bè, người thân về "Nuôi Em Phú Thọ" chính là hành động lan tỏa yêu thương mạnh mẽ. Hành động nhỏ này giúp chúng tôi kết nối với nhiều tấm lòng vàng hơn, nhân rộng vòng tay che chở cho các em.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Donate;
