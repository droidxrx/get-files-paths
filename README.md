# GET-FILES-PATHS

This get all files and path (`synchronous`)

### Install

```bash
npm install get-files-paths
yarn add get-files-paths
```

### Usage

```javascript
// CommonJS
const getall = require('get-files-paths');
// ESModule
import getall from 'get-files-paths';

const result = getall(['./', '../server'], '**/node_moules');

console.log(result.all());
console.log(result.onlyFiles());
console.log(result.onlyPaths());
```

# LICENSE

[MIT](LICENSE)
