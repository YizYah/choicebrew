/* ns__file unit: static-typeCategory, comp: functionTypes.ts */
/* ns__custom_start helpers */
import {Choice, MenuAnswers} from '../types/constants'
/* ns__custom_end helpers */

// a function that generates a set of choices for a given menu
export type ChoicesGenerator =
/* ns__custom_start ChoicesGenerator */
  (context: any) => Choice[]
/* ns__custom_end ChoicesGenerator */


// a function called when a menu option is chosen
export type ChoiceCallback =
/* ns__custom_start ChoiceCallback */
  (context: any, answers: MenuAnswers) => any
/* ns__custom_end ChoiceCallback */



/* ns__custom_start extraExports */
/* ns__custom_end extraExports */
