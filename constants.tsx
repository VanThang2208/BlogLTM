
import { Post, Certificate } from './types';

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'Nhập môn Networking Basics: Những khái niệm cốt lõi',
    excerpt: 'Tìm hiểu về mô hình OSI, TCP/IP và cách các thiết bị mạng giao tiếp với nhau. Bài viết dành cho người mới bắt đầu.',
    category: 'CƠ BẢN',
    date: '12/10/2023',
    readTime: '5 phút đọc',
    image: 'https://picsum.photos/seed/net1/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  },
  {
    id: '2',
    title: 'JavaScript Essentials 1: Nền tảng cho Network Automation',
    excerpt: 'Tại sao kỹ sư mạng cần học JavaScript? Khám phá cú pháp cơ bản, biến, kiểu dữ liệu và vòng lặp.',
    category: 'LẬP TRÌNH',
    date: '15/10/2023',
    readTime: '8 phút đọc',
    image: 'https://picsum.photos/seed/net2/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  },
  {
    id: '3',
    title: 'JavaScript Essentials 2: Xử lý dữ liệu phức tạp',
    excerpt: 'Đi sâu vào Objects, Arrays và JSON - định dạng dữ liệu phổ biến nhất trong các API mạng hiện đại.',
    category: 'NÂNG CAO',
    date: '20/10/2023',
    readTime: '12 phút đọc',
    image: 'https://picsum.photos/seed/net3/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  },
  {
    id: '4',
    title: 'Lập trình Socket với Python: Xây dựng Chat Client',
    excerpt: 'Hướng dẫn từng bước xây dựng một ứng dụng chat client-server đơn giản sử dụng thư viện socket của Python.',
    category: 'PYTHON',
    date: '25/10/2023',
    readTime: '15 phút đọc',
    image: 'https://picsum.photos/seed/net4/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  },
  {
    id: '5',
    title: 'Thực hành định tuyến OSPF trên Cisco Packet Tracer',
    excerpt: 'Bài lab chi tiết cấu hình định tuyến động OSPF đa vùng (Multi-area). Gỡ lỗi các vấn đề thường gặp.',
    category: 'LAB',
    date: '01/11/2023',
    readTime: '10 phút đọc',
    image: 'https://picsum.photos/seed/net5/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  },
  {
    id: '6',
    title: 'So sánh Ansible, Chef và Puppet cho Network Engineer',
    excerpt: 'Nên chọn công cụ nào để bắt đầu tự động hóa hạ tầng mạng? Phân tích ưu nhược điểm của 3 công cụ.',
    category: 'AUTOMATION',
    date: '05/11/2023',
    readTime: '7 phút đọc',
    image: 'https://picsum.photos/seed/net6/600/400',
    author: 'Minh Nhật',
    authorAvatar: 'https://i.imgur.com/vH0i8B5.png'
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'c1',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    image: 'https://i.imgur.com/Q6XzY7C.png',
    description: 'Chứng chỉ xác nhận kiến thức cơ bản về hạ tầng mạng, giao thức và các thiết bị kết nối.'
  },
  {
    id: 'c2',
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: 'https://i.imgur.com/p0T9p6R.png',
    description: 'Nền tảng về lập trình JavaScript, phục vụ cho việc phát triển các kịch bản tự động hóa.'
  },
  {
    id: 'c3',
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    image: 'https://i.imgur.com/vG8f0vP.png',
    description: 'Kỹ năng lập trình JavaScript nâng cao, xử lý dữ liệu cấu trúc và API.'
  }
];
