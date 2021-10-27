import { model, Schema, Document } from 'mongoose';
import { Card } from '@interfaces/cards.interface';

const cardSchema: Schema = new Schema({
  name: {
    type: String,
  },
  img: {
    type: Buffer,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});

const cardModel = model<Card & Document>('Card', cardSchema);

export default cardModel;
