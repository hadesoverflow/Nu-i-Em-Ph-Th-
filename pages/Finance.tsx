import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { GOOGLE_SHEETS_LINK } from '../constants';
import { ArrowUpRight, FileText, Users, ChevronsRight, X } from 'lucide-react';

const childImage = "/thông tin.jpg";
const childImageOriginal = "/thông tin.jpg";

const Finance: React.FC = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const googleDocLink = "https://docs.google.com/document/d/1GQ6qoqCkJU_IOL_uxPPsD2D7QjtT9ZQn/edit";

    return (
        <PageWrapper title="Thông tin Dự án & Minh bạch" subtitle="Tìm hiểu sâu hơn về hoạt động, các em nhỏ được bảo trợ và báo cáo tài chính công khai của chúng tôi.">
            <div className="space-y-12">
                {/* Project Info Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="bg-emerald-100 p-5 rounded-full text-emerald-600">
                            <FileText className="w-12 h-12" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-2xl font-bold text-emerald-700">DỰ ÁN NUÔI EM PHÚ THỌ</h3>
                            <p className="text-gray-600 mt-2">Xem tài liệu chi tiết để hiểu rõ hơn về mục tiêu, cách thức hoạt động và tầm ảnh hưởng của dự án.</p>
                        </div>
                        <a
                            href={googleDocLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md flex-shrink-0"
                        >
                            Đọc ngay <ChevronsRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>

                {/* Children Info Section */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center mb-6">
                         <div className="bg-emerald-100 p-3 rounded-full mr-4">
                            <Users className="w-8 h-8 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-emerald-700">Thông tin em nuôi</h3>
                    </div>
                    <p className="text-gray-600 mb-8 text-center">Đây là nụ cười, là ánh mắt mà chúng ta cùng nhau bảo vệ và nuôi dưỡng mỗi ngày.</p>
                    <div className="flex justify-center">
                        <div 
                            className="w-full max-w-lg rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <img 
                                src={childImage} 
                                alt="Em nhỏ được hỗ trợ" 
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110" 
                            />
                        </div>
                    </div>
                </div>

                {/* Full Statistics Link */}
                 <div className="mt-8 text-center bg-gray-50 p-10 rounded-2xl">
                    <h3 className="text-2xl font-bold text-emerald-800">Minh bạch là ưu tiên hàng đầu</h3>
                    <p className="text-gray-600 max-w-xl mx-auto mt-2 mb-6">Mọi khoản đóng góp và chi tiêu đều được công khai và cập nhật liên tục. </p>
                    <a
                        href={GOOGLE_SHEETS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md"
                    >
                        Xem bảng sao kê công khai
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                    </a>
                </div>
            </div>

            {isLightboxOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100] p-4 animate-fadeIn"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div 
                        className="relative max-w-5xl max-h-[90vh] bg-white rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={childImageOriginal}
                            alt="Em nhỏ được hỗ trợ - ảnh gốc" 
                            className="max-w-full max-h-[90vh] object-contain rounded-lg" 
                        />
                        <button 
                            onClick={() => setIsLightboxOpen(false)} 
                            className="absolute -top-4 -right-4 text-white bg-emerald-600 rounded-full p-2 hover:bg-emerald-700 transition-all focus:outline-none"
                            aria-label="Đóng"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </PageWrapper>
    );
};

export default Finance;