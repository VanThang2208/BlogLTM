
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Kết nối với mình</h1>
        <p className="text-gray-500">Bạn có câu hỏi, ý tưởng hay đơn giản là muốn trò chuyện về networking? Hãy để lại tin nhắn nhé!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Email</h3>
              <p className="text-gray-500 text-sm">nhat.network@example.com</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <div className="bg-green-50 p-3 rounded-xl text-green-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Địa chỉ</h3>
              <p className="text-gray-500 text-sm">TP. Hồ Chí Minh, Việt Nam</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4">
            <div className="bg-purple-50 p-3 rounded-xl text-purple-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
               </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Social</h3>
              <p className="text-gray-500 text-sm">@minhnhat.netcode</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Họ và tên</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Nguyễn Văn A" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tiêu đề</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="Hợp tác dự án..." />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nội dung</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all min-h-[150px]" placeholder="Viết tin nhắn của bạn ở đây..."></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
