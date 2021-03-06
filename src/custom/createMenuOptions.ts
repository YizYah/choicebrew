import {Choice, FlowType} from '../types/constants'
import {defaultBackName, menuQuestionName} from './constants'

function createMenuOption(choice: Choice) {
  const name = choice.description || choice.name
  const choiceValue = choice.value || choice.name
  const short = choice.short || choice.name

  return {
    name,
    value: {
      flow: choice.flow,
      value: choiceValue,
      callback: choice.callback,
    },
    short,
  }
}

export function createMenuOptions(choices: Choice[], prompt: string) {
  const finalChoices = choices
  if (choices.filter((x: Choice) => x.flow === FlowType.back).length === 0) {
    // need to add back option
    const backChoice: Choice = {
      flow: FlowType.back,
      name: defaultBackName,
    }

    finalChoices.push(backChoice)
  }

  return [{
    type: 'list',
    loop: false,
    message: prompt,
    name: menuQuestionName,
    choices: finalChoices.map(choice => createMenuOption(choice)),
  }]
}
