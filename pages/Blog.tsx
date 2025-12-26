
import React from 'react';
import { POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Tất cả bài viết</h1>
        <p className="text-gray-500 max-w-2xl">Khám phá kho tàng kiến thức về networking, automation, và programming mà mình đã tích lũy qua các dự án và kỳ thi chứng chỉ.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
            <div className="aspect-video relative overflow-hidden bg-gray-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-3 block">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                <Link to={`/bai-viet/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-xs text-gray-400">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
