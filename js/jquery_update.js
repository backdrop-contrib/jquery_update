(function (B) {
  var beforeSerialize = B.ajax.prototype.beforeSerialize;
  B.ajax.prototype.beforeSerialize = function (element, options) {
    beforeSerialize.call(this, element, options);
    options.data['ajax_page_state[jquery_version]'] = B.settings.ajaxPageState.jquery_version;
    options.data['ajax_page_state[jquery_version_token]'] = B.settings.ajaxPageState.jquery_version_token;
  }
})(Backdrop);
