

import encode from './encode';
import decode from './decode';

const IsaacWrapperParser = {
  encode,
  stringify: encode,
  parse: decode,
  decode
};

export default IsaacWrapperParser;
