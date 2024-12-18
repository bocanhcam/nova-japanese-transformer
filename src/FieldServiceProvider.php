<?php

namespace Bocanhcam\NovaJapaneseTransformer;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Nova::serving(function (ServingNova $event) {
            //Nova::mix('nova-japanese-transformer', __DIR__.'/../dist/mix-manifest.json');
            Nova::script('nova-japanese-transformer', __DIR__.'/../dist/js/field.js');
            Nova::style('nova-japanese-transformer', __DIR__.'/../dist/css/field.css');
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }
}
