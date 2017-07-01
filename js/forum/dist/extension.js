System.register('workbench/surfedge-event-tracking/main', ['flarum/components/IndexPage', 'flarum/components/DiscussionComposer', 'flarum/extend'], function (_export) {
   'use strict';

   var IndexPage, DiscussionComposer, extend, override;
   return {
      setters: [function (_flarumComponentsIndexPage) {
         IndexPage = _flarumComponentsIndexPage['default'];
      }, function (_flarumComponentsDiscussionComposer) {
         DiscussionComposer = _flarumComponentsDiscussionComposer['default'];
      }, function (_flarumExtend) {
         extend = _flarumExtend.extend;
         override = _flarumExtend.override;
      }],
      execute: function () {

         app.initializers.add('surfedge-event-tracking', function () {

            override(IndexPage.prototype, 'newDiscussion', function (original) {
               ga('send', 'event', {
                  eventAction: 'click',
                  eventCategory: 'Ask a Question',
                  eventLabel: 'Ask a Question Button'
               });
               original();
            });

            override(DiscussionComposer.prototype, 'onsubmit', function (original) {
               ga('send', 'event', {
                  eventAction: 'click',
                  eventCategory: 'Post Question',
                  eventLabel: 'Post Question Button'
               });
               original();
            });
         });
      }
   };
});