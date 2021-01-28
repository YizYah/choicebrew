/* ns__file unit: static-grouping, comp: functions.ts */
/* ns__custom_start helpers */
/* ns__custom_end helpers */

/* ns__start_section exports */
module.exports = {
  menu: // takes a ChoiceGenerator and continuously prompts the user for choices until a choice with the FlowType BACK is selected. When a choice with FlowType BACK is selected, the menu exits. You can also call setFlow in the callback for a choice to set the FlowType to BACK dynamically, thereby exiting the menu after execution of the callback.
    /* ns__custom_start menu */
    require('../custom/menu').menu,
    /* ns__custom_end menu */

  getValue: // returns the value entered or selected by a user.  This is useful in the callback for a ChoiceCallback
    /* ns__custom_start getValue */
    require('../custom/menu').getValue,
    /* ns__custom_end getValue */

  setFlow: // sets the flow for a Choice to be a FlowType.  Normally, this is only useful for setting flow to BACK in a ChoiceCallback.  Doing that will result in the menu exiting after the ChoiceCallback executes.  For instance, it will exit a submenu and return to the menu above.
    /* ns__custom_start setFlow */
    require('../custom/menu').setFlow,
    /* ns__custom_end setFlow */

}
/* ns__end_section exports */
