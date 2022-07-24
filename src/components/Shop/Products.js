import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
  {id:"a1", price:6, name:"Product 1", description:"product1 in list"},
  {id:"a2", price:8, name:"Product 2", description:"product2 in list"},
  {id:"a3", price:10, name:"Product 3", description:"product3 in list"},
]
const allItems = dummyData.map(item => { 
  return(<ProductItem 
    key={item.id}
    title={item.name}
    price={item.price}
    description={item.description}
    id={item.id}
  />);
});

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {allItems}
      </ul>
    </section>
  );
};

export default Products;
