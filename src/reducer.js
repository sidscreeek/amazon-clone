 export const initialState ={
    basket: [],
    user: null,
 };

 export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

 const reducer = (state, action) => {
    console.log(action);
    switch(action.type){

        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
        return { 
            ...state,
            basket: [...state.basket, action.item]
         };

        case 'REMOVE_FROM_BASKET':
        let newBasket = [...state.basket];

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

        if(index >= 0){
          newBasket.splice(index, 1);
        }
        else{
            console.warn(`Cant remove the product`);

        }
        return { ...state, 
            basket: newBasket }

        default:
            return state;


    }
 }

 export default reducer;

  // id: "58795",
        // title: "Daily Protein Bar - Choco Almond",
        // price: 599,
        // rating: 3,
        // image: "https://m.media-amazon.com/images/I/61Oq0e2OgWL._AC_UL400_.jpg"