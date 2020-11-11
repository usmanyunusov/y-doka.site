module.exports = {
  icon: function (name) {
    return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`
  },
  demo: function (demoName, title) {
    return `<iframe onload="this.style.height = this.contentWindow.document.body.scrollHeight + 'px'" style="width: 100%;" title="${title}" src="/demos/${demoName}" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>`
  },
}
