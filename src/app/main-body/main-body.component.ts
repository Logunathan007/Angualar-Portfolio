import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-main-body',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit, AfterViewInit {
  //Resume Button Variables
  @ViewChild('resButton') buttonRef!: ElementRef<HTMLButtonElement>;
  buttonObj!: HTMLButtonElement;
  left = 0;
  top = 0;

  //Skills list
  skillsList = [
    {
      name: 'HTML',
      img: 'html.png',
    },
    {
      name: 'CSS',
      img: 'css.png',
    },
    {
      name: 'JS',
      img: 'js.png',
    },
    {
      name: 'ReactJS',
      img: 'reactjs.png',
    },
    {
      name: 'C',
      img: 'c.png',
    },
    {
      name: 'C++',
      img: 'c++.png',
    },
    {
      name: 'Java',
      img: 'java.png',
    },
    {
      name: 'Python',
      img: 'python.png',
    },
    {
      name: 'Flask',
      img: 'flask.png',
    },
    {
      name: 'SQL',
      img: 'sql.png',
    },
    {
      name: 'GitHub',
      img: 'github.png',
    },
    {
      name: 'Git',
      img: 'git.png',
    },
  ];

  projectsList = [
    {
      name: 'DOB Alert',
      description:
        "In the 'DOB Alert' project, I'll create a Database to store details of friends and family members. Using a custom algorithm, I'll select a person based on their birth date and set up a reminder using a Telegram bot to wish them on their birthday. This reminder will be triggered using the PythonAnyWhere website.",
      tech: 'Tech Stack: Python, SQL, Telegram BOT',
      year: 'Apr 2023 - May 2023',
      gitLink: 'https://github.com/',
      imgLink: 'dob.png',
    },
    {
      name: 'CGPA Calculator',
      description:
        "In the CGPA Calculator, I'll store individual student details along with their grades in a Database. By processing these details, I'll calculate the GPA (Grade Point Average) and CGPA (Cumulative Grade Point Average) for each student. This project provides an opportunity to delve into SQL joins and deepen my understanding of database operations.",
      tech: 'Tech Stack: Python, SQL',
      year: 'Aug 2020 - Oct 2020',
      gitLink: 'https://github.com/',
      imgLink: 'cgpa.png',
    },
    {
      name: 'Billing Software',
      description:
        "In this billing software project, I'll incorporate features using CRUD operations. This includes adding new items to the shop and automatically removing them from the list once they're purchased. Additionally, whenever a new item is added, the total product count will increase. These updates will be continuously reflected in the database, ensuring real-time access to data.",
      tech: 'Tech Stack: HTML, CSS, JS, Python, Flask, SQLite3',
      year: 'Aug 2023 - Sep 2023',
      gitLink: 'https://github.com/',
      imgLink: 'atp.png',
    },
    {
      name: 'Street Light Fault Detection',
      description:
        'In the Street Light Fault Detection project, I tackled both hardware and software aspects. On the hardware side, I employed an Arduino UNO with an LDR sensor for fault detection, while utilizing a Node MCU (ESP8266) to transmit information to the cloud. On the software end, I developed a React application to retrieve data from the cloud and present it in a web application interface. This project provided valuable insights and knowledge, particularly in integrating hardware with cloud-based solutions and developing Web applications for data visualization.',
      tech: 'Tech Stack: HTML, CSS, JS, React JS, Arduino Programming, IoT Development',
      year: 'Feb 2024 - Apr 2024',
      gitLink: 'https://github.com/',
      imgLink: 'fyp.png',
    },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.buttonRef) {
      this.buttonObj = this.buttonRef.nativeElement;
      this.updateButtonPosition();
    }

    const homeSection = document.getElementById('home');
    if (homeSection) {
      new ResizeObserver(this.updateButtonPosition).observe(homeSection);
    }
  }

  updateButtonPosition = () => {
    if (this.buttonObj) {
      const rect = this.buttonObj.getBoundingClientRect();
      this.left = rect.left;
      this.top = rect.top;
    }
  };

  onMouseMove(event: MouseEvent) {
    if (this.buttonObj) {
      this.applyTransformEffect(event.clientX, event.clientY);
    }
    console.log('mouse move', this.left, this.top);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.updateButtonPosition();
    console.log('onScroll ', this.left, this.top);
  }

  private applyTransformEffect(mouseX: number, mouseY: number) {
    if (!this.buttonObj) return;

    const radius = Math.max(
      this.buttonObj.offsetWidth * 0.75,
      this.buttonObj.offsetHeight * 0.75,
      100
    );
    const bx = this.left + this.buttonObj.offsetWidth / 2;
    const by = this.top + this.buttonObj.offsetHeight / 2;
    const dist = this.distanceBetween(mouseX, mouseY, bx, by) * 2;
    const angle = Math.atan2(mouseY - by, mouseX - bx);

    const ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
    const oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

    const rx = oy / 2;
    const ry = -ox / 2;

    this.buttonObj.style.transition = 'all 0.1s ease';
    this.buttonObj.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    this.buttonObj.style.boxShadow = `0px ${Math.abs(oy)}px ${
      (Math.abs(oy) / radius) * 40
    }px rgba(0,0,0,0.15)`;
  }

  private distanceBetween(
    p1x: number,
    p1y: number,
    p2x: number,
    p2y: number
  ): number {
    const dx = p1x - p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}
