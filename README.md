
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
### menu
A command to generate a menu from a ChoiceGenerator.  

### getValue
A command that takes in answers and returns a value given


[//]: # ( ns__custom_end constantsIntro )



[//]: # ( ns__start_section types )

[//]: # ( ns__custom_start typeIntro )
## Types
The following interfaces are exposed by choicebrew.

[//]: # ( ns__custom_end typeIntro )


[//]: # ( ns__start_section types-functionTypes )

### FunctionTypes

* ChoicesGenerator: a function that generates a set of choices for a given menu
* ChoiceCallback: a function called when a menu option is chosen

[//]: # ( ns__end_section types-functionTypes )


[//]: # ( ns__start_section types-constants )

### Constants

* FlowType: distinguish between types of options.  Currently just BACK (exit the menu or submenu) and COMMAND (execute a command)
* SelectedInfo: specifying a selection.  Consists of a FlowType enum value &#x27;flow&#x27; and any &#x27;value&#x27; assigned to the choice.
* MenuAnswers: consists of simply &#x27;selected&#x27;, which is an instance of SelectedInfo.
* menuQuestionName: 
* Choice: The information for a choice, including the &#x27;flow&#x27; (a FlowType, almost always COMMAND), a &#x27;name&#x27; string, and a number of options. You can assign the following inquirer fields for a choice: description, value, short version.  Also, a callback function.

[//]: # ( ns__end_section types-constants )




[//]: # ( ns__end_section types )


[//]: # ( ns__end_section api )

