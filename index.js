// Darkmode toggler function (example)

let darkMode = true;

function toggleDarkMode() {
  darkMode = !darkMode;

  const state = {
    light: {
      // ".bg-primary-900": "bg-[primary-100]",
      a: "tc-[primary-700] tdc-[accent-400]",
      p: "tc-[primary-700]",
      ".bubble-connector, .bubble-wrapper": "bg-[primary-700]",
      ".kegiatan-item": "bg-[accent-200]",
      ".bg-accent-200": "bg-[primary-900]",
      ".bg-primary-900": "bg-[accent-200]",
      ".bg-primary-800": "bg-[accent-300]",
      ".text-primary-800": "tc-[accent-300]",
      ".text-primary-700": "tc-[accent-200]",
      ".text-accent-300": "tc-[primary-700]",
      ".text-accent-400": "tc-[primary-800]",
      ".text-accent-500": "tc-[primary-800]",
    },
    dark: {
      ".kegiatan-item": "bg-[primary-900]",
      ".bubble-connector, .bubble-wrapper": "bg-[accent-300]",
      a: "tc-[accent-300] tdc-[primary-400]",
      p: "tc-[accent-300]",
      ".text-primary-200": "tc-[primary-200]",
      ".text-primary-300": "tc-[primary-300]",
      ".text-primary-400": "tc-[primary-400]",
      ".text-primary-500": "tc-[primary-500]",
      ".text-primary-600": "tc-[primary-600]",
      ".text-primary-700": "tc-[primary-700]",
      ".text-primary-800": "tc-[primary-800]",
      ".text-primary-900": "tc-[primary-900]",
      ".text-accent-100": "tc-[accent-100]",
      ".text-accent-200": "tc-[accent-200]",
      ".text-accent-300": "tc-[accent-300]",
      ".text-accent-400": "tc-[accent-400]",
      ".text-accent-500": "tc-[accent-500]",
      ".text-accent-600": "tc-[accent-600]",
      ".text-accent-700": "tc-[accent-700]",
      ".text-accent-800": "tc-[accent-800]",
      ".text-accent-900": "tc-[accent-900]",
      // Background
      ".bg-neutral-100": "bg-[neutral-100]",
      ".bg-neutral-200": "bg-[neutral-200]",
      ".bg-neutral-300": "bg-[neutral-300]",
      ".bg-neutral-400": "bg-[neutral-400]",
      ".bg-neutral-500": "bg-[neutral-500]",
      ".bg-neutral-600": "bg-[neutral-600]",
      ".bg-neutral-700": "bg-[neutral-700]",
      ".bg-neutral-800": "bg-[neutral-800]",
      ".bg-neutral-900": "bg-[neutral-900]",
      ".bg-primary-100": "bg-[primary-100]",
      ".bg-primary-200": "bg-[primary-200]",
      ".bg-primary-300": "bg-[primary-300]",
      ".bg-primary-400": "bg-[primary-400]",
      ".bg-primary-500": "bg-[primary-500]",
      ".bg-primary-600": "bg-[primary-600]",
      ".bg-primary-700": "bg-[primary-700]",
      ".bg-primary-800": "bg-[primary-800]",
      ".bg-primary-900": "bg-[primary-900]",
      ".bg-accent-100": "bg-[accent-100]",
      ".bg-accent-200": "bg-[accent-200]",
      ".bg-accent-300": "bg-[accent-300]",
      ".bg-accent-400": "bg-[accent-400]",
      ".bg-accent-500": "bg-[accent-500]",
      ".bg-accent-600": "bg-[accent-600]",
      ".bg-accent-700": "bg-[accent-700]",
      ".bg-accent-800": "bg-[accent-800]",
      ".bg-accent-900": "bg-[accent-900]",
    },
  };

  const statenow = darkMode ? state.dark : state.light;

  // console.log(statenow);

  makeStyles(statenow);
}
