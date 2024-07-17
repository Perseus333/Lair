document.addEventListener("DOMContentLoaded", function() {
    // Select the buttons
    const lineWidthToggle = document.querySelector("[line-width-toggle]");
    const colorSchemeToggle = document.querySelector("[color-scheme-toggle]");
    const fontToggle = document.querySelector("[font-toggle]");
    const marginsToggle = document.querySelector("[margins-toggle]");
    const lineSpacingToggle = document.querySelector("[line-spacing-toggle]");

    // Function to toggle the attribute
    function toggleAttribute(element, attribute) {
        if (element.getAttribute(attribute) === "on") {
            element.setAttribute(attribute, "off");
        } else {
            element.setAttribute(attribute, "on");
        }
    }

    // Add event listeners to the buttons
    lineWidthToggle.addEventListener("click", function() {
        toggleAttribute(document.documentElement, "line-width");
    });

    marginsToggle.addEventListener("click", function() {
        toggleAttribute(document.documentElement, "margins");
    });

    lineSpacingToggle.addEventListener("click", function() {
        toggleAttribute(document.documentElement, "line-spacing");
    });

    colorSchemeToggle.addEventListener("click", function() {
        toggleAttribute(document.documentElement, "color-scheme");
    });

    fontToggle.addEventListener("click", function() {
        toggleAttribute(document.documentElement, "font");
    });
});
