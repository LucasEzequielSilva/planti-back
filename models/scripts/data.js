import 'dotenv/config.js'
import '../../config/database.js'
import mongoose from 'mongoose';
import Plantas from '../plantas.js'
//data model
import { plantasArray } from './plantas.js'
//models
//create doc
Plantas.insertMany(plantasArray, (error) => {
  if(error) {
  console.error(error);
  } else {
  console.log('Data imported successfully');
  }})
