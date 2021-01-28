
[//]: # ( ns__file unit: standard, comp: README.md )

[//]: # ( ns__custom_start beginning )

[//]: # ( ns__custom_end beginning )

[//]: # ( ns__start_section intro )

[//]: # ( ns__custom_start description )
choicebrew
======
simple interactive menus

[//]: # ( ns__custom_end description )

[//]: # ( ns__custom_start afterDescription )

[//]: # ( ns__custom_end afterDescription )

[//]: # ( ns__custom_start badges )

[//]: # ( ns__start_section usageSection )

[![Version](https://img.shields.io/npm/v/choicebrew.svg)](https://npmjs.org/package/choicebrew)
[![Downloads/week](https://img.shields.io/npm/dw/choicebrew.svg)](https://npmjs.org/package/choicebrew)
[![License](https://img.shields.io/npm/l/choicebrew.svg)](https://github.com/YizYah/choicebrew/blob/master/package.json)

[//]: # ( ns__custom_end badges )

[//]: # ( ns__end_section intro )


[//]: # ( ns__start_section api )


[//]: # ( ns__custom_start APIIntro )
# API

[//]: # ( ns__custom_end APIIntro )


[//]: # ( ns__custom_start constantsIntro )
## General Constants and Commands

[//]: # ( ns__custom_end constantsIntro )


[//]: # ( ns__start_section constants-functions )

### Functions
functions for working with menus
* menu: takes a ChoiceGenerator and continuously prompts the user for choices until a choice with the FlowType BACK is selected. When a choice with FlowType BACK is selected, the menu exits. You can also call setFlow in the callback for a choice to set the FlowType to BACK dynamically, thereby exiting the menu after execution of the callback.
* getValue: returns the value entered or selected by a user.  This is useful in the callback for a ChoiceCallback
* setFlow: sets the flow for a Choice to be a FlowType.  Normally, this is only useful for setting flow to BACK in a ChoiceCallback.  Doing that will result in the menu exiting after the ChoiceCallback executes.  For instance, it will exit a submenu and return to the menu above.

[//]: # ( ns__end_section constants-functions )




[//]: # ( ns__start_section types )

[//]: # ( ns__custom_start typeIntro )
## Types
The following types and interfaces are exposed by choicebrew.

[//]: # ( ns__custom_end typeIntro )


[//]: # ( ns__start_section types-constants )

### Constants
Interfaces and enums used with choicebrew menus
* FlowType: Options for a flow in a Choice.  Currently just BACK (exit the menu or submenu) and COMMAND (execute a command).  Almost always you will want to set a Choice to COMMAND, because by default a BACK Choice is created for you automatically unless you override that with your own.  But see the setFlow function, which allows you to dynamically change a flow to BACK inside of an executing ChoiceCallback.
* SelectedInfo: specifying a selection.  Consists of a FlowType enum value &#x27;flow&#x27; and any &#x27;value&#x27; assigned to the choice.
* MenuAnswers: consists of simply &#x27;selected&#x27;, which is an instance of SelectedInfo.
* SelectedInfo: specifying a selection.  Consists of a FlowType enum value &#x27;flow&#x27; and any &#x27;value&#x27; assigned to the choice.
* Choice: The information for a choice, including the &#x27;flow&#x27; (a FlowType, almost always COMMAND), a &#x27;name&#x27; string, and a number of options. You can assign the following inquirer fields for a choice: description, value, short version.  Also, a callback function.

[//]: # ( ns__end_section types-constants )


[//]: # ( ns__start_section types-functionTypes )

### FunctionTypes
type declarations for the functions used in menus
* ChoicesGenerator: a function that generates a set of choices for a given menu
* ChoiceCallback: a function called when a menu option is chosen

[//]: # ( ns__end_section types-functionTypes )




[//]: # ( ns__end_section types )


[//]: # ( ns__end_section api )

