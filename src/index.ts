const ASCII_0 = 48;
const ASCII_9 = 57;

const ASCII_A = 65;
const ASCII_Z = 90;

export const asInt = (a: String): number => {
  let result = a.toUpperCase().charCodeAt(0);
  // Number 0-9)
  if (result >= ASCII_0 && result <= ASCII_9) {
    return result - ASCII_0;
  } else if (result === ASCII_A) {
    return 10;
  } else if (result > ASCII_A && result <= ASCII_Z) {
    return result - ASCII_A + 10 + Math.floor((result - ASCII_A) / 11) + 1;
  } else {
    throw new Error('Illegal argument, should be between 0-9, A-Z');
  }
}

const positionalWeight = (nr: number, position: number): number => nr * (1 << position);

const checksum = (ref: string, checksumPosition: number = 18) => {
  let result = 0;

  for (var i = 0; i < ref.length; i++) {
    if (i !== checksumPosition - 1) {
      result += positionalWeight(asInt(ref.charAt(i)), i);
    }
  }
  result = result % 11
  return result === 10 ? 0 : result;
};

export const checksumValid = (ref: string, checksumPosition: number = 18) => {
  return ref.length >= checksumPosition && parseInt(ref.charAt(checksumPosition - 1)) === checksum(ref, checksumPosition);
};

export default checksum;