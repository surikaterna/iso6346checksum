import checksum, { asInt, checksumValid } from '../src';

describe('checksum', () => {
  it('asInt A = 10', () => {
    expect(asInt('A')).toEqual(10);
  });
  it('asInt I = 19', () => {
    expect(asInt('I')).toEqual(19);
  });
  it('asInt Z = 38', () => {
    expect(asInt('Z')).toEqual(38);
  });
  it('asInt "1" = 1', () => {
    expect(asInt('1')).toEqual(1);
  });
  it('asInt "9" = 9', () => {
    expect(asInt('9')).toEqual(9);
  });
  it('asInt "0" = 0', () => {
    expect(asInt('0')).toEqual(0);
  });
  it('asInt "V" = 34', () => {
    expect(asInt('V')).toEqual(34);
  });

  it('asInt all valid chars', () => {
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
    Object.keys(values).forEach(k=>{
      expect(asInt(k)).toEqual(values[k]);
    })
  });

  it('checksum calc 99IT9876AB8890120 = 9', () => {
    expect(checksum('99IT9876AB8890120')).toEqual(9);
  });

  it('checksum calc 21GB01X14031469016 = 6', () => {
    expect(checksum('21GB01X14031469016')).toEqual(6);
  });
  it('checksumValid 21GB01X14031469016', () => {
    expect(checksumValid('21GB01X14031469016')).toEqual(true);
  });
  it('checksumValid 21CZ57000023VY9V39', () => {
    expect(checksumValid('21CZ57000023VY9V39')).toEqual(true);
  });

  
  it('checksumValid with non ascii ååå to throw', () => {
    expect(() => checksumValid('ååååååååååååååååå6')).toThrowError('Illegal argument, should be between 0-9, A-Z');
  });

});

