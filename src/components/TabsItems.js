import tab1 from "../assets/images/bg-ida.png";
import tab2 from "../assets/images/bg-kanal.png";
import tab3 from "../assets/images/bg-coldwar.png";
import { duplicateAndShuffle } from "../utils/array";

let TabsItems = [tab1, tab2, tab3, tab1];

// Duplicate the array and shuffle it

TabsItems = duplicateAndShuffle(TabsItems);
TabsItems = duplicateAndShuffle(TabsItems);
TabsItems = duplicateAndShuffle(TabsItems);

export default TabsItems;
