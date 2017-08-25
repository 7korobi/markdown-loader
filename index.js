"use strict";

const marked = require("marked");
const loaderUtils = require("loader-utils");

module.exports = function (markdown) {
    // merge params and default config
    const options = loaderUtils.getOptions(this);
    const tag = options.tag;

    this.cacheable();

    marked.setOptions(options);

    if (tag) {
        return `<${tag}>\n${marked(markdown)}</${tag}>\n`;
        
    } else {
        return marked(markdown);
    }
};
