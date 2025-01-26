import Image from 'next/image';
import React, { JSX } from 'react';

export default function About(): JSX.Element {
  return (
    <section id='about' className='py-20 bg-twilight-900 px-10'>
      <h2 className='text-3xl font-bold mb-8'>Over Mij:</h2>
      <div className='flex gap-4'>
        <div className='max-w-4xl mx-auto flex gap-2 flex-col'>
          <p>
            Ik zie mezelf als een enthousiaste en creatieve ontwikkelaar, die goed weet hoe hij zijn
            energie en enthousiasme op de juiste manier inzet. Door mijn ervaring heb ik geleerd
            prioriteiten te stellen en die kennis pas ik dagelijks toe in mijn technische projecten.
            Naast mijn (al zeg ik het zelf) gezellige karakter, weet ik een goede balans te vinden
            tussen socialiseren met collega’s, communiceren met de directie of product owner, en het
            ontwikkelen en uitvoeren van mijn werk.
          </p>
          <p>
            Perfect ben ik natuurlijk niet (wie wel?), maar dat is precies wat me drijft: een sterke
            drang naar zelfontwikkeling en groei. Dat geldt vooral binnen het technische vlak, maar
            ik schrik niet om af en toe een stapje buiten mijn comfortzone te zetten.
          </p>
          <h3 className='text-xl font-bold mt-2'>Technisch gezien?</h3>
          <p>
            Software ontwikkelen voelt voor mij als het oplossen van een puzzel: “Hoe kan het nog
            veiliger, sneller en efficiënter?” Ik hecht veel waarde aan code die leesbaar en
            onderhoudbaar is. Clean code is voor mij geen optie, maar een standaard. En uiteraard
            hoort daar het schrijven van unit, functionele en integratietests bij, zodat alles werkt
            zoals het hoort.{' '}
          </p>
          <p>
            Naast mijn passie voor software ben ik ook graag bezig met Linux, DevOps,
            hardwareprojectjes en andere technische uitdagingen. Kortom, ik zit nooit stil en vind
            het geweldig om nieuwe dingen te ontdekken. Enthousiasme heb ik meer dan genoeg!
          </p>
          <h3 className='text-xl font-bold mt-2'>Dan iets specifieker..</h3>
          <p>
            Voornamelijk heb ik ervaring in het programmeren in Nodejs, Php, en rails. Ook heb veel
            gedaan in python maar nog niet in een groot project. In NodeJS heb ik voornamelijk
            gewerkt in NextJS. Hier heb ik bij vorige bedrijven en met mijn eigen bedrijven veel
            projecten in ontwikkeld. Voor NextJS en React in het algemeen heb ik ook een hele grote
            liefde en wil er zeker verder mee werken in de toekomst. Ook heb ik gewerkt met Angular
            voor het maken van een mobiele app (PWA). Deze projecten hebben altijd typescript
            gedraaid.
          </p>
          <p>
            {' '}
            In PHP Heb ik ervaring in Laravel, Symfony, CodeIgniter, en een aantal projecten met een
            homebuild framework. Het meeste ervaring van deze heb ik in Symfony. En voor Ruby on
            Rails heb ik ook in meerdere projecten ontwikkeld. Heel misschien kan het zijn dat net
            de programmeertaal die je zoekt niet hier tussen staat. Om het natuurlijk geen biografie
            te maken heb ik niet elke taal, subtaal, library, of methodie hier opgezet. Mogelijk heb
            ik er dus wel ervaring mee, en zoniet? Dan sta ik ook 100% open om het te leren!
          </p>
        </div>
        <aside>
          <Image
            src={'/images/headshot/1.jpg'}
            height={512}
            width={512}
            className=''
            alt={'headshot'}
          />
        </aside>
      </div>
    </section>
  );
}
