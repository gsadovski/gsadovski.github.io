window.MathJax = {
  tex: {
    tags: "ams",
    autoload: {
      centernot: ['centernot']
    },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    macros: {
      tr: "{\\mathrm{tr}}",
      slashed: ["{\\centernot#1}", 1],
    },
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
