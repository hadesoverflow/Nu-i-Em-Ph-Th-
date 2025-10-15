import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { MOCK_MEDIA_ITEMS } from '../constants';
import type { MediaItem } from '../types';
import { X } from 'lucide-react';

const MediaCard: React.FC<{ item: MediaItem; onClick: () => void }> = ({ item, onClick }) => (
    <div onClick={onClick} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer">
        <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-white text-lg font-bold leading-tight drop-shadow-md">{item.title}</h3>
        </div>
    </div>
);


const Media: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

    return (
        <PageWrapper title="Thư viện Tư liệu" subtitle="Những khoảnh khắc ý nghĩa được ghi lại từ các hoạt động của dự án.">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-700">Hoạt động</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {MOCK_MEDIA_ITEMS.map(item => (
                    <MediaCard key={item.id} item={item} onClick={() => setSelectedImage(item)} />
                ))}
            </div>
            
            <div className="text-center mt-20 bg-gray-50 p-10 rounded-2xl">
                <h3 className="text-3xl font-bold text-emerald-700 mb-4">Thư viện Video</h3>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">Chúng tôi đang trong quá trình tổng hợp và dựng những thước phim ý nghĩa nhất. Vui lòng quay lại sau!</p>
                <div className="aspect-[16/9] max-w-3xl mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 font-semibold">Video sắp ra mắt</p>
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-[100] p-4 animate-fadeIn"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-5xl max-h-[90vh] bg-white rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={selectedImage.originalImageUrl} 
                            alt={selectedImage.title} 
                            className="max-w-full max-h-[80vh] object-contain rounded-t-lg" 
                        />
                        <div className="bg-black bg-opacity-70 text-white text-center p-3 rounded-b-lg">
                            <p className="font-semibold">{selectedImage.title}</p>
                        </div>
                        <button 
                            onClick={() => setSelectedImage(null)} 
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

export default Media;