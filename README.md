# Google Analytics Event Tracking for Flarum
#### This is not a published flarum extension use this as a boilerplate to build yours

* You should have added Google Analytics to Flarum before using this extension.

Current Event tracking,
* IndexPage New Discussion Button
* Discussion Composer Post Button

Code Snippet,

``` javascript
  override(IndexPage.prototype, 'newDiscussion', function(original) {
     ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Ask a Question',
         eventLabel: 'Ask a Question Button'
      });
    original();
  });
```
``` javascript
 override(DiscussionComposer.prototype, 'onsubmit', function(original) {
      ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Post Question',
         eventLabel: 'Post Question Button'
      });
     original();
  });
```

