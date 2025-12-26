
import React from 'react';
import { POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const featuredPosts = POSTS.slice(0, 6);

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="https://i.imgur.com/vH0i8B5.png"
              alt="Minh Nhật"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl"
            />
            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Network Engineer & Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Xin chào, mình là <span className="text-blue-600">Minh Nhật</span> 👋
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Chào mừng bạn đến với blog cá nhân của mình. Tại đây, mình chia sẻ các kiến thức chuyên sâu về <span className="font-semibold text-gray-900">Lập trình Mạng</span>, <span className="font-semibold text-gray-900">Cisco Networking</span> và các dự án thực tế mình đã thực hiện. Mong rằng những bài viết này sẽ giúp ích cho hành trình của bạn.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                <img src="https://cdn.simpleicons.org/python" className="w-4 h-4" alt="Python" />
                <span>Python Network</span>
              </span>
              <span className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                <img src="https://cdn.simpleicons.org/cisco" className="w-4 h-4" alt="Cisco" />
                <span>CCNA/CCNP</span>
              </span>
              <span className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
                <img src="https://cdn.simpleicons.org/shield" className="w-4 h-4" alt="Cyber" />
                <span>CyberOps</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                 <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                 </svg>
                 <h2 className="text-2xl font-bold text-gray-900">Bài viết mới nhất</h2>
              </div>
            </div>
            <div className="hidden sm:flex space-x-2">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white">Tất cả</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">JavaScript</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">Networking</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200">Tutorials</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-blue-100 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors">
                    <Link to={`/bai-viet/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-gray-50">
                    <div className="flex items-center space-x-2">
                      <img src={post.authorAvatar} className="w-7 h-7 rounded-full" alt={post.author} />
                      <span className="text-xs font-semibold text-gray-700">{post.author}</span>
                    </div>
                    <span className="text-[10px] font-medium text-gray-400">{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center space-x-2">
            <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-medium">1</button>
            <button className="w-10 h-10 rounded-lg text-gray-500 hover:bg-gray-100 font-medium">2</button>
            <button className="w-10 h-10 rounded-lg text-gray-500 hover:bg-gray-100 font-medium">3</button>
            <span className="text-gray-400">...</span>
            <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
