# iTutor Evaluation Set

## Introduction

This is the dataset that we used to perform preliminary testing of the instruction generation capability of LLMs (chatGPT in our case). The dataset includes screenshots from three popular apps (TikTok, Uber Eats, Yahoo News) with manually constructed UI context. We use the UI contexts to prompt chatGPT's user interface, refreshing the context for every input. Results indicated that chatGPT can provide the correct next-step operation in 78.6% (22/28) of the cases.

*Note that by "correct", we refer to the instances where the correct operation can be found in the JSON response. Besides, when the actually valid operation is the second step, the first step is equally acceptable or a null operation.*

### UI context construction

We currently label these UI components: Button, Input, Icon, Checkbox, Selector, Switch, Container, Tag, Menu. When labeling, we group the same UI components in an array under the components attribute. Here is an example:

```json
{
    "Icon": [
        "back",
        "localizer"
    ],
    "Button": [
        "G312 and Lvyuan Road Intersection",
        "Pick up at G312 and Lvyuan Road Inter..."
    ],
    "Input": [
        "Enter your destination"
    ],
    "Tag": [
        "Airport",
        "Schedule",
        "For others",
        "6-seater"
    ]
}
```

*Note that icon is special compared to other components. The naming varies a lot from different sources, and currently it is only a representative naming system that is derived from several sources.*

### Prompt

Please checkout [iTutor Project Page](https://motion115.github.io/iTutor) for details.

### Experimental Results

| Application | Prompts | Correct Responses | Accuracy |
| ----------- | ------- | ----------------- | -------- |
| TikTok      | 9       | 6                 | 0.667    |
| Uber Eats   | 11      | 9                 | 0.818    |
| Yahoo News  | 8       | 7                 | 0.875    |
| **Total**   | 28      | 22                | 0.786    |

## Downloading and Contributing

### Source

We provide two source of downloading the dataset:

- Baidu Netdisk (TODO)
- Google Drive (TODO)

If you encountered an issue, please create an *Issue* in this repository, and we will check out the problem.

### File Structure

There will be 3 folders in the downloaded zip file:

- UI page screenshot: the original screenshot
  - The last part of the filename, e.g. 01-02-03, means that this UI screenshot is used 3 times at prompt 01, 02, 03.
- UI component manual annotation: manually annotated UI components in JSON
- LLM response raw json: the response directly copied from chatGPT's interface, in JSON
  - We requested chatGPT to return the command/question, so you can find the task that we ask chatGPT to perform from the response.
  - The criterion we used to judge the correctness is the "Key" attribute. You can relate the array in the "Key" attribute to the manual annotation/screenshot to see whether it is a valid response.

### Contributing

Please use *Issue* of this repository if you want to contribute to this dataset. 