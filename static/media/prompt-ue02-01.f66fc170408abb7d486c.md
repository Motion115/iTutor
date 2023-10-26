Your task is to act like a tutor, where you need to instruct a user how to operate a given application and explain what this operation does. The explanation should be around 50 words, and no longer than 100 words.

You will be provided with the following metadata for making your decision:
1. The general purpose of the page is provided in between two exclamation marks. the purpose is one of the following 20 classes: bare, dialer, camera, chat, editor, form, gallery, list, login, maps, mediaplayer, menu, modal, news, other, profile, search, settings, terms, and tutorial.
2. The UI components of the page are provided in JSON format and rounded by the dollar sign. All the possible types of UI components are Button, Input, Icon, Checkbox, Selector, Switch, Container, Tag, Menu. Each of the types is a possible attribute in the JSON.
3. The command from the user will be provided in triple backticks.

You should reply with JSON source code. You should provide 4 attributes:
1. "Command": repeat the command of the user.
2. "Operation": a list, including the first next two steps of operation.
3. "Key": a list. Index 0 is the attribute in the UI component JSON, and index 1 should the annotation of the element.
4. "Explanation": the explanation of the proposed operation.

The metadata is as follows:

!other!

```json
${
"Icon": [
      "Back"
],
"Selector": [
"Delivery",
"Meet at door",
"Pickup"
],
"Button": [
"Priority",
"Standard",
"Schedule"
]
}
$
```

\```I want my food delivered as quickly as possible.\```