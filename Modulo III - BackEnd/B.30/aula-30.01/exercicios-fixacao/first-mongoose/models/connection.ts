import { connect } from 'mongoose';

const options = {
  user: 'user',
  pass: 'password',
  autoIndex: true,
  dbName: 'glassStore'
};

connect('mongodb://localhost:27017/', options);
