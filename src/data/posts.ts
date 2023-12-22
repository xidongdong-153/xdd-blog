import { promises as fsPromises } from 'fs';
import path from 'path';

import matter from 'gray-matter';

export interface BlogPost {
    title: string;
    tags: string[];
    path: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface BlogPosts {
    [category: string]: BlogPost[];
}
/**
 * 从Markdown文件内容中解析元数据
 * @param fileContent - Markdown文件的内容
 * @returns 解析后的元数据对象
 */
export const parseMetadata = (fileContent: string): Record<string, unknown> => {
    const { data } = matter(fileContent);
    return data;
};

/**
 * 处理单个Markdown文件
 */
const processMarkdownFile = async (filePath: string): Promise<BlogPost> => {
    const fileContent = await fsPromises.readFile(filePath, 'utf-8');
    const metadata = parseMetadata(fileContent);
    const title = (metadata.title as string) || '无标题';
    const tags = (metadata.tags as string[]) || [];

    const stats = await fsPromises.stat(filePath);
    const createdAt = stats.birthtime;
    const updatedAt = stats.mtime;

    return {
        title,
        tags,
        path: filePath,
        createdAt,
        updatedAt,
    };
};

/**
 * 读取目录
 */
const readDirectory = async (
    dirPath: string,
    basePath: string,
    posts: BlogPosts,
): Promise<BlogPosts> => {
    const dirents = await fsPromises.readdir(dirPath, { withFileTypes: true });
    for (const dirent of dirents) {
        const currentPath = path.join(dirPath, dirent.name);
        if (dirent.isDirectory()) {
            await readDirectory(currentPath, basePath, posts);
        } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
            const relativePathParts = path.relative(basePath, currentPath).split(path.sep);
            if (relativePathParts.length >= 2) {
                const category = relativePathParts[0];
                const blogPost = await processMarkdownFile(currentPath);
                posts[category] = posts[category] || [];
                posts[category].push(blogPost);
            }
        }
    }

    Object.keys(posts).forEach((category) => {
        posts[category].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    });

    return posts;
};

/**
 * 获取指定目录下的文档数据，并按第二级目录分类
 * @param basePath - 基础目录路径，如 `data/docs/blog`
 * @returns 分类后的文档数据
 */
export const getMarkdownPosts = async (basePath: string): Promise<BlogPosts> => {
    return readDirectory(basePath, basePath, {});
};

/**
 * 从指定的Markdown文件路径中异步读取内容和元数据
 * @param filePath - Markdown文件的路径
 * @returns 返回一个对象，其中包含文件的原始内容和元数据
 */
export const snatchMarkdownContent = async (
    filePath: string,
): Promise<{ content: string; metadata: Record<string, unknown> }> => {
    try {
        const fileContent = await fsPromises.readFile(filePath, 'utf-8');
        const { data: metadata, content } = matter(fileContent);
        return { content, metadata };
    } catch (error) {
        console.error('读取文件时出错:', error);
        return { content: '', metadata: {} };
    }
};

/**
 * 获取最近创建的5篇文章
 * @param blogPosts - 包含所有博客文章的对象
 * @returns 最近创建的5篇文章数组
 */
export const getRecentPosts = (blogPosts: BlogPosts): BlogPost[] => {
    let allPosts: BlogPost[] = [];

    for (const category in blogPosts) {
        allPosts = allPosts.concat(blogPosts[category]);
    }

    allPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return allPosts.slice(0, 5);
};
