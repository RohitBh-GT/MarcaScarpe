const shoes = (shoesData=[],action) => {
    switch(action.type){
      case 'GET_ALL_SHOES':
          return action.payload;
      case 'UPDATE_SHOES':
          return     
      default:
          return shoesData;    
    }     
}

export default shoes;