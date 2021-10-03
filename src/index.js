const path = require('path');
const fs = require('fs');
const mm = require('micromatch');

class GettingFilePath {
	pathFile
	ignores
	constructor(filePath, ignore) {
		this.pathFile = this.concat(filePath, 'File or path').map((v) => (!path.isAbsolute(v) ? path.resolve(__dirname, v) : v));
		this.ignores = ignore ? this.concat(ignore, 'Ignore') : false;
	}

	concat(v, t) {
		if (v && typeof v === 'string') return [v];
		if (v && typeof v === 'object' && Array.isArray(v)) return v;
		throw new TypeError(`${t} must string or array`);
	}

	getting(pathFile, result = []) {
		result = result || [];
		pathFile.forEach((v) => {
			if (fs.lstatSync(v).isDirectory()) {
				fs.readdirSync(v, { withFileTypes: true }).forEach((dirent) => {
					const dirents = path.join(v, dirent.name);
					if (this.ignores === false) {
						result = this.getting([dirents], result);
						if (!result.includes(v)) result.push(v);
					} else if (!mm.isMatch(dirents, this.ignores)) {
						result = this.getting([dirents], result);
						if (!result.includes(v)) result.push(v);
					}
				});
			} else {
				result.push(v);
			}
		});
		return result;
	}
	all() { return this.getting(this.pathFile); }
	onlyFiles() { return this.getting(this.pathFile).filter((v) => fs.lstatSync(v).isFile()); }
	onlyPaths() { return this.getting(this.pathFile).filter((v) => fs.lstatSync(v).isDirectory()); }
}

function getFilesPaths(filePath, ignore) {
	const getting = new GettingFilePath(filePath, ignore)
	if (typeof exports !== "object") throw new Error("This packages only running on node!");		
	return getting
}
module.exports = getFilesPaths