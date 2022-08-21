export const PinkRibbon = function () {
  return (
    <img
      src="data:image/png;base64,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
"
    />
  );
};
