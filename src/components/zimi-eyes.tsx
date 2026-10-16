// A drawn stand-in for the OLED: two rounded eyes that glance, blink and squint happily.
export function ZimiEyes() {
  return (
    <svg
      viewBox="0 0 128 64"
      className="zimi h-full w-full"
      role="img"
      aria-label="Two animated robot eyes blinking and glancing around"
    >
      <g className="zimi-look">
        <g className="zimi-blink">
          <rect x="22" y="14" width="34" height="36" rx="9" />
          <rect x="72" y="14" width="34" height="36" rx="9" />
        </g>
        <g className="zimi-happy">
          <rect x="18" y="40" width="42" height="16" rx="8" />
          <rect x="68" y="40" width="42" height="16" rx="8" />
        </g>
      </g>
    </svg>
  )
}
