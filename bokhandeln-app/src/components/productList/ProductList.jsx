import './productList.css';
import books from '../../assets/books.json';
import BookItem from '../bookItem/BookItem';

function ProductList({ decreaseCartBalance, increaseCartBalance }) {
  console.log(books);

  return (
    <ul className="product-list">
        {
            books.map((book, index) => {
                return <BookItem
                          decreaseCartBalance={ decreaseCartBalance }
                          increaseCartBalance={ increaseCartBalance } 
                          book={ book }
                          key={ index } 
                       />
            })
        }
    </ul>
  )
}

export default ProductList;
