/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
  // Work with options here

  return {
    postcssPlugin: "postcss-only-vars",
    Root(root) {
      // Remove empty rules
      root.walk((rule) => {
        if (rule.nodes && rule.nodes.length <= 0) {
          rule.remove();
        }
      });

      // Remove empty @-rules
      root.walkAtRules((rule) => {
        if (rule.nodes && rule.nodes.length <= 0) {
          rule.remove();
        }
      });
    },

    Declaration(decl) {
      // Remove all non-CSS-variable-declarations
      if (!decl.prop.startsWith("--")) {
        decl.remove();
      }
    },
  };
};

module.exports.postcss = true;
