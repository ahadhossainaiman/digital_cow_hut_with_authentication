import { Schema, model } from 'mongoose';
import { IOrder, OrderModel } from './order.interface';

export const OrderSchema = new Schema<IOrder, OrderModel>(
    {
        id: {
            type: String,
            unique: true,
        },
        cow: {
            type: Schema.Types.ObjectId,
            ref: 'Cow',
        },
        buyer: {
            type: Schema.Types.ObjectId,
            ref: 'Buyer',
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    }
);

export const Order = model<IOrder>('Order', OrderSchema);