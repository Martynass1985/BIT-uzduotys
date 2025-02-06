const responseDogList = await fetch("https://dog.ceo/api/breeds/list/all");
const dogList = await responseDogList.json();
const dogsSelect = document.querySelector("#dogList");

const breedOptions = [];

for (const breed in dogList.message) {
  const subtypes = dogList.message[breed];
  if (subtypes && typeof subtypes === "object" && subtypes.length > 0) {
    subtypes.forEach((subtype) => {
      breedOptions.push(`${breed}-${subtype}`);
    });
  } else {
    breedOptions.push(breed);
  }
}
console.log(breedOptions);
breedOptions.forEach((breedOption) => {
  const optionElement = document.createElement("option");
  optionElement.value = breedOption;
  optionElement.textContent = `${
    breedOption.at(0).toUpperCase() + breedOption.replace("-", " ").slice(1)
  }`;
  dogsSelect.appendChild(optionElement);
});

async function fetchDogImage(breed) {
  const dogBreed = document.getElementById("dogBreed");
  dogBreed.textContent = `${
    breed.at(0).toUpperCase() + breed.replace("-", " ").slice(1)
  }`;

  if (breed.includes("-")) breed = breed.slice(0, breed.indexOf("-"));
  else breed;

  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );

  const data = await response.json();
  console.log(data);

  const imageUrl = data.message;
  console.log(imageUrl);

  const dogImage = document.getElementById("dogImage");

  dogImage.src = imageUrl;
}

document.getElementById("dogList").addEventListener("change", (event) => {
  const selectedBreed = event.target.value;
  if (selectedBreed) {
    fetchDogImage(selectedBreed);
  }
});

fetchDogBreeds();
