"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AeroBubble: () => AeroBubble,
  Button: () => Button,
  Card: () => Card,
  Input: () => Input,
  Modal: () => Modal,
  aeroVariants: () => aeroVariants,
  getAeroClasses: () => getAeroClasses,
  getGlassClasses: () => getGlassClasses,
  glassVariants: () => glassVariants
});
module.exports = __toCommonJS(index_exports);

// src/components/button/button.tsx
var import_react = __toESM(require("react"));

// src/theme/glass.ts
var glassVariants = {
  light: {
    background: "bg-white/5",
    backdropBlur: "backdrop-blur-[2px]",
    border: "border border-white/15",
    shadow: "shadow-lg",
    hover: "hover:bg-white/10 hover:shadow-xl",
    focus: "focus:outline-none focus:ring-2 focus:ring-white/10"
  },
  medium: {
    background: "bg-white/20",
    backdropBlur: "backdrop-blur-lg",
    border: "border border-white/30",
    shadow: "shadow-xl",
    hover: "hover:bg-white/30 hover:shadow-2xl",
    focus: "focus:outline-none focus:ring-2 focus:ring-white/50"
  },
  dark: {
    background: "bg-black/20",
    backdropBlur: "backdrop-blur-md",
    border: "border border-white/10",
    shadow: "shadow-lg",
    hover: "hover:bg-black/30 hover:shadow-xl",
    focus: "focus:outline-none focus:ring-2 focus:ring-white/40"
  },
  colored: {
    background: "bg-gradient-to-br from-white/20 to-white/10",
    backdropBlur: "backdrop-blur-xl",
    border: "border border-white/25",
    shadow: "shadow-2xl",
    hover: "hover:from-white/30 hover:to-white/20 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.37)]",
    focus: "focus:outline-none focus:ring-2 focus:ring-white/60"
  }
};
var aeroVariants = {
  light: {
    background: "bg-gradient-to-br from-cyan-400/20 to-blue-400/10",
    backdropBlur: "backdrop-blur-md",
    border: "border border-cyan-300/30",
    shadow: "shadow-aero",
    hover: "hover:from-cyan-400/30 hover:to-blue-400/20 hover:shadow-aero-lg",
    focus: "focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
  },
  medium: {
    background: "bg-gradient-to-br from-sky-400/25 to-cyan-400/15",
    backdropBlur: "backdrop-blur-lg",
    border: "border border-sky-300/40",
    shadow: "shadow-aero-lg",
    hover: "hover:from-sky-400/35 hover:to-cyan-400/25 hover:shadow-[0_8px_32px_0_rgba(56,189,248,0.37)]",
    focus: "focus:outline-none focus:ring-2 focus:ring-sky-300/60"
  },
  dark: {
    background: "bg-gradient-to-br from-blue-500/30 to-cyan-500/20",
    backdropBlur: "backdrop-blur-md",
    border: "border border-blue-300/30",
    shadow: "shadow-aero",
    hover: "hover:from-blue-500/40 hover:to-cyan-500/30 hover:shadow-aero-lg",
    focus: "focus:outline-none focus:ring-2 focus:ring-blue-300/50"
  },
  colored: {
    background: "bg-gradient-to-br from-lime-400/25 via-cyan-400/20 to-blue-400/15",
    backdropBlur: "backdrop-blur-xl",
    border: "border border-lime-300/35",
    shadow: "shadow-aero-lg",
    hover: "hover:from-lime-400/35 hover:via-cyan-400/30 hover:to-blue-400/25 hover:shadow-[0_8px_32px_0_rgba(163,230,53,0.37)]",
    focus: "focus:outline-none focus:ring-2 focus:ring-lime-300/60"
  }
};
var getGlassClasses = (variant = "light", rounded = "rounded-xl", includeInteractions = true) => {
  const v = glassVariants[variant];
  const interactions = includeInteractions ? `transition-all duration-300 ${v.hover} ${v.focus} active:scale-95` : "";
  return `${v.background} ${v.backdropBlur} ${v.border} ${v.shadow} ${rounded} ${interactions}`;
};
var getAeroClasses = (variant = "light", rounded = "rounded-xl", includeInteractions = true) => {
  const v = aeroVariants[variant];
  const interactions = includeInteractions ? `transition-all duration-300 ${v.hover} ${v.focus} active:scale-95` : "";
  return `${v.background} ${v.backdropBlur} ${v.border} ${v.shadow} ${rounded} ${interactions}`;
};

// src/components/button/button.tsx
var sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
};
var Button = ({
  variant = "light",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  disabled = false,
  ...props
}) => {
  const glassClasses = getGlassClasses(variant);
  const sizeClass = sizeClasses[size];
  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      className: `
        ${glassClasses}
        ${sizeClass}
        ${widthClass}
        ${disabledClass}
        font-medium text-white
        ${className}
      `,
      disabled,
      ...props
    },
    children
  );
};

// src/components/card/card.tsx
var import_react2 = __toESM(require("react"));
var paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};
var Card = ({
  variant = "light",
  padding = "md",
  enableInteractions = false,
  children,
  className = "",
  ...props
}) => {
  const glassClasses = getGlassClasses(variant, void 0, enableInteractions);
  const paddingClass = paddingClasses[padding];
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      className: `
        ${glassClasses}
        ${paddingClass}
        ${className}
      `,
      ...props
    },
    children
  );
};

// src/components/input/input.tsx
var import_react3 = __toESM(require("react"));
var Input = ({
  variant = "light",
  fullWidth = false,
  label,
  className = "",
  id,
  ...props
}) => {
  const glassClasses = getGlassClasses(variant);
  const widthClass = fullWidth ? "w-full" : "";
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
  return /* @__PURE__ */ import_react3.default.createElement("div", { className: `flex flex-col gap-2 ${widthClass}` }, label && /* @__PURE__ */ import_react3.default.createElement(
    "label",
    {
      htmlFor: inputId,
      className: "text-white text-sm font-medium pl-1"
    },
    label
  ), /* @__PURE__ */ import_react3.default.createElement(
    "input",
    {
      id: inputId,
      className: `
          ${glassClasses}
          ${widthClass}
          px-4 py-3
          text-white placeholder-white/50
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          ${className}
        `,
      ...props
    }
  ));
};

// src/components/modal/modal.tsx
var import_react4 = __toESM(require("react"));
var sizeClasses2 = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl"
};
var Modal = ({
  isOpen,
  onClose,
  variant = "medium",
  title,
  children,
  size = "md"
}) => {
  if (!isOpen) return null;
  const glassClasses = getGlassClasses(variant);
  const sizeClass = sizeClasses2[size];
  return /* @__PURE__ */ import_react4.default.createElement(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn",
      onClick: onClose
    },
    /* @__PURE__ */ import_react4.default.createElement("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm" }),
    /* @__PURE__ */ import_react4.default.createElement(
      "div",
      {
        className: `
          ${glassClasses}
          ${sizeClass}
          w-full p-6 relative z-10
          animate-scaleIn
        `,
        onClick: (e) => e.stopPropagation()
      },
      title && /* @__PURE__ */ import_react4.default.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ import_react4.default.createElement("h2", { className: "text-2xl font-bold text-white" }, title), /* @__PURE__ */ import_react4.default.createElement(
        "button",
        {
          onClick: onClose,
          className: "text-white/70 hover:text-white transition-colors p-1",
          "aria-label": "Close modal"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          "svg",
          {
            className: "w-6 h-6",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          },
          /* @__PURE__ */ import_react4.default.createElement("path", { d: "M6 18L18 6M6 6l12 12" })
        )
      )),
      /* @__PURE__ */ import_react4.default.createElement("div", { className: "text-white" }, children)
    )
  );
};

// src/components/aero-bubble/aero-bubble.tsx
var import_react5 = __toESM(require("react"));
var sizeClasses3 = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48"
};
var colorClasses = {
  cyan: "bg-gradient-to-br from-cyan-300/40 to-cyan-500/20",
  blue: "bg-gradient-to-br from-blue-300/40 to-blue-500/20",
  lime: "bg-gradient-to-br from-lime-300/40 to-lime-500/20",
  sky: "bg-gradient-to-br from-sky-300/40 to-sky-500/20"
};
var AeroBubble = ({
  size = "md",
  color = "cyan",
  className = ""
}) => {
  return /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      className: `
        ${sizeClasses3[size]}
        ${colorClasses[color]}
        rounded-full
        backdrop-blur-sm
        border border-white/30
        shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
        relative
        overflow-hidden
        ${className}
      `
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-full" }),
    /* @__PURE__ */ import_react5.default.createElement("div", { className: "absolute bottom-2 right-2 w-1/3 h-1/3 bg-white/30 rounded-full blur-md" })
  );
};

// src/components/accordion/accordion.tsx
var import_react6 = __toESM(require("react"));
var Accordion = ({
  items,
  variant = "light",
  allowMultiple = false,
  defaultOpen = [],
  className = ""
}) => {
  const [openItems, setOpenItems] = (0, import_react6.useState)(defaultOpen);
  const toggleItem = (id) => {
    if (allowMultiple) {
      setOpenItems(
        (prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => prev.includes(id) ? [] : [id]);
    }
  };
  const isOpen = (id) => openItems.includes(id);
  return /* @__PURE__ */ import_react6.default.createElement("div", { className }, items.map((item, index) => {
    const open = isOpen(item.id);
    const glassClasses = getGlassClasses(variant, "rounded-none", false);
    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    return /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        key: item.id,
        className: `${glassClasses} ${isFirst ? "rounded-t-lg" : ""} ${isLast ? "rounded-b-lg" : ""} ${!isLast ? "border-b border-white/10" : ""}`
      },
      /* @__PURE__ */ import_react6.default.createElement(
        "button",
        {
          onClick: () => toggleItem(item.id),
          className: "w-full px-4 py-4 flex items-center justify-between text-left text-white font-medium hover:underline transition-all duration-200"
        },
        /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex items-center gap-2" }, item.icon && /* @__PURE__ */ import_react6.default.createElement("span", { className: "flex items-center text-base" }, item.icon), /* @__PURE__ */ import_react6.default.createElement("span", { className: "text-sm font-medium" }, item.title)),
        /* @__PURE__ */ import_react6.default.createElement(
          "svg",
          {
            className: `w-4 h-4 shrink-0 transition-transform duration-200 text-white/70 ${open ? "rotate-180" : ""}`,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            viewBox: "0 0 24 24"
          },
          /* @__PURE__ */ import_react6.default.createElement(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M19 9l-7 7-7-7"
            }
          )
        )
      ),
      /* @__PURE__ */ import_react6.default.createElement(
        "div",
        {
          className: `grid transition-all duration-200 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`
        },
        /* @__PURE__ */ import_react6.default.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "px-4 pb-4 pt-0 text-sm text-white/80 leading-relaxed" }, item.content))
      )
    );
  }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AeroBubble,
  Button,
  Card,
  Input,
  Modal,
  aeroVariants,
  getAeroClasses,
  getGlassClasses,
  glassVariants
});
