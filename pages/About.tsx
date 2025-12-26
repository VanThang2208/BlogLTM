
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-12">
        <section className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://i.imgur.com/vH0i8B5.png"
            alt="Minh Nhật"
            className="w-48 h-48 rounded-2xl object-cover shadow-lg"
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-gray-900">Về mình</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chào các bạn! Mình là <span className="text-blue-600 font-semibold">Minh Nhật</span>, một kỹ sư mạng có niềm đam mê mãnh liệt với việc lập trình và tự động hóa.
            </p>
            <p className="text-gray-500">
              Hành trình của mình bắt đầu từ việc mày mò cấu hình các thiết bị Cisco, cho đến khi mình nhận ra sức mạnh của việc kết hợp hạ tầng mạng với code.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 p-1.5 rounded mr-2">🎯</span>
              Mục tiêu
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Xây dựng cộng đồng chia sẻ kiến thức NetDevOps tại Việt Nam, giúp các bạn kỹ sư mạng tiếp cận nhanh chóng với các công cụ lập trình hiện đại.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 p-1.5 rounded mr-2">💻</span>
              Kỹ năng
            </h2>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'Ansible', 'Docker', 'Linux', 'Cisco IOS', 'BGP/OSPF', 'API Rest'].map(skill => (
                <span key={skill} className="bg-gray-50 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 p-10 rounded-3xl text-white">
          <h2 className="text-2xl font-bold mb-6">Kinh nghiệm & Học vấn</h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-blue-400">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white rounded-full"></div>
              <h3 className="font-bold">Networking Academy Graduate</h3>
              <p className="text-blue-100 text-sm">Cisco Networking Academy</p>
              <p className="mt-2 text-sm">Hoàn thành các khóa học chuyên sâu về cơ sở hạ tầng mạng và lập trình ứng dụng.</p>
            </div>
            <div className="relative pl-6 border-l-2 border-blue-400">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white rounded-full"></div>
              <h3 className="font-bold">Network & Security Projects</h3>
              <p className="text-blue-100 text-sm">Personal Portfolio</p>
              <p className="mt-2 text-sm">Triển khai lab định tuyến phức tạp và tích hợp tường lửa vào hệ thống tự động hóa.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
