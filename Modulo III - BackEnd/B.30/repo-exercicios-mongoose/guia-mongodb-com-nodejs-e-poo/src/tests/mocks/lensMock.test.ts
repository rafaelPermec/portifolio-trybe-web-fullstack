import ILens from '../../interfaces/iLens.interface';

const lensMock: ILens = {
  degree: 1.25,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 5,
  antiGlare: false,
  blueLightFilter: true,
};

const allLensMockWithId: ILens[] & { _id: string }[] = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 5,
    antiGlare: false,
    blueLightFilter: true,
  },
  {
    _id: '69cf1fc6498665d44eba52cd',
    degree: 8,
    antiGlare: true,
    blueLightFilter: false,
  }
];


export { lensMock, lensMockWithId, allLensMockWithId };
