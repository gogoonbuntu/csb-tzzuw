(this.webpackJsonpmonitoring=this.webpackJsonpmonitoring||[]).push([[0],{135:function(e,n){},137:function(e,n){},147:function(e,n){},149:function(e,n){},176:function(e,n){},177:function(e,n){},182:function(e,n){},184:function(e,n){},191:function(e,n){},210:function(e,n){},230:function(e,n,t){"use strict";t.r(n);var r,a,c=t(2),o=t.n(c),s=t(116),i=t.n(s),d=t(3),u=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("h1",{children:"\ubaa8\ub2c8\ud130\ub9c1"})})},b=t(33),j=t(34),l=j.a.div(r||(r=Object(b.a)(["\n  font-family: sans-serif;\n  position: fixed;\n  top: 0;\n  left: 0;\n  text-align: left;\n  margin: 0px 20px;\n"]))),O=t(7),f=t(120),h=t(61),p=t.n(h),m=function(e){for(var n=[],t=0;t<e;t++)n.push(t);return n},g=function(){var e=Math.random();return{firstName:p.a.generate({words:1,numbers:0}),lastName:p.a.generate({words:1,numbers:0}),age:Math.floor(30*Math.random()),visits:Math.floor(100*Math.random()),progress:Math.floor(100*Math.random()),status:e>.66?"relationship":e>.33?"complicated":"single"}};var x=j.a.div(a||(a=Object(b.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"])));function v(e){var n=e.columns,t=e.data,r=Object(f.useTable)({columns:n,data:t}),a=r.getTableProps,c=r.getTableBodyProps,o=r.headerGroups,s=r.rows,i=r.prepareRow;return Object(d.jsxs)("table",Object(O.a)(Object(O.a)({},a()),{},{children:[Object(d.jsx)("thead",{children:o.map((function(e){return Object(d.jsx)("tr",Object(O.a)(Object(O.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(d.jsx)("th",Object(O.a)(Object(O.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(d.jsx)("tbody",Object(O.a)(Object(O.a)({},c()),{},{children:s.map((function(e,n){return i(e),Object(d.jsx)("tr",Object(O.a)(Object(O.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(d.jsx)("td",Object(O.a)(Object(O.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))}var M=function(){var e=o.a.useMemo((function(){return[{Header:"REASONKEY",accessor:"REASONKEY"},{Header:"\ubd84\ub2f9 \uac74\uc218",accessor:"COUNTNOW"},{Header:"1\ubd84\uc804 \ub300\ube44",accessor:"COMPAREMINUTE"},{Header:"1\uc2dc\uac04 \uc804 \ub300\ube44",accessor:"COMPAREHOUR"},{Header:"\uc5b4\uc81c \ub3d9\uc2dc\uac04 \ub300\ube44",accessor:"COMPAREYESTERDAY"}]}),[]),n=o.a.useMemo((function(){return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=n[t];return m(r).map((function(r){return Object(O.a)(Object(O.a)({},g()),{},{subRows:n[t+1]?e(t+1):void 0})}))}()}(20)}),[]);return Object(d.jsx)(x,{children:Object(d.jsx)(v,{columns:e,data:n})})};function E(){return Object(d.jsx)(M,{})}function R(){return Object(d.jsxs)(l,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(E,{})]})}var w=document.getElementById("root");i.a.render(Object(d.jsx)(c.StrictMode,{children:Object(d.jsx)(R,{})}),w)}},[[230,1,2]]]);
//# sourceMappingURL=main.60961490.chunk.js.map