
import React from 'react';
import { CERTIFICATES } from '../constants';

const Certificates: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Chứng chỉ & Bằng cấp</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Các thành tựu và chứng chỉ chuyên môn mình đã đạt được trong quá trình học tập và phát triển bản thân.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {CERTIFICATES.map((cert) => (
          <div key={cert.id} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center space-x-2 mb-2">
                <img src="https://cdn.simpleicons.org/cisco" className="w-4 h-4 opacity-70" alt="Issuer" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{cert.issuer}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {cert.description}
              </p>
              <div className="mt-auto">
                <button className="w-full py-2.5 px-4 rounded-xl border-2 border-gray-100 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:border-blue-200 hover:text-blue-600 transition-all">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
