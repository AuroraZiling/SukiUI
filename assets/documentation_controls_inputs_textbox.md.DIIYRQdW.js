import{_ as s,c as i,a2 as t,o as e}from"./chunks/framework.7kRBU4R4.js";const c=JSON.parse('{"title":"TextBox","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/controls/inputs/textbox.md","filePath":"documentation/controls/inputs/textbox.md"}'),l={name:"documentation/controls/inputs/textbox.md"};function h(n,a,o,p,r,k){return e(),i("div",null,a[0]||(a[0]=[t('<h1 id="textbox" tabindex="-1">TextBox <a class="header-anchor" href="#textbox" aria-label="Permalink to &quot;TextBox&quot;">​</a></h1><p>A control used for collecting user provided information.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="simple" tabindex="-1">Simple <a class="header-anchor" href="#simple" aria-label="Permalink to &quot;Simple&quot;">​</a></h3><img src="https://sleekshot.app/api/download/8nnHYLrgchCe"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="clear-button" tabindex="-1">Clear Button <a class="header-anchor" href="#clear-button" aria-label="Permalink to &quot;Clear Button&quot;">​</a></h3><img src="https://sleekshot.app/api/download/tNkEf1yb0lml"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme:TextBoxExtensions.AddDeleteButton</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="prefix" tabindex="-1">Prefix <a class="header-anchor" href="#prefix" aria-label="Permalink to &quot;Prefix&quot;">​</a></h3><img src="https://sleekshot.app/api/download/354ntrKtfvXo"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme:TextBoxExtensions.Prefix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;www.google.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="watermark" tabindex="-1">Watermark <a class="header-anchor" href="#watermark" aria-label="Permalink to &quot;Watermark&quot;">​</a></h3><img src="https://sleekshot.app/api/download/Y3odALgSfPCT"><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">TextBox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Watermark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Watermark&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><p><a href="https://github.com/kikipoulet/SukiUI/blob/main/SukiUI.Demo/Features/Dashboard/DashboardView.axaml" target="_blank" rel="noreferrer">Demo: SukiUI.Demo/Features/Dashboard/DashboardView.axaml</a></p>',17)]))}const E=s(l,[["render",h]]);export{c as __pageData,E as default};