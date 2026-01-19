export class Category {

  categoryId : number;
  categoryName : string;
  categoryLogo : String;


  constructor(categoryId: number, categoryName: string, categoryLogo: String) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.categoryLogo = categoryLogo;
  }
}
