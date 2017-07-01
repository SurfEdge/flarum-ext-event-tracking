<?php

use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\ConfigureWebApp;
use Flarum\Event\ConfigureClientView;


return function (Dispatcher $events, Application $app) {
$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    if ($event->isForum()) {
        $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        $event->addBootstrapper('workbench/surfedge-event-tracking/main');
    }
});
};