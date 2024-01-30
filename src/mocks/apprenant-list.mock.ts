export const importInvalidApprenantListWithValidMapping = () => ({invalidApprenantList, validApprenantFieldsMapping});

export const importValidApprenantListWithInvalidMapping = () => ({validApprenantList, invalidApprenantFieldsMap});

export const importValidApprenantListWithValidMapping = () => ({validApprenantList, validApprenantFieldsMapping});

const invalidApprenantList = [
 {
    ecole: "IMT Atlantique",
    formation: "Ingénieur",
    nom: "Bouhlel",
    prenom: "Sarra",
    email: "test",
    telephone: "0655555555"
},
{
    ecole: "Polytech",
    formation: "Ingénieur data",
    nom: "Doh",
    prenom: "",
    email: "jean@doh.com",
    telephone:"0655555555"
},
{
    ecole: "Polytech",
    formation: "Ingénieur data",
    nom: "Dupont",
    prenom: "Jean",
    email: "jean@mail.com",
    telephone: "065555l5555"
}, 
{
    ecole: "IUT Bordeaux",
    formation: "BUT Informatique",
    nom: "Doe",
    prenom: "John",
    email: "john.doe@gmail.com",
    telephone: "0655555555"
},
{
    ecole: "IUT Bordeaux",
    formation: "BUT Informatique",
    nom: "Doe",
    prenom: "John",
    email: "john.doe@gmail.com",
    telephone: "0654657643"
}
];

const validApprenantList = [
    {
       ecole: "IMT Atlantique",
       formation: "Ingénieur",
       nom: "Bouhlel",
       prenom: "Sarra",
       email: "test@email.com",
       telephone: "0655555555"
   },
   {
       ecole: "Polytech",
       formation: "Ingénieur data",
       nom: "Doh",
       prenom: "Jean",
       email: "jean@doh.com",
       telephone:"0655555555"
   },
   {
       ecole: "Polytech",
       formation: "Ingénieur data",
       nom: "Dupont",
       prenom: "Jean",
       email: "jean@mail.com",
       telephone: "0655555555"
   }, 
   {
       ecole: "IUT Bordeaux",
       formation: "BUT Informatique",
       nom: "Doe",
       prenom: "John",
       email: "john.doe@gmail.com",
       telephone: "0655555555"
   },
   {
       ecole: "IUT Bordeaux",
       formation: "BUT Informatique",
       nom: "Doe",
       prenom: "John",
       email: "john.doe@gmail.com",
       telephone: "0654657643"
   }
   ];


const validApprenantFieldsMapping = {
    firstName: "prenom",
    lastName: "nom",
    email: "email",
    phone: "telephone",
    programName: "formation",
    campusName: "ecole",
};

const invalidApprenantFieldsMap = {
    firstName: "prenom",
    lastName: "nom",
    email: "email",
    phone: "telephone",
    programName: "formation",
};