var addMergeMessage = function() {
  var squashMergeButton = document.querySelector('.merge-message .btn-group-squash');
  
  if (!squashMergeButton) return;

  squashMergeButton.addEventListener('click', function() {
    var messageField = document.getElementById('merge_message_field');
    if (!messageField) return;

    messageField.value = `Summarize changes in around 50 characters or less.
    
Explain the problem that this commit is solving. Focus on why you are making this change as opposed to how. Are there side effects or other unintuitive consequences of this change? Here's the place to explain them.
    
Resolves: <Replace with URL to trello card>`;
  });
}

document.addEventListener('pjax:end', addMergeMessage);
addMergeMessage();
