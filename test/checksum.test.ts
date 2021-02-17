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

  it('checksum calc 99IT9876AB8890120 = 9', () => {
    expect(checksum('99IT9876AB8890120')).toEqual(9);
  });

  it('checksum calc 21GB01X14031469016 = 6', () => {
    expect(checksum('21GB01X14031469016')).toEqual(6);
  });
  it('checksumValid 21GB01X14031469016', () => {
    expect(checksumValid('21GB01X14031469016')).toEqual(true);
  });
  it('checksumValid with non ascii ååå to throw', () => {
    expect(() => checksumValid('ååååååååååååååååå6')).toThrowError('Illegal argument, should be between 0-9, A-Z');
  });

});

