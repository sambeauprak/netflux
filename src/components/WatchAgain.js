import watch1 from "../assets/images/2-01.png";
import watch2 from "../assets/images/2-02.png";
import watch3 from "../assets/images/2-03.png";
import watch4 from "../assets/images/2-04.png";
import watch5 from "../assets/images/2-05.png";
import watch6 from "../assets/images/2-06.png";
import watch7 from "../assets/images/2-07.png";

import { duplicateAndShuffle } from "../utils/array";

let WatchAgain = [watch1, watch2, watch3, watch4, watch5, watch6];

// Duplicate the array and shuffle it

WatchAgain = duplicateAndShuffle(WatchAgain);
WatchAgain = duplicateAndShuffle(WatchAgain);
WatchAgain = duplicateAndShuffle(WatchAgain);

WatchAgain = [...WatchAgain, watch7];

export default WatchAgain;
