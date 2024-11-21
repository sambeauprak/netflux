import program1 from "../assets/images/3-01.png";
import program2 from "../assets/images/3-02.png";
import program3 from "../assets/images/3-03.png";
import program4 from "../assets/images/3-04.png";
import program5 from "../assets/images/3-05.png";
import program6 from "../assets/images/3-06.png";
import program7 from "../assets/images/3-07.png";
import { duplicateAndShuffle } from "../utils/array";

let Programs = [program1, program2, program4, program5, program6, program7];

// Duplicate the array and shuffle it

Programs = duplicateAndShuffle(Programs);
Programs = duplicateAndShuffle(Programs);
Programs = duplicateAndShuffle(Programs);

Programs.push(program3);

export default Programs;
