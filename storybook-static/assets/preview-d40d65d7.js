import{_ as a}from"./iframe-1d6b9eb3.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-ff676275.js"),["./DocsRenderer-K4EAMTCU-ff676275.js","./iframe-1d6b9eb3.js","./index-c6dae603.js","./react-18-b8ada916.js","./index-eb008d06.js","./index-1dda56ad.js","./index-02182706.js","./index-b3e4b125.js","./index-356e4a49.js"],import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
