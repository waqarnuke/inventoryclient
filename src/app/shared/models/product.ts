export interface Product {
    id: number
    title: string
    description: string
    isbn: string
    author: string
    listPrice: number
    price: number
    price50: number
    price100: number
    imageUrl: string
    categoryId: number
    category: string
  }
 
  export class ProductCls implements Product
  {
  
    id=0
    title = '';
    description= '';
    isbn = '';
    author= '';
    listPrice = 0;
    price = 0;
    price50 = 0;
    price100 = 0;
    imageUrl = '';
    categoryId= 0;
    category = "";
  }
  
export interface IProductToCreate {
    title: string
    description: string
    isbn: string
    author: string
    listPrice: number
    price: number
    price50: number
    price100: number
    imageUrl: string
    categoryId: number
}
export class ProductFormValues implements IProductToCreate
{
  title = '';
  description= '';
  isbn = '';
  author= '';
  listPrice = 0;
  price = 0;
  price50 = 0;
  price100 = 0;
  imageUrl = '';
  categoryId= 0;


  constructor(init?:ProductFormValues){
    Object.assign(this,init);
}
}