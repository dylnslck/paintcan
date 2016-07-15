export const mapAlignmentToClassName = (alignments) =>
  Object.keys(alignments).map(alignment =>
    alignments[alignment].split(' ').map(a =>
      `${a}-${alignment}`).join(' '));

export const mapDistributionToClassName = (distributions) =>
  Object.keys(distributions).map(distribution =>
    `${distributions[distribution]}-${distribution}`);

export const mapSizeToClassName = (sizes) =>
  Object.keys(sizes).map(size => `col-${size}-${sizes[size]}`);

export const mapOffsetToClassName = (offsets) =>
  Object.keys(offsets).map(offset => `col-${offset}-offset-${offsets[offset]}`);
