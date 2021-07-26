(english manual to be added later)

Paleidimo istrukcija:

1. Susikurti tuščią folderį ir į jį užėjus per cmd paleisti "git clone https://github.com/Elbromistafalso/praktika.git" komandą.

2. Užėjus per cmd į \spring-mysocialnetwork folderį paleisti "mvn spring-boot:run" komdandą.

3. Užėjus per cmd į \react-mysocialnetwork folderį peleisti "yarn install" komandą, jai užsibaigius paleisti "yarn start" komandą.



Naudojimo dokumentacija:

1.Naudotojui pastartavus react applikaciją atsidarusiame lange matosi prisijungimo formą. Prieš prisijungiant naudotojui būtina save užregistruoti sistemoje, dėlto jam reikia  paspausti "Neturite paskyros? Registruotis" nuoradą. Sėkmingai registracijai naudotojas turi užpildyti "Prisijungimo vardas: ", "Slaptažodis: " ir "Pakartoti slaptažodį"  laukelius (slaptažodis privalo būti bent 8 simbolių ilgio, kitaip metamas bootstrap'o danger alertas). Sėkmingos registracijos atveju išmetamas bootstrap'o success alertas ir naudotojui išmetama prisijungimo formą, kurią sėkmingai užpildžius jis yra prijungiamas į savo paskyrą, kurios dešiniame viršutiniame kampe matosi naudotojo prisijungimo vardas. Vartotojas gali atsijungti paspaudus šalia esantį "Atsijungti" mygtuką.

2. Šalia naudotojo prisijungimo vardo matomas ir naudotojo paveiksliukas, kurį galima pakeisti savo pasirinktu paveiksliuku paspaudus "Pakeisti nuotrauką".

3. Naudotojas gali sukurti naują pranešimą paspaudus "Naujas pranešimas" mygtuką. Sėkmingam pranešimo sukurimui naudotojas privalo parašyti teksto, to nepadarus metamas bootstrap'o danger alertas, taip pat naudotojas gali pridėti nuotrauką į pranešimą paspaudus "Pridėti nuotrauką", bet tai nėra privaloma. Paspaudus "Sukurti" mygtuką, naudotojas sugrįžta į pagrindinį paskyros puslapį, kuriame dabar matosi jo sukurtas pranešimas.

4. Pranešimo viršiuje matosi naudotojo paveiksliukas, slapyvardis, pranešimo sukūrimo data, "pamėgimų ikona ir jų skaičius, komentarų ikona ir jų skaičius. Tada seka "Pamėgti", "Komentuoti", "Ištrinti" ir "Redaguoti" mygtukai, pastarieji du matomi tik to pranešimo sukūrėjui. Pranešimo vidurio centre matomas pranešimo paveiksliukas, jei jis buvo pridėtas ir pranešimo apačioje matomas pranešimo tekstas/

5. Paspaudus "Pamėgti" mygtuką vienetu pasididina prie pamėgimų ikonos esantis skaičius. Naudotojas gali "pamėgti" konkretų pranešimą tik vienąkart.

6. Paspaudus "Komentuoti" mygtuką naudotojas nukreipiamas sukurti komentarą. Užpildžius komentaro tekstą, naudotojas nukreipiamas atgal į pagrindinį paskyros puslapį, kur gali pamatyti savo parašytą komentarą po pasirinktu pranešimu. Naudotojas gali parašyti neribotą kiekį komentarų. Prie komentarų ikonos esantis skaičius padidinimas vienetu.

7. Paspaudus "Ištrinti" mygtuką ištrinimas pasirinktas naudotojo pranešimas iš sistemos.

8. Paspaudus "Redaguoti" mygtuką naudotojas nukrepiamas paredaguoti savo pranešimą. Galima pakeisti prieš tai išsaugotą pranešimo tekstą ir pasirinkti naują paveikslelį (šiuo momentu jei norima matyti prieš tai išsaugota paveikslelį, reikia vėl jį pridėti). Paspaudus "Atnaujinti" naudotojas sugrąžinamas atgal į pagrindinį paskyros puslapį, kur gali pamatyti atnaujintą pranešimą.

9. Virš visų sistemos pranešimų randasi pranešimų paieška. Galima ieškoti pranešimus arba pagal naudotojo vardą, arba pagal pranešimo turinį. Jeigu nerandama pranešimų pagal paieškos kriterijus, išmetamas bootstrap'o danger alertas.


