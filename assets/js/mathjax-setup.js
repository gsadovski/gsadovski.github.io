window.MathJax = {
  tex: {
    tags: "ams",
          autoload: {
            centernot: ['centernot']
          },
          inlineMath: [['$', '$']],
          macros: {
            tr: "{\\mathrm{tr}}",
            slashed: ["{\\centernot#1}", 1],
          },
  },
};
