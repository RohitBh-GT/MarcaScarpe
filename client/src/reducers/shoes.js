const shoes = (shoesData=[],action) => {
    switch(action.type){
      case 'GET_ALL_SHOES':
          return action.payload;
      case 'UPDATE_REVIEW':
          var getShoe = shoesData.find((shoe)=> shoe._id === action.payload.id);
          if(getShoe){
              getShoe.productReviews.push(action.payload.review);
              shoesData = shoesData.filter((shoe)=> shoe._id !== action.payload.id);
              return [...shoesData,getShoe];
          }
          else{
              return shoesData;
          }
      default:
          return shoesData;    
    }     
}

export default shoes;