<?php

namespace Bocanhcam\NovaJapaneseTransformer;

use Laravel\Nova\Fields\SupportsDependentFields;

trait HasTextTransform
{
    use SupportsDependentFields;

    public function toKatakana()
    {
        return $this->withMeta(['IMEMode' => 'toKatakana']);
    }

    public function toHiragana()
    {
        return $this->withMeta(['IMEMode' => 'toHiragana']);
    }

    public function options($options = [])
    {
        return $this->withMeta(['options' => $options]);
    }
}
