<?php

namespace Bocanhcam\NovaJapaneseTransformer;

use Laravel\Nova\Fields\Textarea;

class JapaneseTransformerTextarea extends Textarea
{
    use HasTextTransform;

    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'japanese-transformer-textarea';
}
