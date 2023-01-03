const getColor = ((vote) => {
  if (vote >= 4) {
    return 'green';
  } if (vote >= 3) {
    return 'orange';
  }
  return 'red';
});

export default getColor;
