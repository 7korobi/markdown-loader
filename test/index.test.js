"use strict";

import test from "ava";
import webpack from "webpack";
import path from "path";
import fs from "fs";
import marked from "marked-pre";
import markdownOptions from "./markdown-options";

test.cb(t => {
    webpack({
        entry: path.resolve(__dirname, "./assets/markdown.md"),
        module: {
            rules: [{
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: require.resolve("../index.js"),
                        options: markdownOptions
                    }
                ]
            }]
        },
        output: {
            libraryTarget: "commonjs2",
            path: __dirname + "/output",
            filename: "bundle.js"
        }
    }, function onCompilationFinished(err, stats) {
        if (err) {
            return t.end(err);
        }
        if (stats.hasErrors()) {
            return t.end(stats.compilation.errors[0]);
        }
        if (stats.hasWarnings()) {
            return t.end(stats.compilation.warnings[0]);
        }

        const bundle = require("./output/bundle");
        t.is(bundle, '<h1 id=\"heading-1\">heading 1</h1>\n<ul><li>buy pineapple\n\n</li></ul><h2 id=\"heading-2\">heading 2</h2>\n<p><em>italic</em> is the new <strong>bold</strong>\n\n</p><pre><code class=\"lang-javascript\"><span class=\"hljs-attribute\">const i</span> = 100;</code></pre>');

        t.end();
    });
});


