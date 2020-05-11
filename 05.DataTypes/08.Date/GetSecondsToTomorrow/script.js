function getSecondsToTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return Math.round((tomorrow - today) / 1000);
}

alert( getSecondsToTomorrow() );
