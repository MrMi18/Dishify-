import ResMenuHeader from "./ResMenuHeader";
import Recommendation from "./Recommendation";

const MainMenu = ({cards}) =>{



    return(
        <div className="flex m-2 w-60 flex-wrap ">
                 {cards && cards.map((menuSection, index) => {

                    if( menuSection?.card.card?.["@type"] ==  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"  ){
                    //  { console.log(menuSection?.card?.card?.title)}
                     
                      
                     const {itemCards } = menuSection?.card?.card;
                    
                      return (<div key ={menuSection?.card?.card?.title} >

                        {<ResMenuHeader title ={menuSection?.card?.card?.title } size={menuSection?.card?.card?.itemCards.length} />}
                        { 
                          itemCards &&  itemCards.map( item =>{
                            // console.log(item.card.info.id);
                         return (<Recommendation menu =  {item.card.info} key={item.card.info.id}/>)
                       
                          })
                        }
                        
                       </div>)
                      
                    }
                    if( menuSection?.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"){
                       const categories = menuSection?.card?.card?.categories;
                      //  console.log(menuSection?.card?.card);
                      return (<div key ={menuSection?.card?.card?.title}>
                         {<ResMenuHeader title ={menuSection?.card?.card?.title }  />}
                          {
                            
                            categories && categories.map(category =>{
                              const {itemCards}  = category;
                             return  (
                               <div key={category.title}>
                               {/* {console.log(category.itemCards.length)} */}
                                {<ResMenuHeader title ={category.title } size={category.itemCards.length} />}
                                {
                                  itemCards && itemCards.map(item =>{
                                    return(<Recommendation menu =  {item.card.info} key={item.card.info.id}/>)
                                  })
                                }
                                 
                               </div>
                             )
                            })
                          }
                        
                       </div>)
                    }
                    
                 })}   {/* // apna sections and subSections wala logic ka end 
                 */}
                 </div>
    )
}

export default MainMenu;