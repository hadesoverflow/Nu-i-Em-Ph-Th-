import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  HeartHandshake,
  Baby,
  School,
  Leaf,
  Home,
  Sun,
  Smile,
  HandHeart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const BackgroundIcon: React.FC<{ icon: React.ElementType; className: string; }> = ({ icon: Icon, className }) => (
    <div className={`absolute text-emerald-200/70 opacity-60 hidden md:block ${className}`}>
        <Icon strokeWidth={1.5} className="w-full h-full" />
    </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-emerald-50 text-gray-700 border-t border-emerald-200 overflow-hidden">
      
      {/* Background Icons */}
      <BackgroundIcon icon={HeartHandshake} className="w-20 h-20 top-8 left-16 transform -rotate-12" />
      <BackgroundIcon icon={Baby} className="w-16 h-16 top-1/2 left-8 transform rotate-6" />
      <BackgroundIcon icon={School} className="w-16 h-16 top-12 left-1/3 transform rotate-12" />
      <BackgroundIcon icon={Leaf} className="w-20 h-20 top-16 right-1/3 transform -rotate-6" />
      <BackgroundIcon icon={Home} className="w-14 h-14 top-10 right-1/4 transform rotate-6" />
      <BackgroundIcon icon={Sun} className="w-16 h-16 top-1/2 right-12 transform -rotate-12" />
      <BackgroundIcon icon={Smile} className="w-16 h-16 bottom-28 right-16 transform rotate-12" />
      <BackgroundIcon icon={HandHeart} className="w-12 h-12 bottom-32 left-1/4 transform rotate-15" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        
        {/* Logo */}
        <Link to="/" className="inline-flex items-center justify-center mb-4">
          <img src="logo.png" alt="Nuôi Em Phú Thọ Logo" className="h-20 w-auto" />
        </Link>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-800 tracking-wide uppercase">
          NUÔI EM PHÚ THỌ
        </h2>
        
        {/* Subtitle */}
        <p className="mt-2 text-gray-600">
          Dự án cộng đồng hỗ trợ trẻ em vùng cao
        </p>

        {/* Contact Info */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm md:text-base text-gray-700">
          <a href="https://www.facebook.com/profile.php?id=61575146447480" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <Facebook className="w-5 h-5 text-blue-600" />
            <span>Nuôi em Phú Thọ</span>
          </a>
          <a href="tel:0963686601" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <Phone className="w-5 h-5 text-emerald-600" />
            <span>0963.686.601 - 0914.677.566</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span>Thị xã Phú Thọ, tỉnh Phú Thọ, Việt Nam</span>
          </div>
          <a href="mailto:lehongvan8@gmail.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <Mail className="w-5 h-5 text-emerald-600" />
            <span>lehongvan8@gmail.com</span>
          </a>
        </div>

      </div>
      
      {/* Bottom Bar */}
      <div className="relative z-10 bg-emerald-700 text-white py-3 text-center text-sm">
        <p>Nuôi Em Phú Thọ © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;