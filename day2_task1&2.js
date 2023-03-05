//task1

function listobj(start , end , step )
{
    this.listsatrt=start
    this.listend=end
    this.liststep=step
    this.arr = []

    function fillarray()
    {
        this.arr[0]=this.listsatrt;
        for(let i =1 ; i < this.listend ; i++)
        {
            this.arr[i]=this.arr[i-1] + this.liststep;
        }
        //return this.arr;
    }

    fillarray.apply(this);

    this.endremove=function getfromend()
    {  
        this.arr.pop();
    }

    this.startremove=function getfromstart()
    {
        this.arr.shift();
    }

    this.endadd=function addtoend(x)
    {
        if(x == this.arr[this.arr.length-1] + this.liststep)
        {
            this.arr.push(x);
            console.log("pushed!");
        }
        else
        {
            console.log("out of sequence!")
        }
    }

    this.startadd=function addtostart(x)
    {
        if(x == this.arr[0] - this.liststep)
        {
            this.arr.unshift(x);
            console.log("shifted!");
        }    
        else
        {
            console.log("out of sequence");
        }
    }
}


//var list = new listobj(50,10,2);
//console.log(list.arr);





/*********Task2************/
function Book(title, num_of_Chapters, author, num_of_Pages, publisher, num_of_Copies) {
    this.title = title;
    this.num_of_Chapters = num_of_Chapters;
    this.author = author;
    this.num_of_Pages = num_of_Pages;
    this.publisher = publisher;
    this.num_of_Copies = num_of_Copies;
  }
  
  function Box(height, width, length, material) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];
    Box.num_Of_Books = 0;
  
    this.addBook = function(book) {
  
      this.content.push(book);
      Box.num_Of_Books++;
      console.log(`Add"${book.title}" to the box.`);
    };
  
  
      this.remove_Book = function(title_book) {
      const book_Index = this.content.findIndex(function(book) {
        return book.title === title_book;
      });
      if (book_Index === -1) {
        console.log(`"${title_book}"  not found in the box.`);
        return;
      }
    
      this.content.splice(book_Index, 1);
      Box.num_Of_Books--;
      console.log(`Removed "${title_book}" from the box.`);
    }
  
  
    this.countBooks = function() {
      console.log(`there is ${this.content.length} books in the box.`);
    };
  
  
    this.valueOf = function(){
  
      return this.content.length;
    }
  
  }
  
  Box.getNumOfBooks = function() {
      console.log(`Number of created books : ${Box.num_Of_Books}`);
    };
  
  
  const book1 = new Book("Wuthering Heights",20, "Emily Brontë", 200, "Thomas Cautley Newby", 3);
  const book2 = new Book("Nineteen Eighty-Four", 31, "George Orwell", 281, "Secker & Warburg", 5);
  const book3 = new Book("The Lord of the Rings", 61, "J.R.R. Tolkien.", 279, "Allen & Unwin", 1);
  
  const box = new Box(40, 50, 60, "cardboard");
  console.log("*****Box1********");
  box.addBook(book1); 
  box.addBook(book2); 
  box.addBook(book3); 
  box.addBook(book1); 
  
  box.countBooks(); 
  Box.getNumOfBooks(); 
  box.remove_Book("Harry Potter"); 
  box.remove_Book("Wuthering Heights"); 
  box.countBooks(); 
   
  console.log("*****Box2********");
  const box2 = new Box(70, 50, 60, "cardboard");
  const book4 = new Book("Nineteen Eighty-Four", 31, "George Orwell", 281, "Secker & Warburg", 5);
  const book5 = new Book("The Lord of the Rings", 61, "J.R.R. Tolkien.", 279, "Allen & Unwin", 1);
  
  box2.addBook(book4); 
  box2.addBook(book5);
  
  console.log("*****Total********");
  var total_num = box + box2 ;
  console.log(`Total number of Books in 2 boxes : ${total_num} `);