<?php

namespace Bocanhcam\NovaJapaneseTransformer;

use Laravel\Nova\Fields\Text;

class JapaneseTransformerText extends Text
{
    use HasTextTransform;

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'japanese-transformer-text';
}
