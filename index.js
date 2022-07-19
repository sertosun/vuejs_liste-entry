const app = Vue.createApp({
  data() {
    return {
      contacts: [
        { name: "Max", surname: "Mustermann", tel: "01607628724" },
        { name: "Hahn", surname: "Hähnchen", tel: "0160760364" },
        { name: "KFZ", surname: "Thomas", tel: "03058161644" },
      ],
      name: "",
      surname: "",
      tel: "",
    };
  },
  methods: {
    addContact() {
      const newPerson = new Kontakt(this.name, this.surname, this.tel);
      this.contacts.push(newPerson);
      this.name = "";
      this.surname = "";
      this.tel = "";
    },
  },
});

app.mount("#telefonbuch");

//Konstruktor => Bauplan für ein Objekt
function Kontakt(name, surname, tel) {
  this.name = name;
  this.surname = surname;
  this.tel = tel;
}

document.getElementById
