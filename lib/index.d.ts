declare class GettingFilePath {
	constructor(filePath: string | string[], ignore: string | string[]);
	all(): string[];
	onlyFiles(): string[];
	onlyPaths(): string[];
}
declare function getFilesPaths(filePath: string | string[], ignore: string | string[]): GettingFilePath;
export = getFilesPaths;
