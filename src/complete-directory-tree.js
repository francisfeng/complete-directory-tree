'use strict';

const PATH = require('path');
const FS = require('fs');

function directoryTreeAll(path, extensions, options) {
    let defaults = { };
    let actuals = Object.assign({}, defaults, options);
    const result = {
        path: path,
        name: PATH.basename(path),
        children: [],
        files: [],
    };
    let filesAndDirectories;


    try { filesAndDirectories = FS.readdirSync(path) }
    catch (ex) {
        //User does not have permissions, ignore directory
        if (ex.code == "EACCES") return null;
    }
    if (filesAndDirectories == undefined) return null;
    filesAndDirectories = filesAndDirectories.map(child => PATH.join(path, child));

    for(let i = 0; i < filesAndDirectories.length; i++) {
        let stats;
        let item = filesAndDirectories[i];
        try { stats = FS.statSync(item); }
        catch (ex) { return null; }
        if (stats.isFile()) {
            let name = PATH.basename(item);
            let extension = PATH.extname(item);
            if (extensions && extensions.length && extensions.indexOf(extension) === -1) continue;
            result.files.push({
                path: item,
                name,
                extension,
                size: stats.size
            });
        } else if (stats.isDirectory()) {
            result.children.push(directoryTreeAll(item, extensions));
        }
    }
    return result;
}

module.exports = directoryTreeAll;