function getScriptParams() {
    const script = document.currentScript ||
        (function () {
            const scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })();

    return {
        eventCost: script.getAttribute('data-eventcost') || '',
        eventType: script.getAttribute('data-eventType') || '',
        sdk: script.getAttribute('data-sdk') || '',
    };
}

const em = {
    event1: 'conversion',
    event2: 'registration',
    event3: 'purchase',
    event4: 'custom01',
    event5: 'custom02',
}

// 发送转化事件
function sendConversionEvent(eventType, clickid, eventCost) {
    if (!clickid) return;
    const img = new Image();
    img.src = `https://bc-dsp-b.gatherstar.tech/?t=conversion&clickid=${clickid}&${eventType}=${em[eventType]}${eventCost ? `&eventCost=${eventCost}` : ''}`
}

const createConversion = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const clickid = urlParams.get('cid')
    const { eventType, eventCost } = getScriptParams()
    sendConversionEvent(eventType, clickid, eventCost)
}

(function () {
    const { sdk } = getScriptParams()
    if (sdk) {
        window.gDspSdk = Object.keys(em).reduce((acc, key) => {
            acc[key] = function (eventCost) {
                const urlParams = new URLSearchParams(window.location.search);
                const clickid = urlParams.get('cid')
                sendConversionEvent(key, clickid, eventCost)
            }
            return acc
        }, {})
    } else {
        createConversion()
    }
})()