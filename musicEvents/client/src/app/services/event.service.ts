import { Injectable } from '@angular/core';
import {Eventi} from '../models/events.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Eventi[];

  constructor() {
    this.events = [
      new Eventi(1, "Posle uspešnih koncerata po celom regionu Marko Louis će održati veliki koncert u Beogradskoj Kombank Dvorani u sklopu treće sezone 'Beskraj Tour by Barcaffe'. Posle tri studijska albuma i jednog Live albuma, Marko je nedavno objavio prvi singl 'Ninana', koji najavljuje njegov četvrti album. Markova verzija pesme 'Rockabye' pod nazivom 'Svet je u nama' u saradnji sa Clean Bandit i Tuborgom, privukla je veliku pažnju u celom regionu. Publika je ovu pesmu nazvala 'motivacionom' i vreme je da je čujemo uživo na koncertima. U Beogradu je sve počelo i ovde igram na domaćem terenu, izjavljuje Marko."
        , "Marko Louis", 2000, 500, '12.11.2020', "jazz", "concert", 'Kombank dvorana', 'No',0),
      new Eventi(2, "Čuveni australijski muzičar Nick Cave, nastupiće sa svojim bendom The Bad Seeds u Beogradu, tačnije u Štark Areni 4. juna 2020. godine. Bend je najavio prolećnu evropsku i britansku turneju za 2020. godinu gde se i Beograd našao među gradovima. Zakazani su koncerti u 19 zemalja, uključujući 6 nastupa u Velikoj Britaniji.Koncert će se održati u organizaciji Charm Musica. Bend je nedavno izdao nahvaljeni 'Ghosteen', poslednji album u trilogiji koju Cave stvara od 2013. godine. Ovo će biti prvi koncert benda u Beogradu još od 2017. godine."
        , "Nick Cave", 3000, 200, '15.05.2021', "rock", "concert", 'Stark arena','No', 0),
      new Eventi(3, "Ivana i momci planiraju da nastave sa svojom koncertnom turnejom povodom 20 godina benda. Zbog izuzetno velikog interesovanja da se ponovi svirka i energija iz decembra, otvaramo još jedan koncert u Beogradu i opet u intimijoj atmosferi. Kako su članovi grupe rekli, u takvom prostoru je daleko bolja i bliskija komunikacija sa publikom. Nakon 20 godina već je suvišno pričati o kvalitetima Ivaninog pevanja, njihove svirke i energije. Negativ je jednostavno Negativ, jedan od najboljih bendova koji je ponikao na ovim prostorima."
        , "Negative", 0, 100, '03.09.2020', "rock", "gig", 'Bitefartcafe', 'Yes',0),
      new Eventi(4, "Najbolji regionalni festival obradovao je svoje fanove najavom prve polovine line up-a i tako već osvojio srca mnogih klabera u Srbiji i šire. Da nas od 6. do 8. avgusta u Vrnjačkoj Banji očekuje garantovano dobar provod pokazuju već neka od najpoznatijih imena svetske scene kojima će ovo biti prvi nastup posle duže pauze."
        , "Lovefest", 0, 10, '06.08.2020', "techno", "festival", 'City park lake', 'Yes',0),
      new Eventi(5, "Perpetum Jazzile je jedna od najspektakularnijih i najvećih vokalnih grupa na svetu koja dolazi iz Slovenije. Kritički hvaljeni, popularni zahvaljujući svojim snažnim ritmom, bogatim harmonijama, pozitivnom energijom, zapanjujuća kreativnost i posebna mešavina različitih žanrova muzike, koji reproduciraju samo ljudski glas - folk, pop, jazz, gospel, blues, bossa novi, disk, funk i drugi."
        , "Perpetum Jazzile", 4000, 1000, '31.10.2020', "jazz", "concert", 'Sava centar','No', 0),
      new Eventi(6, "Rame uz rame u borbi za kvalitetnu muziku i stvaralaštvo na našim prostorima, Vasil Hadžimanov Band je zasigurno najbolji način da Musicology nastavi da živi i diše, u vreme kada je najbitnije da su muzičari, organizatori i publika jedno. Ovaj izvrsni sklop muzičara, objavio je od osnivanja benda, 1997. godine, sedam studijskih albuma koji su naišli na fantastične kritike širom sveta. Svojim talentom, radom i neprestanim pomeranjem granica, članove benda prepoznali su svetski kritičari kao vrhunske muzičare"
        , "Vasil Hadzimanov", 3500, 2000, '30.07.2020', "ethno", "gig", 'Bitefartcafe', 'No',0),
      new Eventi(7, "Maktub, Satorijev kinematografski rejv stiže u Barutanu. Poznat po svojim imerzivnim lajv nastupima, holandski producent, poreklom iz Srbije, Satori aka Đorđe Petrović deo je novog talasa umetnika koji imaju ritualistički trans u svojim setovima. Inspirisan da ovekoveči deo elektronske muzike svog beskrajnog muzičkog stvaralaštva, Satori je krajem 2017. godine objavio svoj debi album Maktub za Crosstown Rebels, dobivši neverovatnu reakciju koja je Satorijevu karijeru odvela u drugu dimenziju."
        , "Maktub", 1500, 853, '29.08.2020', "rave", "gig", 'Barutana','No' ,0),
      new Eventi(8, "Ara Malikian je svetski priznat umetnik, najveća zvezda medju violinistima danas. Često ga predstavljaju kao libanskog virtuoza sa jermenskim začinima. Klasično obrazovan muzičar je tokom godina spojio muziku različitih kultura koja uključuje i španski flamenko, argentinski tango, kao i cigansku muziku. Njegova interpretacija vuče korene iz arapske i jevrejske kulture. Na koncertima često izvodi obrade rok pesama i filmskih hitova."
        , "Ara Malikan", 3800, 233, '14.10.2020', "classical", "concert", 'Sava centar', 'No',0)
    ];
  }

  public getEvents(): Eventi[] {
    return this.events;
  }
}
