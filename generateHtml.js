function generateHtml(name){
    return `  <head>
           <title>
               Reservation List
           </title>
           <meta charset="utf-8">
           <link href="./style.css" rel="stylesheet" type="text/css">
       </head>
       
       <body>
           <div class="container">
               <header>
           <h2>Make reservation</h2>
           <a href="#">Reservation List</a>
           
               </header>
               <section>
               <p>reserveations</p>
               <p>${name}</p>
               </section>
              
           </div>
           <script src="./src.js"></script>
       </body>
       
       </html>
   `
   }