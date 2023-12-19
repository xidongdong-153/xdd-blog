const fs = require('fs');
const path = require('path');

// 目录结构
const directories = [
    'data/docs/blog/programming/frontend',
    'data/docs/blog/programming/frontend',
    'data/docs/blog/programming/backend',
    'data/docs/blog/programming/database',
    'data/docs/blog/tips',
    'data/docs/blog/others',
    'data/docs/blog/notes',
    'data/docs/about-me',
    'data/media/images',
    'data/media/videos',
];

// 创建目录
directories.forEach((dir) => {
    fs.mkdirSync(path.join(__dirname, dir), {
        recursive: true,
    });
    console.log(`创建目录: ${dir}`);
});

console.log('目录结构创建完成！');
