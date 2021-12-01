if(!window.location.href.includes("?qa_expand_key=")) {
    const searchTabs = window.setInterval(() => {
        if(document.querySelector("#ka-uid-discussiontabbedpanel-0--tabbedpanel-tab-0")) {
            document.querySelector("#ka-uid-discussiontabbedpanel-0--tabbedpanel-tab-1").click();
            window.clearInterval(searchTabs);
        }
    }, 30);
}