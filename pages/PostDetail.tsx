
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { POSTS } from '../constants';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Không tìm thấy bài viết</h2>
        <button 
          onClick={() => navigate('/bai-viet')}
          className="mt-4 text-blue-600 hover:underline"
        >
          Quay lại danh sách bài viết
        </button>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/bai-viet" className="inline-flex items-center text-sm text-blue-600 font-medium mb-8 hover:translate-x-1 transition-transform">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Quay lại danh sách
      </Link>

      <header className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">{post.date}</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-400 text-sm">{post.readTime}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center space-x-4 border-b border-gray-100 pb-8">
          <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-bold text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">Network Specialist & Blogger</p>
          </div>
        </div>
      </header>

      <div className="prose prose-blue prose-lg max-w-none text-gray-700 leading-relaxed">
        <img src={post.image} alt={post.title} className="w-full h-auto rounded-3xl mb-10 shadow-lg" />
        <p className="text-xl text-gray-600 font-medium mb-8 italic border-l-4 border-blue-600 pl-6">
          {post.excerpt}
        </p>
        <p className="mb-6">
          Trong thế giới mạng máy tính hiện đại, việc nắm vững các kiến thức cơ bản là bước đệm quan trọng nhất. Bài viết này sẽ đi sâu vào những khía cạnh kỹ thuật mà chúng ta thường gặp trong quá trình làm việc và triển khai hệ thống.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tại sao nội dung này lại quan trọng?</h2>
        <p className="mb-6">
          Mỗi giao thức, mỗi dòng lệnh cấu hình đều mang một ý nghĩa nhất định trong việc duy trì sự ổn định và bảo mật của toàn bộ hạ tầng. Khi bạn hiểu được bản chất của luồng dữ liệu, việc khắc phục sự cố (troubleshooting) sẽ trở nên dễ dàng hơn bao giờ hết.
        </p>
        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 my-10">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Ghi chú quan trọng:</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
            <li>Luôn thực hiện sao lưu (backup) cấu hình trước khi thay đổi.</li>
            <li>Kiểm tra tính tương thích của thiết bị và phiên bản phần mềm.</li>
            <li>Sử dụng môi trường Lab (GNS3, Eve-NG) để thử nghiệm trước khi áp dụng vào Production.</li>
          </ul>
        </div>
        <p>
          Hy vọng bài viết này mang lại giá trị cho bạn. Đừng ngần ngại liên hệ với mình qua trang Liên hệ nếu bạn có bất kỳ thắc mắc nào về chủ đề này!
        </p>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
             <button className="text-gray-400 hover:text-blue-600 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
             </button>
             <button className="text-gray-400 hover:text-blue-400 transition-colors">
               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
             </button>
          </div>
          <button className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-100">Chia sẻ bài viết</button>
        </div>
      </footer>
    </article>
  );
};

export default PostDetail;
