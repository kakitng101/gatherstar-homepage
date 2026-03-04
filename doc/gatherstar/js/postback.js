/**
 *  It supports the communication with exa-Documentation component, angular side
 */

var interactingWithDocComponent = false;

setTimeout(function () {
    if (window.location !== window.parent.location) {
        if (document.body) {
            document.body.style.display = 'none';
        }
    }
}, 0);

window.addEventListener('unload', function (event) {
    // on clicking on a link, if we are into an iframe
    if (interactingWithDocComponent) {
        window.parent.postMessage({eventId: 'unload', result: true}, '*');
    }
});

window.addEventListener('message', function (event) {
    if (event.data && event.data['eventId'] === 'applyCssStyle' && event.data['cssStyle']) {
        interactingWithDocComponent = true;
        var style = document.createElement('style');
        style.innerText = event.data['cssStyle'];
        document.head.append(style);
        window.parent.postMessage({eventId: 'appliedCssStyle', result: true}, '*');
        var currentHostName = window.location.hostname;

        // disabling external links
        var allAnchors = document.getElementsByTagName('A');
        if (allAnchors && allAnchors.length > 0) {
            Array.from(allAnchors).forEach(function (element) {
                if (element.href !== '') {
                    var currentUrl = new URL(element.href);
                    var hostName = currentUrl.hostname;
                    if (hostName !== currentHostName) {
                        element.classList.add('anchor_to_disable');
                        if (element.parentNode) {
                            element.parentNode.style.cursor = 'text';
                        }
                    }
                }
            });
        }

    } else if (event.data && event.data['eventId'] === 'hide') {
        var urls = event.data['urls'];
        if (urls && urls.length > 0) {
            var url = urls.find(function (item) {
                return item.url === location.pathname + location.hash
            });

            if (url && url.CSSFirstElement && url.CSSFirstElement.split('') !== '') {
                var firstElement = document.querySelector(url.CSSFirstElement);

                for (var i = 0; i < url.firstElementNLevels && firstElement.parentElement; i++) {
                    firstElement = firstElement.parentElement;
                }

                // hiding all previous siblings before first element (hashNode)
                var previousSibling = firstElement.previousElementSibling;

                while (previousSibling) {
                    previousSibling.style.display = 'none';
                    previousSibling = previousSibling.previousElementSibling;
                }
            }

            if (url && url.CSSLastElement && url.CSSLastElement.split('') !== '') {
                var secondAnchorElement = document.querySelector(url.CSSLastElement);

                for (var i = 0; i < url.lastElementNLevels && secondAnchorElement.parentElement; i++) {
                    secondAnchorElement = secondAnchorElement.parentElement;
                }

                // hiding all next siblings to last element
                var nextSibling = secondAnchorElement.nextElementSibling;

                while (nextSibling) {
                    nextSibling.style.display = 'none';
                    nextSibling = nextSibling.nextElementSibling;
                }
                secondAnchorElement.style.display = 'none';
            }
        }
        document.body.style.display = '';
        window.parent.postMessage({eventId: 'hided', result: true}, '*');
    } else if (event.data && event.data['eventId'] === 'scrollToAnchor') {
        var anchor = window.location.hash;
        if (anchor && anchor.split('') !== '') {
            var needle = anchor.replace('#', '');
            var anchorElement = document.getElementById(needle);

            if (anchorElement) {
                anchorElement.scrollIntoView()
            }
        }
        window.parent.postMessage({eventId: 'scrolledToAnchor', result: true}, '*');
    }
});