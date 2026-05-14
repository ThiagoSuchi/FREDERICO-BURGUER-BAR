import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: [`
    :host {
      display: inline-block;
    }
    button {
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    button:active {
      transform: skewX(-10deg) scale(0.95) !important;
    }
    button:hover {
      transform: skewX(-10deg) scale(1.05);
    }
  `]
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() className = '';

  baseClasses = 'relative group font-anton text-xl tracking-wider uppercase px-8 py-4 transition-all duration-300 transform -skew-x-[10deg] flex items-center justify-center cursor-pointer min-w-[200px]';
  variantClasses = '';

  ngOnInit() {
    this.updateVariant();
  }

  updateVariant() {
    const variants = {
      primary: 'bg-frederico-yellow text-frederico-black hover:bg-white hover:shadow-[0_0_30px_rgba(255,214,10,0.8)]',
      secondary: 'bg-transparent text-frederico-yellow border-2 border-frederico-yellow hover:bg-frederico-yellow hover:text-frederico-black hover:shadow-[0_0_20px_rgba(255,214,10,0.4)]',
    };
    this.variantClasses = variants[this.variant] || variants.primary;
  }

  // Ensure variations update if input changes
  ngOnChanges() {
    this.updateVariant();
  }
}
