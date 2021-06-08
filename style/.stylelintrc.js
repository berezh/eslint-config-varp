module.exports = {
    extends: [
        "stylelint-config-recommended"
    ],
    plugins: [
        "stylelint-order",
        "stylelint-scss",
        "stylelint-selector-bem-pattern"
    ],
    ignoreFiles: ["**/*.js", "**/*.json"],
    rules: {
        "at-rule-no-unknown": null,
        "order/order": [
            "custom-properties",
            "declarations"
        ],
        "order/properties-alphabetical-order": null,
        "no-descending-specificity": null,
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": [
                    "global"
                ]
            }
        ],
        "rule-empty-line-before": [
            "always",
            {
                "except": [
                    "after-single-line-comment",
                    "first-nested"
                ]
            }
        ],
        "plugin/selector-bem-pattern": {
            "preset": "bem",
            "ignoreSelectors": [
                "\\.recharts-"
            ]
        },
        "indentation": 4
    }
}