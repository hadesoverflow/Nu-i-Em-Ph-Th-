
import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title, subtitle }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 animate-fadeIn">
       <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-700 tracking-tight">{title}</h1>
            {subtitle && <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{subtitle}</p>}
        </div>
      {children}
    </div>
  );
};

export default PageWrapper;
