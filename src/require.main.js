module.exports = function (_require) {
	_require = _require || require;
	var main = _require.main;
	if (main && isIISNode(main)) return handleIISNode(main);
	else return main ? main : process.cwd();
};

function isIISNode(main) {
	return /\\iisnode\\/.test(main);
}

function handleIISNode(main) {
	if (!main.children.length) {
		return main;
	} else {
		return main.children[0];
	}
}
