

export interface Category {
    id: number
    name: string
    displayOrder: number
}
export interface ICategoryToCreate {
    name: string
    displayOrder: number
}
export class CategoryFormValues implements ICategoryToCreate{
    name = '';
    displayOrder = 0;

    constructor(init?:CategoryFormValues){
        Object.assign(this,init);
    }

}