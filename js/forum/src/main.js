import IndexPage from 'flarum/components/IndexPage';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import { extend , override} from 'flarum/extend';

app.initializers.add('surfedge-event-tracking', function() {

  override(IndexPage.prototype, 'newDiscussion', function(original) {
     ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Ask a Question',
         eventLabel: 'Ask a Question Button'
      });
    original();
  });

  override(DiscussionComposer.prototype, 'onsubmit', function(original) {
      ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Post Question',
         eventLabel: 'Post Question Button'
      });
     original();
  });

});