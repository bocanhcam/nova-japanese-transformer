## Overview

A custom Laravel Nova field to transforming text to Hiragana or Katakana.

![Transforming Romaji](/screenshots/transform.gif)

## Installation

Install the package via Composer:
```shell
composer require bocanhcam/nova-japanese-transformer
```

## Usage

### Usage
Add the field to your Nova resource:

```php
use Bocanhcam\NovaJapaneseTransformer\JapaneseTransformerText;
use Bocanhcam\NovaJapaneseTransformer\JapaneseTransformerTextarea;

// Text
JapaneseTransformerText::make('Name'), // Convert Romaji to Kana. outputs Hiragana by default; uppercase text outputs Katakana.
JapaneseTransformerText::make('Hiragana')->toHiragana(), // Convert Katakana or Romaji to Hiragana.
JapaneseTransformerText::make('Katakana')->toKatakana(), // Convert Hiragana or Romaji to Katakana.
// Textarea
JapaneseTransformerTextarea::make('Description'), // Have the same function like Text field
```

### Powered by `wanakana`
For more details on wanakana, check out their [documentation](https://github.com/WaniKani/WanaKana).

## License
This package is open-sourced software licensed under the [MIT license](https://opensource.org/license/MIT).
