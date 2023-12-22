import fs from 'fs';
import path from 'path';

export interface Directory {
    name: string;
    chineseName?: string;
    path: string;
    routePath?: string;
    subdirectories?: Directory[];
}

interface DirectoryConfig {
    directoryMappings: Record<string, string>;
    directoryOrder: Record<string, number>;
}

/**
 * 读取目录映射文件并返回映射对象
 * @returns 目录映射对象
 */
const getDirectoryMappings = (): DirectoryConfig => {
    const jsonPath = path.join(process.cwd(), 'data', 'docs', 'directory.json');
    const jsonString = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(jsonString) as DirectoryConfig;
};

const { directoryMappings, directoryOrder } = getDirectoryMappings();

/**
 * 对目录进行排序的函数
 * @param a - 第一个目录
 * @param b - 第二个目录
 * @returns 比较结果
 */
const sortDirectories = (a: Directory, b: Directory): number => {
    const orderA = directoryOrder[a.name] || 1000;
    const orderB = directoryOrder[b.name] || 1000;

    if (orderA !== orderB) {
        return orderA - orderB;
    }
    return a.name.localeCompare(b.name);
};

/**
 * 获取指定路径下的目录结构（一级和二级目录）
 * @param basePath - 基础路径
 * @returns 目录结构
 */
export const getDirectoryStructure = (basePath: string): Directory[] => {
    const directories = fs
        .readdirSync(basePath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => {
            const dirPath = path.join(basePath, dirent.name);
            const subdirectories = getSubdirectories(dirPath, dirent.name);
            const routePath = `/${dirent.name}`;

            return {
                name: dirent.name,
                chineseName: directoryMappings[dirent.name] || dirent.name,
                path: dirPath,
                routePath,
                subdirectories,
            };
        });

    directories.sort(sortDirectories);
    console.log(directories[0]);
    return directories;
};

/**
 * 获取指定路径下的子目录
 * @param dirPath - 目录路径
 * @returns 子目录数组
 */
const getSubdirectories = (dirPath: string, parentName: string): Directory[] => {
    const subDirectories = fs
        .readdirSync(dirPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => {
            const routePath = `/${parentName}/${dirent.name}`;
            return {
                name: dirent.name,
                chineseName: directoryMappings[dirent.name] || dirent.name,
                path: dirPath,
                routePath,
            };
        });
    subDirectories.sort(sortDirectories);

    return subDirectories;
};
