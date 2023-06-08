import projectConfig from '/pagic.config.js';
import Ga from '/_ga.js';
import Gitalk from '/_gitalk.js';
export default {
    'prev': {
        "text": "声明文件",
        "link": "basics/declaration-files.html"
    },
    'next': {
        "link": "advanced/index.html",
        "text": "进阶"
    },
    config: { "root": "/", ...projectConfig, branch: 'master' },
    'pagePath': "basics/built-in-objects.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "basics/built-in-objects.html",
    'title': "内置对象",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>内置对象</h1>\n<p>JavaScript 中有很多<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a>，它们可以直接在 TypeScript 中当做定义好了的类型。</p>\n<p>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。</p>\n<h2 id="ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">ECMAScript 的内置对象<a class="anchor" href="#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>ECMAScript 标准提供的内置对象有：</p>\n<p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p>\n<p>我们可以在 TypeScript 中将变量定义为这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Error occurred\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>更多的内置对象，可以查看 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">MDN 的文档</a>。</p>\n<p>而他们的定义文件，则在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">DOM 和 BOM 的内置对象<a class="anchor" href="#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>DOM 和 BOM 提供的内置对象有：</p>\n<p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p>\n<p>TypeScript 中会经常用到这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它们的定义文件同样在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">TypeScript 核心库的定义文件<a class="anchor" href="#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">§</a></h2>\n<p><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</p>\n<p>当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：</p>\n<pre class="language-ts"><code class="language-ts">Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,14): error TS2345: Argument of type \'string\' is not assignable to parameter of type \'number\'.</span>\n</code></pre>\n<p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Returns the value of a base expression taken to a specified power.\n     * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.\n     * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.\n     */</span>\n    <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>再举一个 DOM 中的例子：</p>\n<pre class="language-ts"><code class="language-ts">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>targetCurrent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,17): error TS2339: Property \'targetCurrent\' does not exist on type \'MouseEvent\'.</span>\n</code></pre>\n<p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span><span class="token punctuation">,</span> GlobalEventHandlers<span class="token punctuation">,</span> NodeSelector<span class="token punctuation">,</span> DocumentEvent <span class="token punctuation">{</span>\n    <span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span> useCapture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p>\n<p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p>\n<h2 id="%E7%94%A8-typescript-%E5%86%99-nodejs">用 TypeScript 写 Node.js<a class="anchor" href="#%E7%94%A8-typescript-%E5%86%99-nodejs">§</a></h2>\n<p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a></li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-45256157-14" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5185\u7F6E\u5BF9\u8C61"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>JavaScript 中有很多<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a>，它们可以直接在 TypeScript 中当做定义好了的类型。</p>\n<p>内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。</p>\n<h2 id="ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">ECMAScript 的内置对象<a class="anchor" href="#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>ECMAScript 标准提供的内置对象有：</p>\n<p><code>Boolean</code>、<code>Error</code>、<code>Date</code>、<code>RegExp</code> 等。</p>\n<p>我们可以在 TypeScript 中将变量定义为这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> b<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Boolean</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> e<span class="token operator">:</span> Error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Error occurred\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> d<span class="token operator">:</span> Date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> r<span class="token operator">:</span> RegExp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>\n</code></pre>\n<p>更多的内置对象，可以查看 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">MDN 的文档</a>。</p>\n<p>而他们的定义文件，则在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">DOM 和 BOM 的内置对象<a class="anchor" href="#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>DOM 和 BOM 提供的内置对象有：</p>\n<p><code>Document</code>、<code>HTMLElement</code>、<code>Event</code>、<code>NodeList</code> 等。</p>\n<p>TypeScript 中会经常用到这些类型：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> body<span class="token operator">:</span> HTMLElement <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>\n<span class="token keyword">let</span> allDiv<span class="token operator">:</span> NodeList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Do something</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>它们的定义文件同样在 <a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中。</p>\n<h2 id="typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">TypeScript 核心库的定义文件<a class="anchor" href="#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6">§</a></h2>\n<p><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a>中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。</p>\n<p>当你在使用一些常用的方法的时候，TypeScript 实际上已经帮你做了很多类型判断的工作了，比如：</p>\n<pre class="language-ts"><code class="language-ts">Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">\'2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(1,14): error TS2345: Argument of type \'string\' is not assignable to parameter of type \'number\'.</span>\n</code></pre>\n<p>上面的例子中，<code>Math.pow</code> 必须接受两个 <code>number</code> 类型的参数。事实上 <code>Math.pow</code> 的类型定义如下：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span>\n    <span class="token doc-comment comment">/**\n     * Returns the value of a base expression taken to a specified power.\n     * <span class="token keyword">@param</span> <span class="token parameter">x</span> The base value of the expression.\n     * <span class="token keyword">@param</span> <span class="token parameter">y</span> The exponent value of the expression.\n     */</span>\n    <span class="token function">pow</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>再举一个 DOM 中的例子：</p>\n<pre class="language-ts"><code class="language-ts">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>targetCurrent<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// index.ts(2,17): error TS2339: Property \'targetCurrent\' does not exist on type \'MouseEvent\'.</span>\n</code></pre>\n<p>上面的例子中，<code>addEventListener</code> 方法是在 TypeScript 核心库中定义的：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">Document</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span><span class="token punctuation">,</span> GlobalEventHandlers<span class="token punctuation">,</span> NodeSelector<span class="token punctuation">,</span> DocumentEvent <span class="token punctuation">{</span>\n    <span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token function-variable function">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>ev<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">any</span><span class="token punctuation">,</span> useCapture<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>所以 <code>e</code> 被推断成了 <code>MouseEvent</code>，而 <code>MouseEvent</code> 是没有 <code>targetCurrent</code> 属性的，所以报错了。</p>\n<p>注意，TypeScript 核心库的定义中不包含 Node.js 部分。</p>\n<h2 id="%E7%94%A8-typescript-%E5%86%99-nodejs">用 TypeScript 写 Node.js<a class="anchor" href="#%E7%94%A8-typescript-%E5%86%99-nodejs">§</a></h2>\n<p>Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @types/node --save-dev\n</code></pre>\n<h2 id="%E5%8F%82%E8%80%83">参考<a class="anchor" href="#%E5%8F%82%E8%80%83">§</a></h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects">内置对象</a></li>\n<li><a href="https://github.com/Microsoft/TypeScript/tree/master/src/lib">TypeScript 核心库的定义文件</a></li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#ecmascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1" }, "ECMAScript \u7684\u5185\u7F6E\u5BF9\u8C61")),
            React.createElement("li", null,
                React.createElement("a", { href: "#dom-%E5%92%8C-bom-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1" }, "DOM \u548C BOM \u7684\u5185\u7F6E\u5BF9\u8C61")),
            React.createElement("li", null,
                React.createElement("a", { href: "#typescript-%E6%A0%B8%E5%BF%83%E5%BA%93%E7%9A%84%E5%AE%9A%E4%B9%89%E6%96%87%E4%BB%B6" }, "TypeScript \u6838\u5FC3\u5E93\u7684\u5B9A\u4E49\u6587\u4EF6")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E7%94%A8-typescript-%E5%86%99-nodejs" }, "\u7528 TypeScript \u5199 Node.js")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%8F%82%E8%80%83" }, "\u53C2\u8003")))),
    'author': "xcatliu",
    'contributors': [
        "xcatliu",
        "yuri"
    ],
    'date': "2016-06-13T10:39:20.000Z",
    'updated': "2020-07-02T14:29:45.000Z",
    'excerpt': "JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。 ECMAScript 的内置对...",
    'cover': undefined,
    'sidebar': [
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html",
                    "pagePath": "introduction/what-is-typescript.md"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html",
                    "pagePath": "introduction/get-typescript.md"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html",
                    "pagePath": "introduction/hello-typescript.md"
                }
            ],
            "pagePath": "introduction/README.md",
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html",
                    "pagePath": "basics/primitive-data-types.md"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html",
                    "pagePath": "basics/any.md"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html",
                    "pagePath": "basics/type-inference.md"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html",
                    "pagePath": "basics/union-types.md"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html",
                    "pagePath": "basics/type-of-object-interfaces.md"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html",
                    "pagePath": "basics/type-of-array.md"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html",
                    "pagePath": "basics/type-of-function.md"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html",
                    "pagePath": "basics/type-assertion.md"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html",
                    "pagePath": "basics/declaration-files.md"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html",
                    "pagePath": "basics/built-in-objects.md"
                }
            ],
            "pagePath": "basics/README.md",
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html",
                    "pagePath": "advanced/type-aliases.md"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html",
                    "pagePath": "advanced/string-literal-types.md"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html",
                    "pagePath": "advanced/tuple.md"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html",
                    "pagePath": "advanced/enum.md"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html",
                    "pagePath": "advanced/class.md"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html",
                    "pagePath": "advanced/class-and-interfaces.md"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html",
                    "pagePath": "advanced/generics.md"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html",
                    "pagePath": "advanced/declaration-merging.md"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html",
                    "pagePath": "advanced/further-reading.md"
                }
            ],
            "pagePath": "advanced/README.md",
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html",
                    "pagePath": "engineering/lint.md"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html",
                    "pagePath": "engineering/compiler-options.md"
                }
            ],
            "pagePath": "engineering/README.md",
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html",
            "pagePath": "thanks/README.md"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "basics/built-in-objects.html", owner: "xcatliu", pagerDirection: "first", repo: "typescript-tutorial", title: "\u5185\u7F6E\u5BF9\u8C61" })
};
