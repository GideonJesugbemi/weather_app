db.collection('recipes').get().then((snapshot) => {
    // when we have the data
    console.log(snapshot);
}).catch((err) => {
    console.log(err)
});