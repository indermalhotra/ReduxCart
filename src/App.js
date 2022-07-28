import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {cartActions} from './store/cartSlice';


let initialState = 1;
let initialValue = 0;

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state=>state.ui.CartVisible);
  const cartState = useSelector(state=>state.cart);

  useEffect(()=>{
    
    try{
      const sendData = async () => {
        const request = await fetch('https://reduxjason-default-rtdb.firebaseio.com/cartData.json',{
          method:'PUT',
          body:JSON.stringify(cartState)
        })

        if(!request.ok){
          throw new Error("Data did not sent");
        }

      }
      if(!initialState){
        sendData();
      }
      initialState = 0;
    }catch(err){
      console.log(err.message)
    }finally{
      
    }
  },[cartState]);

  useEffect(()=>{
    try{
      const getData = async () => {
        const request = await fetch('https://reduxjason-default-rtdb.firebaseio.com/cartData.json');
        if(!request.ok){
          throw new Error("data can not be retrived")
        }

        const result = await request.json();
        dispatch(cartActions.resetState(result));
        
        console.log(result);
      }

      getData();
    }catch(err){
      console.log(err.message);
    }
  },[])

  return (
    <Layout>
      {cartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
