import Book from "../models/bookModel";
import Author from "../models/authorModel";
import Category from "../models/categoryModel";
export function tableAssociations() {
  // Define the associations between the models
  Book.belongsTo(Author, { foreignKey: 'authorId' });
  Author.hasMany(Book, { foreignKey: 'authorId' });
  Book.belongsTo(Category, { foreignKey: 'categoryId' }); 
  Category.hasMany(Book, { foreignKey: 'categoryId' });
}




