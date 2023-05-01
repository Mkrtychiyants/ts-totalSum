import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }
    totalSum():number {
        return this._items.reduce((sum,cur) => sum + cur.price, 0);
    }
    discountTotal(disc: number):number {
        let sum = this._items.reduce((sum,cur) => sum + cur.price, 0);
       return  sum - ((sum * disc)/100);
    }
    deleteItem(itemId: number):void {
        if ((this._items.findIndex(item2=>item2.id==itemId))!= -1) {
            this._items.splice((this._items.findIndex(item2=>item2.id==itemId)),1)
        } else {
            throw new Error('no such an element')
        }
    }
    get items(): Buyable[] {
        return [...this._items]; 
    }
}