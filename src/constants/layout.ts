export const CONTAINER_CLASS =
  'max-w-[1440px] min-[1660px]:max-w-[1660px] min-[1920px]:max-w-[1660px] min-[3840px]:max-w-[2400px] mx-auto px-4 md:px-6 lg:px-8'

/** Section content width + padding: use on section (padding) and inner wrapper (max-w) so all sections align vertically */
export const SECTION_PADDING_X = 'px-4 sm:px-8'
export const SECTION_CONTENT_MAX_W = 'max-w-[clamp(903.47px,88.23vw,3388px)]'
export const SECTION_CONTENT_WRAPPER_CLASS = `w-full ${SECTION_CONTENT_MAX_W} mx-auto`

/** Shared 4-column grid for banner (AdvantagesSection) + investor support section. Column 2 is wider. */
export const SECTION_GRID_COLS_4 = 'lg:grid-cols-[1fr_1.35fr_1fr_1fr]'

export const HEADER_HORIZONTAL_PADDING =
  'pl-[clamp(11px,3.8vw,29px)] pr-[clamp(12px,4vw,31px)] lg:pl-[clamp(62.5px,6.11vw,234.5px)] lg:pr-[clamp(61.6px,6.02vw,231px)]'
