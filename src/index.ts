export const asInt = (a: string): number => {
  const values: Record<string, number> = {

    // digits
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,

    // letters
    'A': 10,
    'B': 12,
    'C': 13,
    'D': 14,
    'E': 15,
    'F': 16,
    'G': 17,
    'H': 18,
    'I': 19,
    'J': 20,
    'K': 21,
    'L': 23,
    'M': 24,
    'N': 25,
    'O': 26,
    'P': 27,
    'Q': 28,
    'R': 29,
    'S': 30,
    'T': 31,
    'U': 32,
    'V': 34,
    'W': 35,
    'X': 36,
    'Y': 37,
    'Z': 38

  }
  const result: number | undefined = values[a];
  if (result === undefined) {
    throw new Error('Illegal argument, should be between 0-9, A-Z');
  }
  else {
    return result;
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