
import { formButton, bookList } from './modules/bookClass.js';
import { Book } from './modules/bookClass.js';

const myBook = new Book();

formButton.addEventListener('click', (e) => myBook.handleFormSubmit(e));
bookList.addEventListener('click', (e) => myBook.handleRemoveButtonClick(e));
myBook.addBookToList();

import { sections, navList } from './modules/navItems.js';

for (let i = 0; i < navList.length; i += 1) {
    navList[i].addEventListener('click', () => {
        sections[i].classList.add('display');
        navList[i].classList.add('active');
        for (let j = 0; j < navList.length; j += 1) {
            if (i !== j) {
                sections[j].classList.remove('display');
                sections[j].classList.add('hidden');
                navList[j].classList.remove('active');
            }
        }
    });
}