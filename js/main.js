var films_dataset = [
  { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1},
  { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2},
  { id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3},
  { id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4},
  { id:5, title:"My Fair Lady", year:1964, votes:533848, rating:8.9, rank:5},
  { id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6}
];

webix.ui({
  rows:[
    { 
      view:"toolbar",
      id:"top_toolbar",      
      elements:[
        { 
          view:"button", id:"btn_save", minWidth:65, value:"Save",
          click:saveItem
        },
        { 
          view:"button", id:"btn_del", minWidth:65, value:"Delete",
          click:deleteItem
        },
        // event handler for this button is declared via attachEvent
        {
          view:"button", id:"btn_clear", minWidth:65, value:"Clear",
          click:clearForm
        },
        { gravity:3 }        
      ]
    },
    { cols:[
      { 
        view:"form",
        id:"film_form",
        gravity:0.5,        
        minWidth:200,
        // elements == rows, cols can be declared instead
        elements:[
          { view:"text", name:"title", id:"inp_title", label:"Film Title" },
          { view:"text", name:"year", id:"inp_year", label:"Release" },
          {}
        ]
      },
      {view:"resizer"},      
      { 
        view:"list",
        id:"film_list", 
        minWidth:200,
        select:true,
        data:films_dataset,
        // available data fields: title, year, votes, rating, rank, id
        template:"#title# (#year#)",
        on:{
          onAfterSelect:valuesToForm
        }
      },
    ]}
  ]
});

function saveItem(){
  var form = $$("film_form");
  var list = $$("film_list");
  var item_data = form.getValues();
  if (item_data.id){
    list.updateItem(item_data.id, item_data);
  } else {
    list.add(item_data);
  }
};

function deleteItem(){
  var list = $$("film_list");
  var item_id = list.getSelectedId();
  if (item_id){
    webix.confirm("Delete selected item?", "confirm-warning").then(function(){
      list.remove(item_id)
    });
  }
};

function clearForm(){
  $$("film_form").clear();
  $$("film_list").unselectAll();
};

function valuesToForm(id){
  var values = $$("film_list").getItem(id);
  $$("film_form").setValues(values)
};
