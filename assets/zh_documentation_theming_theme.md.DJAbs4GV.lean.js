import{_ as s,c as e,a2 as i,o as t}from"./chunks/framework.7kRBU4R4.js";const c=JSON.parse('{"title":"明暗主题切换","description":"","frontmatter":{},"headers":[],"relativePath":"zh/documentation/theming/theme.md","filePath":"zh/documentation/theming/theme.md"}'),h={name:"zh/documentation/theming/theme.md"};function n(l,a,p,r,d,k){return t(),e("div",null,a[0]||(a[0]=[i(`<h1 id="明暗主题切换" tabindex="-1">明暗主题切换 <a class="header-anchor" href="#明暗主题切换" aria-label="Permalink to &quot;明暗主题切换&quot;">​</a></h1><p>SukiUI 借助由 <code>AvaloniaUI</code> 提供的 <a href="https://docs.avaloniaui.net/zh-Hans/docs/guides/styles-and-resources/how-to-use-theme-variants" target="_blank" rel="noreferrer">主题变体</a> 轻松实现主题切换</p><h2 id="主题" tabindex="-1">主题 <a class="header-anchor" href="#主题" aria-label="Permalink to &quot;主题&quot;">​</a></h2><h3 id="暗色" tabindex="-1">暗色 <a class="header-anchor" href="#暗色" aria-label="Permalink to &quot;暗色&quot;">​</a></h3><p><img src="https://github.com/user-attachments/assets/bdfeec4e-d0e7-4d7e-b075-b0616720acbd" alt="dark theme"></p><h3 id="亮色" tabindex="-1">亮色 <a class="header-anchor" href="#亮色" aria-label="Permalink to &quot;亮色&quot;">​</a></h3><p><img src="https://github.com/user-attachments/assets/84dd83b4-be4f-4a0f-8c86-4d0c0e01e3ea" alt="light theme"></p><h2 id="切换至暗色" tabindex="-1">切换至暗色 <a class="header-anchor" href="#切换至暗色" aria-label="Permalink to &quot;切换至暗色&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Dark);</span></span></code></pre></div><h2 id="切换至亮色" tabindex="-1">切换至亮色 <a class="header-anchor" href="#切换至亮色" aria-label="Permalink to &quot;切换至亮色&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ChangeBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ThemeVariant.Light);</span></span></code></pre></div><h2 id="明暗切换" tabindex="-1">明暗切换 <a class="header-anchor" href="#明暗切换" aria-label="Permalink to &quot;明暗切换&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SwitchBaseTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="themechanged-事件" tabindex="-1">ThemeChanged 事件 <a class="header-anchor" href="#themechanged-事件" aria-label="Permalink to &quot;ThemeChanged 事件&quot;">​</a></h2><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SukiTheme.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetInstance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().OnBaseThemeChanged </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Theme changed triggered !&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,15)]))}const g=s(h,[["render",n]]);export{c as __pageData,g as default};
