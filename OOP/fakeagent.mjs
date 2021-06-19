export function fakeAjax(url,cb) {
    setTimeout(function fakeLoadingDelay(){
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    },1000);
}
