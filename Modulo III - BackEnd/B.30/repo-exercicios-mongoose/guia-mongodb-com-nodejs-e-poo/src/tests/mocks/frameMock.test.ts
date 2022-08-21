import IFrame from '../../interfaces/iFrame.interface';

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId: IFrame & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const allFrameMockWithId: IFrame[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe'
  },
  {
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Prata',
    color: 'Quase Daquele naipe'
  },
];

export { frameMock, frameMockWithId, allFrameMockWithId };
