/* ns__file unit: static-typeCategory, comp: constants.ts */
/* ns__custom_start helpers */
import {ChoiceCallback} from './functionTypes'
/* ns__custom_end helpers */

// distinguish between types of options.  Currently just BACK (exit the menu or submenu) and COMMAND (execute a command)
export enum FlowType {
/* ns__custom_start FlowType */
  back = 'BACK',
  command = 'COMMAND',
/* ns__custom_end FlowType */
}

// specifying a selection.  Consists of a FlowType enum value &#x27;flow&#x27; and any &#x27;value&#x27; assigned to the choice.
export interface SelectedInfo {
/* ns__custom_start SelectedInfo */
  flow: FlowType;
  value?: any;
  /* ns__custom_end SelectedInfo */
}

// consists of simply &#x27;selected&#x27;, which is an instance of SelectedInfo.
export interface MenuAnswers {
/* ns__custom_start MenuAnswers */
  selected: SelectedInfo;
  /* ns__custom_end MenuAnswers */
}

// The information for a choice, including the &#x27;flow&#x27; (a FlowType, almost always COMMAND), a &#x27;name&#x27; string, and a number of options. You can assign the following inquirer fields for a choice: description, value, short version.  Also, a callback function.
export interface Choice {
/* ns__custom_start Choice */
  flow: FlowType;
  name: string;
  description?: string;
  value?: any;
  short?: string;
  callback?: ChoiceCallback;
  /* ns__custom_end Choice */
}


/* ns__custom_start extraExports */
/* ns__custom_end extraExports */
