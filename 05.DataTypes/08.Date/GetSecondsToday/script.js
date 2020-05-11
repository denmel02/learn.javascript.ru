function getSecondsToday() {
    const today = new Date();

    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

alert( getSecondsToday() );
